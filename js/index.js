// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }



function fadeOutAndCallback(image, callback){
	var opacity = 1;
	var timer = setInterval(function(){
		if(opacity < 0.1){
			clearInterval(timer);
			callback(); //this executes the callback function!
		}
		image.style.opacity = opacity;
		opacity -=  0.1;
	}, 50);
}



function saveLincoln() {
    let interval = parseInt(document.querySelector('#interval').value)
    if(isNaN(interval)) {
      interval = 10000
    }
    let foreground = document.querySelector('#foreground')
    let background = document.querySelector('#background')
    fadeOutAndCallback(foreground,
      function(){
        foreground.src = background.src;
        fadeIn(foreground);
      }
    );

}


let button = document.querySelector('#save_lincoln')
button.addEventListener('click', saveLincoln)


