# pxt-kitronik-clip-detector

# Kitronik blocks for micro:bit

Blocks that support [Kitronik kits and shields for the micro:bit](https://www.kitronik.co.uk/microbit.html)
This package is for the [Kitronik Clippable Detector] (www.kitronik.co.uk/5678)

# Sensor Digital Detection Block
The sensor digital detection block will return a true or false if a detection has been made compared to the requested option (Light, Dark or Object)
```blocks
kitronik_clip_detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Dark)
```

# Read Sensor Block
Reads and return the analog value of the sensor from the selected pin
```blocks
kitronik_clip_detector.readSensor(Kitronik_Clip_Detector.PinSelection.P0)
```

# Sensor Setup Blocks
The setup sensors for object detection sets the detection threshold appropriate for objects
```blocks
Kitronik_Clip_Detector.setSensorToDetectObjects()
```

# Sensor Threshold Block
Sensor threshold block will let the user adjust the detection threshold to preset values
```blocks
Kitronik_Clip_Detector.sensorSetup(Kitronik_Clip_Detector.DetectorSensitivity.Low)
```

There is a Java function:
```blocks
Kitronik_Clip_Detector.setSensorDetectionLevel(0)
```
which allows the settign of a specific threshold (0-1023).
The required number can be determind by reading the sensor value on the target surfaces.
