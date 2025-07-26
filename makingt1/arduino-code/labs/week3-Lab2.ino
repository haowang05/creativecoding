int sensorPin = A0; // Connect your sensor to analog pin A0
int sensorValue;

void setup() {
  Serial.begin(9600);  // Start serial communication
}

void loop() {
  sensorValue = analogRead(sensorPin);  // Read sensor value
  Serial.println(sensorValue);  // Print the value to the serial monitor
  delay(100);  // Short delay between readings
}
