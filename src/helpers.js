Array.prototype.contains = function(key, value) {
    var i = this.length;

    while (i--) {

        if (this[i][key] === value){
            console.log('he');
            return true;
        }
    }
    return false;
}
