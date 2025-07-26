int dataPin = 12;
int enablePin = 11;
int latchPin = 10;
int clockPin = 9;

#define number_of_74hc595s 3
#define numOfRegisterPins (number_of_74hc595s * 8)
#define numRGBLeds 8

boolean registers[numOfRegisterPins];

int redPin[]   = {0, 3, 6, 9, 12, 15, 18, 21};
int greenPin[] = {1, 4, 7, 10, 13, 16, 19, 22};
int bluePin[]  = {2, 5, 8, 11, 14, 17, 20, 23};

void setup() {
  Serial.begin(9600);

  pinMode(dataPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(latchPin, OUTPUT);
  pinMode(enablePin, OUTPUT);

  digitalWrite(enablePin, LOW); // Enable the 74HC595 outputs

  // Initialize all register bits to HIGH (for common anode LEDs)
  for (int i = 0; i < numOfRegisterPins; i++) {
    registers[i] = HIGH;
  }

  // Clear all LEDs on startup
  updateRegisters();
}

void loop() {
  int sensorValueA0 = analogRead(A0); // Read the value from A0
  int numberOfLedsToLight = map(sensorValueA0, 0, 500, 0, numRGBLeds); // Map to 0-8
  Serial.print("A0:");
  Serial.println(sensorValueA0);

  int sensorValueA1 = analogRead(A1); // Read the value from A1
  int colorIndex = map(sensorValueA1, 0, 1023, 0, 4); // Map to 0-4

  // Turn off all LEDs first
  for (int i = 0; i < numRGBLeds; i++) {
    turnOffLed(i);
  }

  // Light up the required number of LEDs with the selected color
  for (int i = 0; i < numberOfLedsToLight; i++) {
    setLedColor(i, colorIndex);
  }
  Serial.print("light:");
  Serial.println(numberOfLedsToLight);

  // Update the 74HC595 with the new values
  updateRegisters();

  delay(200); // Small delay to debounce and smooth out the LED changes
}

// Function to set a specific LED to a color based on the color index
void setLedColor(int ledNumber, int colorIndex) {
  // Define the 5 base colors in RGB format
  byte colors[5][3] = {
    {255, 0, 0},   // Red
    {255, 128, 0}, // Orange
    {255, 255, 0}, // Yellow
    {0, 255, 0},   // Green
    {0, 0, 255}    // Blue
  };

  // Set the LED to the selected color
  setLedColorDirect(ledNumber, colors[colorIndex]);
}

// Function to directly set a specific LED to a given RGB color
void setLedColorDirect(int ledNumber, byte color[3]) {
  registers[redPin[ledNumber]] = color[0] > 0 ? LOW : HIGH;
  registers[greenPin[ledNumber]] = color[1] > 0 ? LOW : HIGH;
  registers[bluePin[ledNumber]] = color[2] > 0 ? LOW : HIGH;
}

// Function to turn off a specific LED
void turnOffLed(int ledNumber) {
  registers[redPin[ledNumber]] = HIGH;
  registers[greenPin[ledNumber]] = HIGH;
  registers[bluePin[ledNumber]] = HIGH;
}

// Function to update the 74HC595 with the current register values
void updateRegisters() {
  digitalWrite(latchPin, LOW); // Latch pin low to start shifting
  shiftOut(dataPin, clockPin, MSBFIRST, 0); // Send a dummy byte to clear any previous data

  // Shift out each byte of the registers
  for (int i = 0; i < number_of_74hc595s; i++) {
    byte byteToSend = 0;
    for (int j = 0; j < 8; j++) {
      if (registers[i * 8 + j]) {
        byteToSend |= (1 << (7 - j)); // Set the appropriate bit
      }
    }
    shiftOut(dataPin, clockPin, MSBFIRST, byteToSend);
  }

  digitalWrite(latchPin, HIGH); // Latch pin high to update the 74HC595 outputs
}
