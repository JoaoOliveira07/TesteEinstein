import { Cor } from "./corEnum";
import { Nacionalidade } from "./nacionalidadeEnum";
import { Bebida } from "./bebidaEnum";
import { Cigarro } from "./cigarroEnum";
import { Animal } from "./animalEnum";

export class Casa {
  public id: number;
  public cor: Cor;
  public nacionalidade: Nacionalidade;
  public bebida: Bebida;
  public cigarro: Cigarro;
  public animal: Animal;
  public casaAnterior: Casa;
  public proximaCasa: Casa;
  
  constructor(cor: Cor, nacionalidade: Nacionalidade, bebida: Bebida, cigarro: Cigarro, animal: Animal){
    this.cor = cor;
    this.nacionalidade = nacionalidade;
    this.bebida = bebida;
    this.cigarro = cigarro;
    this.animal = animal;
}

  public InglesVermelho() : boolean{
    return this.nacionalidade == Nacionalidade.Inglesa && this.cor == Cor.Vermelha;
  }

  public SuecoCachorro() : boolean {
    return this.nacionalidade == Nacionalidade.Sueca && this.animal == Animal.Cachorros;
  }
/*
  public BlendsGato() : boolean{
    return this.cigarro == Cigarro.Blends && (this.casaAnterior.animal == Animal.Gato || this.proximaCasa.animal == Animal.Gato)
  }*/

}



