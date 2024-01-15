function reveal() {
	  var reveals = document.querySelectorAll("h2");

	  for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
		  reveals[i].classList.add("heading-display-line");
		} else {
		  reveals[i].classList.remove("heading-display-line");
		}
	  }

	
	}
	window.addEventListener("scroll", reveal);
