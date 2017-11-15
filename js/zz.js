$(function () {
	// 导航
$('nav .nav-1>li').hover(function(){
	// $('nav .nav-1>li').css('borderBottom','0');
	$('nav .nav-1>li:nth-child(3)').css('borderBottom','0');
	$(this).css('borderBottom','3px solid #000');
},function(){
	$(this).css('borderBottom','');
	$('nav .nav-1>li:nth-child(3)').css('borderBottom','3px solid #000');
	
});

// 二级导航
// $('.nav1 .mag li:nth-child(2)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:100});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(3)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:180});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(4)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:260});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(5)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:340});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(6)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:420});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(7)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:500});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(8)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:580});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(9)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:660});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(10)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:740});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
// $('.nav1 .mag li:nth-child(11)').hover(function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:40,left:820});
// },function(){
// 	$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
// });
	$('.nav1 .mag li').each(function (index,ele){
		if($(this).index() != 0){
			$(ele).hover(function(){
				var x = $(this).index()*80+20;
				console.log(x);
				$('.nav1 .mag li:last-child').stop().animate({width:40,left:x});
				},function(){
					$('.nav1 .mag li:last-child').stop().animate({width:64,left:0});
				});
			}
	});

	//图片懒加载
	lazeLoad();
	$(window).scroll(lazeLoad);
	$(window).resize(lazeLoad);
	function lazeLoad() {
			// 右边线
		var result = $(window).height() + $(document).scrollTop();
		$('.picture .pic1 li img').each(function (index,ele) {
			//ele-->js对象-->jq对象
			var top = $(ele).offset().top;
			if (top <= result) {
				//加载图片
				var _src = $(ele).attr('_src');
				$(ele).attr('src',_src);
			}
		});
	};


	//页数
	//下标
	$('.ys1 li').hover(function (){
		$('.ys1 li:nth-child(1)').css('background','#98b5d5');
		//现清空所有
		$('.ys1 li').removeClass('on');
		//给自己添加
		$(this).addClass('on');
	},function (){
		$('.ys1 li').removeClass('on');
		$('.ys1 li:nth-child(1)').css('background','#98b5d5');
	});








})