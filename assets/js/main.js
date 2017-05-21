
(function salir(){
	var pandas = Array.from(document.querySelectorAll('.panda span'));
	
	pandas.forEach(function(element){
		element.addEventListener('click', function(){
			this.parentElement.classList.add('salir');
		});
	});
})()

