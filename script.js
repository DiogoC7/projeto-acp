//botões
const dotsLabels = document.querySelectorAll('.dots-btn');
const dotsNoticiasLabels = document.querySelectorAll('.dots-noticias-btn');
const dotsViagensLabels = document.querySelectorAll('.dots-viagens-btn');
const slide1 = document.querySelector('#dot1-label');
const slide2 = document.querySelector('#dot2-label');
const slide3 = document.querySelector('#dot3-label');
const slide4 = document.querySelector('#dot4-label');
const slide5 = document.querySelector('#dot5-label');
const noticia1 = document.querySelector('#dot1-noticias-label');
const noticia2 = document.querySelector('#dot2-noticias-label');
const viagem1 = document.getElementById('dot1-viagens-label');
const viagem2 = document.getElementById('dot2-viagens-label');
const viagem3 = document.getElementById('dot3-viagens-label');
const viagem4 = document.getElementById('dot4-viagens-label');
const viagem5 = document.getElementById('dot5-viagens-label');

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

//viagens slide

viagem1.addEventListener('click', () => {
  dotsViagensLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot1-viagens-label').style.background = '#f0050a';
});
viagem2.addEventListener('click', () => {
  dotsViagensLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot2-viagens-label').style.background = '#f0050a';
});
viagem3.addEventListener('click', () => {
  dotsViagensLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot3-viagens-label').style.background = '#f0050a';
});
viagem4.addEventListener('click', () => {
  dotsViagensLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot4-viagens-label').style.background = '#f0050a';
});
viagem5.addEventListener('click', () => {
  dotsViagensLabels.forEach(label => {
      label.style.backgroundColor = '#ddd';
    });
  document.getElementById('dot5-viagens-label').style.background = '#f0050a';
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

  const mauEstado = result * 0.60;
  const bomEstado = result * 1;
  const excelenteEstado = result *1.1;
  
  document.getElementById('titulo-valor-carro').innerHTML = `Aproveite já e troque o seu ${marca} ${modelo}. <br> Nós ajudamos com:`;
  document.getElementById('valor-carro-mau').innerHTML = `${mauEstado.toFixed(2)}€`;
  document.getElementById('valor-carro-bom').innerHTML = `${bomEstado.toFixed(2)}€`;
  document.getElementById('valor-carro-excelente').innerHTML = `${excelenteEstado.toFixed(2)}€`;
  document.getElementById('valor-carro-mau-mb').innerHTML = `${mauEstado.toFixed(2)}€`;
  document.getElementById('valor-carro-bom-mb').innerHTML = `${bomEstado.toFixed(2)}€`;
  document.getElementById('valor-carro-excelente-mb').innerHTML = `${excelenteEstado.toFixed(2)}€`;
  document.getElementById('selling-price-form').style.display = "none";
  document.getElementById('selling-price-form-mob').style.display = "none";
  document.getElementById('form-result').style.display = "grid";
  document.getElementById('form-result').style.gridTemplateColumns = "1fr 1fr 1fr";
  document.getElementById('form-result').style.gap = "2%";
  document.getElementById('form-result').style.gridTemplateRows = "1fr 2fr 1fr";
  document.getElementById('form-result-mob').style.display = "grid";
  document.getElementById('form-result-mob').style.gridTemplateColumns = "1fr 1fr 1fr";
  document.getElementById('form-result-mob').style.gap = "2%";
  document.getElementById('form-result-mob').style.gridTemplateRows = "1fr 2fr 1fr";
  document.getElementById('selling-price-form-container').style.top = '33%';
  return;
}

//financiamento
function financiamento() {
  // Lê os valores de entrada inicial, montante financiado e prazo em meses
  const montanteTotal = document.getElementById('montanteTotal').value;
  const entradaInicial = document.getElementById('entradaInicial').value;
  const prazoPagamento = document.getElementById('prazoPagamento').value;
  const meses = prazoPagamento *12;
  const valorEmprestimo = montanteTotal - entradaInicial;


  document.getElementById('carro-value').innerHTML = `${montanteTotal}€`;
  document.getElementById('entrada-value').innerHTML = `${entradaInicial}€`;
  document.getElementById('prazo-value').innerHTML = `${prazoPagamento} anos`;
  document.getElementById('total-value').innerHTML = `${montanteTotal}€`;
  document.getElementById('total-entrada').innerHTML = `${entradaInicial}€`;
  document.getElementById('total-meses').innerHTML = `${meses} meses`;
  

  // Gera 3 valores aleatórios de spread entre 1% e 5%
  const spread1 = Math.random() * 0.04 + 0.01;
  const spread2 = Math.random() * 0.04 + 0.01;
  const spread3 = Math.random() * 0.04 + 0.01;
  const spreadInt1 = spread1 * 100;
  const spreadInt2 = spread2 * 100;
  const spreadInt3 = spread3 * 100;

  document.getElementById('spread1-valor').innerHTML = `Spread: ${spreadInt1.toFixed(2)}%`;
  document.getElementById('spread2-valor').innerHTML = `Spread: ${spreadInt2.toFixed(2)}%`;
  document.getElementById('spread3-valor').innerHTML = `Spread: ${spreadInt3.toFixed(2)}%`;

  // Calcula a taxa de juro total para cada um dos 3 cenários, adicionando o spread ao valor base de 5%
  const taxaJuro1 = 0.05 + spread1;
  const taxaJuro2 = 0.05 + spread2;
  const taxaJuro3 = 0.05 + spread3;

  const valorEmprestimo1 =+ valorEmprestimo + (taxaJuro1 * valorEmprestimo);
  const valorEmprestimo2 =+ valorEmprestimo + (taxaJuro2 * valorEmprestimo);
  const valorEmprestimo3 =+ valorEmprestimo + (taxaJuro3 * valorEmprestimo);
  document.getElementById('total-emprestimo1').innerHTML = `${valorEmprestimo1.toFixed(2)}€`;
  document.getElementById('total-emprestimo2').innerHTML = `${valorEmprestimo2.toFixed(2)}€`;
  document.getElementById('total-emprestimo3').innerHTML = `${valorEmprestimo3.toFixed(2)}€`;

  // Calcula o valor da prestação mensal para cada um dos 3 cenários
  const prestacao1 = (valorEmprestimo + (taxaJuro1 * valorEmprestimo)) / meses;
  const prestacao2 = (valorEmprestimo + (taxaJuro2 * valorEmprestimo)) / meses;
  const prestacao3 = (valorEmprestimo + (taxaJuro3 * valorEmprestimo)) / meses;

  document.getElementById('proposta1-valor').innerHTML = `${prestacao1.toFixed(2)}€/mês`;
  document.getElementById('proposta2-valor').innerHTML = `${prestacao2.toFixed(2)}€/mês`;
  document.getElementById('proposta3-valor').innerHTML = `${prestacao3.toFixed(2)}€/mês`;
    
}

function mudarDisplay() {
  event.preventDefault();
  financiamento();
  const resultDiv = document.getElementById("financiamento-result");
    if (resultDiv.style.display !== 'block') {
      resultDiv.style.display = "block";
    } else {
      resultDiv.style.display = "none";
    }
  }