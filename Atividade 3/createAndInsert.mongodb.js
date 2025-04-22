const database = 'bd3_Atv3';

use(database);

db['bd3_atv3_produtos'].insertMany(
    [
        {
            "nome": "Jogo de Facas Inox",
            "valor": 431.86,
            "quantidade_estoque": 66,
            "fabricante": "ConfortLar",
            "categoria": "Organização",
            "descricao": "Jogo de Facas Inox, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Organização."
        },
        {
            "nome": "Panela de Pressão 4,5L",
            "valor": 108.08,
            "quantidade_estoque": 33,
            "fabricante": "ConfortLar",
            "categoria": "Sala",
            "descricao": "Panela de Pressão 4,5L, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Escorredor de Louça Inox",
            "valor": 332.57,
            "quantidade_estoque": 97,
            "fabricante": "OrgaFácil",
            "categoria": "Organização",
            "descricao": "Escorredor de Louça Inox, ideal para uso doméstico. Produzido por OrgaFácil, oferece qualidade e praticidade na categoria Organização."
        },
        {
            "nome": "Conjunto de Potes Herméticos",
            "valor": 142.4,
            "quantidade_estoque": 70,
            "fabricante": "TopHome",
            "categoria": "Sala",
            "descricao": "Conjunto de Potes Herméticos, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Lixeira com Tampa 30L",
            "valor": 749.1,
            "quantidade_estoque": 92,
            "fabricante": "LarIdeal",
            "categoria": "Sala",
            "descricao": "Lixeira com Tampa 30L, ideal para uso doméstico. Produzido por LarIdeal, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Tapete para Banheiro Antiderrapante",
            "valor": 639.11,
            "quantidade_estoque": 98,
            "fabricante": "CasaBella",
            "categoria": "Quarto",
            "descricao": "Tapete para Banheiro Antiderrapante, ideal para uso doméstico. Produzido por CasaBella, oferece qualidade e praticidade na categoria Quarto."
        },
        {
            "nome": "Conjunto de Toalhas",
            "valor": 361.27,
            "quantidade_estoque": 88,
            "fabricante": "DecorMais",
            "categoria": "Limpeza",
            "descricao": "Conjunto de Toalhas, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Vassoura Mágica 360°",
            "valor": 237.84,
            "quantidade_estoque": 44,
            "fabricante": "CasaBella",
            "categoria": "Decoração",
            "descricao": "Vassoura Mágica 360°, ideal para uso doméstico. Produzido por CasaBella, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Mop Giratório",
            "valor": 450.41,
            "quantidade_estoque": 32,
            "fabricante": "HigiLar",
            "categoria": "Decoração",
            "descricao": "Mop Giratório, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Pá de Lixo com Cabo Longo",
            "valor": 393.02,
            "quantidade_estoque": 9,
            "fabricante": "DecorMais",
            "categoria": "Banheiro",
            "descricao": "Pá de Lixo com Cabo Longo, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Banheiro."
        },
        {
            "nome": "Relógio de Parede Moderno",
            "valor": 627.19,
            "quantidade_estoque": 18,
            "fabricante": "TopHome",
            "categoria": "Organização",
            "descricao": "Relógio de Parede Moderno, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Organização."
        },
        {
            "nome": "Quadro Decorativo Floral",
            "valor": 401.11,
            "quantidade_estoque": 34,
            "fabricante": "CasaBella",
            "categoria": "Cozinha",
            "descricao": "Quadro Decorativo Floral, ideal para uso doméstico. Produzido por CasaBella, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Caixa Organizadora Dobrável",
            "valor": 380.94,
            "quantidade_estoque": 45,
            "fabricante": "DecorMais",
            "categoria": "Limpeza",
            "descricao": "Caixa Organizadora Dobrável, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Cesto de Roupas em Tecido",
            "valor": 186.73,
            "quantidade_estoque": 88,
            "fabricante": "CasaBella",
            "categoria": "Limpeza",
            "descricao": "Cesto de Roupas em Tecido, ideal para uso doméstico. Produzido por CasaBella, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Travesseiro Antialérgico",
            "valor": 395.99,
            "quantidade_estoque": 96,
            "fabricante": "CasaBella",
            "categoria": "Cozinha",
            "descricao": "Travesseiro Antialérgico, ideal para uso doméstico. Produzido por CasaBella, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Jogo de Lençol Queen",
            "valor": 105.95,
            "quantidade_estoque": 23,
            "fabricante": "HigiLar",
            "categoria": "Organização",
            "descricao": "Jogo de Lençol Queen, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Organização."
        },
        {
            "nome": "Cortina Blackout",
            "valor": 50.3,
            "quantidade_estoque": 33,
            "fabricante": "LarIdeal",
            "categoria": "Limpeza",
            "descricao": "Cortina Blackout, ideal para uso doméstico. Produzido por LarIdeal, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Abajur de Mesa",
            "valor": 216.78,
            "quantidade_estoque": 50,
            "fabricante": "HigiLar",
            "categoria": "Organização",
            "descricao": "Abajur de Mesa, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Organização."
        },
        {
            "nome": "Porta-Retrato de Vidro",
            "valor": 133.94,
            "quantidade_estoque": 9,
            "fabricante": "HigiLar",
            "categoria": "Decoração",
            "descricao": "Porta-Retrato de Vidro, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Poltrona Decorativa",
            "valor": 529.64,
            "quantidade_estoque": 46,
            "fabricante": "TopHome",
            "categoria": "Sala",
            "descricao": "Poltrona Decorativa, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Porta-Condimentos Giratório",
            "valor": 553.25,
            "quantidade_estoque": 95,
            "fabricante": "ConfortLar",
            "categoria": "Quarto",
            "descricao": "Porta-Condimentos Giratório, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Quarto."
        },
        {
            "nome": "Ralador Multifuncional",
            "valor": 98.63,
            "quantidade_estoque": 70,
            "fabricante": "TopHome",
            "categoria": "Cozinha",
            "descricao": "Ralador Multifuncional, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Tábua de Corte Bambu",
            "valor": 520.82,
            "quantidade_estoque": 59,
            "fabricante": "ConfortLar",
            "categoria": "Decoração",
            "descricao": "Tábua de Corte Bambu, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Espátulas de Silicone",
            "valor": 229.62,
            "quantidade_estoque": 55,
            "fabricante": "DecorMais",
            "categoria": "Limpeza",
            "descricao": "Espátulas de Silicone, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Filtro de Água Compacto",
            "valor": 250.84,
            "quantidade_estoque": 90,
            "fabricante": "DecorMais",
            "categoria": "Sala",
            "descricao": "Filtro de Água Compacto, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Porta-Sabonete Líquido",
            "valor": 679.82,
            "quantidade_estoque": 10,
            "fabricante": "LarIdeal",
            "categoria": "Sala",
            "descricao": "Porta-Sabonete Líquido, ideal para uso doméstico. Produzido por LarIdeal, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Suporte para Escovas de Dente",
            "valor": 730.12,
            "quantidade_estoque": 31,
            "fabricante": "HigiLar",
            "categoria": "Quarto",
            "descricao": "Suporte para Escovas de Dente, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Quarto."
        },
        {
            "nome": "Dispenser de Detergente",
            "valor": 265.6,
            "quantidade_estoque": 54,
            "fabricante": "CasaBella",
            "categoria": "Decoração",
            "descricao": "Dispenser de Detergente, ideal para uso doméstico. Produzido por CasaBella, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Esponja de Silicone",
            "valor": 374.08,
            "quantidade_estoque": 34,
            "fabricante": "OrgaFácil",
            "categoria": "Limpeza",
            "descricao": "Esponja de Silicone, ideal para uso doméstico. Produzido por OrgaFácil, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Escova Sanitária com Suporte",
            "valor": 523.26,
            "quantidade_estoque": 44,
            "fabricante": "OrgaFácil",
            "categoria": "Limpeza",
            "descricao": "Escova Sanitária com Suporte, ideal para uso doméstico. Produzido por OrgaFácil, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Suporte de Papel Toalha",
            "valor": 473.55,
            "quantidade_estoque": 93,
            "fabricante": "TopHome",
            "categoria": "Banheiro",
            "descricao": "Suporte de Papel Toalha, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Banheiro."
        },
        {
            "nome": "Fruteira de Chão",
            "valor": 456.5,
            "quantidade_estoque": 11,
            "fabricante": "TopHome",
            "categoria": "Quarto",
            "descricao": "Fruteira de Chão, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Quarto."
        },
        {
            "nome": "Assento Sanitário Almofadado",
            "valor": 713.18,
            "quantidade_estoque": 87,
            "fabricante": "ConfortLar",
            "categoria": "Organização",
            "descricao": "Assento Sanitário Almofadado, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Organização."
        },
        {
            "nome": "Jogo de Copos de Vidro",
            "valor": 697.62,
            "quantidade_estoque": 71,
            "fabricante": "HigiLar",
            "categoria": "Limpeza",
            "descricao": "Jogo de Copos de Vidro, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Conjunto de Pratos Cerâmicos",
            "valor": 439.79,
            "quantidade_estoque": 46,
            "fabricante": "ConfortLar",
            "categoria": "Sala",
            "descricao": "Conjunto de Pratos Cerâmicos, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Batedor de Ovos Manual",
            "valor": 449.85,
            "quantidade_estoque": 6,
            "fabricante": "ConfortLar",
            "categoria": "Decoração",
            "descricao": "Batedor de Ovos Manual, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Porta-Roupas Dobrável",
            "valor": 312.67,
            "quantidade_estoque": 32,
            "fabricante": "TopHome",
            "categoria": "Sala",
            "descricao": "Porta-Roupas Dobrável, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Cabide de Veludo Antideslizante",
            "valor": 557.31,
            "quantidade_estoque": 84,
            "fabricante": "OrgaFácil",
            "categoria": "Limpeza",
            "descricao": "Cabide de Veludo Antideslizante, ideal para uso doméstico. Produzido por OrgaFácil, oferece qualidade e praticidade na categoria Limpeza."
        },
        {
            "nome": "Saboneteira em Inox",
            "valor": 730.17,
            "quantidade_estoque": 35,
            "fabricante": "HigiLar",
            "categoria": "Quarto",
            "descricao": "Saboneteira em Inox, ideal para uso doméstico. Produzido por HigiLar, oferece qualidade e praticidade na categoria Quarto."
        },
        {
            "nome": "Balde Multiuso 10L",
            "valor": 785.81,
            "quantidade_estoque": 71,
            "fabricante": "ConfortLar",
            "categoria": "Cozinha",
            "descricao": "Balde Multiuso 10L, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Suporte para Temperos de Parede",
            "valor": 492.17,
            "quantidade_estoque": 16,
            "fabricante": "ConfortLar",
            "categoria": "Cozinha",
            "descricao": "Suporte para Temperos de Parede, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Espelho de Parede com Moldura",
            "valor": 112.26,
            "quantidade_estoque": 50,
            "fabricante": "TopHome",
            "categoria": "Cozinha",
            "descricao": "Espelho de Parede com Moldura, ideal para uso doméstico. Produzido por TopHome, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Garrafa Térmica 1L",
            "valor": 225.78,
            "quantidade_estoque": 41,
            "fabricante": "ConfortLar",
            "categoria": "Cozinha",
            "descricao": "Garrafa Térmica 1L, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Cozinha."
        },
        {
            "nome": "Pipoqueira de Micro-ondas",
            "valor": 783.31,
            "quantidade_estoque": 19,
            "fabricante": "ConfortLar",
            "categoria": "Decoração",
            "descricao": "Pipoqueira de Micro-ondas, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Rodo com Cabo Extensível",
            "valor": 696.92,
            "quantidade_estoque": 38,
            "fabricante": "LarIdeal",
            "categoria": "Sala",
            "descricao": "Rodo com Cabo Extensível, ideal para uso doméstico. Produzido por LarIdeal, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Luminária de Teto LED",
            "valor": 767.83,
            "quantidade_estoque": 37,
            "fabricante": "DecorMais",
            "categoria": "Decoração",
            "descricao": "Luminária de Teto LED, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Decoração."
        },
        {
            "nome": "Aparador de Livros Decorativo",
            "valor": 761.7,
            "quantidade_estoque": 89,
            "fabricante": "OrgaFácil",
            "categoria": "Quarto",
            "descricao": "Aparador de Livros Decorativo, ideal para uso doméstico. Produzido por OrgaFácil, oferece qualidade e praticidade na categoria Quarto."
        },
        {
            "nome": "Tapete de Entrada Vinil",
            "valor": 452.24,
            "quantidade_estoque": 71,
            "fabricante": "ConfortLar",
            "categoria": "Sala",
            "descricao": "Tapete de Entrada Vinil, ideal para uso doméstico. Produzido por ConfortLar, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Cortina de Cozinha com Estampa",
            "valor": 798.24,
            "quantidade_estoque": 23,
            "fabricante": "DecorMais",
            "categoria": "Sala",
            "descricao": "Cortina de Cozinha com Estampa, ideal para uso doméstico. Produzido por DecorMais, oferece qualidade e praticidade na categoria Sala."
        },
        {
            "nome": "Conjunto de Xícaras para Café",
            "valor": 408.75,
            "quantidade_estoque": 34,
            "fabricante": "OrgaFácil",
            "categoria": "Banheiro",
            "descricao": "Conjunto de Xícaras para Café, ideal para uso doméstico. Produzido por OrgaFácil, oferece qualidade e praticidade na categoria Banheiro."
        }
    ]
);