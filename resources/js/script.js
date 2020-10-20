$(document).ready(
    function () {
        $('.banner').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '30px'
        }
        )
    }
)

$(document).ready(
    function () {
        $('#story__item-1').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('#left').addClass('story__content');
                    $('#left').addClass('animationRight');
                    $('#right').addClass('story__img');
                    $('#right').addClass('animationLeft');
                    $('#right').css("opacity", "1");
                    $('#left').css("opacity", "1");
                }

            }, {
            offset: '600px'
        }
        )
    }
)
$(document).ready(
    function () {
        $('#story__item-2').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('#right-1').addClass('animationRight');
                    $('#right-1').addClass('story__img');
                    $('#right-1').css("opacity", "1");
                    $('#left-1').addClass('animationLeft');
                    $('#left-1').addClass('story__content');
                    $('#left-1').css("opacity", "1");
                }

            }, {
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
    function () {
        $('.background').waypoint(
            function (direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
            offset: '30px'
        }
        )
    }
)
$(document).ready(function () {
    /*==================================================================
        [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })
})

$('#btnLogin').click(function(event){
    // $('#btnLogin').attr("href", "#login")
    document.getElementById('login').style.visibility = 'visible';
    document.getElementById('login').style.opacity = '1';
    event.stopPropagation();
});
$(document).click(function (e) {
    var container = $(".wrap-login100");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        document.getElementById('login').style.visibility = 'hidden';
        document.getElementById('login').style.opacity = '0';
    }
});





