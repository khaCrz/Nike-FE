/*
		Designed by: SELECTO
		Original image: https://dribbble.com/shots/5311359-Diprella-Login
*/

let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener("click", getButtons );
    }

    for (var i = 0; i < switchBtn.length; i++){
        switchBtn[i].addEventListener("click", changeForm);
    }
    setTimeout(function() {
        var mod = location.href.split("login=")[1];
        if(mod == 1){
            changeForm()
        }
      }, 100);

}
window.addEventListener("load", mainF);



/**
 * range slider function
 * @param _rangeClass
 * @param _options
 */
let rangeslider = (_rangeClass, _options) => {
    // constants
    const RANGE_SLIDER_CLASS = '.range__slider',
          RANGE_PROGRESS_CLASS = '.range__progress',
          RANGE_VALUE_CLASS = '.range__value',

          // default min and max values
          DEFAULT_MIN = '0',
          DEFAULT_MAX = '10',

          // check if options are set
          OPTIONS_ARE_SET = typeof _options !== 'undefined';

    // override options
    let options = {
        // TODO: in progress
        ..._options
    };

    // get array of slider elements
    let rangeSlider = document.querySelectorAll(_rangeClass),
        // tiny helper methods
        helperMethods = {
            /**
             * set and calculate progressbar width
             * @param _slider
             * @param _element
             * @returns {number}
             */
            setProgress: (_slider, _element) => {
                // set progress width
                let progressWidth = (_slider.value - _slider.min) / (_slider.max - _slider.min) * 100
                // set style width
                if (typeof _element !== 'undefined') {
                    _element.style.width = progressWidth + '%'
                }

                return progressWidth
            },

            /**
             * set slider value in given element
             * @param _element
             * @param _value
             */
            setSliderValue: (_element, _value) => {
                // check if element with RANGE_VALUE_CLASS exists
                if (typeof _element !== 'undefined' && _element !== null) {
                    _element.innerHTML = _value
                }
            },

            /**
             * errors...
             * @param _slider
             * @returns {Array}
             */
            getErrors: (_slider) => {
                // error array
                let error = [],
                    progressWidth = helperMethods.setProgress(_slider)

                // check if min bigger than max
                if (_slider.min > _slider.max) {
                    error.push('min is bigger or equal max')
                }

                // check if progress is wrong calculated
                if (progressWidth > 100 || progressWidth < 0) {
                    error.push('progress error')
                }

                return error;
            }
        }

    // loop trought the rangesliders
    rangeSlider.forEach((_element) => {

        // set all elements
        let rangeSlider = _element.querySelector(RANGE_SLIDER_CLASS),
            rangeProgress = _element.querySelector(RANGE_PROGRESS_CLASS),
            rangeValue = _element.querySelector(RANGE_VALUE_CLASS)

        // set initial values
        rangeSlider.min = rangeSlider.getAttribute('min') === null ? DEFAULT_MIN : rangeSlider.min
        rangeSlider.max = rangeSlider.getAttribute('max') === null ? DEFAULT_MAX : rangeSlider.max
        rangeSlider.value = rangeSlider.getAttribute('value') === null ? DEFAULT_MIN : rangeSlider.value

        // set values in element
        helperMethods.setSliderValue(rangeValue,
            rangeSlider.value)

        // set progress width
        helperMethods.setProgress(rangeSlider,
            rangeProgress)

        /**
         * set new value and progress
         * @param _e
         * @param _init
         */
        let changeSlideValues = (_e, _init) => {

            // choose target
            let target = !_init ? _e.currentTarget : _e,
                // target value
                targetValue = target.value

            // set values in element
            helperMethods.setSliderValue(rangeValue,
                targetValue)

            // initial progress width
            helperMethods.setProgress(rangeSlider,
                rangeProgress)

            // check if element with RANGE_VALUE_CLASS exists
            if (typeof rangeValue !== 'undefined' && rangeValue !== null) {
                rangeValue.innerHTML = targetValue
            }

            // call callback function if its not the initial call
            if (OPTIONS_ARE_SET && typeof options.slide !== 'undefined' && typeof options.slide === 'function') {
                options.slide(_e, helperMethods.getErrors(rangeSlider))
            }
        }

        // add oninput event
        rangeSlider.addEventListener('input', changeSlideValues)

        // check options
        if (OPTIONS_ARE_SET) {
            // add focus event
            if (typeof options.start !== 'undefined' && typeof options.start === 'function') {
                rangeSlider.addEventListener('focus', options.start)
            }

            // add onchange event
            if (typeof options.complete !== 'undefined' && typeof options.complete === 'function') {
                rangeSlider.addEventListener('change', options.complete)
            }
        }
    });
}

//
// ----------------------------------------------------------------
//

// init rangesliders with callback functions
rangeslider('.range', {
	slide: (_slider, _error) => {
		// check if there was an error
		if (_error.length) {
			document.querySelector('.sliderValues').innerHTML = 'ERROR: ' + _error.join(',');
		} else {

			// set slider element
			let slider = _slider.currentTarget;

			// get slider information
			document.querySelector('.sliderValues').innerHTML = `
					min:   ${slider.min}   <br />
					max:   ${slider.max}   <br />
					step:  ${slider.step}  <br />
					value: ${slider.value} <br />
					class: ${slider.className.split(' ')[1]}
			`
		}
	},
	// slide completed
	complete: (_slider) => {
		console.log('complete', _slider.currentTarget.value)
	},
	// slide started
	start: (_slider) => {
		console.log('start', _slider.currentTarget.value)
	}
});


var show = function(id) {
    document.getElementById(id).style.display ='flex';
}
var hide = function(id) {
    document.getElementById(id).style.display ='none';
}
