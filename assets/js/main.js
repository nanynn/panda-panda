
(function salir(){
	var pandas = Array.from(document.querySelectorAll('.panda span'));
	var boton = document.getElementById('recargar');
	var img = Array.from(document.querySelectorAll('.imagenes div'));
	
	pandas.forEach(function(element){
		element.addEventListener('click', function(){
			this.parentElement.classList.add('salir');
		});
	});
	
	function borrar(){
        pandas.forEach(function(e){
            e.parentElement.classList.remove('salir');
        });
    }
    
    boton.addEventListener('click', borrar);
	/*boton.addEventListener('click', function(){
		pandas.forEach(function(e){
			e.parentElement.classList.remove('salir');
		});
	});
  */
	// boton.addEventListener("click", function(){
 //        pandas.forEach(function(ele){
 //            ele.parentElement.classList.remove("salir");
 //        });
 //    });
})()

var botonUno = document.getElementById('parrafo1');
var textoUno = document.getElementById('uno');

botonUno.addEventListener('click', function(){
	textoUno.classList.remove('salir');
});
botonUno.addEventListener('click',textoUno);


