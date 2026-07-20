
//   const produtos = [{
//     id: 1,
//     nome: "Notebook Gamer",
//     categoria: "Informática",
//     preco: 5499.90,
//     estoque: 4,
//     marca: "Dell",
//     disponivel: true
//   },
//   {
//     id: 2,
//     nome: "Smartphone Galaxy S25",
//     categoria: "Celulares",
//     preco: 4299.00,
//     estoque: 30,
//     marca: "Samsung",
//     disponivel: true
//   },
//   {
//     id: 3,
//     nome: "Fone Bluetooth",
//     categoria: "Áudio",
//     preco: 299.90,
//     estoque: 50,
//     marca: "JBL",
//     disponivel: true
//   },
//   {
//     id: 4,
//     nome: "Mouse Sem Fio",
//     categoria: "Periféricos",
//     preco: 149.90,
//     estoque: 0,
//     marca: "Logitech",
//     disponivel: false
//   },
//   {
//     id: 5,
//     nome: "Teclado Mecânico",
//     categoria: "Periféricos",
//     preco: 399.90,
//     estoque: 18,
//     marca: "Redragon",
//     disponivel: true
//   },
//   {
//     id: 6,
//     nome: "Monitor 27 Polegadas",
//     categoria: "Monitores",
//     preco: 1599.90,
//     estoque: 8,
//     marca: "LG",
//     disponivel: true
//   },
//   {
//     id: 7,
//     nome: "Cadeira Gamer",
//     categoria: "Móveis",
//     preco: 1299.90,
//     estoque: 5,
//     marca: "ThunderX3",
//     disponivel: true
//   },
//   {
//     id: 8,
//     nome: "HD Externo 1TB",
//     categoria: "Armazenamento",
//     preco: 379.90,
//     estoque: 22,
//     marca: "Seagate",
//     disponivel: true
//   },
//   {
//     id: 9,
//     nome: "Webcam Full HD",
//     categoria: "Acessórios",
//     preco: 249.90,
//     estoque: 3,
//     marca: "Logitech",
//     disponivel: true
//   },
//   {
//     id: 10,
//     nome: "Impressora Multifuncional",
//     categoria: "Impressoras",
//     preco: 899.90,
//     estoque: 3,
//     marca: "Epson",
//     disponivel: true
//   }
// ]; 

// produtos.map((produto) => {
//     if(produto.estoque < 5) {
//         console.log(produto.nome)

//     }
// });




const alunos = [
  { nome: "Lucas", nota: 7, tipoCota: "ampla concorrencia" },
  { nome: "Carla", nota: 9, tipoCota: "escola publica" },
  { nome: "Pedro", nota: 5, tipoCota: "baixa renda" },
  { nome: "Ana", nota: 8, tipoCota: "ampla concorrencia" },
  { nome: "Marcos", nota: 6, tipoCota: "escola publica" },
  { nome: "Beatriz", nota: 10, tipoCota: "baixa renda" },
  { nome: "Rafael", nota: 4, tipoCota: "ampla concorrencia" },
  { nome: "Fernanda", nota: 7, tipoCota: "escola publica" },
  { nome: "Gustavo", nota: 6, tipoCota: "baixa renda" },
  { nome: "Julia", nota: 9, tipoCota: "ampla concorrencia" }
];

// alunos.map((aluno) => {
//     if(aluno.tipoCota === 'escola publica') {
//         console.log(aluno.nome)

//     }
// })

// let soma = 0;

// alunos.map((aluno) => {
//     soma = aluno.nota + soma
// });

// let media = soma/alunos.length;
// console.log(`Média: ${media}`);

// let baixaRenda = alunos.filter((alunos) => alunos.tipoCota === 'baixa renda')

// baixaRenda.map((aluno) => {
//     console.log(aluno.nome);
    
// })

// let celulares = produtos.filter((celular) => celular.categoria === 'Celulares')

// console.log(celulares)

let aluno = alunos.find((aluno) => aluno.nome === 'Pedro')

console.log(aluno);
