function MacBook() {

    this.cost = function () {
        return 997;
    };

    this.screenSize = function() {
        return 11.6;
    };

}


// Decorator 1
function memory( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    };

}

// Decorator 2
function engraving( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    };

}

// Decorator 3
function insurance( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    };

}


// Decorator 4
function graphicCard( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v + 150;
    };

}

// Decorator 5
function harddiskDrive( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v + 180;
    }

}

// Decorator 6
function academicDiscount( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
        return v * 0.9;
    };

}

// Decorator 7
function upgradeScreenSize( macbook ) {

    var s = macbook.screenSize();
    macbook.screenSize = function() {
        return 13.3;
    };

}

var myMb = new MacBook();

memory( myMb );
insurance( myMb );
academicDiscount( myMb );
upgradeScreenSize( myMb );

console.log( myMb.cost() );                 // -> 1189.8
console.log( myMb.screenSize() );   // -> 13.3
