# pxt-kitronik-clip-detector

# Kitronik blocks for micro:bit

Blocks that support [Kitronik kits and shields for the micro:bit](https://www.kitronik.co.uk/microbit.html)
This package is for the [Kitronik Clippable Detector] (www.kitronik.co.uk/5678)

# Sensor Setup Block
Sensor setup block will set the detection threshold depending what parameter is being detected (light, line or object)
```blocks
kitronik_clip_detector.sensorSetup(Kitronik_Clip_Detector.DetectionSelection.Line)
'''

# Sensor Threshold Block
Sensor threshold block will let the user adjust the detection threshold from the default value
```blocks
kitronik_clip_detector.setSensorDetectionLevel(Kitronik_Clip_Detector.level)
'''

# Read Sensor Block
Read will read and return the analog value of the sensor from the selected pin
```blocks
kitronik_clip_detector.readSensor(Kitronik_Clip_Detector.PinSelection.P0)
'''

# Sensor Digital Detection Block
The sensor digital detection block will return a true or false if a detection has been made compared to the reference value (which is taken at the first time any block is run)
```blocks
kitronik_clip_detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Dark)
'''