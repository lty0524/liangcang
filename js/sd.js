$(function (){
		//消息的下拉列表
	$('.price').hover(function(){
		$('.price1').show();

		$('.price1 dd').each(function(){
			$('.price1 dd').hover(function(){
				$('.price1 dd:nth-child(1)').removeClass('bs');
				$(this).addClass('bs');
				$(this).children.css('color','#fff');
				},function(){
				$(this).removeClass('bs');
				$('.price1 dd:nth-child(1)').addClass('bs');
				$(this).children.css('color','#333');
			})
		});
	},function(){
		$('.price1').hide();
	});


	// 鼠标移入黑透
	$('.show-shop .box1').each(function(){
		$('.show-shop .box1 li:nth-child(1) a').hover(function(){
			$(this).children().eq(2).show();
		},function(){
			$('.box1-bg').hide();
		});
	});
	$('.show-shop .box1').each(function(){
		$('.show-shop .box1 li a').hover(function(){
			$(this).children().eq(1).show();
		},function(){
			$('.box1-bg').hide();
		});
	});
	$('.show-shop .box2').each(function(){
		$('.show-shop .box2 li:nth-child(1) a').hover(function(){
			$(this).children().eq(2).show();
		},function(){
			$('.box1-bg').hide();
		});
	});
	$('.show-shop .box2').each(function(){
		$('.show-shop .box2 li a').hover(function(){
			$(this).children().eq(1).show();
		},function(){
			$('.box1-bg').hide();
		});
	});
// 最上面导航
$('nav .nav-1>li').hover(function(){
	$('nav .nav-1>li:nth-child(2)').css('borderBottom','0');
	$(this).css('borderBottom','3px solid #000');
},function(){
	$(this).css('borderBottom','');
	$('nav .nav-1>li:nth-child(2)').css('borderBottom','3px solid #000');
});


// 二级导航
var x;
$('.nav2 .nav2-shop li').each(function (index,ele){
		if($(this).index()>=0 && $(this).index()<=9){
			$(ele).hover(function(){
			$('.nav2 .nav2-shop li:last-child').show();
			 x = $(this).index()*85;
			console.log(x);
			$('.nav2 .nav2-shop li:last-child').stop().animate({width:44,left:x,top:23});
			},function(){
				$('.nav2 .nav2-shop li:last-child').hide();
			});
		}else if($(this).index()>=10 && $(this).index()<=19){
			$(ele).hover(function(){
			$('.nav2 .nav2-shop li:last-child').show();
			 x = ($(this).index()-10)*85;
			console.log(x);
			$('.nav2 .nav2-shop li:last-child').stop().animate({width:44,left:x,top:70});
			},function(){
				$('.nav2 .nav2-shop li:last-child').hide();
			});
		}else{
			if($(this).index() != 21){
				$(ele).hover(function(){
				$('.nav2 .nav2-shop li:last-child').show();
				 x = ($(this).index()-20)*85;
				console.log(x);
				$('.nav2 .nav2-shop li:last-child').stop().animate({width:44,left:x,top:115});
				},function(){
					$('.nav2 .nav2-shop li:last-child').hide();
				});
				}
		}
			
	});




	








})