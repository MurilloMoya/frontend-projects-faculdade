import { formatarMoeda } from './formatarMoeda.js';

document.addEventListener('DOMContentLoaded',()=>{
    const form=document.querySelector('#dados')
    const cotacoes=document.querySelector('#cotacoes')

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const tipoPlano= document.querySelector('#tipoPlano');
        const valorPlano=Number(tipoPlano.value);
        const nomePlano=tipoPlano.options[tipoPlano.selectedIndex].text;

        const dependentes = Number(document.querySelector('#dependentes').value);

        const valMensal = valorPlano + ((valorPlano * dependentes) / 2);

        const tr = document.createElement('tr');
        tr.innerHTML += `
            <td>${nome}</td>
            <td>${nomePlano}</td>
            <td>${formatarMoeda(valorPlano)}</td>
            <td>${dependentes}</td>
            <td>${formatarMoeda(valMensal)}</td>
        `

        cotacoes.prepend(tr);
        form.reset();
    })
})