var data = [{
                id:'01',
                name:'Up & DownOpen Cowhide Leather......',
                imgurl:'../images/2.png',
                price: 219,
                sale: 189,
                save:30.
            },{
                id:'02',
                name:'Up & DownOpen Cowhide Leather.....',     
                imgurl:'../images/3.png',
                price: 219,
                sale: 189,
                save:30.

            },{  
                id:'03',
                    name:'Up & DownOpen Cowhide Leather.......',       
                    imgurl:'../images/2.png',
                    price: 219,
                    sale: 189,
                    save:30.

                }];
var res = data.map(function(goods){
            return '<li>' +
                '<img src="'+ goods.imgurl +'">\n' + 
                '<p>'+ goods.name +'</p>\n' + 
                '<p class="color">Usd：'+ goods.save +'</p>\n' + 
                '<p>Our Price：<del>'+ goods.price +'</del></p>\n' + 
                '<p class="price">Our Price：<span>'+ goods.sale +'</span></p>' + 
            '</li>'
        });

       console.log(res);
var goodslist = document.getElementById('goodslist');
        goodslist.innerHTML = res.join('\n');
var data=[]; 
(function(){

    for(var i=1;i<=18;i++){
        var imgNum=parseInt(Math.random()*5)+1;
        var rmb=parseInt(Math.random()*1000)+100;
        var rqNum=parseInt(Math.random()*1000);
        shop(i,'nei'+i,'../images/goods'+imgNum+'.png',8888,rmb,goodsTime(),rqNum)
    }

    //随机时间，2017/01/01到2017/12/31
    function goodsTime(){
        var data=new Date('2017/01/01');
            data.setDate(data.getDate()+parseInt(Math.random()*365))
                return data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()
    }
    
    function shop(_id,_name,_imgurl,_jg,_tj,_date,_renqi){
        data.unshift(
            {
                id:_id,
                name:_name,
                imgurl:_imgurl,
                price:_jg,
                sale:_tj,
                save:_jg-_tj,
                date:_date,
                renqi:_renqi
            }
            )
        // return data;
        }
//把拼接封装
function pinjie(){
    var content ='<ul>';
    for(var i=0;i<data.length;i++){
            // data[i] 每一个商品对象
            // 拼接li
            content += '<li class="main_c">'+'<input id="btn" type="checkbox" />'+'<a href="#">' +
                '<img src="'+ data[i].imgurl +'">'+ 
                '<h4>'+ data[i].name +'</h4>'  
                +'<p class="price"><span class="s1"><del>RMB:'+ data[i].price +'</del></span>&nbsp;<span class="s2">RMB:'+ data[i].sale +'</span></p>' +'<p class="save">save RMB:'+ data[i].save +'</p>'+'</a><p>人气：'+data[i].renqi+'</p><p class="wll"><a href="#">批发点这里&gt;</a></p><span class="goodsDate">上架时间:'+data[i].date+'</span></li>'
    }   // 闭合ul
        content += '</ul>';
        // 获取元素
        var h_main_c = document.getElementById('h_main_c');//null
        h_main_c.innerHTML = content;//输出
}//拼接
function forH(data,sre){//高到低的排序
        var dataZZ=[];
        for(var i=0;i<data.length;i++){
            for(var j=i+1;j<data.length;j++){
                if(Date.parse(data[i][sre])>Date.parse(data[j][sre])){
                    // 互换位置
                    var dataZZ = data[i];
                    data[i] = data[j];
                    data[j] = dataZZ;
                }
            }
        }
    return data;
}
pinjie();

        //点击按照价格排序
        var btnprice=document.getElementById("btnprice");
        btnprice.onclick=function(){
            forH(data,'sale');
            pinjie();
        }
        //点击按照人气排序
        var btnRenqi=document.getElementById("btnrenqi");
        btnRenqi.onclick=function(){
        var dataZZ=[];
        forH(data,'renqi');
        pinjie();
        }
        //点击按照商品上架时间排序
          var btnDate=document.getElementById("btndate");
        btnDate.onclick=function(){
            forH(data,'date')
           data.reverse()
            //对象不能有变量，形参sdate
        pinjie();
        }
 })()