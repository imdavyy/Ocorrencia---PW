import { Aluno } from './Aluno';
import { Professor } from './Professor';
import { Disciplina } from './Disciplina';

export class Ocorrencia {
  constructor(
    public aluno: Aluno,
    public professor: Professor,
    public disciplina: Disciplina,
    public data: Date,
    public motivo: string
  ) {}
}
