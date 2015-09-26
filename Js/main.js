    var clrIntrvl,videoRm = false;
    $(document).ready(function(){
    
        window.setTimeout(function(){$('.vinodhaImg,.anandImg').addClass("opImg");},1000);
         
        
       var winWidth = $(window).width();
       var idElem = 0,delElem=0,tbElem="";
        var loc = window.location.href;
        var locArr = loc.split("#");
        if(locArr.length > 1){
            loc = locArr[1];
            if(loc == "Home")
                loadedMenu["home"] =1;
            
                fnLoadMenus(loc);
        }
        else{
            loc = "Home";
            loadedMenu["home"] =1;
        }
        
        
       
        
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
            case "Contactus":
                menu = "contactus"
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
            if(menu == "home"){
                if($('#home').length == 0){
                 loadedMenu[home] = 0;
                  fnLoadMenus(menu);
                    return;
                }
            }
            if(menu == "story"){
                if(timeOutInterval)
                    clearInterval(timeOutInterval);
                $('.storyImg').attr("src","images/story1.png");
                stroryNo = 1;
                $('.storyImg').addClass("animate");
                clearTimeout(clearTime);
                startStorySlide();
            }
            if(menu == "photos"){
                  blueimp.Gallery($('#links a'), {
        
                        slideshowInterval: 2000,
                        carousel: true
                    });
    
            }
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



var mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}