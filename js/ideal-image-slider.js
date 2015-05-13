/*
 * Ideal Image Slider v1.4.0
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2014 Dev7studios
 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
 */

// 'Cuts the mustard' test
if ( 'querySelector' in document && 'addEventListener' in window ) {

	var IdealImageSlider = (function() {
		"use strict";

		/*
		 * Helper functions
		 */
		var _deepExtend = function(out) {
			out = out || {};
			for(var i = 1; i < arguments.length; i++){
				var obj = arguments[i];
				if(!obj)
					continue;
				for(var key in obj){
					if(obj.hasOwnProperty(key)){
						if(typeof obj[key] === 'object' && obj[key] !== null)
							deepExtend(out[key], obj[key]);
						else
							out[key] = obj[key];
					}
				}
			}
			return out;
		};

		var _hasClass = function(el, className) {
			if(!className) return false;
			if(el.classList){
				return el.classList.contains(className);
			} else {
				return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
			}
		};

		var _addClass = function(el, className) {
			if(!className) return;
			if(el.classList){
				el.classList.add(className);
			} else {
				el.className += ' ' + className;
			}
		};

		var _removeClass = function(el, className) {
			if(!className) return;
			if(el.classList){
				el.classList.remove(className);
			} else {
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};

		var _toArray = function(obj) {
			return Array.prototype.slice.call(obj);
		};

		var _arrayRemove = function(array, from, to) {
			var rest = array.slice((to || from) + 1 || array.length);
			array.length = from < 0 ? array.length + from : from;
			return array.push.apply(array, rest);
		};

		var _loadImg = function(slide, callback) {
			if(!slide.style.backgroundImage){
				var img = new Image();
				img.setAttribute('src', slide.getAttribute('data-src'));
				img.onload = function() {
					slide.style.backgroundImage = 'url('+ slide.getAttribute('data-src') +')';
					if(typeof(callback) === 'function') callback(this);
				};
			}
		};

		var _isHighDPI = function() {
		    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";
		    if (window.devicePixelRatio > 1)
		        return true;
		    if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		        return true;
		    return false;
		};

		var _translate = function(slide, dist, speed) {
			slide.style.webkitTransitionDuration =
			slide.style.MozTransitionDuration =
			slide.style.msTransitionDuration =
			slide.style.OTransitionDuration =
			slide.style.transitionDuration = speed + 'ms';

			slide.style.webkitTransform =
			slide.style.MozTransform =
			slide.style.msTransform =
			slide.style.OTransform = 'translateX('+ dist +'px)';
		};

		var _unTranslate = function(slide) {
			slide.style.removeProperty('-webkit-transition-duration');
			slide.style.removeProperty('transition-duration');

			slide.style.removeProperty('-webkit-transform');
			slide.style.removeProperty('-ms-transform');
			slide.style.removeProperty('transform');
		};

		var _touch = {
			vars: {
				start: {},
				delta: {},
				isScrolling: undefined,
				direction: null
			},
			start: function(event) {
				if(_hasClass(this._attributes.container, this.settings.classes.animating)) return;

				var touches = event.touches[0];
				_touch.vars.start = {
					x: touches.pageX,
					y: touches.pageY,
					time: +new Date()
				};
				_touch.vars.delta = {};
				_touch.vars.isScrolling = undefined;
				_touch.vars.direction = null;

				this.stop(); // Stop slider

				this.settings.beforeChange.apply(this);
				_addClass(this._attributes.container, this.settings.classes.touching);
			},
			move: function(event) {
				if(_hasClass(this._attributes.container, this.settings.classes.animating)) return;
				// Ensure swiping with one touch and not pinching
				if(event.touches.length > 1 || event.scale && event.scale !== 1) return;

				var touches = event.touches[0];
				_touch.vars.delta = {
					x: touches.pageX - _touch.vars.start.x,
					y: touches.pageY - _touch.vars.start.y
				};

				if(typeof _touch.vars.isScrolling == 'undefined'){
					_touch.vars.isScrolling = !!(_touch.vars.isScrolling || Math.abs(_touch.vars.delta.x) < Math.abs(_touch.vars.delta.y));
				}

				// If user is not trying to scroll vertically
				if (!_touch.vars.isScrolling) {
					event.preventDefault(); // Prevent native scrolling

					_translate(this._attributes.previousSlide, _touch.vars.delta.x - this._attributes.previousSlide.offsetWidth, 0);
					_translate(this._attributes.currentSlide, _touch.vars.delta.x, 0);
					_translate(this._attributes.nextSlide, _touch.vars.delta.x + this._attributes.currentSlide.offsetWidth, 0);
				}
			},
			end: function(event) {
				if(_hasClass(this._attributes.container, this.settings.classes.animating)) return;

				var duration = +new Date() - _touch.vars.start.time;

				// Determine if slide attempt triggers next/prev slide
				var isChangeSlide = Number(duration) < 250 && Math.abs(_touch.vars.delta.x) > 20 || Math.abs(_touch.vars.delta.x) > this._attributes.currentSlide.offsetWidth/2;

				var direction = _touch.vars.delta.x < 0 ? 'next' : 'previous';
				var speed = this.settings.transitionDuration ? this.settings.transitionDuration/2 : 0;

				// If not scrolling vertically
				if(!_touch.vars.isScrolling){
					if(isChangeSlide){
						_touch.vars.direction = direction;

						if(_touch.vars.direction == 'next'){
							_translate(this._attributes.currentSlide, -this._attributes.currentSlide.offsetWidth, speed);
							_translate(this._attributes.nextSlide, 0, speed);
						} else {
							_translate(this._attributes.previousSlide, 0, speed);
							_translate(this._attributes.currentSlide, this._attributes.currentSlide.offsetWidth, speed);
						}

						setTimeout(_touch.transitionEnd.bind(this), speed);
					} else {
						// Slides return to original position
						if(direction == 'next'){
							_translate(this._attributes.currentSlide, 0, speed);
							_translate(this._attributes.nextSlide, this._attributes.currentSlide.offsetWidth, speed);
						} else {
							_translate(this._attributes.previousSlide, -this._attributes.previousSlide.offsetWidth, speed);
							_translate(this._attributes.currentSlide, 0, speed);
						}
					}

					if(speed){
						_addClass(this._attributes.container, this.settings.classes.animating);
						setTimeout(function(){
							_removeClass(this._attributes.container, this.settings.classes.animating);
						}.bind(this), speed);
					}
				}
			},
			transitionEnd: function(event) {
				if(_touch.vars.direction){
					_unTranslate(this._attributes.previousSlide);
					_unTranslate(this._attributes.currentSlide);
					_unTranslate(this._attributes.nextSlide);
					_removeClass(this._attributes.container, this.settings.classes.touching);

					_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
					_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
					_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
					this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

					var slides = this._attributes.slides,
						index = slides.indexOf(this._attributes.currentSlide);

					if(_touch.vars.direction == 'next'){
						this._attributes.previousSlide = this._attributes.currentSlide;
						this._attributes.currentSlide = slides[index+1];
						this._attributes.nextSlide = slides[index+2];
						if(typeof this._attributes.currentSlide === 'undefined' &&
						typeof this._attributes.nextSlide === 'undefined'){
							this._attributes.currentSlide = slides[0];
							this._attributes.nextSlide = slides[1];
						} else {
							if(typeof this._attributes.nextSlide === 'undefined'){
								this._attributes.nextSlide = slides[0];
							}
						}

						_loadImg(this._attributes.nextSlide);
					} else {
						this._attributes.nextSlide = this._attributes.currentSlide;
						this._attributes.previousSlide = slides[index-2];
						this._attributes.currentSlide = slides[index-1];
						if(typeof this._attributes.currentSlide === 'undefined' &&
						typeof this._attributes.previousSlide === 'undefined'){
							this._attributes.currentSlide = slides[slides.length-1];
							this._attributes.previousSlide = slides[slides.length-2];
						} else {
							if(typeof this._attributes.previousSlide === 'undefined'){
								this._attributes.previousSlide = slides[slides.length-1];
							}
						}

						_loadImg(this._attributes.previousSlide);
					}

					_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
					_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
					_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
					this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

					this.settings.afterChange.apply(this);
				}
			}
		};

		/*
		 * Slider class
		 */
		var Slider = function(args) {
			// Defaults
			this.settings = {
				selector: '',
				height: 400, // Required but can be set by CSS
				interval: 4000,
				transitionDuration: 700,
				effect: 'slide',
				disableNav: false,
				keyboardNav: true,
				previousNavSelector: '',
				nextNavSelector: '',
				classes: {
					container: 'ideal-image-slider',
					slide: 'iis-slide',
					previousSlide: 'iis-previous-slide',
					currentSlide: 'iis-current-slide',
					nextSlide: 'iis-next-slide',
					previousNav: 'iis-previous-nav',
					nextNav: 'iis-next-nav',
					animating: 'iis-is-animating',
					touchEnabled: 'iis-touch-enabled',
					touching: 'iis-is-touching',
					directionPrevious: 'iis-direction-previous',
					directionNext: 'iis-direction-next'
				},
				onInit: function(){},
				onStart: function(){},
				onStop: function(){},
				onDestroy: function(){},
				beforeChange: function(){},
				afterChange: function(){}
			};

			// Parse args
			if(typeof args === 'string'){
				this.settings.selector = args;
			}
			else if(typeof args === 'object'){
				_deepExtend(this.settings, args);
			}

			// Slider (container) element
			var sliderEl = document.querySelector(this.settings.selector);
			if(!sliderEl) return null;

			// Slides
			var origChildren = _toArray(sliderEl.children),
				validSlides = [];
			/**
			 * REMOVED AS IT BREAKS IE10/11 support, because setting innerHTML to
			 * empty destroys the child elements of the origChildren entries.
			 */
			//sliderEl.innerHTML = '';
			Array.prototype.forEach.call(origChildren, function(slide, i){
				if(slide instanceof HTMLImageElement || slide instanceof HTMLAnchorElement){
					var slideEl = document.createElement('a'),
						href = '',
						target = '';

					if(slide instanceof HTMLAnchorElement){
						href = slide.getAttribute('href');
						target = slide.getAttribute('target');

						var img = slide.querySelector('img');
						if(img !== null){
							slide = img;
						} else {
							return;
						}
					}

					if(typeof slide.dataset !== 'undefined'){
						_deepExtend(slideEl.dataset, slide.dataset);
						if(slide.dataset.src){
							// Use data-src for on-demand loading
							slideEl.dataset.src = slide.dataset.src;
						} else {
							slideEl.dataset.src = slide.src;
						}

						// HiDPI support
						if(_isHighDPI() && slide.dataset['src-2x']){
							slideEl.dataset.src = slide.dataset['src-2x'];
						}
					} else {
						// IE
						if(slide.getAttribute('data-src')){
							slideEl.setAttribute('data-src', slide.getAttribute('data-src'));
						} else {
							slideEl.setAttribute('data-src', slide.getAttribute('src'));
						}

						// Added for caption compatibility in IE10 and below
						if ( slide.getAttribute( 'data-caption' ) ) {
							slideEl.setAttribute('data-caption', slide.getAttribute('data-caption'));
						}
						if ( slide.getAttribute( 'data-category' ) ) {
							slideEl.setAttribute('data-category', slide.getAttribute('data-category'));
						}

					}

					if(href) slideEl.setAttribute('href', href);
					if(target) slideEl.setAttribute('target', target);
					if(slide.getAttribute('className')) _addClass(slideEl, slide.getAttribute('className'));
					if(slide.getAttribute('id')) slideEl.setAttribute('id', slide.getAttribute('id'));
					if(slide.getAttribute('title')) slideEl.setAttribute('title', slide.getAttribute('title'));
					if(slide.getAttribute('alt')) slideEl.innerHTML = slide.getAttribute('alt');
					slideEl.setAttribute('role', 'tabpanel');
					slideEl.setAttribute('aria-hidden', 'true');

					slideEl.style.cssText += '-webkit-transition-duration:'+ this.settings.transitionDuration +'ms;-moz-transition-duration:'+ this.settings.transitionDuration +'ms;-o-transition-duration:'+ this.settings.transitionDuration +'ms;transition-duration:'+ this.settings.transitionDuration +'ms;';

					sliderEl.appendChild(slideEl);
					validSlides.push(slideEl);
				}
			}.bind(this));
			var slides = validSlides;
			if(slides.length <= 1){
				sliderEl.innerHTML = '';
				Array.prototype.forEach.call(origChildren, function(child, i){
					sliderEl.appendChild(child);
				});
				return null;
			}

			// Create navigation
			if(!this.settings.disableNav){
				var previousNav, nextNav;
				if(this.settings.previousNavSelector){
					previousNav = document.querySelector(this.settings.previousNavSelector);
				} else {
					previousNav = document.createElement('a');
					sliderEl.appendChild(previousNav);
				}
				if(this.settings.nextNavSelector){
					nextNav = document.querySelector(this.settings.nextNavSelector);
				} else {
					nextNav = document.createElement('a');
					sliderEl.appendChild(nextNav);
				}

				_addClass(previousNav, this.settings.classes.previousNav);
				_addClass(nextNav, this.settings.classes.nextNav);
				previousNav.addEventListener('click', function(){
					if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
					this.stop();
					this.previousSlide();
				}.bind(this));
				nextNav.addEventListener('click', function(){
					if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
					this.stop();
					this.nextSlide();
				}.bind(this));

				// Touch Navigation
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					this.settings.effect = 'slide';
					previousNav.style.display = 'none';
					nextNav.style.display = 'none';
					_addClass(sliderEl, this.settings.classes.touchEnabled);

					sliderEl.addEventListener('touchstart', _touch.start.bind(this), false);
					sliderEl.addEventListener('touchmove', _touch.move.bind(this), false);
					sliderEl.addEventListener('touchend', _touch.end.bind(this), false);
				}

				// Keyboard Navigation
				if(this.settings.keyboardNav){
					document.addEventListener('keyup', function(e){
						e = e || window.event;
						var button = (typeof e.which == 'number') ? e.which : e.keyCode;
						if (button == 37) {
							if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
							this.stop();
							this.previousSlide();
						} else if (button == 39) {
							if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
							this.stop();
							this.nextSlide();
						}
					}.bind(this));
				}
			}

			// Create internal attributes
			this._attributes = {
				container: sliderEl,
				slides: slides,
				previousSlide: typeof slides[slides.length-1] !== 'undefined' ? slides[slides.length-1] : slides[0],
				currentSlide: slides[0],
				nextSlide: typeof slides[1] !== 'undefined' ? slides[1] : slides[0],
				timerId: 0,
				origChildren: origChildren // Used in destroy()
			};

			// Set height
			if(this.settings.height){
				this._attributes.container.style.height = this.settings.height +'px';
			}

			// Add classes
			_addClass(sliderEl, this.settings.classes.container);
			_addClass(sliderEl, 'iis-effect-'+ this.settings.effect);
			Array.prototype.forEach.call(this._attributes.slides, function(slide, i){
				_addClass(slide, this.settings.classes.slide);
			}.bind(this));
			_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);

			// ARIA
			this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

			// Load first image
			_loadImg(this._attributes.currentSlide, (function(){
				this.settings.onInit.apply(this);
			}).bind(this));
			// Preload next images
			_loadImg(this._attributes.previousSlide);
			_loadImg(this._attributes.nextSlide);
		};

		Slider.prototype.get = function(attribute) {
			if(!this._attributes) return null;
			if(this._attributes.hasOwnProperty(attribute)){
				return this._attributes[attribute];
			}
		};

		Slider.prototype.set = function(attribute, value) {
			if(!this._attributes) return null;
			return (this._attributes[attribute] = value);
		};

		Slider.prototype.start = function() {
			if(!this._attributes) return;
			this._attributes.timerId = setInterval(this.nextSlide.bind(this), this.settings.interval);
			this.settings.onStart.apply(this);

			// Stop if window blur
			window.onblur = function(){
				this.stop();
			}.bind(this);
		};

		Slider.prototype.stop = function() {
			if(!this._attributes) return;
			clearInterval(this._attributes.timerId);
			this._attributes.timerId = 0;
			this.settings.onStop.apply(this);
		};

		Slider.prototype.previousSlide = function() {
			this.settings.beforeChange.apply(this);
			_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
			this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

			var slides = this._attributes.slides,
				index = slides.indexOf(this._attributes.currentSlide);
			this._attributes.nextSlide = this._attributes.currentSlide;
			this._attributes.previousSlide = slides[index-2];
			this._attributes.currentSlide = slides[index-1];
			if(typeof this._attributes.currentSlide === 'undefined' &&
			typeof this._attributes.previousSlide === 'undefined'){
				this._attributes.currentSlide = slides[slides.length-1];
				this._attributes.previousSlide = slides[slides.length-2];
			} else {
				if(typeof this._attributes.previousSlide === 'undefined'){
					this._attributes.previousSlide = slides[slides.length-1];
				}
			}

			// Preload next image
			_loadImg(this._attributes.previousSlide);

			_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
			this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

			_addClass(this._attributes.container, this.settings.classes.directionPrevious);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.directionPrevious);
			}.bind(this), this.settings.transitionDuration);

			if(this.settings.transitionDuration){
				_addClass(this._attributes.container, this.settings.classes.animating);
				setTimeout(function(){
					_removeClass(this._attributes.container, this.settings.classes.animating);
				}.bind(this), this.settings.transitionDuration);
			}
			this.settings.afterChange.apply(this);
		};

		Slider.prototype.nextSlide = function() {
			this.settings.beforeChange.apply(this);
			_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
			this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

			var slides = this._attributes.slides,
				index = slides.indexOf(this._attributes.currentSlide);
			this._attributes.previousSlide = this._attributes.currentSlide;
			this._attributes.currentSlide = slides[index+1];
			this._attributes.nextSlide = slides[index+2];
			if(typeof this._attributes.currentSlide === 'undefined' &&
			   typeof this._attributes.nextSlide === 'undefined'){
				this._attributes.currentSlide = slides[0];
				this._attributes.nextSlide = slides[1];
			} else {
				if(typeof this._attributes.nextSlide === 'undefined'){
					this._attributes.nextSlide = slides[0];
				}
			}

			// Preload next image
			_loadImg(this._attributes.nextSlide);

			_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
			this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

			_addClass(this._attributes.container, this.settings.classes.directionNext);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.directionNext);
			}.bind(this), this.settings.transitionDuration);

			if(this.settings.transitionDuration){
				_addClass(this._attributes.container, this.settings.classes.animating);
				setTimeout(function(){
					_removeClass(this._attributes.container, this.settings.classes.animating);
				}.bind(this), this.settings.transitionDuration);
			}
			this.settings.afterChange.apply(this);
		};

		Slider.prototype.gotoSlide = function(index) {
			this.settings.beforeChange.apply(this);
			this.stop();

			_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
			this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

			index--; // Index should be 1-indexed
			var slides = this._attributes.slides,
				oldIndex = slides.indexOf(this._attributes.currentSlide);
			this._attributes.previousSlide = slides[index-1];
			this._attributes.currentSlide = slides[index];
			this._attributes.nextSlide = slides[index+1];
			if(typeof this._attributes.previousSlide === 'undefined'){
				this._attributes.previousSlide = slides[slides.length-1];
			}
			if(typeof this._attributes.nextSlide === 'undefined'){
				this._attributes.nextSlide = slides[0];
			}

			// Load images
			_loadImg(this._attributes.previousSlide);
			_loadImg(this._attributes.currentSlide);
			_loadImg(this._attributes.nextSlide);

			_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
			_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
			_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
			this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

			if(index < oldIndex){
				_addClass(this._attributes.container, this.settings.classes.directionPrevious);
				setTimeout(function(){
					_removeClass(this._attributes.container, this.settings.classes.directionPrevious);
				}.bind(this), this.settings.transitionDuration);
			} else {
				_addClass(this._attributes.container, this.settings.classes.directionNext);
				setTimeout(function(){
					_removeClass(this._attributes.container, this.settings.classes.directionNext);
				}.bind(this), this.settings.transitionDuration);
			}

			if(this.settings.transitionDuration){
				_addClass(this._attributes.container, this.settings.classes.animating);
				setTimeout(function(){
					_removeClass(this._attributes.container, this.settings.classes.animating);
				}.bind(this), this.settings.transitionDuration);
			}
			this.settings.afterChange.apply(this);
		};

		Slider.prototype.destroy = function() {
			clearInterval(this._attributes.timerId);
			this._attributes.timerId = 0;

			this._attributes.container.innerHTML = '';
			Array.prototype.forEach.call(this._attributes.origChildren, function(child, i){
				this._attributes.container.appendChild(child);
			}.bind(this));

			_removeClass(this._attributes.container, this.settings.classes.container);
			_removeClass(this._attributes.container, 'iis-effect-'+ this.settings.effect);
			this._attributes.container.style.height = '';

			this.settings.onDestroy.apply(this);
		};

		return {
			_hasClass: _hasClass,
			_addClass: _addClass,
			_removeClass: _removeClass,
			Slider: Slider
		};

	})();

	/*
	 * Ideal Image Slider: Captions Extension v1.0.1
	 *
	 * By Gilbert Pellegrom
	 * http://gilbert.pellegrom.me
	 *
	 * Copyright (C) 2014 Dev7studios
	 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
	 */
	(function(IIS) {
		"use strict";

		IIS.Slider.prototype.addCaptions = function() {
			IIS._addClass(this._attributes.container, 'iis-has-captions');

			Array.prototype.forEach.call(this._attributes.slides, function(slide, i){
				var caption = document.createElement('div');
				IIS._addClass(caption, 'iis-caption');

				var captionContent = '';
				if(slide.getAttribute('title')){
					captionContent += '<div class="iis-caption-title">'+ slide.getAttribute('title') +'</div>';
				}
				if(slide.getAttribute('data-caption')){
					var dataCaption = slide.getAttribute('data-caption');
					if(dataCaption.substring(0,1) == '#' || dataCaption.substring(0,1) == '.'){
						var external = document.querySelector(dataCaption);
						if(external){
							captionContent += '<div class="iis-caption-content">'+ external.innerHTML +'</div>';
						}
					} else {
						captionContent += '<div class="iis-caption-content">'+ slide.getAttribute('data-caption') +'</div>';
					}
				} else {
					if(slide.innerHTML){
						captionContent += '<div class="iis-caption-content">'+ slide.innerHTML +'</div>';
					}
				}

				/* Add category class to slides, for caption styling. */
				if ( slide.getAttribute( 'data-category' ) ) {
					var categoryClass = slide.getAttribute( 'data-category' );
					IIS._addClass( slide, categoryClass.trim() );
				}

				slide.innerHTML = '';
				if(captionContent){
					caption.innerHTML = captionContent;
					slide.appendChild(caption);
				}
			}.bind(this));
		};

		return IIS;

	})(IdealImageSlider);

	/**
	 * Set up the Ideal Image Slider(s).
	 * @param {IdealImageSlider} IIS The IdealImageSlider constructor.
	 */
	( function initSlider( IIS ) {
		var slider = new IIS.Slider( {
			selector: '.js-slider',
			height: 352,
			interval: 5000,
			transitionDuration: 300
		} );
		slider.addCaptions.bind(slider)();
		slider.start();
	} )( IdealImageSlider );

}
