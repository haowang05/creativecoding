#include <Adafruit_NeoPixel.h>
#include <Stepper.h>
#include <Wire.h>
#include <Adafruit_Thermal.h>

//Hao - setting & control printer
Adafruit_Thermal printer(&Serial1);
const int switchPin = 13;
bool isPrinting = false;
bool lastSwitchState = HIGH;
bool currentSwitchState = HIGH;
bool switchPressed = false;
unsigned long lastDebounceTime = 0;  
unsigned long debounceDelay = 50;  


//Kaihao - setting & control stepper motor
const int pressureSensorPin = A0;
const int stepsPerRevolution = 200; 
Stepper myStepper(stepsPerRevolution, 8, 9, 10, 11);


//Yutong - setting & control neopixel
const int levelSensorPin = A1;
const int pixelPin = 5;
const int numPixels = 17 ; 
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(numPixels, pixelPin, NEO_GRB + NEO_KHZ800);


//Hao -  breathing effect variables
int breathBrightness = 0;
boolean breathDirection = true; 
const int breathStep = 5; 
const int breathDelay = 100; 


void setup() {
    Serial.begin(9600);
    pixels.begin();
    setInitialStatus();
    myStepper.setSpeed(60); 


//Hao - setting up the printer
    Serial1.begin(19200);
    printer.begin();  
    Serial.begin(9600);
    pinMode(switchPin, INPUT_PULLUP);
    printer.print("Printer initialized.\n");
    Serial.print("Printer initialized.\n");
    printer.print("Test message from Arduino.\n");
    delay(1000); 

}

void loop() {
//Hao - debounce the switch
    int reading = digitalRead(switchPin);
    if (reading != lastSwitchState) {
    lastDebounceTime = millis();  // update the debounce timer
    }
    if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != currentSwitchState) {
        currentSwitchState = reading;

        if (currentSwitchState == LOW) {
        if (isPrinting) {
            isPrinting = false;
            printer.print("Printing stopped.\n");
            Serial.print("Printing stopped.\n");
        } else {
            isPrinting = true;
            printer.print("------------------------------\n");  // add a line break
            printer.print("Printing started.\n");
            Serial.print("Printing started.\n");
        }
        }
    }
    }

    lastSwitchState = reading;

//Hao - print message to printer
    if (isPrinting) {
    int potValue = analogRead(A0);// read the potentiometer value
    int position = map(potValue, 0, 1023, 1, 32);
    Serial.print("Potentiometer Value: ");
    Serial.print(potValue);
    Serial.print(", X Position: ");
    Serial.print(position);
    Serial.print(", Printer Status: Printing\n");

    char line[33];// create a line of spaces
    for (int i = 0; i < 32; i++) {
        line[i] = ' ';
    }
    line[32] = '\0';  

    line[position - 1] = '*';// put the '*' at the correct position
    printer.print(line);
    printer.print('\n');  
    delay(50);
    } else {
    Serial.print("Printer Status: Not Printing\n");
    }


//Kaihao - control stepper motor
    int pressureValue = analogRead(pressureSensorPin); // read pressure and level sensor values
    int stepCount = map(pressureValue, 0, 1023, 0, stepsPerRevolution);
    myStepper.step(stepCount);


//Yutong - control neopixel and level sensor
    int levelValue = analogRead(levelSensorPin);// read pressure and level sensor values
    int blueCount = map(levelValue,188, 205, 0, numPixels);
    updatePixels(blueCount);
    handleBreathEffect(blueCount);


//Hao - print message to serial monitor
    Serial.print("Pressure: ");
    Serial.print(pressureValue);
    Serial.print(", Level: ");
    Serial.print(levelValue);
    Serial.print(", Step Count: ");
    Serial.print(stepCount);
    Serial.print(", Blue LEDs: ");
    Serial.println(blueCount);
    delay(100);
}


//Kaihao - set initial status  
void setInitialStatus() {

  for (int i = 0; i < numPixels; i++) { // set initial status
    pixels.setPixelColor(i, pixels.Color(255, 0, 0)); 
    }
    pixels.show();
}


//Yutong - control neopixel and level sensor
void updatePixels(int blueCount) {

    for (int i = 0; i < numPixels; i++) {
    if (i < blueCount) {
        pixels.setPixelColor(i, pixels.Color(0, 0, breathBrightness)); 
    } else {
        pixels.setPixelColor(i, pixels.Color(255, 0, 0)); 
    }
    }
    pixels.show();
}


//Hao -  breathing effect
void handleBreathEffect(int blueCount) {
    if (breathDirection) {
    breathBrightness += breathStep;
    if (breathBrightness >= 255) {
        breathBrightness = 255;
        breathDirection = false;
    }
    } else {
    breathBrightness -= breathStep;
    if (breathBrightness <= 0) {
        breathBrightness = 0;
        breathDirection = true;
    }
    }
    
    for (int i = 0; i < blueCount; i++) {
    pixels.setPixelColor(i, pixels.Color(0, 0, breathBrightness));
    }
    pixels.show();
}