var owl_carousel_custom = {
    init: function() {
        $('#owl-carousel-1').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }), $('#owl-carousel-1-rtl').owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }), $('#owl-carousel-2').owlCarousel({
            loop:true,
            margin:10,
            items:5,
            nav:false,
            responsive : {
                576 : {
                    items:1
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        }), $('#owl-carousel-2-rtl').owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            items:5,
            nav:false,
            responsive : {
                576 : {
                    items:1
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        }), $('#owl-carousel-3').owlCarousel({
            center: true,
            items:5,
            loop:true,
            margin:10,
            nav: false,
            responsive:{
                576 : {
                    items:1
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        }),$('#owl-carousel-3-rtl').owlCarousel({
            rtl:true,
            center: true,
            items:5,
            loop:true,
            margin:10,
            nav: false,
            responsive:{
                576 : {
                    items:1
                },
                768 : {
                    items:2
                },
                992 : {
                    items:3
                }
            }
        }), $('#owl-carousel-4').owlCarousel({
            items:5,
            loop:true,
            margin:10,
            merge:true,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }), $('#owl-carousel-4-rtl').owlCarousel({
            rtl:true,
            items:5,
            loop:true,
            margin:10,
            merge:true,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }),$('#owl-carousel-5').owlCarousel({
            margin:10,
            loop:true,
            autoWidth:true,
            items:5,
            nav: false
        }),
            $('#owl-carousel-5-rtl').owlCarousel({
                rtl:true,
                margin:10,
                loop:true,
                autoWidth:true,
                items:5,
                nav: false
            }),
            $('#owl-carousel-6').owlCarousel({
                items:5,
                loop:false,
                center:true,
                margin:10,
                URLhashListener:true,
                autoplayHoverPause:true,
                startPosition: 'URLHash',
                nav: false,
                responsive:{
                    576 : {
                        items:1,
                        mergeFit:true
                    },
                    768 : {
                        items:2,
                        mergeFit:true
                    },
                    992 : {
                        items:3,
                        mergeFit:true

                    }
                }

            }),
            $('#owl-carousel-6-rtl').owlCarousel({
                rtl:true,
                items:5,
                loop:false,
                center:true,
                margin:10,
                URLhashListener:true,
                autoplayHoverPause:true,
                startPosition: 'URLHash',
                nav: false,
                responsive:{
                    576 : {
                        items:1,
                        mergeFit:true
                    },
                    768 : {
                        items:2,
                        mergeFit:true
                    },
                    992 : {
                        items:3,
                        mergeFit:true

                    }
                }

            }),
            $('#owl-carousel-7').owlCarousel({
                stagePadding: 50,
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    576 : {
                        items:1,
                        mergeFit:true
                    },
                    768 : {
                        items:2,
                        mergeFit:true
                    },
                    992 : {
                        items:3,
                        mergeFit:true

                    }
                }
            }),
            $('#owl-carousel-7-rtl').owlCarousel({
                rtl:true,
                stagePadding: 50,
                loop:true,
                margin:10,
                nav:false,
                responsive:{
                    576 : {
                        items:1,
                        mergeFit:true
                    },
                    768 : {
                        items:2,
                        mergeFit:true
                    },
                    992 : {
                        items:3,
                        mergeFit:true

                    }
                }
            }),$('#owl-carousel-8').owlCarousel({
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }),$('#owl-carousel-8-rtl').owlCarousel({
            rtl:true,
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }), $('#owl-carousel-9').owlCarousel({
            rtl:true,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }), $('#owl-carousel-9-rtl').owlCarousel({
            rtl:true,
            rtl:true,
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }), $('#owl-carousel-10').owlCarousel({
            items:5,
            lazyLoad:true,
            loop:true,
            margin:5,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }), $('#owl-carousel-10-rtl').owlCarousel({
            rtl:true,
            items:5,
            lazyLoad:true,
            loop:true,
            margin:5,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }), $('#owl-carousel-12').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:5,
            margin:30,
            stagePadding:30,
            smartSpeed:450,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }); $('#owl-carousel-12-rtl').owlCarousel({
            rtl:true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:5,
            margin:30,
            stagePadding:30,
            smartSpeed:450,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        });
        var owl = $('#owl-carousel-13');
        owl.owlCarousel({
            items:5,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }),
            $('.play').on('click',function(){
                owl.trigger('play.owl.autoplay',[1000])
            }), $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        }), $('#owl-carousel-14').owlCarousel({
            items:1,
            margin:10,
            autoHeight:true,
            nav: false
        });
        var owl1 = $('#owl-carousel-13-rtl');
        owl1.owlCarousel({
            rtl:true,
            items:5,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            nav: false,
            responsive:{
                576 : {
                    items:1,
                    mergeFit:true
                },
                768 : {
                    items:2,
                    mergeFit:true
                },
                992 : {
                    items:3,
                    mergeFit:true

                }
            }
        }),
            $('.play').on('click',function(){
                owl.trigger('play.owl1.autoplay',[1000])
            }), $('.stop').on('click',function(){
            owl.trigger('stop.owl1.autoplay')
        }), $('#owl-carousel-14-rtl').owlCarousel({
            rtl:true,
            items:1,
            margin:10,
            autoHeight:true,
            nav: false
        });
        var owl = $('#owl-carousel-15');
        owl.owlCarousel({
            loop:true,
            nav:false,
            margin:10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                960:{
                    items:5
                },
                1200:{
                    items:5
                }
            }
        }), owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        var owl1 = $('#owl-carousel-15-rtl');
        owl1.owlCarousel({
            rtl:true,
            loop:true,
            nav:false,
            margin:10,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                960:{
                    items:5
                },
                1200:{
                    items:5
                }
            }
        }), owl1.on('mousewheel', '.owl1-stage', function (e) {
            if (e.deltaY>0) {
                owl1.trigger('next.owl1');
            } else {
                owl1.trigger('prev.owl1');
            }
            e.preventDefault();
        });
    }
};

jQuery(document).ready(function() {
    owl_carousel_custom.init();
});