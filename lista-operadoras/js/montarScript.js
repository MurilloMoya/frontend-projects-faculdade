import { listaConvenios } from "./convenios.js";

const gridConvenios = document.querySelector("#convenios");

function mostrarConvenios(lista) {
  gridConvenios.innerHTML = "";

  const filtrados = lista.filter((convenio) =>
      convenio.endereco_uf_sigla === "SP" || convenio.endereco_uf_sigla === "RJ"
  );

  filtrados.forEach((convenio) => {
    gridConvenios.innerHTML += `
            <div class="col-md-4 my-3">
            <div class="card">
            <div class="card-body">
            <h6 class="card-title">${convenio.razao_social}</h6>
            <p class="card-text m-0">${convenio.endereco_logradouro},${convenio.endereco_numero}</p>
            <p class="card-text mb-2">${convenio.endereco_bairro},${convenio.endereco_municipio_nome},${convenio.endereco_uf_sigla}</p>
            <a href="#" class="btn btn-primary">Acessar o site</a>
            </div>
            </div>
            </div>
        
        
        `;
  });
  const totalSp=filtrados.filter(convenio=>convenio.endereco_uf_sigla ==='SP').length;
  const totalRJ=filtrados.filter(convenio=>convenio.endereco_uf_sigla ==='RJ').length;
  const totalOutras=lista.length-(totalSp+totalRJ);


  document.querySelector('#totalSP').textContent=totalSp;
  document.querySelector('#totalRJ').textContent=totalRJ;
  document.querySelector('#totalOutrosEstados').textContent = filtrados.length;
  document.querySelector('#totalOutrosEstados').textContent=totalOutras;


}
mostrarConvenios(listaConvenios);
