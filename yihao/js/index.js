window.onload = function(){
	/*设置rem*/
	function toSize(){
		var html = document.documentElement;
		var width = html.clientWidth;
		var nub = 10.8;
		html.style.fontSize = width / nub + 'px';
	}

	toSize();

	window.addEventListener('toSize', toSize);

	/*顶部吸顶*/
	window.onscroll = function isScroll() {
		 var scrollPos = getScrollTop();
		 var header = document.getElementById('header');
		 if (scrollPos > 0) {
		 	header.className = "header scroll clearfix";
		 } else {
		 	header.className = "header clearfix";
		 }
	}

	setRushWidth();
	/*抢购块的宽度*/
	function setRushWidth(){
		var oRush = document.getElementById('rush-product');
		var aRushLi = oRush.getElementsByTagName('li');
		oRush.style.width = aRushLi.length * (2.88 + 0.3) + "rem";
	}

	/*滚动条到顶部距离*/
	function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        	scrollPos = window.pageYOffset; 
        } else if (document.compatMode && document.compatMode != 'BackCompat')  { 
        	scrollPos = document.documentElement.scrollTop; 
        } else if (document.body) { 
        	scrollPos = document.body.scrollTop; 
        }   
        return scrollPos;   
	}

	bannerTimer();

	/*banner滑动*/
	function bannerTimer() {
		var oShadowImg = document.getElementById('banner-shadow').getElementsByTagName('img')[0];
		var oUl = document.getElementById('banner-img');
		var oNum = document.getElementById('banner-number');
		var aLi = oUl.getElementsByTagName('li');
		var aNum = oNum.getElementsByTagName('span');
		oUl.length = aLi.length,oUl.cur = 0;
		init();
		getTimer();

		function getTimer(){
			oUl.timer = setInterval(function(){
				aLi[oUl.pre].className = "";
				aNum[oUl.cur].className = "";
				oUl.cur++;
				if (oUl.cur == oUl.length){
					oUl.cur = 0;
				}
				init();
			}, 2000);
		}

		for(var i = 0;i < length; i++){
			aNum[i].index = i;
			aNum[i].onclick = function(){
				clearInterval(oUl.timer);	
				init();			
			}
		}

		function init(){
			getCur();
			bannerScroll();
		}

		function getCur() {
			oUl.pre = oUl.cur - 1;
			oUl.next = oUl.cur + 1;
			if(oUl.cur == 0){
				oUl.pre = oUl.length - 1;
			}else if(oUl.cur == oUl.length - 1){
				oUl.next = 0;
			}
		}

		function bannerScroll() {
			aLi[oUl.cur].className = "active";
			aLi[oUl.pre].className = "pre";
			aLi[oUl.next].className = "next";
			oShadowImg.src = aLi[oUl.cur].getElementsByTagName('img')[0].src;
			aNum[oUl.cur].className = "active";
		}
	}
	
}

