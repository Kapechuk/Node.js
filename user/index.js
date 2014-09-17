var db = require('../db');

var User = function(name) {
    this.name = name;
};

User.prototype.hello = function(who) {
    console.log(this.name + ' говорит : ' + db.getPhrase('Hello')+ ' ' + who.name);
};

module.exports = User;

