function Earth(){

    // 既存のインスタンスの有無をチェック
    if (typeof Earth.instance === "object"){
        return Earth.instance;
    }

    this.name = "Earth";
    this.age = "4.7+E9"; // 地球の寿命は47億年

    // キャッシュする
    Earth.instance = this;
    return this;
}

// 正しい挙動
var earth = new Earth();
var earth2 = new Earth();

earth === earth2 ? console.log("Singleton!") : console.log("Not singleton");



function Earth(){
     var instance;

     Earth = function(){
         return instance;
     }

     Earth.prototype = this;

     instance = new Earth();

     instance.constructor = Earth;

     this.name = "Earth";
     this.age = "4.7+E9"; // 地球の寿命は47億年

     return instance;
}

var earth = new Earth();
console.log(earth.constructor === Earth); // false
