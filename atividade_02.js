/*1)*/
let apartamento = {
    quartos: 3,
    tipo: "Apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
};

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}° andar da ${apartamento.endereco}.`);

/*2)*/
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônico",
    peso: 1.5,
    preco: 3500.00,
};

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por R$${produtoEmbalado.preco}.00.`);

/*3)*/
class imovel {
    quartos;
    tipo;
    endereco;
    exibirInformacoes () {
        return`um ${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}.`;
    }

};
const casa = new imovel ()
casa.quartos = 4
casa.tipo = "apartamento"
casa.endereco = "Avenida Anapolís, 789 - Bairro Pintópolis"
console.log(casa.exibirInformacoes())

/*4)*/
class veiculo {
    marca;
    modelo;
    ano;
    exibirDetalhes () {
        return `marca: ${this.marca} modelo: ${this.modelo} ano: ${this.ano}.`;
    }
};

const carro = new veiculo();
carro.marca = "toyota";
carro.modelo = "corolla";
carro.ano = 2022;

const motocicleta = new veiculo();
motocicleta.marca = "Honda";
motocicleta.modelo = "CBR 600RR";
motocicleta.ano = 2021;


console.log("exibir detalhes do carro:");
console.log(carro.exibirDetalhes());


console.log("\nexibir detalhes da motocicleta");
console.log(motocicleta.exibirDetalhes());