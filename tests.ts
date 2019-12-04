//On detection the micro:bit screen will switch between a happy and sad face
Kitronik_Clip_Detector.sensorSetup(Kitronik_Clip_Detector.DetectionSelection.Light)
basic.forever(function () {
    if (Kitronik_Clip_Detector.sensorDigitalLightDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Dark)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})