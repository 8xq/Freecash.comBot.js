class Information {
    constructor(Balance , CompletedOffers , Refferals , TotalEarnt , UserLevel , ReferralEarnings , DateJoined  , LastCompletedOffer , CurrentXP , RequiredXP , SessionCookie ) {  
      this.Balance = Balance;
      this.CompletedOffers = CompletedOffers;
      this.Refferals = Refferals;
      this.TotalEarnt = TotalEarnt;
      this.UserLevel = UserLevel;
      this.ReferralEarnings = ReferralEarnings;
      this.DateJoined = DateJoined;
      this.LastCompletedOffer = LastCompletedOffer;
      this.CurrentXP = CurrentXP;
      this.RequiredXP = RequiredXP;
      this.SessionCookie = SessionCookie;
    }
    CalculateXPbar = () => {
      var Current =  parseFloat(this.CurrentXP.replace(/,/g, ''));
      var Required = parseFloat(this.RequiredXP.replace(/,/g, ''));
      var Total = (Current+Required);
      return Current + '/' + Total;
    }
    Date2Days = () => {
      var DateConversion =  Math.floor((Date.parse((new Date()).toISOString().split('T')[0]) - Date.parse(this.DateJoined) ) /  (24 * 60 * 60 * 1000)); 
      return DateConversion;
    }
    Coins2USD = () => {
      var Current =  parseFloat(this.Balance.toString().replace(/,/g, '.'));
      if(Current.toString().indexOf('.') >= 0){
        var FirstPart = Current.toString().split('.')[0];
        var SecondPart =  Current.toString().split('.')[1].replace(/^0+/, '').slice(0, -1);
        return  `$${FirstPart}.${SecondPart}`;
      }
      else {
        var ParseCoins =  parseFloat(this.Balance)/1000;
        var Conversion = Math.trunc(ParseCoins * Math.pow(10, 2)) / Math.pow(10, 2); 
        return  `$${Conversion}`;
      }
    }
    TotalEarnings2USD = () => {
      var Current =  parseFloat(this.TotalEarnt.toString().replace(/,/g, '.'));
      if(Current.toString().indexOf('.') >= 0){
        var FirstPart = Current.toString().split('.')[0];
        var SecondPart =  Current.toString().split('.')[1].replace(/^0+/, '').slice(0, -1);
        return  `$${FirstPart}.${SecondPart}`;
      }
      else {
        var ParseCoins =  parseFloat(this.TotalEarnt)/1000;
        var Conversion = Math.trunc(ParseCoins * Math.pow(10, 2)) / Math.pow(10, 2); 
        return  `$${Conversion}`;
      }
    }
}


module.exports = Information;

