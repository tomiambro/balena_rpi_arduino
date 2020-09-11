void setup() {
	pinMode(LED_BUILTIN, OUTPUT);Serial.begin(9600);
	if(Serial) {
		Serial.println("<Arduino is ready>");
	}
}

void loop() {
	Serial.println("<Arduino is ready>");
	digitalWrite(LED_BUILTIN, HIGH);
	delay(1000);
	digitalWrite(LED_BUILTIN, LOW);
	delay(1000);
}