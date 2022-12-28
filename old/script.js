//botões
const dotsLabels = document.querySelectorAll('.manual-btn');
const slide1 = document.querySelector('#dot1-label');
const slide2 = document.querySelector('#dot2-label');
const slide3 = document.querySelector('#dot3-label');
const slide4 = document.querySelector('#dot4-label');
const slide5 = document.querySelector('#dot5-label');

slide1.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        console.log('entrou');
        label.style.backgroundColor = '#ddd';
      });
    document.getElementById('dot1-label').style.background = '#f0050a';
});
slide2.addEventListener('click', () => {
    dotsLabels.forEach(label => {
        console.log('entrou');
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