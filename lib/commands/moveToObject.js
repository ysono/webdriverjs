module.exports = function moveToObject (cssSelector, callback) {

    var self = this;

    this.element(cssSelector,function(err,result) {
        if(err === null && result.value) {

            self.moveTo(result.value.ELEMENT,callback);

        } else {

            callback(err, result);

        }
    });
};

