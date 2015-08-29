    var clrIntrvl;
    $(document).ready(function(){
    
        window.setTimeout(function(){$('.vinodhaImg,.anandImg').addClass("opImg");},1000);
         
    
        
       var winWidth = $(window).width();
       var idElem = 0,delElem=0,tbElem="";
       $('.rel').width($('.rel').height());
        
        $('footer.row ul li').click(function(e){
            $('footer.row ul li').removeClass("current read");
            
            $(this).addClass("current");
            $('footer.row ul li').find("i").removeClass("fa-heart");
            $('footer.row ul li').find("i").addClass("fa-heart-o");
            $(this).find("i").addClass("fa-heart");
            $(this).find("i").removeClass("fa-heart-o");
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
               
           },2000);
       
        });
