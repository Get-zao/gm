$(document).ready(function(){
//国美会员
function hide(a,b,c){
$('.top-nav'+a).mouseover(function(){
	$('.top-nav'+a+c).css('display','block');
	$('.top-nav'+a+b).css('background','#fff');
	$('.top-nav'+a+b).css('border','1px solid #E6E6E6');
	$('.top-nav'+a+b).css('border-bottom','0');
	$('.top-nav'+a+b).css('color','#e3101e');
})
$('.top-nav'+a).mouseout(function(){
	$('.top-nav'+a+c).css('display','none');
	$('.top-nav'+a+b).css('background','#F8F8F8');
	$('.top-nav'+a+b).css('border','0');
	$('.top-nav'+a+b).css('color','#888888');
})
}
hide(' .bao',' .gmhy',' .gmhy-h');hide(' .bao1',' .wdgm',' .wdgm-h');
hide(' .bao4',' .sjgm',' .sjgm-h');hide(' .bao2',' .fwzx',' .fwzx-h');
hide(' .bao3',' .wzdh',' .wzdh-h');
////国美会员轮播
//var width=240;
//$('.top-nav .bao .gmhy-h .you').click(function(){
//	$('.top-nav .bao .gmhy-h .zhong .hezi').css('left',(left-width)+'px')
//	
//})



//购物车
$('.wbox .gouwuche').mouseover(function(){
	$('.wbox .gwc-h').css('display','block');
	$('.top-nav .gouwuche').css('border','1px solid #F3F3F3');
	$('.top-nav .gouwuche').css('border-bottom','0');
	$('.top-nav .gouwuche').css('color','#e3101e');
})
$('.wbox .gouwuche').mouseout(function(){
	$('.wbox .gwc-h').css('display','none');
	$('.top-nav .gouwuche').css('border','0');
	$('.top-nav .gouwuche').css('color','#888888');
})


//banner
		var now=0;next=0;
//		var width=$('.i1').width();
	function move(){
			next=now+1;
		if(next>=$('.banner img').length){
			next=0;
		}
		$('.banner img').eq(now).animate({opacity:0},600).end().eq(next).animate({opacity:1},600).end();
	
		$('.beijing .bj').eq(now).animate({opacity:0},600).end().eq(next).animate({opacity:1},600).end();
		now=next;
		};
		var t=setInterval(move,2000);
		$('.banner').mouseover(function(){
			clearInterval(t);
		});
		$('.banner').mouseout(function(){
			t=setInterval(move,2000);
		});
		
		
		
		$('.banner-tu .you').click(function(){
			move();
		});
		$('.banner-tu .zuo').click(function(){
				next=now-1;
		if(next<0){
			next=$('.banner-tu img').length-1;
		}
			$('.banner img').eq(now).animate({opacity:0},600).end().eq(next).animate({opacity:1},600).end();
		$('.beijing .bj').eq(now).animate({opacity:0},600).end().eq(next).animate({opacity:1},600).end();
		now=next;
		});

		
		
//banner左侧隐藏

$(".banner .banner-left li").each(function(index){	
	$(this).hover(function(){
		$(".banner .banner-left li .box-h").eq(index).show();
		$(".banner .banner-left li p").eq(index).css('background','#fff');
//		$(".banner .banner-left li p a").eq(index).css('color','#333333');
	},function(){
		$(".banner .banner-left li .box-h").eq(index).hide();
		$(".banner .banner-left li p").eq(index).css('background','rgba(60,69,70,0.1)');
//		$(".banner .banner-left li p a").eq(index).css('color','#fff');
	})
})
//console.log($(".banner .banner-left li p .box-h"));




//	1F
function lou(n){

	var cil=$(n+".toplb-bot li");
	var t2=setInterval(move2,2000);
	var next4=0;
	var n1=0;
	function move2(){
		next4=n1+1;
		if(next4>=$(n+".lb1").length){
			next4=0;
		}		
		cil.eq(n1).css("background"," #3E3E3E")
		cil.eq(next4).css("background","#B61B1F")
		$(n+".lb1").eq(next4).animate({"opacity":"1"},600)
		$(n+".lb1").eq(n1).animate({"opacity":"0"},600)
		n1=next4;
	}
	$(n+'.onebulding-right').on('click',function(){
		move2();
	})
	$(n+'.onebulding-left').on('click',function(){
		next4=n1-1;
		if(next4<0){
			next4=$(".lb1").length-1;
		}		
		cil.eq(n1).css("background"," #3E3E3E")
		cil.eq(next4).css("background","#B61B1F")
		$(n+".lb1").eq(next4).animate({"opacity":"1"},600)
		$(n+".lb1").eq(n1).animate({"opacity":"0"},600)
		n1=next4;
	})
	
	$(n+".lb1").hover(function(){
		clearInterval(t2);
	},function(){
		t2=setInterval(move2,2000)
	})
	
	cil.each(function(index){
		cil.eq(index).mouseover(function(){
			$(n+".lb1").each(function(i){
				$(n+".lb1").eq(i).animate({"opacity":0},600)
				cil.eq(i).css("background"," #3E3E3E")
			})
			$(n+".lb1").eq(index).animate({"opacity":1},600)
			cil.eq(index).css("background","#B61B1F")
			n1=index;
		})
	})
	
//	1F选项卡
	var xxk=$(n+'.onebulding-top a')
	var jxrm=$(n+'.jxrm')
	xxk.each(function(i){
		xxk.eq(i).mouseover(function(){
			var index=$(n+'.onebulding-top a').index(this);
			jxrm.each(function(j){
				jxrm.removeClass('one-xian').eq(index).addClass('one-xian')
				xxk.removeClass('xz').eq(index).addClass('xz')
			})
		})
		
	})
	}
lou('.yilou ');lou('.erlou ');lou('.sanlou ');lou('.silou ');lou('.wulou ');

//楼层跳转

var nheight;
    var now;
    for (var i =0; i<$(".onebuilding").length; i++) {
        var juli=$(".onebuilding").eq(i).position();
        $(".onebuilding").eq(i).prop("h",juli.top);
    }
    $(window).on("scroll",function(){
        var top=$(window).scrollTop()
        if(top>=$(".onebuilding").first().prop("h")-1000){
            $(".guding").css("display","block")    
        }
        if(top<$(".onebuilding").first().prop("h")-1000){
            $(".guding").css("display","none")
        }
        for (var i = 0; i < $(".onebuilding").length; i++) {
            if(top>=$(".onebuilding").eq(i).prop("h")-300){
                $(".guding1").eq(i).find("a").css("color","#c00").end().siblings().find("a").css("color","")
                $(".guding1").eq(i).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
                $(".guding1").eq(i).find("b").css("display","block").end().siblings().find("b").css("display","none");
                now=i;
            }
        }
        
    })
    
        $(".guding1").on("click",function(){
            var index=$(this).index();
            
            var hh=$(".onebuilding").eq(index).prop("h")
            
            var top=$(window).scrollTop()
            var src={aa:top}
            
            $(src).animate({aa:hh},{
                duration:300,
                step:function(){
                    $(window).scrollTop(src.aa)
                }
            })
            $(this).find("a").css("color","#c00").end().siblings().find("a").css("color","")
            $(this).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
            $(this).find("b").css("display","block").end().siblings().find("b").css("display","none")
            now=index;
        })


        $(".guding1").hover(function(){
            $(this).find("a").css("color","#c00")
            $(this).find("span").css("color","#c00")
            $(this).find("b").css("display","block")
        },function(){
            if($(this).index()==now){
                return;
            }
            $(this).find("a").css("color","")
            $(this).find("span").css("color","#666")
            $(this).find("b").css("display","none")
        })  

		$(".guding .guding2 .dingbu").click(function () {
		$("body,html").animate({ scrollTop: 0 },600);
		});
		$(".guding .guding2 .dibu").click(function () {
		$("body,html").animate({ scrollTop: $("body").height() },600);
		});




	//右侧定位
		jQuery(".guess3 a").hover(function(){
			jQuery(".guess3 .ewm").stop(true)
			jQuery(".guess3 .ewm").delay(200).animate({left:-140},400)
			jQuery(".guess3 em").show()
		},function(){
			jQuery(".guess3 .ewm").animate({left:35},200)
			jQuery(".guess3 em").hide()
			
		})
		jQuery(".guess4 ").hover(function(){
			jQuery(".guess4 .xbdy").stop(true)
			jQuery(".guess4 .xbdy").delay(200).animate({right:35},400)
			jQuery(".guess4 em").show()
			
		},function(){
			jQuery(".guess4 .xbdy").delay(200).animate({right:-81},400)
			jQuery(" .guess4 em").hide()
		})
		jQuery(".guess5 ").hover(function(){
			jQuery(".guess5 .xbdy").stop(true)
			jQuery(".guess5 .xbdy").delay(200).animate({right:35},400)
			jQuery(".guess5 em").show()
		},function(){
			jQuery(".guess5 .xbdy").delay(200).animate({right:-81},400)
			jQuery(".guess5 em").hide()
		})
})
		

