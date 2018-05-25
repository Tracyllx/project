  
var data=
[
    {
        ur:'小明',
        pj:'这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!',
        x:2,
        time:'2018-10-03',
        huozhang:2,
        huocai:1,
        maijia:'靠!!一下把我家买空了还给差评!!!',
        img:[],
    },{
        ur:'小明',
        pj:'这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!',
        x:2,
        time:'2018-10-03',
        huozhang:1,
        huocai:1,
        maijia:'',
        img:['../images/cp1.png'],
    },{
        ur:'小明',
        pj:'这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!',
        x:2,
        time:'2018-10-03',
        huozhang:2,
        huocai:12,
        maijia:'想砸摊子吗??你等着!!!',
        img:['../images/cp1.png','../images/cp1 - 副本.png'],
    },{
        ur:'小明',
        pj:'这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!这个东西真烂!!!千万别买!!!我一下买了2000个气死人了!!!',
        x:5,
        time:'2018-10-03',
        huozhang:24,
        huocai:1,
        maijia:'',
        img:['../images/cp1 - 副本.png'],
    }
] 
var Cuss=['草','你妹','fuke','操','差','xx']
var gx_form_x_int=5
var gx_yzm=0
//gx_form_x_int:发表评论时的星星数,由taggrade()生成
//初始化
//绑定事件
bd()
// 刷新评论
reComment(data,'gx-ul',1,10)
// 刷新评分
regrade(data)
//表单初始化
taggrade(5)
// rwm(document.getElementById('code'))
gx_yzm=rwm(document.getElementById('code'))
// ==========
//绑定事件函数
function bd(){
    document.forms['form01']['btn'].onclick=function(){
        var ur,pj,x,img,time,t,code;
        ur=document.forms['form01']['ur'].value
        pj=document.forms['form01']['content'].value
        x=gx_form_x_int
        img=document.forms['form01']['fj'].value
        code=document.forms['form01']['code'].value
         t= new Date()
         if(ur=='' ){
            document.getElementById('ur-t').innerHTML='<em style="color:red;font-size:12px; ">帐号不能为空</em>'
         }else if(pj==''){
            document.getElementById('ur-t').innerHTML=""
            document.getElementById('contnet-t').innerHTML='<em style="color:red;font-size:12px; ">发表一下你的评论吧</em>'
         }else if(code!=gx_yzm){
            document.getElementById('contnet-t').innerHTML=''
            document.getElementById('code-t').innerHTML='<em style="color:red;font-size:12px; ">验证码错误</em>'
         }else{
            document.getElementById('code-t').innerHTML=''
            document.forms['form01']['content'].value=''
            document.forms['form01']['ur'].value=''
            document.forms['form01']['fj'].value=''
            document.forms['form01']['code'].value=''
            // ========================
             time= t.getFullYear()+'-'+t.getMonth()+'-'+t.getDate()
            addComment(data,ur,pj,x,img,time,Cuss)
            reComment(data,'gx-ul',1,10)
            regrade(data)
            gx_yzm=rwm(document.getElementById('code'))
            }
        }
    document.getElementById('code').onclick=function(){
        gx_yzm=rwm(document.getElementById('code'))
    }
    console.log('绑定事件完成')
         
}
// =================
// 刷新评论功能
//a数据
//id
// N从第几个评论开始显示
// max为一页显示最大评论数
function reComment(a,id,N,max){
    id=document.getElementById(id)
    // 初始化
    var cn=''
    for(var i=N-1;i<=max && i<a.length;i++){
        var obj=a[i]
        //生成用户评星字串
        var cnx=''
        for(var n=0;n<obj.x;n++){
            cnx+='<i class=" iconfont icon-iconfontxingxing gx-yellow"></i>'
        }
        //生成图片字串
        var cnimg=''
        if(obj.img[0]!=''){
            cnimg= obj.img.map(function(index){
            return '<img src="'+index+'" width="50" height="50"/>'
            }).join('')
        }
        //店主评论
        var cndz
        if(obj.maijia!=''){
            cndz='<p class="seller">店主:<span>'+
                obj.maijia+
                '</span></p>'
        }else{cndz=''}
        //拼接字串
        cn+='<li class="clearfix"><div class="fl"><p id="gx-ul-x">'+
            cnx+
            '</p><p id="gx-ul-time">'+
            obj.time+
            '</p><p id="gx-ul-name">'+
            obj.ur+
            '</p><p id="gx-ul-z"><a href="javascript:;" class="iconfont icon-haoping gx-yellow" onclick=addTags('+i+')>('+
                obj.huozhang+
                ')</a><a href="javascript:;" class="iconfont icon-chaping gx-gray" onclick=sickTags('+i+') >('+
                obj.huocai+
                ')</a></p></div><div class="fr"><p>'+
                obj.pj+
                '</p><p>'+
                cnimg+
                '</p>'+cndz+'</div></li>'
    }
    id.innerHTML=cn
}
// ==========
//添加评论到数据功能
//数据
//用户名
//用户评价
//给星数
//上传图片
//评价时间
function addComment(data1,ur1,pj1,x1,img1,time1,filter1){
    var obj=
    data1.unshift(
    {
    ur:ur1,
    pj:filter(filter1,pj1),
    x:x1,
    time:time1,
    huozhang:2,
    huocai:1,
    maijia:'',
    img:[img1],
    }
        )
}
// 评分统计功能
function regrade(data1){
    var arr={
        x1:0,
        x2:0,
        x3:0,
        x4:0,
        x5:0
    }
    var arr_g={
        x1:0,
        x2:0,
        x3:0,
        x4:0,
        x5:0
        };
    var he=0;
    data1.map(function(nei,index){
        switch(true){
            case nei.x==1 : arr.x1+=1
                 break;
            case nei.x==2 : arr.x2+=2 
                 break;
            case nei.x==3 : arr.x3+=3
                 break;
            case nei.x==4 : arr.x4+=4
                 break;
            case nei.x==5 : arr.x5+=5
                 break;
        }
        he+=nei.x
        switch(true){
            case nei.x==1 : arr_g.x1++
                 break;
            case nei.x==2 : arr_g.x2++
                 break;
            case nei.x==3 : arr_g.x3++
                 break;
            case nei.x==4 : arr_g.x4++
                 break;
            case nei.x==5 : arr_g.x5++
                 break;
        }
    })
    console.log(arr_g)
    console.log(he)
    //生成大星星字串
    var mean=he
    he/=data1.length
    he=Math.round(he)
    var cn=''
    //添加黄星星
    cn=addxx(he)
    // 添加到标签内
    document.getElementById('gx-pf-zpf-x').innerHTML=cn
    document.getElementById('gx-pf-rs').innerHTML=data1.length
    //度量尺模拟标签
    var _max=Math.max(arr_g.x1,arr_g.x2,arr_g.x3,arr_g.x4,arr_g.x5)
    var d1= arr_g.x1==0?0:Math.round(arr_g.x1/_max*80);
    document.getElementById('gx-pf-1x-meter').style.width=d1+'px';
    document.getElementById('gx-pf-1x').innerHTML=arr_g.x1
         d1= arr_g.x2==0?0:Math.round(arr_g.x2/_max*80)
    document.getElementById('gx-pf-2x-meter').style.width=d1+'px';
    document.getElementById('gx-pf-2x').innerHTML=arr_g.x2
         d1= arr_g.x3==0?0:Math.round(arr_g.x3/_max*80)
    document.getElementById('gx-pf-3x-meter').style.width=d1+'px';
    document.getElementById('gx-pf-3x').innerHTML=arr_g.x4
         d1= arr_g.x4==0?0:Math.round(arr_g.x4/_max*80)
    document.getElementById('gx-pf-4x-meter').style.width=d1+'px';
    document.getElementById('gx-pf-4x').innerHTML=arr_g.x4
         d1= arr_g.x5==0?0:Math.round(arr_g.x5/_max*80)
    document.getElementById('gx-pf-5x-meter').style.width=d1+'px';
    document.getElementById('gx-pf-5x').innerHTML=arr_g.x5
}
//顾客评星功能
function taggrade(x){
    gx_form_x_int=x
    console.log(x)
    var cn=''
    for(var i=0;i<x;i++){
        cn+='<a href="javascript:;" onclick="taggrade('+(i+1)+')" ><i class=" iconfont icon-iconfontxingxing gx-yellow"></i></a>'
    }
    //添加灰星星
    for(var n=0;n<(5-x);n++){
        cn+='<a href="javascript:;" onclick="taggrade('+(i+1+n)+')" ><i class=" iconfont icon-iconfontxingxing gx-gray"></i></a>'
    }
    document.getElementById('gx-form-x').innerHTML=cn
}
//点赞功能
function addTags(x){
    data[x].huozhang+=1
    var e=window.event.srcElement
    e.innerHTML='('+
        data[x].huozhang+
                ')'
}
//点踩功能
function sickTags(x){
    data[x].huocai+=1
    var e=window.event.srcElement
    e.innerHTML='('+
        data[x].huocai+
                ')'
}
//添加黄星星
function addxx(x){
    var cn=''
    for(var i=0;i<x;i++){
        cn+='<i class=" iconfont icon-iconfontxingxing gx-yellow"></i>'
    }
    //添加灰星星
    for(var n=0;n<(5-x);n++){
        cn+='<i class=" iconfont icon-iconfontxingxing gx-gray"></i>'
    }
    return cn
}
//过滤敏感字符
function filter(text,content){
    var ex
    text.map(function(t,i){
        ex=new RegExp(t,'ig')
        content=content.replace(ex,'**')
    })
    return content
}
//生成验证码
function rwm (obj){
        var s_div,fz,w,h,lh,color,sz,deg1,deg2,rgb;
        fz="1em"
        w="24%"
        h="20px"
        lh="20px"
        color=""
        rgb=["1","2","3"]
        s_div=""
        daan=""
        for(var i=0;i<4;i++){
            sz=parseInt(Math.random()*10)
            daan+=sz
            deg1=parseInt(Math.random()*100)
            deg2=parseInt(Math.random()*70)
            for(var n=0;n<4;n++){
                rgb[1]=parseInt(Math.random()*255)+","
                rgb[2]=parseInt(Math.random()*255)+","
                rgb[3]=parseInt(Math.random()*255)
                color='rgb('+rgb[1]+rgb[2]+rgb[3]+')'
            }
            s_div+='<div style="width:'+w+';height:'+h+';font-size:'+fz+';color:'+color+';transform:rotate('+deg1+'deg) skew('+deg2+'deg) ; text-align:center;font-weight: bold;float: left;">'+sz+'</div>'
        }
        obj.innerHTML='<div style="float: left;height:'+h+'">'+s_div+"</div>"
        return daan;
}
