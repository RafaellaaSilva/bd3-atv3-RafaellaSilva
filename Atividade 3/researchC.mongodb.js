// Faça uma pesquisa por produtos que estejam entre uma faixa de valor de forma que nem todo os produtos sejam exibidos;

const database = 'bd3_Atv3';

use(database);
db.bd3_atv3_produtos.find({ valor: { $gte: 400, $lte: 500 } })


