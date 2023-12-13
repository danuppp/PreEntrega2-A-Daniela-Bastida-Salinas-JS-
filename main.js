//Calculadora para cotizar el estimado de aguinaldo o liquidación


function calcularAguinaldo(salarioDiario, diasTrabajados) {
    const formulaAguinaldo = 365 / 15;
    const aguinaldo = (salarioDiario * diasTrabajados) / formulaAguinaldo;
    return aguinaldo;
}

function calcularFiniquito(salarioDiario) {
    const finiquito = salarioDiario * 600;
    return finiquito;
}

let salarioMensual = Number(prompt("Ingrese su salario mensual"));
let salarioDiario = salarioMensual / 30;
let mesesLaborados = Number(prompt("¿Cuántos meses llevas laborados este año?"));
const diasTrabajados = mesesLaborados * 30;

let operacion;
do {
    operacion = prompt("¿Qué cálculo desea realizar? aguinaldo/finiquito").toLowerCase();
} while (operacion !== "aguinaldo" && operacion !== "finiquito");

switch (operacion) {
    case "aguinaldo":
        if (mesesLaborados >= 12) {
            const aguinaldoCalculado = calcularAguinaldo(salarioDiario, diasTrabajados);
            alert(`Tu aguinaldo corresponde a $${aguinaldoCalculado}`);
        } else {
            alert("No cumples con los requisitos para calcular el aguinaldo.");
        }
        break;
    case "finiquito":
        const finiquitoCalculado = calcularFiniquito(salarioDiario);
        alert(`Tu finiquito corresponde a $${finiquitoCalculado}`);
        break;
    default:
        alert("Operación no válida");
        break;
}