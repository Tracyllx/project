
    var f_maxtu = document.getElementById("f_maxtu");
    var minPic1 = document.getElementById("minPic1")
    var minPic2 = document.getElementById("minPic2")
    var minPic3 = document.getElementById("minPic3")
    var minPic4 = document.getElementById("minPic4")
    var minPic5 = document.getElementById("minPic5")
    minPic1.onmouseover = function(){
        f_maxtu.style.background = 'url(../images/maxtu1.png) no-repeat';
}
    minPic2.onmouseover = function(){
        f_maxtu.style.background = 'url(../images/maxtu2.png)';
}
    minPic3.onmouseover = function(){
        f_maxtu.style.background = 'url(../images/maxtu1.png) no-repeat';
    }
    minPic4.onmouseover = function(){
    f_maxtu.style.background = 'url(../images/maxtu2.png)';
    }
    minPic5.onmouseover = function(){
    f_maxtu.style.background = 'url(../images/maxtu1.png)';
    }
 //添加数量，自动计算价格
var ags = 10;
//添加
function add(){
    var txt=document.getElementById("txt");
    var out=document.getElementById("out");
    var a=txt.value;
    txt.value= ++a;
    var str = txt.value + '='+txt.value*199.99+'py6.'
    result.innerHTML = (str)
    if(a>ags)
    alert("超出库存，目前库存数量为10件");
}
//减少
function sub(){
    var txt=document.getElementById("txt");
    var a=txt.value;
    if(a>1){
        txt.value= --a;
    }else{
        txt.value=1;
        alert("数量不能低于0件");
    }
    var str = txt.value + '='+txt.value*199.99+'py6.'
    result.innerHTML = (str)
}


var data = [{
    imgurl:'../images/bao.png',
    main:'Up & Down Open Cowhide<br/>Leath Case With Crocodile...',
    save:'129.99'
},{
    imgurl:'../images/xiang.png',
    main:'Up & Down Open Cowhide<br/>Leath Case With Crocodile...',
    save:'219.99'
}];    
var res = data.map(function(goods){
    return '<li>' +
        '<img src="'+ goods.imgurl +'">\n' + 
        '<p class="main">'+ goods.main +'</p>\n' + 
        '<p class="save" style=color:red;>'+goods.save+'<p><br/>' + 
    '</li>'
});
var goodslist = document.getElementById('goodslist1');
goodslist1.innerHTML = res.join('\n');
var sum = Number(data[0].save) + Number(data[1].save);
var jian =parseInt(Number(sum-100));
var chu1 =document.getElementById("m_m_p1");
var chu2 =document.getElementById("m_m_p2");
chu1.innerHTML = '原价:'+sum;
                 
var data = [{          imgurl:'../images/bao.png',
    LastPrice:'py'+6.219,
    OutSale:'py'+6.189,
    main:'Up & Down Open Cowhide<br/>Leath Case With Crocodile...',
    save:'save py:6.30'
},{
    imgurl:'../images/xiang.png',
    LastPrice:'py'+6.219,
    OutSale:'py'+6.189,
    main:'Up & Down Open Cowhide<br/>Leath Case With Crocodile...',
    save:'save py:6.30'
},{
    imgurl:'../images/bao.png',
    LastPrice:'py'+6.219,
    OutSale:'py'+6.189,
    main:'Up & Down Open Cowhide<br/>Leath Case With Crocodile...',
    save:'save py:6.30'
}];
var res = data.map(function(goods){
    return '<li>' +
        '<img src="'+ goods.imgurl +'">\n' + 
        '<p class="main">'+ goods.main +'</p>\n' + 
        '<p>Last Price：<del>'+ goods.LastPrice +'</del></p>\n' + 
        '<p class="price" style=color:red;>Out Sale：<span>'+ goods.OutSale +'</span></p>' + 
        '<p class="save" style=color:green;>'+ goods.save +'<p><br/>' + 
    '</li>'
});
var goodslist = document.getElementById('goodslist');
goodslist.innerHTML = res.join('\n');
            
