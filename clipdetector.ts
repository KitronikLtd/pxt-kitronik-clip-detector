/**
 * Kitronik Clip Detector blocks
 **/
//% weight=100 color=#00A654 icon="\uf29d" block="Clip Detector"
namespace Kitronik_Clip_Detector {
	
    //micro:bit pin selections
    export enum PinSelection {
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2
    }

    //Light level detection mode selection
    export enum LightSelection {
        //% block="Light"
        Light,
        //% block="Dark"
        Dark
    }

    //Detection mode selection
    export enum DetectionSelection {
        //% block="Line"
        Line,
        //% block="Object"
        Object,
        //% block="Light"
        Light
    }

    //Global variables and setting default values
	let detectionLevel = 45		//reading is done by converting 0.13V into ADC reading (3/1024)*45, this is the default setting
    let sensorLeftRef = 0
    let sensorCentreRef = 0
    let sensorRightRef = 0
	let init = false

    //Initial setup function called the first time any block is used (i.e. if init = false)
    function setup() {
		sensorLeftRef = pins.analogReadPin(AnalogPin.P0)
        sensorCentreRef = pins.analogReadPin(AnalogPin.P1)
		sensorRightRef = pins.analogReadPin(AnalogPin.P2)
		init = true
    }

    /**
    * Setup sensor block takes a referance reading of the sensors for later comparison
    * @param setupSelected is the selection of how the sensors are setup
    */
    //% blockId=kitronik_clip_dectector_setup
    //% block="setup sensors for %setupSelected| detection"
    //% weight=100 blockGap=8
    export function sensorSetup(setupSelected: DetectionSelection) {
		if (init == false){
			setup()
		}
		//reading is done by converted ADC reading for a voltage change of the sensor
        if (setupSelected == DetectionSelection.Line) {
			detectionLevel = 45
        }
		else if (setupSelected == DetectionSelection.Light) {
			detectionLevel = 55
        }
		else if (setupSelected == DetectionSelection.Object) {
			detectionLevel = 16
        }
    }
	
    /**
    * Set sensor threshold block allows the user to adjust the point at which the sensor detects
    * @param level is the threshold percentage
    */
    //% blockId=kitronik_clip_dectector_set_threshold
    //% block="set sensor threshold to %level|"
	//% level.min=0 level.max=100 level.defl=50
    //% weight=85 blockGap=8
    export function setSensorDetectionLevel(level: number) {
        if (init == false){
			setup()
		}
		detectionLevel = (level/2) + 10
    }
	
    /**
    * Read sensor block allows user to read the value of the sensor (returns value in range 0-1023)
    * @param pinSelected is the selection of pin to read a particular sensor
    */
    //% blockId=kitronik_clip_dectector_read_sensor
    //% block="read sensor on pin %pinSelected"
    //% weight=90 blockGap=8
    export function readSensor(pinSelected: PinSelection) {
        let value = 0

		if (init == false){
			setup()
		}
		
        if (pinSelected == PinSelection.P0) {
            value = pins.analogReadPin(AnalogPin.P0)
        }
        else if (pinSelected == PinSelection.P1) {
            value = pins.analogReadPin(AnalogPin.P1)
        }
        else if (pinSelected == PinSelection.P2) {
            value = pins.analogReadPin(AnalogPin.P2)
        }
        return value;
    }

    /**
    * Sensor on pin detection returns a true or false when the sensor has detected
    * @param pinSelected is the selection of pin to read a particular sensor
	* @param lightSelection is the selection of the sensor detecting light or dark
    */
    //% blockId=kitronik_clip_dectector_digital_sensor
    //% block="sensor on pin %pinSelected| detected %LightSelection"
    //% weight=95 blockGap=8
    export function sensorDigitalDetection(pinSelected: PinSelection, lightLevel: LightSelection): boolean{
        let value = 0
		let ref = 0
		let result = false
		
		if (init == false){
			setup()
		}
		
        if (pinSelected == PinSelection.P0) {
            value = pins.analogReadPin(AnalogPin.P0)
			ref = sensorLeftRef
        }
        else if (pinSelected == PinSelection.P1) {
            value = pins.analogReadPin(AnalogPin.P1)
			ref = sensorCentreRef
        }
        else if (pinSelected == PinSelection.P2) {
            value = pins.analogReadPin(AnalogPin.P2)
			ref = sensorRightRef
        }
		
		if (lightLevel == LightSelection.Light){
			if (value >= (ref + detectionLevel)){
				result = true
			}
			else { 
				result = false
			}
		}
		else if (lightLevel == LightSelection.Dark){
			if (value <= (ref - detectionLevel)){
				result = true
			}
			else { 
				result = false
			}
		}
        return result;
    }
} 