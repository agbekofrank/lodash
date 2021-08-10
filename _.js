let _ = {
  clamp(number, lower, upper) {
    const lowerClampValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampValue, upper);
    return clampedValue;
  },
  inRange(number, start = 0, end) {
    // let inRange = number >= start && number < end;
    if(typeof (end) == 'undefined'){
        end = start,
        start = 0;
    }
    if(start > end){
        let tempHolder = 0;
        tempHolder = start;
        end = start;
        start = tempHolder;
        console.log(start);
    }
  }
};
_.inRange(3, 4, 5);



// Do not write or modify code below this line.
module.exports = _;
