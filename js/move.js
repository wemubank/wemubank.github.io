function startMove(obj,json,fn){
	var iCur = 0
	var speed = 0;
	clearTimeout(obj.timer)
	obj.timer = setInterval(function(){
		var btn = true;
		for(var attr in json){
			var itarget = json[attr];
			if(attr == 'opacity'){
				iCur = Math.round(css(obj,attr)*100);
			}else{
				iCur = parseInt(css(obj,attr));
			};
			speed = (itarget - iCur)/2.5;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(iCur != itarget){
				btn = false;
				if(attr == 'opacity'){
					obj.style[attr] = (iCur + speed)/100;
					obj.style.filter = 'alpha(attr='+(iCur+speed)+')'
				}else{
					obj.style[attr] = iCur + speed+'px';
				};
			};
		};
		if(btn){
			clearTimeout(obj.timer);
			 fn && fn.call(obj);
		}
	}, 30);
};
function css(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
