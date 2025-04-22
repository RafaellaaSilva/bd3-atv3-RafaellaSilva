
const database = 'bd3_Atv3';

use(database);

// Usei o toArray() junto com console.log() para visualizar todos os 50 documentos de uma vez, pois a extensão do MongoDB no VSCode exibe apenas 20 por padrão na interface visual.
const produtos = db.bd3_atv3_produtos.find().toArray()
console.log(produtos)
