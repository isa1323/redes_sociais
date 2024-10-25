const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais(params) {
    const res = await fetch(url);
    const dados = await res.jons();
    console.log(dados);
}