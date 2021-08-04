//=============================================================================\\
//                             https://freecash.com                             \\
//                              made by nullcheats                               \\
//================================================================================\\


const chalk = require('chalk');
const Request = require('./Reqs');
const I2C = require('./DisplayOutput');
const Info = require('./ProfileInformation');
const ProfileInfo = new Info();
const EnableLogging = true;
const DelayInterval = 2000;


I2C.Sync();
I2C.Clear();
I2C.Write2LCD('freecash.com','Nullcheats <3');


(async function Start() {
    while (true) {
        Request.Info(ProfileInfo , 'session_id=xxx-xxxx-xxxxx-xxxx-xxxxx-xx;');
        await new Promise(resolve => setTimeout(resolve, 5000));
        if(ProfileInfo.Coins2USD()){
            I2C.Clear();
            I2C.Write2LCD('Current balance', ProfileInfo.Coins2USD());
            if(EnableLogging){
                console.log(chalk.green('> Logging balance | ' + ProfileInfo.Coins2USD()));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }

        if(ProfileInfo.CompletedOffers){
            I2C.Clear();
            I2C.Write2LCD('Completed offers', ProfileInfo.CompletedOffers);
            if(EnableLogging){
                console.log(chalk.green('> Logging completed offers | ' + ProfileInfo.CompletedOffers));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }

        if(ProfileInfo.Refferals){
            I2C.Clear();
            I2C.Write2LCD('Users referred', ProfileInfo.Refferals);
            if(EnableLogging){
                console.log(chalk.green('> Logging user referals | ' + ProfileInfo.Refferals));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }

        if(ProfileInfo.TotalEarnt){
            I2C.Clear();
            I2C.Write2LCD('Total earnings', ProfileInfo.TotalEarnings2USD());
            if(EnableLogging){
                console.log(chalk.green('> Logging total earnings | ' + ProfileInfo.TotalEarnings2USD()));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }

        if(ProfileInfo.ReferralEarnings){
            I2C.Clear();
            I2C.Write2LCD('referal earnings', ProfileInfo.ReferralEarnings);
            if(EnableLogging){
                console.log(chalk.green('> Logging referal earnings | ' + ProfileInfo.ReferralEarnings));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }

        if(ProfileInfo.DateJoined){
            I2C.Clear();
            I2C.Write2LCD('Date joined', ProfileInfo.DateJoined);
            await new Promise(resolve => setTimeout(resolve, 3000));
            I2C.Clear();
            I2C.Write2LCD('Days since join', ProfileInfo.Date2Days());
            if(EnableLogging){
                console.log(chalk.green('> Logging date joined / days since | ' + ProfileInfo.DateJoined));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }

        if(ProfileInfo.CurrentXP){
            I2C.Clear();
            I2C.Write2LCD('Current XP', ProfileInfo.CurrentXP);
            await new Promise(resolve => setTimeout(resolve, 3000));
            I2C.Clear();
            I2C.Write2LCD('XP progression', ProfileInfo.CalculateXPbar());
            await new Promise(resolve => setTimeout(resolve, 3000));
            I2C.Clear();
            I2C.Write2LCD('XP needed', ProfileInfo.RequiredXP);
            if(EnableLogging){
                console.log(chalk.green('> Logging current XP / progression | ' + ProfileInfo.CalculateXPbar()));
            }
            await new Promise(resolve => setTimeout(resolve, DelayInterval));
        }
    }
})();


