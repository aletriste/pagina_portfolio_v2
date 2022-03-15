const boton = document.getElementById('btnEntrar');
boton.addEventListener('click',fnValidar)

function fnValidar()
{
    const user =  document.getElementById('user');
    const pass =  document.getElementById('password');

  
    if(user.value == "Admin" && pass.value == "123")
    {
        alert("Datos Correctos");
    }
    else
    {
        alert("Datos Incorrectos");
    }


}

const header = document.getElementById('navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
        
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
