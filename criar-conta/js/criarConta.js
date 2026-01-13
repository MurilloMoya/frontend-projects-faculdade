
// pegamos o formulário e atribuimos um listener para o submit, passando como parâmetro
document.querySelector('#criarConta').addEventListener('submit', function(e) {
    // cancelando o evento submit
    e.preventDefault();

    // pegar o tbody para depois colocar os dados do formulário
    const tbody = document.querySelector('#dadosConta');
    
    // pegando os dados do formulário
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#senha'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // if(document.querySelector('#tipoConta').value){}
    if(campos[4].value === '0'){
        alert('Selecione uma conta válida');
        campos[4].focus();
        return;
    }

    // Criar a tr
    const tr = document.createElement('tr');

    campos.forEach(campo => {
        // criar a coluna
        const td = document.createElement('td');

        // passar o valor que foi digitado para dentro da td criada
        td.textContent = campo.value;

        // Verificar se o campo é do tipo date
        if(campo.type === 'date'){
            const dataFormulario = campo.value;
            const data = new Date(dataFormulario + 'T12:00:00');
            td.textContent = data.toLocaleDateString('pt-BR');
            
        }

        // colocar a td dentro da tr
        tr.appendChild(td);
    });

    // colocar a tr no tbody
    // tbody.append(tr);
    tbody.prepend(tr);

    // Atualizar a data de atualização dos dados
    const dataAtual = new Date();
    document.querySelector('#dataAtualizacao').textContent = `
    Dados Atualizados em: ${dataAtual.toLocaleDateString()} -
     ${dataAtual.toLocaleTimeString()}`;
     
     
    // Limpar o formulário
    this.reset();  
})