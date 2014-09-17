var db = require('./db');
db.connect();

var User = require('./user');


function run(){
    var petya = new User('Петя');
    var vasya = new User('Вася');


    vasya.hello(petya);
    console.log(db.getPhrase('Successfully loaded'));
};

if(module.parent){
    exports.run = run;
} else {
    run();
}