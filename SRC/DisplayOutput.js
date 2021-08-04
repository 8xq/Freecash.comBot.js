const chalk = require('chalk');
const LCD = require('raspberrypi-liquid-crystal');
const lcd = new LCD(1, 0x27, 16, 2);
const ErrorLogging = false;


exports.Sync = async () => {
    try {
        lcd.beginSync();
      } catch (e) {
        console.log(chalk.red('> Error with sync !'));
        if(ErrorLogging = true){
            console.log(chalk.red('> ' + e));
        }
      }
};


exports.Clear = async () => {
    try {
        lcd.clearSync();
    } catch (e) {
        console.log(chalk.red('> Error with clear sync !'));
        if(ErrorLogging = true){
            console.log(chalk.red('> ' + e));
        }
    }
}


exports.Write2LCD = async (TopLine , BottomLine) => {
    try {
        lcd.printLineSync(0, TopLine);
        lcd.printLineSync(1, BottomLine);
    } catch (e) {
        console.log(chalk.red('> Error writing text to LCD !'));
        if(ErrorLogging = true){
            console.log(chalk.red('> ' + e));
        }
    }
}