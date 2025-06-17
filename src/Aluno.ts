import { Pessoa } from './Pessoa';

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    matricula: string,
    email: string,
    public numero: number
  ) {
    super(nome, sobrenome, matricula, email);
  }
}
