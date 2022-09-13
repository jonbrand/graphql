module.exports = {
  produtos: [
    {
      id: 1,
      nome: 'Queijo',
      valor: 10.00,
    },
    {
      id: 2,
      nome: 'Uva',
      valor: 15.00,
    }
  ],
  usuarios: [
    {
      id: 1,
      nome: 'Jonatas',
      idade: 26,
      ativo: true,
      salario: 10000.00,
      tecnologias: [ "Graphql", "Node", "ReactJS"],
      perfil: 2
    },
    {
      id: 2,
      nome: 'Isiane',
      idade: 24,
      ativo: true,
      salario: 15000.00,
      tecnologias: ["ReactJS"],
      perfil: 1
    },
    {
      id: 3,
      nome: 'Davi',
      idade: 26,
      ativo: true,
      salario: 20000.00,
      tecnologias: ["Node", "ReactJS"],
      perfil: 2
    },
  ],
  perfis: [
    { id: 1, descricao: "ADMIN" },
    { id: 2, descricao: "NORMAL" },
  ]
}