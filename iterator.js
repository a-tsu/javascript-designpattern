var agg = (function(){

    var
        index = 0,
        data = [1, 2, 3, 5, 7, 11, 13, 17, 19],
        length = data.length
    ;

    return {
        next : function() {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index + 1;
            return element;
        },

        hasNext : function() {
            return index < length;
        },

        rewind : function() {
            index = 0;
        },

        current : function() {
            return data[index];
        }
    }

}());

while (agg.hasNext()) {
        console.log(agg.next());
}

agg.rewind();
console.log(agg.current());
