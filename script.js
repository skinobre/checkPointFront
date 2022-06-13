// Selecionando os elemntos do form
let elementos = {
  titulo: document.querySelector('#titulo'),
  imagem: document.querySelector('#imagem'),
  descricao: document.querySelector('#descricao'),
};

// Selecionando o form
let form = document.querySelector('form');

// Selecionando a div que contem os cards
let cards = document.querySelector('.card-wrapper');

form.addEventListener('submit', (evento) => {
  // Previne o comportamento padrão do botão submit
  evento.preventDefault();

  // Selecionando a escolha do usuário
  let escolha = document.querySelector('input[name="escolha"]:checked');

  // Verificando e atribuindo o logotipo referente a escolha
  if (escolha.value == 'DC') {
    logo =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png';
  } else {
    logo =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png';
  }

  // Adicionando o que foi digitado no form ao card
  cards.innerHTML += `
    <div class="card aliceblue">
      <h2>
        ${elementos.titulo.value}
      </h2>

      <img src="${elementos.imagem.value}" alt="">
      <p>
      <img class="logo" src="${logo}" alt="">
      </p>
      <p>
        ${elementos.descricao.value}
      </p>
    </div>
  `;
});
