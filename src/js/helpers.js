Array.prototype.contains = function(key, value) {
    var i = this.length;
    while (i--) {
        if (this[i][key] === value){
            return true;
        }
    }
    return false;
}


Array.prototype.containsReturn = function(key, value) {
    var i = this.length;
    while (i--) {
        if (this[i][key] === value){
            return i;
        }
    }
    return false;
}
