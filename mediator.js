function Player(name) {
    this.points = 0;
    this.name = name;
}

Player.prototype.play = function() {
    this.points += 1;
    mediator.played(); // ここでメディエータにアクションを伝える
};

var scoreboard = {

    // 結果を表示させるためのHTML要素
    element : document.getElementById('results'),

    // 得点表示を更新させるためのメソッド
    update : function( score ) {

        var i, msg = '';
        for (i in score) {
            msg += '<p><strong>' + i + '</strong>: ';
            msg += score[i];
            msg += '</p>';
        }
        this.element.innerHTML = msg;
    }
};


var mediator = {

    // caches all players
    players : {},

    // initialization
    setup : function() {
        var players = this.players;
        players.home = new Player('Home');
        players.guest = new Player('Guest');
    },

    played : function() {
        var
            players = this.players,
            score = {
                Home : players.home.points,
                Guest: players.guest.points
            };

        scoreboard.update(score);
    },

    keypress: function(e){
        e = e || window.event; // ID
        if (e.which === 49){ // key "1"
            mediator.players.home.play();
            return;
        }
        if (e.which === 48){ // key "0"
            mediator.players.guest.play();
            return;
        }
    }
};

mediator.setup();
window.onkeypress = mediator.keypress;

setTimeout(function() {
    window.onkeypress = null;
    alert('Game over!');
}, 3000);
