#include <Adafruit_NeoPixel.h>

#define PIN 6 
#define NUMPIXELS 10 
#define DELAYVAL 100 

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
const int switchPin = 5;

void setup() {
  pinMode(switchPin, INPUT); 
  Serial.begin(9600); 
  pixels.begin(); // 
}

void loop() {
  int currentPixel = 0; 
  bool reverse = digitalRead(switchPin) == HIGH; 

  Serial.print("Pin 5: ");
  if (reverse) {
    Serial.println("HIGH");
  } else {
    Serial.println("LOW");
  }

  if (reverse) {
    for (currentPixel = 9; currentPixel >= 0; currentPixel--) {
      pixels.setPixelColor(currentPixel, pixels.Color(0, 255, 255));
      pixels.show();   
      delay(DELAYVAL); 
      pixels.setPixelColor(currentPixel, pixels.Color(0, 0, 0)); 
    }
  } else {
    for (currentPixel = 0; currentPixel < NUMPIXELS; currentPixel++) {
      pixels.setPixelColor(currentPixel, pixels.Color(0, 255, 255));
      pixels.show();   
      delay(DELAYVAL); 
      pixels.setPixelColor(currentPixel, pixels.Color(0, 0, 0)); 
    }
  }
}
