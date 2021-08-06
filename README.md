# Freecash.comBot.js
This is a very basic private project I am working on to learn more 'JavaScript' and integrations with my 'Raspberry PI' , this is a simple program that will scrape user statistics / profile information and display this information on a I2C 16x2 LED display via 'node JS'.

![Alt text](https://github.com/HDzzzz/Freecash.comBot.js/blob/main/FSC.JPEG?raw=true "Example")

## Features
```
* Log user balance (coins value & USD value)
* Log total completed offers
* Log total referrals
* Log total earnings (coins value & USD value)
* Log coin earnings from referrals
* Log Date joined & Days since registration
* Log current XP & XP required for next rank
```

## Features to add
```
* Log last offer completed (name + time + amount)
* Log when daily bonus will be available next
* Show "Alert I2C message' when offer just credited (WS)
* If approved by staff add button to "click and claim" daily bonus
```

## Install / setup
```
* sudo apt update (upgrade package lists)
* sudo apt upgrade (upgrade all packages to latest version)
* sudo apt install nodejs npm (install node JS / NPM)
* cd {directory} (navigate to folder containing files)
* nano index.js (open file editor for file)
* Replace 'session_id' with existing session ID
* CTRL + X -> Yes (Exit out and save changes to file)
* Node index.js (run file)
```


## Requirements
```
* NodeJS v14.15.4
* RaspberryPI
* I2C 16x2 LCD display
* Node packages
```

## Node packages
```
* npm install chalk                       | (colourful console output)
* npm install raspberrypi-liquid-crystal  | (I2C writer))
* npm install node-fetch                  | (web-requests)
```
[Amazon Link for LED display (recommended from google)](https://amzn.to/2LkpoCm "Pi LED purchase")                                                                    
[Ebay listings](https://www.ebay.co.uk/sch/i.html?_from=R40&_trksid=p2386202.m570.l1313&_nkw=pi+i2c+led+screen&_sacat=0 "i2c")   

## 16x2 I2C LCD setup to raspberry PI
```
GND on LCD goes to pin 6 on the raspberry pi
VCC on LCD goes to pin 4 on the raspberry pi
SDA on LCD goes to pin 3 on the raspberry pi
SCL on LCD goes to pin 5 on the raspberry pi
```
![Alt text](https://www.bigmessowires.com/wp-content/uploads/2018/05/Raspberry-GPIO.jpg "GPIO")
![Alt text](https://tutorials-raspberrypi.de/wp-content/uploads/20151015_113929-600x338.jpg "LCD 16x2")
```
Admin@hvh.site
```
