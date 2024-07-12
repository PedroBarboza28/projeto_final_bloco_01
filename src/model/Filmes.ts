import { Midias } from "./Midias";

export class Filmes extends Midias {
    constructor(id: number, nome: string, tipo: number, opcao: number) {
        super(id, nome, tipo, opcao);
    }

    visualizar(): void {
        console.log("*****************************************************");
        console.log("Dados da Mídia:");
        console.log("*****************************************************");
        console.log("Nome da Série: " + this.nome);
        console.log("Código: " + this.id);
        console.log("Tipo: Filme");
        console.log("*****************************************************");
    }
}