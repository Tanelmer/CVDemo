$(function(){
	$.fn.fdimg=function(){
		var $main =$(this).find(".main"),//正常 容器
			$demo=$main.find(".demo"),//滑块 
			$mainimg=$main.find("img"),// 正常，放大图片合集
			$showbig =$main.find(".showbig"),//放大镜区域,
			$showimg =$showbig.find("img"),//放大镜图片
			$listimg =$(".list").find("li>img"),//小图片列表
			percent =$showbig.width()/$demo.width();
			//console.log(percent+"===="+$listimg);
		
		$main.mousemove(function(e){
			$demo.css('display','block');
			$showbig.css('display','block');
			var x=e.pageX-$(this).offset().left-$demo.width()/2,
				 y=e.pageY-$(this).offset().top-$demo.height()/2,
			//console.log(x+"====="+y);
				Maxx= $main.width()-$demo.width(),
				Maxy= $main.height()-$demo.height();
				/*if(x<Maxx){
					x=x;
				}else if(x>Maxx){
					x=Maxx;
				}*/
				x = x < Maxx ? x : Maxx;
				x = x > 0 ? x : 0;
				y = y < Maxy ? y : Maxy;
				y = y > 0 ? y : 0;
				$demo.css({left:x+"px",top:y+"px"});//让滑块鼠标居中
				$showimg.css({marginLeft:-percent*x+"px",marginTop:-percent*y+"px"});
		});
		$main.mouseout(function(){
		   	$demo.css('display','none');
			$showbig.css('display','none');
		});
		$listimg.click(function(){
			$(this).parent().addClass("act").siblings().removeClass("act");
			var Src=$(this).data("bimg");
			$mainimg.attr("src",Src);
		})
	}

	$("#container").fdimg();
});