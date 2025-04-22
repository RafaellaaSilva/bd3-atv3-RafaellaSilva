// Faça uma pesquisa por produtos de duas categorias (a pesquisa deve ser feita em uma única "query") de forma que nem todo os produtos sejam exibidos;

const database = 'bd3_Atv3';

use(database);

db.bd3_atv3_produtos.find({ categoria: { $in: ["Decoração", "Sala"] } })
