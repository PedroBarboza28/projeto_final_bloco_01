import read = require("readline-sync");

let tipoMidia = ["Filmes", "Séries"];
let filmes: FilmesG[] = [];
let series: SeriesG[] = [];
let nome: string, tipo: number, genero: string;


class FilmesG {
    constructor(public nome: string) { }
}

class SeriesG {
    constructor(public nome: string) { }
}


export function main(this: any) {

    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("        CINEMATRIX - Sua plataforma streaming        ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            Opções:                                  ");
    console.log("            1 - Cadastrar Mídia                      ");
    console.log("            2 - Listar Todas as Mídias               ");
    console.log("            3 - Atualizar Mídia                      ");
    console.log("            4 - Deletar Mídia                        ");
    console.log("            5 - Procurar por Classificação           ");
    console.log("            6 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    while (true) {
        exibirMenu();
        let opcao = read.questionInt("\nEntre com a opção desejada: ");

        switch (opcao) {
            case 1:

                console.log("\n\nCadastrar Séries ou Filmes\n\n");

                console.log("Digite o Nome da Mídia: ");
                nome = read.question("");

                console.log("Digite 1 Para Filmes e 2 Para séries: ");
                tipo = read.keyInSelect(tipoMidia, "", { cancel: false }) + 1;

                switch (tipo) {
                    case 1:
                        console.log("Filmes:");
                        filmes.push(new FilmesG(nome));
                        console.log("Filme cadastrado com sucesso!");
                        break;
                    case 2:
                        console.log("Séries: ");
                        series.push(new SeriesG(nome));
                        console.log("Série cadastrada com sucesso!");
                        break;
                }

                keyPress();

                break;
            case 2:

                console.log("\n\nListar todas as Mídias\n\n");

                console.log("Filmes:");
                listarFilmes();

                console.log("\nSéries:");
                listarSeries();

                keyPress();


                break;
            case 3:


                console.log("\n\nAtualizar Filmes ou Séries\n\n");

                console.log("Digite o nome da mídia: ");
                nome = read.question("");

                let midiaEncontrada: FilmesG | SeriesG | null = buscarMidia(nome);

                if (midiaEncontrada) {
                    console.log("Digite o novo nome da mídia: ");
                    let novoNome = read.question("");

                    midiaEncontrada.nome = novoNome;
                    console.log("Mídia atualizada com sucesso!");
                } else {
                    console.log("Mídia não encontrada!");
                }

                keyPress();

                break;
            case 4:

                console.log("\n\nDeletar Mídia\n\n");

                console.log("Digite o Nome Da Mídia: ");
                nome = read.question("");

                let indexFilme = filmes.findIndex((filme) => filme.nome === nome);
                let indexSerie = series.findIndex((serie) => serie.nome === nome);

                if (indexFilme !== -1) {
                    filmes.splice(indexFilme, 1);
                    console.log("Filme deletado com sucesso!");
                } else if (indexSerie !== -1) {
                    series.splice(indexSerie, 1);
                    console.log("Série deletada com sucesso!");
                } else {
                    console.log("Mídia não encontrada!");
                }

                keyPress();

                break;
            case 5:
                console.log("\nPor Classificação: ");

                console.log("\nDigite o Tipo de Mídia (Filmes ou Séries): ");
                genero = read.question("");

                if (genero.toLowerCase() === "filmes") {
                    console.log("Listando todos os filmes:");
                    listarFilmes();
                } else if (genero.toLowerCase() === "séries") {
                    console.log("Listando todas as séries:");
                    listarSeries();
                } else {
                    console.log("Tipo de mídia inválido!");
                }
                break;
            case 6:
                console.log("\nSaindo do programa...");
                process.exit(0);

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
    console.log("Projeto Desenvolvido por Pedro B Machado: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    read.prompt();
}

main();