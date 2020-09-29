$(document).ready(
    function() {
        $('.banner').waypoint(
            function(direction) {
                if(direction =="down") {
                    $('nav').addClass('sticky');
                }else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset : '30px'
            }
        )
    }   
)

$(document).ready(
    function() {
        $('.story').waypoint(
            function(direction) {
                if(direction =="down"){
                    $('#left').addClass('story__content');
                    $('#left').addClass('animationRight');
                    $('#right').addClass('story__img');
                    $('#right').addClass('animationLeft');
                    $('#right').css("opacity","1");
                    $('#left').css("opacity","1");
                }
                
            },{
                offset: '600px'
            }
        )
    }
)