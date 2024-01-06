function MyInfo(YourName,Village,PhoneNo){
    this.YourName = YourName;
    this.Village = Village;
    this.PhoneNo = PhoneNo;
    this.ShowMe = function(){
        console.log(this.YourName);
        console.log(this.Village);
        console.log(this.PhoneNo);
    }
}
var NewObj = new MyInfo("Rakib","Borabo","01880598006");
var NewObj2 = new MyInfo("Akib","Rajendropur","0188005654")
NewObj.ShowMe();
console.log("break")
NewObj2.ShowMe();