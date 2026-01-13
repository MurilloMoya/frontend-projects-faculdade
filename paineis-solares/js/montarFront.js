document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#dados');
  const paineis = document.querySelector('#paineis');

  const consumoInput = document.querySelector('#consumo');
  const potenciaInput = document.querySelector('#potenciaPainel');
  const irradiacaoInput = document.querySelector('#irradiacaoSolar');
  const eficienciaInput = document.querySelector('#eficienciaSistema');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const consumo = Number(consumoInput.value);
    const potenciaPainel = Number(potenciaInput.value);
    const irradiacaoSolar = Number(irradiacaoInput.value);
    const eficienciaSistema = Number(eficienciaInput.value);

    const numParcelas =((consumo / (potenciaPainel * irradiacaoSolar * eficienciaSistema)) *30) /1000;

    const tr = document.createElement('tr');
    tr.innerHTML = `
       <td>${consumo}</td>
        <td>${potenciaPainel}</td>
        <td>${irradiacaoSolar}</td>
        <td>${eficienciaSistema}</td>
        <td>${numParcelas.toFixed(0)}</td>

    `;

    paineis.prepend(tr);
    
    form.reset();
  });

});
