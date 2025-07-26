#include <NewPing.h>

#define trigPin  7
#define echoPin 8
#define maxDistance 400

int led2 = 13;

NewPing sonar( trigPin, echoPin, maxDistance);

void setup() {
  Serial.begin( 9600 );
  digitalWrite(led2, LOW);
}

void loop() {
  if(sonar.ping_cm()<40){
    digitalWrite(led2, HIGH);
    delay(200);
    digitalWrite(led2, LOW);
  }
  Serial.println( sonar.ping_cm() );
  delay( 100 );
}
