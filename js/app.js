// Capture all variable needed
let inputTodo = document.getElementById('inputTodo'),
	listTodo = document.getElementById('todo'),
	errorMSG = document.querySelector('.errorMessage'),
	inputTodoVal;

// Create a function to detect the classname in LI
let clickHandler = function(n){	
	if(n.classList.contains('completed')){
		n.className = '';
	}else{
		n.className = 'completed';
	}		
}

// Create a FadeOut Function
let fadeOut = function(el){
	let op = 1 // Initial opacity
	let timer = setInterval(function(){
		if(op <= 0.1){
			clearInterval(timer);
			el.remove();
		}
		el.style.opacity = op;
		el.style.filter = 'alpha(opacity=' + op * 100 + ')';
		op -= op * 0.1;
	}, 5);
}

inputTodo.addEventListener('keypress', function(e){
	inputTodoVal = this.value;
	if(e.which === 13){
		if(inputTodoVal.length > 4){
			listTodo.innerHTML += '<li rel="list"><button id="delBTN" rel="delete" class="fa fa-trash"></button>' + inputTodoVal + '</li>';
			errorMSG.innerHTML = '';
			errorMSG.classList.remove('errorMessage-on');
			this.value = '';
		} else {
			errorMSG.innerHTML = '<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please enter five or more characters</p>';
			errorMSG.classList.add('errorMessage-on');
			this.value = '';
			setTimeout(function(){
				errorMSG.classList.remove('errorMessage-on');
			}, 5000);
		}
	}
});

/*
	Since we will be using Event Delegation,
	the basic idea is that you bind a listener 
	on a parent element, which is guaranteed to exist 
	when the page loads.
*/

window.onload = function(){
	// Bind a click listener to the container
	listTodo.onclick = function(e){
		// Get the target
		let target = e.target;
		// Listen to the click if the element is according to the requirement
		if(target.getAttribute('rel') === 'list'){
			clickHandler(target);
		} else if (target.getAttribute('rel') === 'delete'){
			let list = target.parentElement;
			fadeOut(list);
		}
	}
}
