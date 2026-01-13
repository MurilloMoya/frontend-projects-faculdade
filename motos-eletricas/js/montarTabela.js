document.querySelector('#dadosMoto').addEventListener('click', function (e) {

    const tabela = window.querySelector('#tableMotos');
    const modeloMoto = document.querySelector('#modelo').value;
    const tempo = parseInt(document.querySelector('#tempoCarregamento').value);
    const autonomia = window.querySelector('#autonomia').value;
    const kmRodados = document.querySelector('#kmRodado').value;

    if (!modeloMoto && !tempo && !autonomia && !kmRodados) {
        alert('Preencha todos os campos!');
    }

    const numeroCarregamentos = kmRodados / autonomia;
    const gastoMes = numeroCarregamentos * tempo * 0.82;

    tabela.innerHTML = `
    <tr>
        <td>${modelo}</td>
        <td>${tempoCarregamento}</td>
        <td>${autonomiaKM}</td>
        <td>${kmRodados}</td>
        <td>${Math.ceil(numeroCarregamento)}</td>
        <td>${formatarMoeda(gasto)}</td>
    </tr>
    `;

    form.reset();
});
