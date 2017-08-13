"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nextPath(path, dim) {
    var extension = path.split('.')[path.split('.').length - 1];
    var pathwithoutextension = path.split('.')[path.split('.').length - 2];
    var string = '';
    var foundedlast = false;
    var pathwithoutnumbers = pathwithoutextension;
    var numbercycle;
    if (dim) {
        numbercycle = dim;
    }
    else {
        numbercycle = pathwithoutextension.length;
    }
    for (var i = 0; i < numbercycle; i++) {
        pathwithoutnumbers = pathwithoutnumbers.substring(0, pathwithoutnumbers.length - 1);
        var char = pathwithoutextension[(pathwithoutextension.length - 1) - i];
        if (dim && isNaN(parseInt(char))) {
            var startnumber = '';
            for (var ii = 0; ii < (dim - 1); ii++) {
                startnumber += '0';
            }
            return pathwithoutextension + '_' + startnumber + '1.' + extension;
        }
        else if (isNaN(parseInt(char)) && !foundedlast) {
            foundedlast = true;
            var stringlength = string.length;
            string = (parseInt(string) + 1).toString();
            var cycle = (stringlength - string.length);
            if (string.length < stringlength) {
                for (var ss = 0; ss < cycle; ss++) {
                    string = '0' + string;
                }
            }
            return pathwithoutnumbers + '_' + string + '.' + extension;
        }
        else if (!foundedlast) {
            string = char + string;
        }
    }
    if (dim) {
        var stringlength = string.length;
        string = (parseInt(string) + 1).toString();
        var cycle = (stringlength - string.length);
        if (string.length < stringlength) {
            for (var ss = 0; ss < cycle; ss++) {
                string = '0' + string;
            }
        }
        return pathwithoutnumbers + string + '.' + extension;
    }
}
exports.nextPath = nextPath;
