    var clrIntrvl,videoRm = false;
    $(document).ready(function(){
    
        window.setTimeout(function(){$('.vinodhaImg,.anandImg').addClass("opImg");},1000);
         
        
       var winWidth = $(window).width();
       var idElem = 0,delElem=0,tbElem="";
        var loc = window.location.href;
        var locArr = loc.split("#");
        if(locArr.length > 1)
            loc = locArr[1];
       fnLoadMenus(loc);
        
        $('footer.row.desktopMenu ul li').click(function(e){
            
            $('footer.row.desktopMenu ul li').removeClass("current read");
            var menus = $(this).find('a').attr("href");
            menus = menus.replace("#","");
            fnLoadMenus(menus);
            $(this).addClass("current");
            $('footer.row.desktopMenu ul li').find("i").removeClass("fa-heart");
            $('footer.row.desktopMenu ul li').find("i").addClass("fa-heart-o");
            $(this).find("i").addClass("fa-heart");
            $(this).find("i").removeClass("fa-heart-o");
            
            e.stopPropagation();
        });
        
        $('footer.row.desktopMenu ul li').mouseover(function(e){
           
           
            $(this).find("i").removeClass("fa-heart-o");
           $(this).find("i").addClass("fa-heart");
        });
        
        $('footer.row.desktopMenu ul li').mouseout(function(e){
           if(!$(this).hasClass("current")){
               $(this).find("i").removeClass("fa-heart");
            $(this).find("i").addClass("fa-heart-o");
           }
           
        });
        
        
        $('footer.row.mobileMenu i ,footer.row.mobileMenu .mobileCurrMenu ').click(function(e){
            
            $('footer.mobileMenu').addClass("menuOpen");
        });
        
        $('footer.row.mobileMenu li ').click(function(e){
            var menus = $(this).find('a').attr("href");
            menus = menus.replace("#","");
            fnLoadMenus(menus);
            $('footer.mobileMenu').removeClass("menuOpen");
            
        });
        
        window.setInterval(function(){
               var decWidth = Math.random() * winWidth;
              
                $('body').append('<div class="decorator" id = "dec'+idElem+'"style="left:'+decWidth+'px"><i class="fa fa-heart" ></div>');
              
               setTimeout(function(){
                   
                   $('#dec'+delElem).remove();
                   delElem++;
               },4500);
               idElem++;
               
           },1000);
       
        });
var loadedMenu = {}
function fnLoadMenus(loc){
        var menu = "home";
        $('.content').hide();
        switch(loc){
            case "Story":
                menu = "story";
                break;
            case "Videos":
                menu="videos";
                break;
            case "Photos":
                menu ="photos";
                break;
            case "Events":
                menu ="events";
                break;    
        }
        $('.desktopMenu li').removeClass("current");
    $('.desktopMenu li a i').attr("class","fa fa-heart-o ");
    
    
        $('.desktopMenu li.'+menu+"Li").addClass("current").find("i").removeClass("fa-heart-o").addClass("fa-heart");
    
        changeMenuMob(menu,loc);
    if(menu != "videos")
        videoOff();
    else{
        videoOn();
    }
        if(!loadedMenu[menu]){
            loadedMenu[menu] = 1;
            $.get(menu+".html", function(data){
                $('.page').hide();
                
            
                $('#container').append(data);
                $('.rel').width($('.rel').height());
                if(menu === "story"){
                    //alert($('#story .current img ').get(0))
                    $('#story .current img ').addClass("animate");   
                    $('.yearLi').click(function(){
                       $('.yearLi').removeClass("current")
                       $(this).addClass("current");
                        var yearId = $(this).attr("id");
                        $('#story .year.animate img').removeClass("animate");
                        $('.year ').removeClass("current");
                        $('.year.'+yearId).addClass("current").find("img").addClass("animate");
                    });
                }
            });
        }    
    
        else{
            $('.page').hide();
            $('#'+menu).show();
        }
        
        
}

function changeMenuMob(menu,loc){
    //alert(menu+"  "+loc);
    $('.mobileMenu .mobileCurrMenu').html(loc);
    $('.mobileMenu li').removeClass("current");
    $('.mobileMenu li.'+menu+"Li").addClass("current");
}

function videoOff(){
    if($('#bgvid').length > 0){
        $('#bgvid').remove();
        videoRm = true;
    }
}
function videoOn(){
    if(videoRm){
        $('#videos').html('<object id="bgvid"/>')
        $('#bgvid').attr("data","https://www.youtube.com/v/SQiZM6N1vNA?autoplay=1&controls=0&loop=1&playlist=SQiZM6N1vNA");
    }
}