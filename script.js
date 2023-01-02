//botões
const dotsLabels = document.querySelectorAll('.dots-btn');
const dotsNoticiasLabels = document.querySelectorAll('.dots-noticias-btn');
const slide1 = document.querySelector('#dot1-label');
const slide2 = document.querySelector('#dot2-label');
const slide3 = document.querySelector('#dot3-label');
const slide4 = document.querySelector('#dot4-label');
const slide5 = document.querySelector('#dot5-label');
const noticia1 = document.querySelector('#dot1-noticias-label');
const noticia2 = document.querySelector('#dot2-noticias-label');

//side menu

const burgerBtn = document.getElementById('burger-btn');
const sideMenu = document.getElementById('side-menu');

burgerBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

//slides

slide1.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        label.style.backgroundColor = '#ddd';
      });
    document.getElementById('dot1-label').style.background = '#f0050a';
});
slide2.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        label.style.backgroundColor = '#ddd';
      });
    document.getElementById('dot2-label').style.background = '#f0050a';
});
slide3.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        label.style.backgroundColor = '#ddd';
      });
    document.getElementById('dot3-label').style.background = '#f0050a';
});
slide4.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        label.style.backgroundColor = '#ddd';
      });
    document.getElementById('dot4-label').style.background = '#f0050a';
});
slide5.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        label.style.backgroundColor = '#ddd';
      });
    document.getElementById('dot5-label').style.background = '#f0050a';
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  } else {

  }
}

//noticias slide

noticia1.addEventListener('click', () => {
  dotsNoticiasLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot1-noticias-label').style.background = '#f0050a';
});
noticia2.addEventListener('click', () => {
  dotsNoticiasLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot2-noticias-label').style.background = '#f0050a';
});

// cotação para preço de venda de carro usado

function getCotacaoVenda(event) {
  event.preventDefault();
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const anoRegisto = document.getElementById('anoRegisto').value;
  const precoCompra = document.getElementById('precoCompra').value;
  const kms = document.getElementById('kms').value;
  // Determinar o coeficiente de depreciação para a idade do carro
  const anoAtual = new Date().getFullYear();
  const idadeCarro = anoAtual - anoRegisto;
  const coeficienteDepreciacao = idadeCarro > 10 ? 0.04 : 0.05;
  const depreciação = 1 - (coeficienteDepreciacao * idadeCarro);
  // Determinar o coeficiente de depreciação para a quilometragem do carro
  const coeficienteDepreciacaoKms =
    kms <= 30000 ? 1 :
    kms <= 70000 ? 0.95 : 0.9;
  // Calcular o preço final do carro
  const precoFinal = precoCompra * depreciação * coeficienteDepreciacaoKms;
  // Retornar o preço final (não inferior a 500€)
  const result = precoFinal < 500 ? 500 : precoFinal;
  
  document.getElementById('titulo-valor-carro').innerHTML = `Aproveite já e troque o seu ${marca} ${modelo}. <br> Nós ajudamos com:`;
  document.getElementById('valor-carro').innerHTML = `${result.toFixed(2)}€`;
  document.getElementById('selling-price-form').style.display = "none";
  document.getElementById('form-result').style.display = "grid";
  document.getElementById('form-result').style.gridTemplateColumns = "2fr 1fr";
  document.getElementById('form-result').style.gridTemplateRows = "1fr 2fr 1fr";
  document.getElementById('selling-price-form-container').style.top = '33%';
  return;
}