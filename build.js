//var building = {
//    hr: 0,//血量
//    buildTime: 0,//建造时间
//    money: 0,
//    createTime: 0,//创造人物的事件
//    name: "",//建筑名称
//    createType: [],//可以创建的人物类型
//    isBegin: false,//是否开始创建
//    isAlvie: false,//是否依然存在地图在上
//    w: 0,//宽度
//    h: 0,//高度
//    currentHr: 0,//当前血量
//    isAttacked: false,//是否正在被攻击
//}
function Building(name, hr, buildTime, createTime, createType, w, h, money) {
    this.name = name;
    this.hr = hr;
    this.buildTime = buildTime;
    this.createTime = createTime;
    this.createType = createType;
    this.w = w;
    this.h = h;
    this.money = money;
    //return this；
}

Building.prototype.create = function () {
    var canvns = document.getElementById("game").getContext("2d");
    var img = new Image();   // 创建一个<img>元素
    img.src = 'images/role.png';
    img.onload = function () {
        canvns.drawImage(img, 100, 100);
    }
    var speedDiv = document.createElement("div");
    speedDiv.style.width = this.w;
    speedDiv.style.height = this.h;
    speedDiv.style.backgroundColor = "green";
    speedDiv.style.position = "absolute";
    alert(JSON.stringify(img));
    speedDiv.style.top = img.scrollTop;
    speedDiv.style.left = img.scrollLeft;
    document.body.appendChild(speedDiv);
}
