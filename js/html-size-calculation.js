(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
			var scale = clientWidth / 320
			if(scale<1){
				scale = 1;
			}else if(scale>1.29){
				scale = 1.29;
			}else{
				scale = clientWidth / 320;
			}
				
            docEl.style.fontSize = 16 * scale + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);