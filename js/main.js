$(document).ready(function(){
    HEAD();
    GNB();
    POP();
    SLIDE();
    TAB();
    TABMEDIA();
    TABBLOG();
    INVEST();
    FOOTERLIST();
});

function GNB(){
    $("#gnb > ul > li").mouseenter(function(){
        $(this).addClass("gnbhover");
        $("#gnbon").slideDown("fast");
        $(".lnb").slideDown();
    });
    $(".lnb").mouseleave(function(){
        $(".lnb").stop().slideUp("fast");
        $("#gnbon").stop().slideUp();
    });
}
function POP(){
    $(".whole_menu_bar").click(function(){
        $("#whole_menu_wrapper").stop().fadeIn("fast");
    });
    $(".whole_menu_pop ").click(function(){
        $("#whole_menu_wrapper").stop().fadeOut("fast");
    });
}
function HEAD(){
    $(window).scroll(function(){ 
        var scroll = $(window).scrollTop(); 
        if(scroll>1){ 
        $("header").css("background","#cccccc").addClass("fixedtop"); 
        } 
        else{ 
        $("header").css("background","#ffffff").removeClass("fixedtop"); 
            } 
        });
    };
function SLIDE(){
    $(document).ready(function(){
        $('.slider').bxSlider({
            controls: false,auto: true,pause: 3000,autoDirection: 'next',autoHover: true
        });
      });
}
function TAB(){
    $(".media_blog_name li:nth-child(1)").click(function(e){
        e.preventDefault();
        $(".video").stop().fadeIn();
        $(".blog").stop().fadeOut("fast");
        $(this).addClass(".tabon");
        $(this).next().removeClass(".tabon");
    });
    $(".media_blog_name li:nth-child(2)").click(function(e){
        e.preventDefault();
        $(".blog").stop().fadeIn();
        $(".video").stop().fadeOut("fast");
        $(this).addClass(".tabon");
        $(this).prev().removeClass(".tabon");
    });
}
function TABMEDIA(){
    $(".smallmedia").mouseenter(function(){
        $(this).children(".smallmediaHover").fadeOut();
    });
    $(".smallmedia").mouseleave(function(){
        $(this).children(".smallmediaHover").fadeIn();
    });    
}
function  TABBLOG(){
    $(".smallblog").mouseenter(function(){
        $(this).children(".smallblogHover").fadeOut();
    });
    $(".smallblog").mouseleave(function(){
        $(this).children(".smallblogHover").fadeIn();
    });
}
function INVEST(){
     $(".inverstor > ul > li").mouseenter(function(){
         $(this).children("a").find("p").fadeOut("fast");
         $(this).children(".inner").stop().animate({
             top:0
         })
     });
     $(".inverstor > ul > li").mouseleave(function(){        
        $(this).children(".inner").stop().animate({
            top:"100%"
        },function(){            
            $(this).siblings("a").find("p").fadeIn("fast");
        })
    });
}

function FOOTERLIST(){
    $(".family_site").click(function(e){
        e.preventDefault();
        $(".sitemap").animate({
            height:250,
            bottom:61,
            opacity:1
        });
    });
    $(".sitemap").mouseleave(function(e){
        e.preventDefault();
        $(".sitemap").animate({
            height:0,
            bottom:61,
            opacity:0
        });
    });
    screen.availWidth
}
