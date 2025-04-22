// Faça uma pesquisa de todos os produtos ordenados dos produtos mais baratos para os mais caros;

const database = 'bd3_Atv3';

use(database);

// db.bd3_atv3_produtos.find().sort({ valor: 1 })

const produtos = db.bd3_atv3_produtos.find().sort({ valor: 1 }).toArray();

console.log(produtos)

// Usei o toArray() junto com console.log() para visualizar todos os 50 documentos de uma vez, pois a extensão do MongoDB no VSCode exibe apenas 20 por padrão na interface visual.