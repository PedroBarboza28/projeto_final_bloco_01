import read = require("readline-sync");
import { Filmes } from "./src/model/Filmes";
import { Series } from "./src/model/Series";
import { Controller } from "./controller/Controller";

export function main() {
    let controller: Controller = new Controller();
    let opcao, nome, id, tipo: any;
    const tipos = ['Filmes', 'Series'];
    let midia: any = null;

    const filmes: Filmes = new Filmes(controller.gerarNumero(), 'Filmes', 1, 1);
    filmes.visualizar();

    const series: Series = new Series(controller.gerarNumero(), 'Serie', 2, 2);
    series.visualizar();

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("        CINEMATRIX - Sua plataforma streaming        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            Opções:                                  ");
        console.log("            1 - Adicionar Mídia                      ");
        console.log("            2 - Listar Todas as Mídias               ");
        console.log("            3 - Consultar Mídia por id               ");
        console.log("            4 - Atualizar Filmes e Séries            ");
        console.log("            5 - Deletar Mídia                        ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = read.questionInt("");

        if (opcao == 6) {
            console.log("\nCINEMATRIX - Sua plataforma streaming!");
            sobre();
            console.log("");
            process.exit(0);
        }

        switch (opcao) {
            case 1 :
            console.log("\n\nCadastrar Mídia\n\n");

            tipo = read.keyInSelect(tipos, "", { cancel: false }) + 1;
            
                switch (tipo) {

                    case 1:
                        console.log("Digite o nome do Filme:");
                        nome = read.question("");
                        controller.cadastrar(new Filmes(controller.gerarNumero(), nome, tipo, opcao));
                        break;

                    case 2:
                        console.log("Digite o nome da Série: ");
                        nome = read.question("");
                        controller.cadastrar(new Series(controller.gerarNumero(), nome, tipo, opcao));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log("\n\nListar todas as Mídias\n\n");

                controller.listarMidias();

                keyPress();
                break;
            case 3:
                console.log("\n\nConsultar Mídias - por número\n\n");
                console.log("Digite o Código do Produto: ");
                id = read.questionInt("");
                controller.procurarPorNumero(id);

                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar Filmes e Séries\n\n");

                console.log("Digite o id da Mídia: ");
                id = read.questionInt("");

                midia = controller.buscarNoArray(id);

                if (midia != null) {
                    console.log("Digite o Nome: ");
                    nome = read.question("");
                    midia.nome = nome;
                    controller.atualizar(midia);
                    console.log("Projeto Atualizado com Sucesso!");
                } else {
                    console.log("\nA Conta número: " + id + " não foi encontrada!");
                }

                keyPress();
                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("\nDigite o id da Mídia: ");
                id = read.questionInt("");
                controller.deletar(id);

                keyPress();
                break;
           
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por Pedro b Machado: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    read.prompt();
}

main();
