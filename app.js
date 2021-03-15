let botonSwitch = document.getElementById('switch');
let precios = document.getElementsByClassName('price');
window.onload = function (){

    
    /*botonSwitch.addEventListener('change', function(){
        if (this.checked) {
            
        } else {
            alert('No activo manao');
        }
    })*/

    botonSwitch.addEventListener('change', function (){
        if (this.checked) {
            precios[0].innerHTML = '$199.99';
            precios[1].innerHTML = '$249.99';
            precios[2].innerHTML = '$399.99';
        } else {
            precios[0].innerHTML = '$19.99';
            precios[1].innerHTML = '$24.99';
            precios[2].innerHTML = '$39.99';
        }
    });

}