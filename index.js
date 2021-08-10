function inRange(number, start = 0, end) {
  // let inRange = number >= start && number < end;
  if (typeof end == "undefined") {
    (end = start), (start = 0);
  }
  if (start > end) {
    let tempHolder = 0;
    tempHolder = start;
    end = start;
    start = tempHolder;
    console.log(start);
  }
}
inRange(3, 4, 5);
