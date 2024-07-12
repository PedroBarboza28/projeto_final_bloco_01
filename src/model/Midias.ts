export abstract class Midias {
    visualizar() {
        throw new Error("Method not implemented.");
    }

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _opcao: number;

    constructor(id: number, nome: string, tipo: number, opcao: number){
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._opcao = opcao;
    }

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

   
	public get tipo(): number {
		return this._tipo;
	}

   
	public get opcao(): number {
		return this._opcao;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

   
	public set tipo(value: number) {
		this._tipo = value;
	}

   
	public set opcao(value: number) {
		this._opcao = value;
	}
    
}