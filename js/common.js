
function id(obj) {
    return document.getElementById(obj);
}
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

//获取scrollTop
function getTop()
{
	return document.documentElement.scrollTop || document.body.scrollTop;	
}

//设置scrollTop
function setTop(iTop)
{
	document.documentElement.scrollTop = document.body.scrollTop = iTop;
}

function pzMove(obj,iTarget){  //弹性运动height++ or height--
        
    obj.iSpeed = 0;
    obj.iNow = 0;
    
    var num = 4;
    
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        
        if( obj.offsetWidth < iTarget ){
            num = 4;
        }
        else if(obj.offsetWidth > iTarget){
            num = -4;
        }
        
        obj.iSpeed += num;
        
        var H = obj.offsetWidth + obj.iSpeed;
        
        if( (H > iTarget && num > 0) || (H < iTarget && num < 0) ){
            
            obj.iNow++;
            
            H = iTarget;
            obj.iSpeed *= -1;
            obj.iSpeed *= 0.33;
            
            if(obj.iNow==2){
                clearInterval(obj.timer);
            }               
        }
        else{
            
            obj.iNow = 0;
        }
        
        obj.style.width = H + 'px';
        
    },30);  
}

function bind(obj, ev, fn) { //绑定事件
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}



function autoPlay(obj){
	var num = 60;
	var timer = null;
	clearInterval(timer);
	$(obj).unbind('click');
	timer = setInterval(function (){
		num--;
		if (num<=0) {
			num = 60;
			$(obj).bind('click', autoPlay);
			$(obj).text('重新获取验证码');
			$(obj).removeAttr("disabled");
			clearInterval(timer);				
		}else{
			$(obj).text(num+'s，后重新获取');
		}
	}, 1000);
}

