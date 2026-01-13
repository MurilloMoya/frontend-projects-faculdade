// para usar o objeto precisamos fazer a importação dele
import { carros } from "./carros.js";
import { formatarMoeda } from "./formatarMoeda.js";


// pegando o gridCards, será nele que iremos montar os cards através do objeto carros
const gridCards = document.querySelector('#gridCards');

// percorrer o array de objetos carros e, PARA CADA OBJETO, gere um card com as informações desejadas
carros.forEach(carro => {
    // montando os cards dentro do gridCards
    gridCards.innerHTML += `
   <div class="col-md-6 col-lg-4 my-3">
        <a href="" class="text-decoration-none">
            <div class="card">
                <img src="${carro.foto}" class="card-img-top" alt="${carro.modelo} - ${carro.marca}">
                <div class="card-body">
                    <h5 class="card-title">${carro.modelo} - ${carro.marca}</h5>
                    <div class="d-flex justify-content-between mb-2">
                        <p>${carro.cor}</p>
                        <p>${carro.ano}</p>
                    </div>
                    <div class="d-flex justify-content-between m-0 mb-2">
                        <p>${carro.transmissao}</p>
                        <p>${carro.combustivel}</p>
                    </div>
                    <h4 class="text-center text-danger">${formatarMoeda(carro.preco)}</h4>
                </div>
            </div>
        </a>
    </div>
    `
});
document.querySelector('#totalCarros').textContent = carros.length;

