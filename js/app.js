// Capture all variable needed
let inputTodo = document.getElementById('inputTodo'),
	listTodo = document.getElementById('todo'),
	inputTodoVal;

// Create a function to detect the classname in LI
let clickHandler = function(n){	
	if(n.classList.contains('completed')){
		n.className = '';
	}else{
		n.className = 'completed';
	}		
}

inputTodo.addEventListener('keypress', function(e){
	inputTodoVal = this.value;
	if(e.which === 13){
		if(inputTodoVal.length > 0){
			listTodo.innerHTML += '<li rel="list"><button id="delBTN" class="fa" rel="delete">del-</button>' + inputTodoVal + '</li>';
			this.value = '';
		} else {
			alert('nope')
		}
	}
});

// Since we will be using Event Delegation, the basic idea is that you bind a listener on a parent element, which is guaranteed to exist when the page loads.
window.onload = function(){
	listTodo.onclick = function(e){
		let target = e.target;
		if(target.getAttribute('rel') === 'list'){
			clickHandler(target);
		} else if (target.getAttribute('rel') === 'delete'){
			target.parentElement.remove();
		}
	}
}
