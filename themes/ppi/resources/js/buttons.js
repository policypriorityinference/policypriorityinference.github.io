var buttons = document.getElementsByClassName('text-button');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('mousedown', createRipple);
})

function createRipple(e)
{
	
	  var innerText = this.getElementsByClassName('button-inner-text')[0];
	
	  innerText.classList.remove('textfade'); 
	  
		if(this.getElementsByClassName('ripple')[0]){
			var ripple = this.getElementsByClassName('ripple')[0];
			ripple.parentNode.removeChild(ripple);
		}
		
	  var buttontop = this.getBoundingClientRect().top;
	  var buttonleft = this.getBoundingClientRect().left;
	  console.log(buttontop);
	  var circle = document.createElement('div');
	  this.appendChild(circle);
	  
	  var d = Math.max(this.clientWidth, this.clientHeight);
	  circle.style.width = circle.style.height = '100px';
	  
	 
	  circle.style.left = e.clientX - buttonleft - 50 + 'px';
	  circle.style.top = e.clientY - buttontop - 50 + 'px';
	 
	  console.log(e.clientY);
	  console.log(circle.style.top);	
	 
	  circle.classList.add('ripple');
	  
	  innerText.classList.add('textfade');


}

