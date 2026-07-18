const funcionarios = [
  {
    id: 1,
    nome: "João",
    idade: 28,
    cargo: "Desenvolvedor",
    salario: 6500,
    departamento: "TI",
    ativo: true
  },
  {
    id: 2,
    nome: "Maria",
    idade: 35,
    cargo: "Analista",
    salario: 4800,
    departamento: "Financeiro",
    ativo: true
  },
  {
    id: 3,
    nome: "Pedro",
    idade: 41,
    cargo: "Gerente",
    salario: 9800,
    departamento: "RH",
    ativo: false
  },
  {
    id: 4,
    nome: "Ana",
    idade: 24,
    cargo: "Estagiária",
    salario: 1800,
    departamento: "TI",
    ativo: true
  },
  {
    id: 5,
    nome: "Carlos",
    idade: 30,
    cargo: "Desenvolvedor",
    salario: 7200,
    departamento: "TI",
    ativo: true
  },
  {
    id: 6,
    nome: "Fernanda",
    idade: 29,
    cargo: "Designer",
    salario: 4200,
    departamento: "Marketing",
    ativo: true
  },
  {
    id: 7,
    nome: "Lucas",
    idade: 38,
    cargo: "Coordenador",
    salario: 8300,
    departamento: "Marketing",
    ativo: false
  },
  {
    id: 8,
    nome: "Juliana",
    idade: 27,
    cargo: "Analista",
    salario: 5100,
    departamento: "Financeiro",
    ativo: true
  },
  {
    id: 9,
    nome: "Ricardo",
    idade: 45,
    cargo: "Diretor",
    salario: 15000,
    departamento: "Administrativo",
    ativo: true
  },
  {
    id: 10,
    nome: "Beatriz",
    idade: 32,
    cargo: "Desenvolvedora",
    salario: 7600,
    departamento: "TI",
    ativo: false
  },
  {
    id: 11,
    nome: "Cecilia",
    idade: 19,
    cargo: "Advogada",
    salario: 7600,
    departamento: "Juridico",
    ativo: false
  }
];

// funcionarios.map((funcionario) => {
//     console.log(funcionario.idade)
// })

// funcionarios.map((funcionario) => {
//     console.log(`Meu nome é ${funcionario.nome}, minha profissão é ${funcionario.cargo} e meu departamento é ${funcionario.departamento}`);
    
// })

// funcionarios.map((funcionario) => {
//     console.log(funcionario.salario * 1.15)
// })

// console.log(funcionario)

// let funcionario = funcionarios.filter((funcionario) => funcionario.ativo)

// console.log(funcionario);

// let funcionario = funcionarios.filter((funcionario) => funcionario.ativo === false)

// console.log(funcionario);

// let funcionario = funcionarios.filter((funcionario) => funcionario.departamento === 'TI')

// console.log(funcionario);

// let funcionario = funcionarios.filter((funcionario) => funcionario.departamento === 'Financeiro')

// console.log(funcionario);

// let funcionario = funcionarios.filter((funcionario) => funcionario.cargo.toLowerCase().includes('desenvolvedor'))

// console.log(funcionario);

// let funcionario = funcionarios.filter((funcionario) => {
//     if(funcionario.salario > 7000) {
//         console.log(funcionario.salario)
//     }
// });

// let funcionario = funcionarios.filter((funcionario) => {
//     if(funcionario.salario < 5000) {
//         console.log(funcionario.salario)
//     };
// });


// let funcionario = funcionarios.filter((funcionario) => {
//     if(funcionario.idade > 30) {
//         console.log(funcionario.idade)
//     };
// });

// let funcionario = funcionarios.filter((funcionario) => {
//     if(funcionario.idade < 30) {
//         console.log(funcionario.idade)
//     };
// });

// let funcionario = funcionarios.filter((funcionario) => {
//     if(funcionario.salario >= 5000 && funcionario.salario <= 8000) {
//         console.log(funcionario.salario)
//     };
// });

// funcionarios.filter((funcionario) => {
//     if(funcionario.departamento === 'Marketing' || funcionario.departamento === 'TI') {
//         console.log(funcionario.nome)
//     };
// });

// let funcionario = funcionarios.find((funcionario) => funcionario.id === 4)

// let funcionario = funcionarios.find((funcionario) => funcionario.nome.toLowerCase().includes('ricardo'))

// console.log(funcionario);

// let funcionario = funcionarios.find((funcionario) => funcionario.ativo === false)

// console.log(funcionario);

// let funcionario = funcionarios.find((funcionario) => funcionario.cargo.toLowerCase().includes('desenvolvedor'))

// console.log(funcionario);

// let funcionario = funcionarios.find((funcionario) => funcionario.departamento.toLowerCase().includes('financeiro'))

// console.log(funcionario)

// let funcionario = funcionarios.find((funcionario) => {
//     if (funcionario.salario > 10000) {
//         console.log(funcionario.salario);
//     }
// })

// let funcionario = funcionarios.find((funcionario) => {
//     if (funcionario.idade < 25) {
//         console.log(funcionario.idade);
//     }
// })

// let funcionario = funcionarios.find((funcionario) => funcionario.cargo.toLowerCase().includes('gerente'))

// console.log(funcionario);

// let funcionario = funcionarios.find((funcionario) => funcionario.nome.toLowerCase().includes('ana'))

// console.log(funcionario);

// let funcionario = funcionarios.find((funcionario) => funcionario.departamento.toLowerCase().includes('juridico'))

// console.log(funcionario);