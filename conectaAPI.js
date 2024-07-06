async function listaProdutos() {
  const conexao = await fetch('http://localhost:3000/produtos')
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

//Enviando novos produtos para o arquivo db.json
async function criaProduto(nome, valor, imagem) {
  const conexao = await fetch('http://localhost:3000/produtos', {
      method: "POST",
      headers: {
          "Content-type":"application/json"
      },
      body: JSON.stringify({
          nome: nome,
          valor: valor,
          imagem: imagem
      })
  });
  if (!conexao.ok) {
      throw new Error("Não foi possível enviar o produto.");
  }
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

//Exportando para outros arquivos .js
export const conectaApi = {
  listaProdutos,
  criaProduto
}