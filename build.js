//var building = {
//    hr: 0,//Ѫ��
//    buildTime: 0,//����ʱ��
//    money: 0,
//    createTime: 0,//����������¼�
//    name: "",//��������
//    createType: [],//���Դ�������������
//    isBegin: false,//�Ƿ�ʼ����
//    isAlvie: false,//�Ƿ���Ȼ���ڵ�ͼ����
//    w: 0,//���
//    h: 0,//�߶�
//    currentHr: 0,//��ǰѪ��
//    isAttacked: false,//�Ƿ����ڱ�����
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
    //return this��
}

Building.prototype.create = function () {
    var canvns = document.getElementById("game").getContext("2d");
    var img = new Image();   // ����һ��<img>Ԫ��
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
