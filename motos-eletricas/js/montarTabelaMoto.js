import { formatarMoeda } from "./formatarMoeda.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#dadosMotos");
  const motosTable = document.querySelector("#motosTable");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#modeloMoto").value.trim();
    const tempoCarregamento = Number(
      document.querySelector("#tempoCarregamento").value
    );
    const autonomiaKM = Number(document.querySelector("#autonomiaKM").value);
    const kmRodado = Number(document.querySelector("#kmRodado").value);

    // validação simples
    if (!nome || tempoCarregamento <= 0 || autonomiaKM <= 0 || kmRodado <= 0) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    const numCarregados = kmRodado / autonomiaKM;
    const numCarregamentosInteiro = Math.ceil(numCarregados);
    const gasto = numCarregamentosInteiro * tempoCarregamento * 0.82;

    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${nome}</td>
            <td>${tempoCarregamento}</td>
            <td>${autonomiaKM}</td>
            <td>${kmRodado}</td>
            <td>${numCarregamentosInteiro}</td>
            <td>${formatarMoeda(gasto)}</td>
        `;

    motosTable.prepend(tr);
    form.reset();
  });
});
