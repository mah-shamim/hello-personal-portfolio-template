/*
Author       : theme_ocean.
Template Name: Hello - Personal Portfolio Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
		jQuery(document).on('ready', function(){
		
			/*PRELOADER JS*/
			$(window).on('load', function() { 
				$('.status').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
			/*END PRELOADER JS*/

			/* START MENU TAB JS */
			jQuery('.tab-buttons li a').on('click', function(){
				var handler = jQuery(this);
				var rel = handler.data('rel');
				var parent = handler.parent();

				if(parent.hasClass('selected')){
				}else{
					
					jQuery('.tab-buttons li').removeClass('selected');
					parent.addClass('selected');

					jQuery('.tab-container > div').hide();
					jQuery('.tab-container #'+rel).slideDown(500);
				}

				return false;

			});	
			/* END MENU TAB JS */				
					
			/*START PROGRESS BAR JS*/
			$('.progress-bar > span').each(function(){
				var $this = $(this);
				var width = $(this).data('percent');
				$this.css({
					'transition' : 'width 2s'
				});
				
				setTimeout(function() {
					$this.appear(function() {
							$this.css('width', width + '%');
					});
				}, 500);
			});
			/*END PROGRESS BAR JS*/	

			/*START SKILL JS*/
			$(function() {
				$(".skill-knob").knob({
					'min':0,
					'max':100,
					'width': 150,
					'height': 150,
					'readOnly': true,
					'lineCap': 'round',
					'displayPrevious': true,
					'angleOffset': 0,
					'bgColor': '#f9f9f9',
					'fgColor': '#556df4',
					'thickness': 0.10
				});
						
				/* Skill way point */
				$('.skill-item').waypoint(function(down){
					$('.skill-knob').each(function(){
					var $skill_knob = $(this);
						
						// Check knob value
						if($skill_knob.val() == 0){
							$({value: 0}).animate({value: $skill_knob.attr("data-end")}, {
								duration: 2000,
								easing:'swing',
								step: function() 
								{
									$skill_knob.val(Math.ceil(this.value)).trigger('change');
									$skill_knob.val($skill_knob.val() + '%');
								}
							})
						}
					});
				}, { offset: '90%' });
			});	
			/*END SKILL JS*/
		
			/*START TESTIMONIAL JS*/	
			$("#testimonial-slider").owlCarousel({
			   items:3,
				itemsDesktop:[1000,3],
				itemsDesktopSmall:[980,2],
				itemsTablet:[768,2],
				itemsMobile:[650,1],
				pagination:true,
				navigation:false,
				slideSpeed:1000,
				autoPlay:false
			});
			/*END TESTIMONIAL JS*/				
	   
		});
		
})(jQuery);

