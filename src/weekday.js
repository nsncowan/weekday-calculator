export default function Calculator(){
  
}

Calculator.prototype.dayOfWeek = function(number) {
  const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
  let today = new Date(number);
  return weekday[today.getDay()];
};






