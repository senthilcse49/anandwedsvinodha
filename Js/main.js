    var clrIntrvl;
    $(document).ready(function(){
    
        window.setTimeout(function(){$('.vinodhaImg,.anandImg').addClass("opImg");},1000);
         
        
       var winWidth = $(window).width();
       var idElem = 0,delElem=0,tbElem="";
        var loc = window.location.href;
        var locArr = loc.split("#");
        if(locArr.length > 1)
            loc = locArr[1];
       fnLoadMenus(loc);
        
        $('footer.row ul li').click(function(e){
            
            $('footer.row ul li').removeClass("current read");
            var menus = $(this).find('a').attr("href");
            fnLoadMenus(menus);
            $(this).addClass("current");
            $('footer.row ul li').find("i").removeClass("fa-heart");
            $('footer.row ul li').find("i").addClass("fa-heart-o");
            $(this).find("i").addClass("fa-heart");
            $(this).find("i").removeClass("fa-heart-o");
            fnLoadMenus();
            e.stopPropagation();
        });
        
        $('footer.row ul li').mouseover(function(e){
           
           
            $(this).find("i").removeClass("fa-heart-o");
           $(this).find("i").addClass("fa-heart");
        });
        
        $('footer.row ul li').mouseout(function(e){
           if(!$(this).hasClass("current")){
               $(this).find("i").removeClass("fa-heart");
            $(this).find("i").addClass("fa-heart-o");
           }
           
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
        }
        if(!loadedMenu[menu]){
            loadedMenu[menu] = 1;
            $.get(menu+".html", function(data){
                $('#container').html(data);
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
        
        
}
