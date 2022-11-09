import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Matheus", "123.456.789.10");
const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1);
contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.sacar(50);
console.log("Saldo cliente1: ", contaCorrenteCliente1.saldo);

const cliente2 = new Cliente("Carol", "321.654.987.01");
const contaCorrenteCliente2 = new ContaCorrente(1002, cliente2);
contaCorrenteCliente2.depositar(100);
contaCorrenteCliente2.sacar(30);
console.log("Saldo cliente2: ", contaCorrenteCliente2.saldo);

contaCorrenteCliente1.tranferir(50, contaCorrenteCliente2);
console.log("Saldo cliente1: ", contaCorrenteCliente1.saldo);
console.log("Saldo cliente2: ", contaCorrenteCliente2.saldo);
