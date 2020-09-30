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
        $('#story__item-1').waypoint(
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
$(document).ready(
    function() {
        $('#story__item-2').waypoint(
            function(direction) {
                if(direction =="down"){
                    $('#right-1').addClass('animationRight');
                    $('#right-1').addClass('story__img');
                    $('#right-1').css("opacity","1");
                    $('#left-1').addClass('animationLeft');
                    $('#left-1').addClass('story__content');
                    $('#left-1').css("opacity","1");
                }
                
            },{
                offset: '600px'
            }
        )
    }
)

// $(document).ready(
//     function() {
//         $('.story-background').waypoint(
//             function(direction) {
//                 if(direction =="down"){
//                     $('.story-background__caption').addClass('bound');
//                 }
                
//             },{
//                 offset: '600px'
//             }
//         )
//     }
// )

$(document).ready(
    function() {
        $('.background').waypoint(
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