const int sensorPin = A0;
void setup(){
Serial.begin(9600); // open a serial port
pinMode(9,OUTPUT);
  
}

void loop(){
  int Val = analogRead(sensorPin);
  delay(1000);
  Serial.print("Value:" );
  Serial.println(Val);
  // convert the ADC reading to voltage
  float brightness = (255.0/1023.0) * Val;
  analogWrite(9, brightness);
}
