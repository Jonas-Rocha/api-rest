// Criando essa classe para poder separar os erros de cliente e servidor.

class AppError {
  message: string;
  statusCode: number;

  // statusCode: number = 400, como eu estou definindo um valor padrão pro statusCode ele vira opcional na hora da chamada, pois ele sempre vai ser 400 quando nao informado.
  constructor(message: string, statusCode: number = 400) {
    //quando uso o this.variavel, eu estou me referindo a variavel global da classe.
    //já no construtor, se refere ao que vai ser instanciado(uma nova cópia)
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
