// Faça uma pesquisa de todos os produtos ordenados dos produtos mais baratos para os mais caros de uma categoria específica;s;

const database = 'bd3_Atv3';

use(database);

db.bd3_atv3_produtos.find({ categoria: "Quarto" }).sort({ valor: 1 })
