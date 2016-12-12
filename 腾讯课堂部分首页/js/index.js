
	$(function(){
	//移动鼠标至li给显示移出隐藏
		$(".menu").find("li").mouseover(function(){
			$(this).find(".show_menu").addClass("show");
		}).mouseout(function(){
			$(this).find(".show_menu").removeClass("show");
		});
	//banner图切换
		var timer = setInterval(banner,1000);
		$(".focus").find("li").mouseover(function(){
			$(this).addClass("no").siblings().removeClass("no");
			clearInterval(timer);
			var _index = $(this).index();
			index = _index;//重新赋值
			$(".focus_pic").find("li").eq(_index).show().siblings().hide();//联动切换
			//切换背景颜色
			var background = $(this).data("color");
			$(this).parents(".b_bg").css("background",background);
		});
		$(".focus").find("li").mouseout(function(){
		 timer = setInterval(banner,1000);
		});
	//左右图标联动
		$(".next").click(function(){
				 index++;
			var length = $(".focus_pic").find("li").length;
			if(index>=length){
				index = 0;}
			var background = $(".f_btn").find("li").eq(index).data("color");
			$(this).parents(".b_bg").css("background",background);

			$(".f_btn").find("li").eq(index).addClass("no").siblings().removeClass("no");
			$(".focus_pic").find("li").eq(index).show().siblings().hide();//联动切换
		});
			$(".pre").click(function(){
				 index--;
			var length = $(".focus_pic").find("li").length;
			if(index<0){
				index = length-1;}
			var background = $(".f_btn").find("li").eq(index).data("color");
			$(this).parents(".b_bg").css("background",background);

			$(".f_btn").find("li").eq(index).addClass("no").siblings().removeClass("no");
			$(".focus_pic").find("li").eq(index).show().siblings().hide();//联动切换	
		});	

			

			
			
		// auto_play();	
			$(".sys").mouseover(function(){
				$(".t_ma").show();
			})
			$(".sys").mouseout(function(){
			
				$(".t_ma").hide();
			})
		//热播导航
			$(".l_nav").find("li").mouseover(function(){
				$(this).addClass("l_live").siblings().removeClass("l_live");
				var _index  = $(this).index();
				$(".l_all").find("ul").hide().eq(_index).show(100);
			});

	}); 
		var index = 0;
	function banner(){
		index++;
			var length = $(".focus_pic").find("li").length;
			if(index>=length){
				index = 0;}
			var background = $(".f_btn").find("li").eq(index).data("color");
			$(this).parents(".b_bg").css("background",background);
			$(".f_btn").find("li").eq(index).addClass("no").siblings().removeClass("no");
			$(".focus_pic").find("li").eq(index).show().siblings().hide();//联动切换
	}
	
		
	/*var index = 0;

	 setInterval(function(){
	
			index++;
			var length = $(".focus_pic").find("li").length;
			if(index>=length){
				index = 0;}
			var background = $(".f_btn").find("li").eq(index).data("color");
			$(this).parents(".b_bg").css("background",background);

			$(".f_btn").find("li").eq(index).addClass("no").siblings().removeClass("no");
			$(".focus_pic").find("li").eq(index).show().siblings().hide();//联动切换	
	 },1000);
			*/


		/*var timer = null;
		var time = 2000;
		function auto_play(){
		timer = setInterval(function(){
		$(".next").trigger("click");
		},time);
		
		}*/

