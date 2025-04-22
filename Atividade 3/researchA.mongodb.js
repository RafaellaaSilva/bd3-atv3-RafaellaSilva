// Faça uma pesquisa pelo produto mais caro;

const database = 'bd3_Atv3';

use(database);

db.bd3_atv3_produtos.find().sort({ valor: -1 }).limit(1)


