// Faça uma pesquisa que exclua produtos de duas categorias e mostre os produtos das outras categorias(a pesquisa deve ser feita em uma única "query") de forma que nem todo os produtos sejam exibidos;

const database = 'bd3_Atv3';

use(database);

// db.bd3_atv3_produtos.find({ categoria: { $nin: ["Cozinha", "Limpeza"] } })

const produtos = db.bd3_atv3_produtos.find({ categoria: { $nin: ["Cozinha", "Limpeza"] } }).toArray();

console.log(produtos)

// Usei o toArray() junto com console.log() para visualizar todos os 50 documentos de uma vez, pois a extensão do MongoDB no VSCode exibe apenas 20 por padrão na interface visual.