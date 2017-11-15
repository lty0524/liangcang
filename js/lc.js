$(function (){
	//***************************购物车的下拉列表********************************************
	$('#car').hover(function(){
		$('.hide-car').show();
		$('#car').css('background','#292f34');
	},function(){
		$('.hide-car').hide();
		$('#car').css('background','#25292e');
	});
	//消息的下拉列表
	$('#msg').hover(function(){
		$('.hide-msg').show();
		$('#msg').css('background','#292f34');
		$('.hide-msg a').each(function(){
			$('.hide-msg a').hover(function(){
				$(this).css('background','rgba(255,255,255,.1)');
				},function(){
				$(this).css('background','');	
			})
		});
	},function(){
		$('.hide-msg').hide();
		$('#msg').css('background','#25292e');
	});

	//****************************导航吸顶条*************************************************
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop)
		if(scrollTop >= 150){
			$('#top').stop(true).animate({'top':'-56px'},200);
			$('#bt a:nth-child(1)').css('display','block');
		}else{
			$('#top').stop(true).animate({'top':'0'},200);
			$('#bt a:nth-child(1)').css('display','none');
			
		}
	});

// ************************************导航选项卡********************************************* 

$('#box .nav-1>li').hover(function(){
	$(this).children().eq(1).show();
},function(){
	$(this).children().eq(1).hide();
});
$('#box .nav-1>li #show-shop li').hover(function(){
	$(this).children().eq(2).show();
	if($(this).index()>=0 && $(this).index()<=6){
		$('#box .nav-1>li #show-shop li:lt(7)').css('marginBottom',160);
	}else if($(this).index()>=7 && $(this).index()<=13){
		$('#box .nav-1>li #show-shop li:nth-child(8)').css('marginBottom',160);
		$('#box .nav-1>li #show-shop li:nth-child(9)').css('marginBottom',160);
		$('#box .nav-1>li #show-shop li:nth-child(10)').css('marginBottom',160);
		$('#box .nav-1>li #show-shop li:nth-child(11)').css('marginBottom',160);
		$('#box .nav-1>li #show-shop li:nth-child(12)').css('marginBottom',160);
		$('#box .nav-1>li #show-shop li:nth-child(13)').css('marginBottom',160);
		$('#box .nav-1>li #show-shop li:nth-child(14)').css('marginBottom',160);
	}else{
		$('#box .nav-1>li #show-shop li').css('marginBottom','');
	}
},function(){
	$(this).children().eq(2).hide();
	$('#box .nav-1>li #show-shop li').css('marginBottom','');
});

	// ****************************搜索框*****************************************************
	$('.search2').toggle(function(){
		$('.search1').stop().animate({right:0,width:230});
		$('.search1 input').focus();
	},function(){
		$('.search1').stop().animate({right:-230,width:0});

	});

	//*******************************banner轮播图***********************************************
	//下标
	var iNow = 0;
	var aLi2 = $('.ul2 li');
	//一个li的宽
	var liW = aLi2.width();
	//先设置ul的宽
	$('.ul2').width(aLi2.length * liW);

	// 定时器
	 var tid = null;

	//上一页
	$('#pre').on('click',prePage);
	//下一页
	$('#next').on('click',nextPage);
	//上一页的函数
		function prePage(){
			iNow--;
			if(iNow == -1){
				$('.ul2').stop().animate({left:-(iNow + 1) * liW},100,function (){
					$('.ul2').css('left',-(aLi2.length - 2) * liW);
				});
				iNow = aLi2.length - 3;

			}else{
				$('.ul2').stop().animate({left:-(iNow + 1) * liW},100);
			}
			$('.ul1 li').removeClass('active');
			$('.ul1 li').eq(iNow).addClass('active');
		}

		//下一页的函数
		function nextPage(){
			iNow++;
			if(iNow == aLi2.length - 2){
				$('.ul2').stop().animate({left:-(iNow + 1) * liW},100,function (){
					$('.ul2').css('left',-liW);
				});
				iNow = 0;

			}else{
				$('.ul2').stop().animate({left:-(iNow + 1) * liW},100);
			}
			//改变选项卡
			$('.ul1 li').removeClass('active');
			$('.ul1 li').eq(iNow).addClass('active');
		}
		

		//选项卡
		$('.ul1 li').click(function (){
			//改变选项卡
			//现清空所有
			$('.ul1 li').removeClass('active');
			//取得点击的那个的下标
			iNow = $(this).index();
			$('.ul1 li').eq(iNow).addClass('active');
			$('.ul2').stop().animate({left: -(iNow + 1) * liW},160);

		});

		//移入banner,出现箭头
		$('#banner').hover(function(){
			$('#pre').show();
			$('#next').show();
		},function(){
			$('#pre').hide();
			$('#next').hide();
		});

		//自动轮播
		tid = setInterval(function(){
			nextPage();
		},4000);


	//**************************人气良品的产品展示***********************************************
	$('.pic').each(function(){
		$('.pic').hover(function(){
			$(this).children().eq(1).show();
		},function(){
			$('.bg').hide();
		});
	});

	
	//*************************** our shop那个手的变化********************************************
	// $('.our-shop .top').mouseenter(function(){
	// 	$('.our-shop .top .left').animate({left:330})
	// });

	//***********************************底部*******************************************************
	//底部客户端
	$('.iPhone').hover(function(){
		$('.iPhone .tooCode').show();
	},function(){
		$('.iPhone .tooCode').hide();
	});

	//微信
	$('.share .hz').hover(function(){
		$('.share .hz .tooCode1').show();
	},function(){
		$('.share .hz .tooCode1').hide();
	});

	// 回到顶部
	$('#bt a:first-child').click(function(){
		$('html, body').animate({scrollTop:0},300);
	});















}) 
