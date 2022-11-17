function StringLength(string) {
    if(string.length>=1 && string.length <10) {
        return string.length;
    }else return false;
}

StringLength("hi");
StringLength("");
StringLength("Hell Word");

module.exports = StringLength;