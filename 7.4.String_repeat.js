function repeatStringNumTimes(str, num) {
  // repeat after me
    var accumulatedStr = "";
    while (num > 0) {
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
}
repeatStringNumTimes("abc", 3);