
(function($) {
	
		/*====================================
					Clock Countdown
		======================================*/

		$('#clock-countdown').countdown('2017/12/16 9:00:00').on('update.countdown', function(event) {
			var $this = $(this).html(event.strftime(''
				//+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-m</div><span>Month%!m</span></div>'
				//+ '<div class="counter-box"><div class="number">%-w</div><span>week%!w</span></div>'
				
				+ '<div class="counter-container"><div class="counter-box first"><div class="number">%D</div><span>Day%!d</span></div>'
				+ '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'
				+ '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'
				+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
			));
		});

})(jQuery);