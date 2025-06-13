import { Circulo, Retangulo, Livro, Eletronico, Produto, AreaCalculavel } from './class';

test('Tarefa 1: Calculo de Area', () => {
  const circulo: AreaCalculavel = new Circulo(10);
  expect(circulo.calcularArea()).toBeCloseTo(314.159);

  // testando agora quando há alteração de atributo :)
  (circulo as Circulo).raio = 2;
  expect(circulo.calcularArea()).toBeCloseTo(12.566);

  const retangulo: AreaCalculavel = new Retangulo(5, 10);
  expect(retangulo.calcularArea()).toBe(50);

  // testando agora quando há alteração de atributo :)
  (retangulo as Retangulo).largura = 4;
  (retangulo as Retangulo).altura = 4;
  expect(retangulo.calcularArea()).toBe(16);
});

test('Tarefa 2: Calculo de preço de produto', () => {
  const livro = new Livro('JO jantar secreto', 80, 'Raphael Montes');
  const notebook = new Eletronico('Notebook Pro', 7000, 12);
  const carrinhoDeCompras: Produto[] = [livro, notebook];
  const totalEsperado = 7780; //juntando livro + not e aumento de 10%
  expect(Produto.calcularTotal(carrinhoDeCompras)).toBeCloseTo(totalEsperado);


  // testando agora quando há alteração de atributo :)
  notebook.precoBase = 6000;
  const novoTotalEsperado = 6680; 
  expect(Produto.calcularTotal(carrinhoDeCompras)).toBeCloseTo(novoTotalEsperado);
});