let onibus = {
    rodas: 8,
    limitePassageiros: 45,
    portas: 2,
};

delete onibus.rodas;

console.log(onibus.rodas)

onibus.janelas = 25;

console.log(onibus);
console.log(onibus.janelas);
