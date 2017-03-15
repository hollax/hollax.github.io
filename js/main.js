jQuery(function($) {
        // progress bars
            let lPhp = $('#l-php').progressbarManager({ totalValue : 100, initValue : 0, animate : true , stripe : true });
            let lCSharp = $('#l-csharp').progressbarManager({ totalValue : 100, initValue : 0, animate : true , stripe : true });
            let lPython = $('#l-python').progressbarManager({ totalValue : 100, initValue : 0, animate : true , stripe : true });
            let lJava = $('#l-java').progressbarManager({ totalValue : 100, initValue : 0, animate : true , stripe : true });
            let lJs = $('#l-js').progressbarManager({ totalValue : 100, initValue : 0, animate : true , stripe : true });
            let lCss = $('#l-css').progressbarManager({ totalValue : 100, initValue : 0, animate : true , stripe : true });
            
            
         function refreshProgress(){
           var val = 0;
           
            lPhp.setValue(0).style('success');
            lCSharp.setValue(0).style('danger');
            lPython.setValue(0).style('warning');
            lJava.setValue(0).style('success');
            lJs.setValue(0).style('danger');
            lCss.setValue(0).style('success');
            
            setTimeout(function(){
                lPhp.setValue(0).setValue(50).setValue(100);
                lCSharp.setValue(0).setValue(85);
                lPython.setValue(0).setValue(80);
                lJava.setValue(0).setValue(75);
                lJs.setValue(0).setValue(98);
                lCss.setValue(0).setValue(100);
            },1000);
        }
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

	//Ajax contact
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
                
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
               
            $spy.on('activate.bs.scrollspy' , function(e){
                var a  = $(e.target).children('a');
                var hash = a.attr('href');
                // if its languages
                if(hash == '#languages'){
                    refreshProgress();
                }
               
            });

	})

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});

	//Isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
});