const users = [
	{
		"nome": "Anderson Gabriel Monteiro",
		"idade": 43,
		"cpf": "196.996.419-75",
		"rg": "23.682.334-6",
		"data_nasc": "24/01/1981",
		"sexo": "Masculino",
		"signo": "Aquário",
		"mae": "Alana Isabel",
		"pai": "Rodrigo Kaique Thales Monteiro",
		"email": "anderson.gabriel.monteiro@ortovip.com.br",
		"senha": "PAf6ahrzrt",
		"cep": "59076-680",
		"endereco": "Rua Professor Djalma Santos",
		"numero": 806,
		"bairro": "Lagoa Nova",
		"cidade": "Natal",
		"estado": "RN",
		"telefone_fixo": "(84) 2510-9810",
		"celular": "(84) 99100-2048",
		"altura": "1,74",
		"peso": 55,
		"tipo_sanguineo": "B+",
		"cor": "amarelo"
	},
	{
		"nome": "Fernanda Cláudia Maya Moreira",
		"idade": 56,
		"cpf": "387.931.959-66",
		"rg": "32.294.065-5",
		"data_nasc": "23/03/1968",
		"sexo": "Feminino",
		"signo": "Áries",
		"mae": "Eloá Elza",
		"pai": "Rodrigo Ryan Enzo Moreira",
		"email": "fernanda_claudia_moreira@novotempo.com",
		"senha": "zcIdm87us5",
		"cep": "60543-395",
		"endereco": "Rua NE 02",
		"numero": 424,
		"bairro": "Bom Jardim",
		"cidade": "Fortaleza",
		"estado": "CE",
		"telefone_fixo": "(85) 2712-6561",
		"celular": "(85) 99838-6282",
		"altura": "1,74",
		"peso": 54,
		"tipo_sanguineo": "B-",
		"cor": "vermelho"
	},
	{
		"nome": "Antonella Raquel Luzia Cavalcanti",
		"idade": 48,
		"cpf": "211.953.510-89",
		"rg": "48.685.862-5",
		"data_nasc": "05/01/1976",
		"sexo": "Feminino",
		"signo": "Capricórnio",
		"mae": "Lara Isabela Giovana",
		"pai": "Severino Tiago Cavalcanti",
		"email": "antonella_raquel_cavalcanti@jsagromecanica.com.br",
		"senha": "pAC53e2MBq",
		"cep": "84060-250",
		"endereco": "Rua Magnólia",
		"numero": 481,
		"bairro": "Contorno",
		"cidade": "Ponta Grossa",
		"estado": "PR",
		"telefone_fixo": "(42) 2530-1230",
		"celular": "(42) 98508-1696",
		"altura": "1,55",
		"peso": 57,
		"tipo_sanguineo": "B-",
		"cor": "azul"
	},
	{
		"nome": "Clarice Eduarda da Conceição",
		"idade": 79,
		"cpf": "741.337.810-82",
		"rg": "41.523.031-7",
		"data_nasc": "15/04/1945",
		"sexo": "Feminino",
		"signo": "Áries",
		"mae": "Sandra Alícia Joana",
		"pai": "Carlos Marcelo da Conceição",
		"email": "clariceeduardadaconceicao@goldfinger.com.br",
		"senha": "QcQ7pIhZQg",
		"cep": "67110-680",
		"endereco": "Passagem André Luís",
		"numero": 724,
		"bairro": "Águas Lindas",
		"cidade": "Ananindeua",
		"estado": "PA",
		"telefone_fixo": "(91) 2678-3880",
		"celular": "(91) 98639-2239",
		"altura": "1,56",
		"peso": 77,
		"tipo_sanguineo": "B-",
		"cor": "roxo"
	},
	{
		"nome": "Manuel Noah da Mota",
		"idade": 30,
		"cpf": "704.807.660-70",
		"rg": "42.008.323-6",
		"data_nasc": "05/05/1994",
		"sexo": "Masculino",
		"signo": "Touro",
		"mae": "Malu Isabela",
		"pai": "Miguel Kevin Caio da Mota",
		"email": "manuel-damota96@julietavinhas.fot.br",
		"senha": "j58Js39WNT",
		"cep": "29114-440",
		"endereco": "Rua São Pedro",
		"numero": 674,
		"bairro": "São Torquato",
		"cidade": "Vila Velha",
		"estado": "ES",
		"telefone_fixo": "(27) 3786-1301",
		"celular": "(27) 98183-0509",
		"altura": "1,88",
		"peso": 93,
		"tipo_sanguineo": "B+",
		"cor": "azul"
	},
	{
		"nome": "Hugo Juan Davi das Neves",
		"idade": 56,
		"cpf": "216.122.496-47",
		"rg": "18.819.363-7",
		"data_nasc": "04/05/1968",
		"sexo": "Masculino",
		"signo": "Touro",
		"mae": "Analu Maya",
		"pai": "Lorenzo Juan Miguel das Neves",
		"email": "hugo_dasneves@deere.com",
		"senha": "73WN3aZWMp",
		"cep": "58079-794",
		"endereco": "Rua Espedito Delmiro Santos",
		"numero": 488,
		"bairro": "Grotão",
		"cidade": "João Pessoa",
		"estado": "PB",
		"telefone_fixo": "(83) 3528-8160",
		"celular": "(83) 98584-7742",
		"altura": "1,82",
		"peso": 107,
		"tipo_sanguineo": "B-",
		"cor": "laranja"
	},
	{
		"nome": "Elias João Leandro da Luz",
		"idade": 60,
		"cpf": "867.625.037-56",
		"rg": "27.554.635-4",
		"data_nasc": "23/03/1964",
		"sexo": "Masculino",
		"signo": "Áries",
		"mae": "Josefa Giovanna",
		"pai": "Carlos Theo Henrique da Luz",
		"email": "elias_daluz@alstom.com",
		"senha": "d7iFsoGI5J",
		"cep": "57316-476",
		"endereco": "Rua Rio Grande do Norte",
		"numero": 541,
		"bairro": "Nova Esperança",
		"cidade": "Arapiraca",
		"estado": "AL",
		"telefone_fixo": "(82) 3926-2713",
		"celular": "(82) 99174-3618",
		"altura": "1,70",
		"peso": 61,
		"tipo_sanguineo": "O-",
		"cor": "vermelho"
	},
	{
		"nome": "Luna Rosângela Maria Castro",
		"idade": 41,
		"cpf": "780.620.173-46",
		"rg": "14.148.644-2",
		"data_nasc": "27/04/1983",
		"sexo": "Feminino",
		"signo": "Touro",
		"mae": "Esther Emily Elisa",
		"pai": "Daniel César Castro",
		"email": "luna-castro88@solutionimoveis.com.br",
		"senha": "WjkaHdNKp5",
		"cep": "79833-700",
		"endereco": "Rua Apolônia Melo",
		"numero": 627,
		"bairro": "Canaã I",
		"cidade": "Dourados",
		"estado": "MS",
		"telefone_fixo": "(67) 3976-1334",
		"celular": "(67) 99250-4563",
		"altura": "1,57",
		"peso": 61,
		"tipo_sanguineo": "A+",
		"cor": "vermelho"
	},
	{
		"nome": "Mário Benjamin Antonio Lima",
		"idade": 52,
		"cpf": "371.703.423-59",
		"rg": "49.645.895-4",
		"data_nasc": "07/04/1972",
		"sexo": "Masculino",
		"signo": "Áries",
		"mae": "Bruna Louise Cláudia",
		"pai": "Lucas Henrique Gustavo Lima",
		"email": "mario_lima@esctech.com.br",
		"senha": "rJY8I99x2A",
		"cep": "96845-285",
		"endereco": "Rua Coréia do Sul",
		"numero": 702,
		"bairro": "Bom Jesus",
		"cidade": "Santa Cruz do Sul",
		"estado": "RS",
		"telefone_fixo": "(51) 3890-1483",
		"celular": "(51) 98836-3467",
		"altura": "1,83",
		"peso": 63,
		"tipo_sanguineo": "A-",
		"cor": "vermelho"
	},
	{
		"nome": "Yasmin Giovanna Brito",
		"idade": 31,
		"cpf": "993.798.490-44",
		"rg": "35.641.701-3",
		"data_nasc": "08/05/1993",
		"sexo": "Feminino",
		"signo": "Touro",
		"mae": "Raquel Carolina",
		"pai": "Eduardo Yuri Brito",
		"email": "yasmin_brito@vmetaiscba.com.br",
		"senha": "GFBwXp0HTE",
		"cep": "74620-080",
		"endereco": "Rua 5",
		"numero": 681,
		"bairro": "Setor Morais",
		"cidade": "Goiânia",
		"estado": "GO",
		"telefone_fixo": "(62) 2714-9920",
		"celular": "(62) 99811-8650",
		"altura": "1,78",
		"peso": 73,
		"tipo_sanguineo": "A+",
		"cor": "verde"
	}
]


function allUsers() {
    return users

}


module.exports = {
    allUsers
}