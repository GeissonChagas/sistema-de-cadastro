async function buscaEndereco(cep){

    const mensagemErro = document.getElementById('erro')
    mensagemErro.textContent = ""

    try{

    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPconvertida = await consultaCEP.json();
    const cidade = document.getElementById('cidade')
    const logradouro = document.getElementById('endereco')
    const estado = document.getElementById('estado')
    const bairro = document.getElementById('bairro')

    cidade.value = consultaCEPconvertida.localidade;
    logradouro.value = consultaCEPconvertida.logradouro;
    estado.value = consultaCEPconvertida.uf;
    bairro.value = consultaCEPconvertida.bairro;


    if (consultaCEPconvertida.erro){
        throw Error ('CEP não existente!')
    }

    return consultaCEPconvertida;

    } catch (erro){
        mensagemErro.innerHTML = "CEP inválido!"

    }

}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));