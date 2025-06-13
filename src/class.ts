/* ------- Classes com uma interface em comum -------- */
export interface AreaCalculavel {
  calcularArea(): number;
}

export class Circulo implements AreaCalculavel {
  constructor(public raio: number) {}
  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

export class Retangulo implements AreaCalculavel {
  constructor(public largura: number, public altura: number) {}
  calcularArea(): number {
    return this.largura * this.altura;
  }
}

/* ------- Subclasses com uma classe em comum -------- */

export abstract class Produto {
  constructor(public nome: string, public precoBase: number) {}
  abstract getPrecoFinal(): number;

  public static calcularTotal(produtos: Produto[]): number {
      return produtos.reduce((soma, produto) => soma + produto.getPrecoFinal(), 0);
    }
  }

export class Livro extends Produto {
  constructor(nome: string, precoBase: number, public autor: string) {
    super(nome, precoBase);
  }
  getPrecoFinal(): number {
    return this.precoBase;
  }
}

export class Eletronico extends Produto {
  constructor(nome: string, precoBase: number, public garantiaMeses: number) {
    super(nome, precoBase);
  }
  getPrecoFinal(): number {
    return this.precoBase * 1.10;
  }
}