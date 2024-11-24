import Employee from "./Employee";
import Role from "./Role";

class Bussiness {
  private _nome: string;
  private _cnpj: number;
  private _endereco: string;
  private _funcionario: Employee[] = [];
  private _cargo: Role[] = [];

  constructor(
    nome: string,
    cnpj: number,
    endereco: string,
    funcionario: Employee[],
    cargo: Role[]
  ) {
    (this._nome = nome),
      (this._cnpj = cnpj),
      (this._endereco = endereco),
      (this._funcionario = funcionario),
      (this._cargo = cargo);
  }

  adicionarFuncionario() {}
  removerFuncionario() {}
  listarFuncionario() {}
  adicionarCargo() {}
  atualizarCargo() {}
  listarCargo() {}
}

import PrimaryScreen from "../view/PrimayScreen";
import prompt from "prompt-sync";
import Role from "./Role";

let teclado = prompt();

export default class Employee {
  private _id: number;
  private _nome: string;
  private _cargo: Role;
  private _salario: number;

  constructor(nome: string, id: number, cargo: Role, salario: number) {
    (this._nome = nome),
      (this._id = id),
      (this._cargo = cargo),
      (this._salario = salario);
  }

  promover() {}
  detalharFuncionario() {}
}

export default class Role {
  private _id: number;
  private _nome: string;
  private _salario: number;

  constructor(id: number, nome: string, salario: number) {
    (this._id = id), (this._nome = nome), (this._salario = salario);
  }

  public get id(): number {
    return this._id;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }

  public set salario(salario: number) {
    this._salario = salario;
  }

  public get salario(): number {
    return this._salario;
  }

  atualizarSalario() {}
  detalharCargo() {}
}