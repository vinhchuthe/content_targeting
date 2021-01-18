// scroll top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// ------ particlesJS --------
particlesJS('particles-js0',
    {
        "particles": {
            "number": {
                "value": 6,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 7,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

particlesJS('particles-js1',
    {
        "particles": {
            "number": {
                "value": 4,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type": "edge",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "top",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

particlesJS('particles-js2',
    {
        "particles": {
            "number": {
                "value": 6,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type": "triangle",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 7,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

particlesJS('particles-js3',
    {
        "particles": {
            "number": {
                "value": 10,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#1b1e34"
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "assets/img/icon/stroke.png",
                    "width": 30,
                    "height": 30
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 8,
                "direction": "top-right",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

particlesJS('particles-js4',
    {
        "particles": {
            "number": {
                "value": 6,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 7,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 8,
                "direction": "top",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);

// ------------- NiceScroll -----------------
$("body").niceScroll({
    cursorcolor: '#2128bd',
    scrollspeed: '80',
    mousescrollstep: 20,
});

// -------------- Popup ----------------------

// Open Popup
$(".chart-box").click(function () {
    var popup_id = $(this).attr("data-id");
    $("#" + popup_id).addClass("active");
    $("#dialog").addClass("active");
    // disable page scroll
    $('body').on('wheel.modal mousewheel.modal', function () {
        return false;
    })
});

// Demo Validate
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(number) {
    var phoneno1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phoneno2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (number.match(phoneno1) || number.match(phoneno2)) {
        return true;
    } else {
        return false;
    }
}

// Contact Popup
$(".btn_sign").click(function () {
    var popup = $(this).attr("btn-id");
    $("#" + popup).addClass("active");
    $("#dialog").addClass("active");
    // disable page scroll
    $('body').on('wheel.modal mousewheel.modal', function () {
        return false;
    })
});

$('input[type="email"]').change(function () {
    var email = $(this).val();
    if (validateEmail(email)) {
        console.log("email validated");
        $(this).parent(".form-group").find(".icon").addClass("icon-check");
        return true;
    } else {
        console.log("email not validated");
        return false;
    }
})
$('input[type="text"]').change(function () {
    var phone = $(this).val();
    if (validatePhone(phone)) {
        console.log("phone validated");
        $(this).parent(".form-group").find(".icon").addClass("icon-check");
        return true;
    } else {
        console.log("phone not validated");
        return false;
    }
})
$('input').keyup(function (e) {
    if (e.which === 13) {
        e.preventDefault();
        // $('#regForm').submit();
        dataCheck();
    }
});

function dataCheck() {
    var email = $('input[type="email"]').val(),
        phone = $('input[type="text"]').val();

    if (validateEmail(email) && validatePhone(phone)) {
        console.log("form validated");
        $(".form-group .overlay").addClass("is-done");

    } else {
        console.log("form not validated");
    }
}


$(".chart-box").on("mouseenter", function () {
    TweenMax.to($(this), 0.5, { scale: 1.05, transformOrigin: "50% 50%" });
});

$(".chart-box").on("mouseleave", function () {
    TweenMax.to($(this), 0.5, { scale: 1, transformOrigin: "50% 50%" });
});

// Close Popup
$(".popup-close").click(function () {
    $("#dialog").removeClass("active");
    $(".popup-box").removeClass("active");
    // enable page scroll
    $('body').off('wheel.modal mousewheel.modal');
})

// -------------- Profile ----------------------

// Range Slider
var valMap = ["1k", "2k", "5k", "10k", "15k", "20k"];
var rng = document.getElementById("rng");
var ro = document.getElementById("tip");
var tooltip = document.getElementById("tooltip");
var prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];


function updateRange() {
    var num = rng.value,
        tab;
    ro.textContent = valMap[parseInt(rng.value, 10)];
    // console.log("Selected value is: " + valMap[parseInt(rng.value, 10)] + ", Associated value is: " + rng.value);

    if (num == 0) {
        tab = "tab4";
        $(".pricePlan--header-title").removeClass("header-active");
        $(".tab-content").removeClass("tab-active");
        $("#tab-header4").addClass("header-active");
        $("#tab4").addClass("tab-active");
        // console.log(tab);
    } else if (num == 1) {
        tab = "tab4";
        $(".pricePlan--header-title").removeClass("header-active");
        $(".tab-content").removeClass("tab-active");
        $("#tab-header4").addClass("header-active");
        $("#tab4").addClass("tab-active");
        // console.log(tab);
    } else if (num == 2) {
        tab = "tab1";
        $(".pricePlan--header-title").removeClass("header-active");
        $(".tab-content").removeClass("tab-active");
        $("#tab-header1").addClass("header-active");
        $("#tab1").addClass("tab-active");
        // console.log(tab);
    } else if (num == 3) {
        tab = "tab2";
        $(".pricePlan--header-title").removeClass("header-active");
        $(".tab-content").removeClass("tab-active");
        $("#tab-header2").addClass("header-active");
        $("#tab2").addClass("tab-active");
        // console.log(tab);
    } else if (num == 4) {
        tab = "tab3";
        $(".pricePlan--header-title").removeClass("header-active");
        $(".tab-content").removeClass("tab-active");
        $("#tab-header3").addClass("header-active");
        $("#tab3").addClass("tab-active");
        // console.log(tab);
    } else if (num == 5) {
        tab = "tab4";
        $(".pricePlan--header-title").removeClass("header-active");
        $(".tab-content").removeClass("tab-active");
        $("#tab-header4").addClass("header-active");
        $("#tab4").addClass("tab-active");
        // console.log(tab);
    }

}

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    // bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

function grad() {
    var bval = parseInt(rng.value, 10);
    var pos = (bval - rng.getAttribute('min')) / (rng.getAttribute('max') - rng.getAttribute('min'));
    pos = Math.round(pos * 99);
    var grad = 'linear-gradient(90deg, #FFEB3B ' + pos + '%,#929496 ' + (pos + 1) + '%)';
    rng.style.background = grad;
}


window.addEventListener("DOMContentLoaded", updateRange);
rng.addEventListener("input", updateRange);
rng.addEventListener("input", () => {
    setBubble(rng, tooltip);
});
rng.addEventListener("input", grad);

// Tab
$(".pricePlan--header-title").click(function () {
    var tab = $(this).attr("title-id");
    $("#rng").val($(this).attr("range"));
    updateRange();
    setBubble(rng, tooltip);
    grad();
    $(".pricePlan--header-title").removeClass("header-active");
    $(this).addClass("header-active");
    $(".tab-content").removeClass("tab-active");
    $("#" + tab).addClass("tab-active");
    $("#plan-user").val($(this).attr("range"));
});

// ------------------ Scroll ---------------------
var controller = new ScrollMagic.Controller();

var wipe = new TimelineMax().fromTo("#scroll .content-scroll-body", 1, { x: 0 }, { x: "-100%", ease: Linear.easeNone });


var blockScroll = new ScrollMagic.Scene({
    triggerElement: "#scroll",
    duration: "100%",
    triggerHook: "onLeave",
})
    .setPin("#scroll")
    .setTween(wipe)
    .addTo(controller);

// Cursor
const link = document.querySelectorAll('.content-scroll-body > .scroll-body-item');
const cursor = document.getElementById('scrollTip');

const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
};

link.forEach(b => b.addEventListener('mouseenter', function (e) {
    const img_link = b.getAttribute("hover-img");
    cursor.style.backgroundImage = "url(" + "'" + img_link + "'" + ")";
}));
link.forEach(b => b.addEventListener('mouseleave', function (e) {
    cursor.style.backgroundImage = "url()";
}));
window.addEventListener('mousemove', editCursor);


// ------------------- banner ---------------------

var circle = $(".header-shape-item");

function moveCircle(e) {
    TweenMax.staggerTo(circle, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY - 250
        }
    }, 0.1);
}

$("#banner").on('mousemove', moveCircle);


// ------------------- feature ----------------------
$(".grid-list-item").on("mouseenter", function () {
    if ($(this).hasClass("item-active")) {
        console.log("already active");
    } else {
        $(".grid-list-item").removeClass("item-active");
        $(this).addClass("item-active");
        var feature_img = $(this).attr("data-id");
        $("#fgrid-img img").addClass("hide-img");
        setTimeout(function () {
            $("#fgrid-img img").attr("src", feature_img);
        }, 400);
        setTimeout(function () {
            $("#fgrid-img img").removeClass("hide-img");
        }, 600);

    }
});


// ----------------------- Menu -----------------------
$(".navbar-item-link").click(function () {
    $(".sub-menu").toggleClass("active");
});

$(window).scroll(function () {
    scrollTarget();
})

function scrollTarget() {
    //get current sroll position
    var scrollPosition = $(window).scrollTop();
    //get the position of the containers
    var banner = $("#banner").offset().top,
        issue = $("#issue").offset().top,
        scroll = $("#scroll").offset().top,
        feature = $("#feature").offset().top,
        baogia = $("#profile").offset().top;

    if (scrollPosition >= banner) {
        $(".navbar-item-link").html("Content Targeting");
        $(".sub-menu-item").siblings().removeClass("hide-sub");
    }
    if (scrollPosition >= issue) {
        $(".navbar-item-link").html("Vấn đề");
        $(".sub-menu-item").siblings().removeClass("hide-sub");
        $("#sub-menu1").addClass("hide-sub");
    }
    if (scrollPosition >= scroll) {
        $(".navbar-item-link").html("Giải pháp");
        $(".sub-menu-item").siblings().removeClass("hide-sub");
        $("#sub-menu2").addClass("hide-sub");
    }
    if (scrollPosition >= feature) {
        $(".navbar-item-link").html("Điểm nổi bật");
        $(".sub-menu-item").siblings().removeClass("hide-sub");
        $("#sub-menu3").addClass("hide-sub");
    }
    if (scrollPosition >= baogia) {
        $(".navbar-item-link").html("Báo giá");
        $(".sub-menu-item").siblings().removeClass("hide-sub");
        $("#sub-menu4").addClass("hide-sub");
    }
}

var nav_link = $(".sub-menu-item-link");
$(".sub-menu-item-link").on("click", function () {
    var href = $(this).attr("href");
    topY = $(href).offset().top;
    if ($(".sub-menu").hasClass("active")) {
        $(".sub-menu").removeClass("active");
    }
    if ($(window).width() < 767) {

        TweenMax.to($(window), 1, {
            scrollTo: {
                y: topY - 30,
                autoKill: true
            },
            ease: Power3.easeOut
        })

    } else {
        TweenMax.to($(window), 1, {
            scrollTo: {
                y: topY + 5,
                autoKill: true
            },
            ease: Power3.easeOut
        })
    }

    return false;
});


// --------------- Mobile ------------------
$(window).on("load", function () {
    var width = $(window).width();
    if (width <= 767) {

        // Nicescroll
        $("body").getNiceScroll().remove();

        // Scroll section
        controller.destroy(true);
        blockScroll.destroy(true);

        // disable window scroll event handler
        $(window).unbind("scroll");

        // header
        $(".header-mb-button").click(function () {
            $("#nav-menu").toggleClass("mb-open-menu");
        });
        $(".sub-menu-item-link").on("click", function () {
            $("#nav-menu").removeClass("mb-open-menu");
        });

        // ------------ feature --------------

        // Feature top
        $(".grid-list").slick({
            // arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        })
        $(".grid-list").on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $(".grid-list-item").removeClass("item-active");
            $("#mb-slick" + currentSlide).addClass("item-active");
            var img = $("#mb-slick" + currentSlide).attr("data-id");
            $("#fgrid-img img").addClass("hide-img");
            setTimeout(function () {
                $("#fgrid-img img").attr("src", img);
            }, 400);
            setTimeout(function () {
                $("#fgrid-img img").removeClass("hide-img");
            }, 600);
        });

        // Feature bot
        $(".popup-slide-content").slick({
            speed: 1000,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        })

        // ------------- Profile ---------------
        $("#plan-user").on('change', function () {
            var val = $(this).val();
            if (val == 0) {
                tab = "tab4";
                $(".pricePlan--header-title").removeClass("header-active");
                $(".tab-content").removeClass("tab-active");
                $("#tab-header4").addClass("header-active");
                $("#tab4").addClass("tab-active");
                // console.log(tab);
            } else if (val == 1) {
                tab = "tab4";
                $(".pricePlan--header-title").removeClass("header-active");
                $(".tab-content").removeClass("tab-active");
                $("#tab-header4").addClass("header-active");
                $("#tab4").addClass("tab-active");
                // console.log(tab);
            } else if (val == 2) {
                tab = "tab1";
                $(".pricePlan--header-title").removeClass("header-active");
                $(".tab-content").removeClass("tab-active");
                $("#tab-header1").addClass("header-active");
                $("#tab1").addClass("tab-active");
                // console.log(tab);
            } else if (val == 3) {
                tab = "tab2";
                $(".pricePlan--header-title").removeClass("header-active");
                $(".tab-content").removeClass("tab-active");
                $("#tab-header2").addClass("header-active");
                $("#tab2").addClass("tab-active");
                // console.log(tab);
            } else if (val == 4) {
                tab = "tab3";
                $(".pricePlan--header-title").removeClass("header-active");
                $(".tab-content").removeClass("tab-active");
                $("#tab-header3").addClass("header-active");
                $("#tab3").addClass("tab-active");
                // console.log(tab);
            } else if (val == 5) {
                tab = "tab4";
                $(".pricePlan--header-title").removeClass("header-active");
                $(".tab-content").removeClass("tab-active");
                $("#tab-header4").addClass("header-active");
                $("#tab4").addClass("tab-active");
                // console.log(tab);
            }
        });


    }
});