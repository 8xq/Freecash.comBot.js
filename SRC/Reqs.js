const fetch = require('node-fetch');
const Endpoint = 'https://freecash.com/myprofile';
const EnableLogging = false;


const CoinsRegex = /(myProfileInfoItem">[\n\r\s]+<span class="itemLeft">Balance<\/span>[\n\r\s]+<span class="itemRight">[0-9,]{1,10})/gm;
const RefferalsRegex = /class="userProfileStatBoxInner">[\n\r\s]+<div class="userProfileStatValue">[0-9]{1,7}/gm;
const RefferalEarningsRegex = /(<div class="myProfileInfoItem">[\n\r\s]+<span class="itemLeft">Referral Earnings<\/span>[\n\r\s]+<span class="itemRight">[0-9,]{1,10})/gm;
const TotalEarningsRegex = /userProfileStatBoxInner">[\n\r\s]+<div class="userProfileStatValue">[0-9,]{1,7}<\/div><br>[\n\r\s]+<div class="userProfileStatInfo">Coins Earned/gm; 
const TotalOffersCompletedRegex = /class="userProfileStatValue">[0-9,]{1,6}<\/div><br>[\n\r\s]+<div class="userProfileStatInfo">Completed Offers/gm;
const ExperiancePointsRegex = /<h6 class="myProfileXpEarned">[0-9,]{1,55}/gm;
const ExperiancePointsNeededRegex = /XP Earned. [0-9,]{1,55}/gm;
const DateJoinedRegex = /<span class="itemRight">[0-9]{4}-[0-9]{2}-[0-9]{2}/gm;


exports.Info = async (ProfileInfo , SessionID) => {
    const ReqOptions = {
      method: 'GET',
      headers: {
          "cookie": SessionID.toString(),
      }
    };  
    try {
      const InfoRequest = await fetch(Endpoint, ReqOptions);
      const InfoResponse = await InfoRequest.text();
      var Coins = InfoResponse.match(CoinsRegex).toString().split('>')[4];
      var Refferals = InfoResponse.match(RefferalsRegex).toString().split('>')[6];
      var RefferalEarnings = InfoResponse.match(RefferalEarningsRegex).toString().split('>')[4];
      var TotalEarnings = InfoResponse.match(TotalEarningsRegex).toString().split('>')[2].split('<')[0];
      var CompletedOffers = InfoResponse.match(TotalOffersCompletedRegex).toString().split('>')[1].split('<')[0];
      var CurrentXP = InfoResponse.match(ExperiancePointsRegex).toString().split('>')[1];
      var RequiredXP = InfoResponse.match(ExperiancePointsNeededRegex).toString().split(' ')[2];
      var DateJoined = InfoResponse.match(DateJoinedRegex).toString().split('>')[1];
      ProfileInfo.Balance = Coins;
      ProfileInfo.Refferals = Refferals;
      ProfileInfo.RefferalEarnings = RefferalEarnings;
      ProfileInfo.TotalEarnt = TotalEarnings;
      ProfileInfo.CompletedOffers = CompletedOffers;
      ProfileInfo.CurrentXP = CurrentXP;
      ProfileInfo.RequiredXP = RequiredXP;
      ProfileInfo.DateJoined = DateJoined;
        if(EnableLogging){
          console.log("Balance -> "  + ProfileInfo.Balance);
          console.log('Refferals -> ' + ProfileInfo.Refferals);
          console.log('Refferal earnings -> ' + ProfileInfo.RefferalEarnings);
          console.log('Total earnings -> ' + ProfileInfo.TotalEarnt);
          console.log('Total offers completed -> ' + ProfileInfo.CompletedOffers);
          console.log('Current xp -> ' + ProfileInfo.CurrentXP);
          console.log('XP progression -> ' + ProfileInfo.CalculateXPbar());
          console.log('Date Joined -> ' + ProfileInfo.DateJoined);
          console.log('Days since joined -> ' + ProfileInfo.Date2Days());
        }
    } catch (e) {
      console.log('Error making web-request to endpoint !' + e);
    }
};

