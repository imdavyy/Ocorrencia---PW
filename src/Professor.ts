import { Pessoa } from './Pessoa';
import { Disciplina } from './Disciplina';

export class Professor extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    matricula: string,
    email: string,
    public disciplina: Disciplina
  ) {
    super(nome, sobrenome, matricula, email);
  }
}
