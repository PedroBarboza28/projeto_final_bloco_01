import { Midias } from "../src/model/Midias";

export interface Repository {

	procurarPorNumero(id: number): void;
	listarMidias(): void;
	cadastrar(midia: Midias): void;
	atualizar(midia: Midias): void;
	deletar(numero: number): void;
	gerarNumero(id: number): void;
    buscarNoArray(id: number): void;
	
}
