echo "[info] Starting"
# echo "[info] Compiling sketch: "
# arduino-cli compile --fqbn arduino:avr:uno ./Test
arduino-cli board list
sleep 5
echo "[info] Uploadling sketch: "
arduino-cli upload -p /dev/ttyACM0 --verify --fqbn arduino:avr:uno ./Test --verbose &> output.txt
while true; do
	tail -n 4 output.txt
	echo "I'm alive"
	sleep 5m
done