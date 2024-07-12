import { Midias } from "../src/model/Midias";
import { Repository } from "../repository/Repository";

export class Controller implements Repository {

    private listaMidias: Array<Midias> = new Array<Midias>();
    private id: number = 0;

    gerarNumero(): number {
        return ++this.id;
    }

    procurarPorNumero(id: number): void {
        let buscarMidia = this.buscarNoArray(id);

        if (buscarMidia != null) {
            buscarMidia.visualizar();
        } else {
            console.log("\nConta número: " + id + " não foi encontrada!");
        }
    }

    listarMidias(): void {
        for (let midia of this.listaMidias) {
            midia.visualizar();
        }
    }

    cadastrar(midia: Midias): void {
        this.listaMidias.push(midia);
        console.log("\nA Mídia número: " + midia.id + " foi criada com sucesso!");
    }

    atualizar(midia: Midias): void {
        let buscaMidia = this.buscarNoArray(midia.id);

        if (buscaMidia != null) {
            this.listaMidias[this.listaMidias.indexOf(buscaMidia)] = midia;
            console.log("\nMídia número: " + midia.id + " foi atualizada com sucesso!");
        } else {
            console.log("\nA Mídia número " + midia.id + " não foi encontrada!");
        }
    }

    deletar(id: number): void {
        let buscaMidia = this.buscarNoArray(id);

        if (buscaMidia != null) {
            this.listaMidias.splice(this.listaMidias.indexOf(buscaMidia), 1);
            console.log("\nA Mídia número: " + id + " foi apagada com sucesso!");
        } else {
            console.log("\nA Mídia número " + id + " não foi encontrada!");
        }
    }

    public buscarNoArray(id: number): Midias | null {
        for (let midia of this.listaMidias) {
            if (midia.id === id) {
                return midia;
            }
        }
        return null;
    }
}
