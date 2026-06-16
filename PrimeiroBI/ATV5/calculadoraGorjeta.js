const valorConta = 100;
const percentualGorjeta = 15;

function gorjeta (valorConta, percentualGorjeta) {
    return (valorConta * (percentualGorjeta / 100));
}

const totalPgto = (valorConta, gorjeta) => {
    return valorConta + gorjeta;
}

const valorGorjeta = gorjeta(valorConta, percentualGorjeta);
const total = totalPgto(valorConta, valorGorjeta);

console.log("Olá, o valor da Conta foi de: R$" + valorConta.toFixed(2) + 
            ", com a Gorjeta (15%) para o Garçon de: R$" + valorGorjeta.toFixed(2) + 
            ", seu total foi: R$" + total.toFixed(2));