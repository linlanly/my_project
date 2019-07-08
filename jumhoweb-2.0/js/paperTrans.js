/*卡片动画参数*/

//scripts
			$(document).ready(function() {
				//init slider 1
				var defaults = {
						speed: 500,
						timer: 8000,
						autoSlider: true,
						hasNav: true,
						pauseOnHover: true,
						navLeftTxt: '&lt;',
						navRightTxt: '&gt;',
						zIndex: 20,
						ease: 'linear',
						beforeAction: function() {
							//this refers to DS instance
							this.t.css({
								background: '#08c'
							})
						},
						afterAction: function() {
							this.t.css({
								background: '#eee'
							})
							//this refers to DS instance
						}
					},
					as = $('#papers1').paperSlider(defaults),
					count = 2

				//destroy
				$('#o-btn-des').click(function() {
					as.destroy()
				})

				//resize wrapper
				$('#o-btn-cs').click(function() {
					$('#papers1').css('width', 600)
				})

				//resize wrapper
				$('#o-btn-ns').click(function() {
					var t = '<div class="papers-demo mgtb" id="papers' + ++count + '">' +
						($('#papers1 .paper-slides').length ? $('#papers1 .paper-slides').html() : $('#papers1').html()) +
						'</div>'
					$('#wrapper').append(t)
					$('#papers' + count).paperSlider(defaults)
				})
			})