const teclas = document.querySelectorAll('.tecla');
document.querySelector('.teclado').onload = tocarSom();

let som = new Audio();

function tocarSom(){
teclas.forEach(tecla => {
  const instrumentos = tecla.dataset.tecla;
  
  tecla.addEventListener('click',()=>{
    som.src=`sounds/${instrumentos}.wav`;
    som.play();
  })

});

}

