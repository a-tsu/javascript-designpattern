function ButtonSuccess( type ){
        this.color = type.color || 'green';
}

function ButtonError( type ){
        this.color = type.color || 'red';
}

function ButtonWarning( type ){
        this.color = type.color || 'yellow';
}

function ButtonNormal( type ){
        this.color = type.color || 'blue';
}



function ButtonFactory() {}

ButtonFactory.prototype.createPart = function createButton( type ) {
    var parentClass = null;

    if (type.messageType === 'success') {
        parentClass = ButtonSuccess;
    } else if (type.messageType === 'error') {
        parentClass = ButtonError;
    } else if (type.messageType === 'warning') {
        parentClass = ButtonWarning;
    } else {
        parentClass = ButtonNormal;
    }

    if( parentClass === null ){
        return false;
    }

    return new parentClass( type );
}

var btnFactory = new ButtonFactory();
var btn1 = btnFactory.createPart({
        messageType : 'success',
            color : 'green'
});

var btn2 = btnFactory.createPart({
        messageType : 'error'
});

// see below returns true
console.log(btn1 instanceof ButtonSuccess);
console.log(btn2 instanceof ButtonError);

// see what below line would return
console.log(btn1);
console.log(btn2);
