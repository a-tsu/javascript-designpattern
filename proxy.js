const proxy = {
    ids         : [],
    delay       : 50,
    timeout     : null,
    callback    : null,
    context     : null,
    makeRequest : function(id, callback, context){

        this.ids.push(id);

        this.callback = callback;
        this.context  = context;

        if (!this.timeout) {
            this.timeout = setTimeout(function () {
                proxy.flush();
            }, this.delay);
        }
    },
    flush : function() {

        // サンプルコードではYahoo!のYQLウェブサービスにJSONPで
        // リクエストを行い、ビデオ再生をしている
        http.makeRequest(this.ids, "proxy.handler");

        // clears timeout an que
        this.timeout = null;
        this.ids = [];
    },
    handler : function(data) {
        var i, max;

        // when there is only one video request
        if (parseInt(data.query.count, 10) === 1) {
            proxy.callback.call(proxy.context, data.query.results.Video);
        }

        // where there are some videos requests
        for (i = 0, max = data.query.results.Video.length; i < max; i += 1) {
            proxy.callback.call(proxy.context, data.query.results.Video[i]);
        }
    }
}
