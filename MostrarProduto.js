import { conectaApi } from "./conectaAPI.js"; 

const lista = document.querySelector("[data-lista]");

export default function constroiCard(id, nome, valor, imagem) {
    const produto= document.createElement("div");
    produto.className = "conteudo__produtos__card";
    produto.setAttribute("data-id", id);
    produto.innerHTML = `
        <img src="${imagem}" alt="Imagem do produto" class="produtos_card_image">
        <div class="protudos__card__info">
            <p>${nome}</p>
            <div class="produtos__card__preco">
                <p>R$${valor}</p>
                <img src="/assets/vector.png" class="delete-icon">
            </div>
        </div>
    `;

    return produto;
}

async function listaProdutos() {
    try {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(
        elemento.id, elemento.nome, elemento.valor, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos. Tente novamente mais tarde.</h2>`
    }
}

listaProdutos();

export const mostraProduto = {
    constroiCard,
    listaProdutos
}