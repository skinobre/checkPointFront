// Pegando os elemntos do form
let elementos = {
  titulo: document.querySelector('#titulo'),
  imagem: document.querySelector('#imagem'),
  descricao: document.querySelector('#descricao'),
  // Criando um array com as opções do form
  escolha: document.getElementsByName('escolha'),
};

// Selecionando o form
let form = document.querySelector('form');

// Selecionando a div que contem os cards
let cards = document.querySelector('.card-wraper');

// Prevenindo o padrão do botao submit e adicionando o card ao html
form.addEventListener('submit', (evento) => {
  // Previne o comportamento padrão do botão submit
  evento.preventDefault();

  // Percorre o array contendo as opções do form e armazena a escolha em uma variavel
  for (i = 0; i < elementos.escolha.length; i++) {
    if (elementos.escolha[i].checked) escolha2 = elementos.escolha[i].value;
  }

  // Adicionando o que foi digitado no form ao html
  cards.innerHTML += `
    <div class="card">
      <h2>
        ${elementos.titulo.value}
      </h2>

      <img src="${elementos.imagem.value}" alt="">
      <p>
        ${escolha2}
      </p>
      <p>
        ${elementos.descricao.value}
      </p>
    </div>
  `;
});
