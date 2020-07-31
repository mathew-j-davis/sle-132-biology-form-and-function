String.prototype.toTitleCase = function () {

  var str = this.valueOf();
  
  var split = str.toLowerCase().split(" ");
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i][0].toUpperCase() + split[i].slice(1);
  }
  
  return split.join(" ");
}