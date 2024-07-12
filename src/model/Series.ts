import { Midias } from "./Midias";

export class Series extends Midias {
    constructor(id: number, nome: string, tipo: number, opcao: number) {
        super(id, nome, tipo, opcao);
    }

    visualizar(): void {
        console.log("*****************************************************");
        console.log("Dados da Mídia:");
        console.log("*****************************************************");
        console.log("Nome: " + this.nome);
        console.log("Código: " + this.id);
        console.log("Tipo: Série");
        console.log("*****************************************************");
    }
}
