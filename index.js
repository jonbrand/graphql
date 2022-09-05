const { gql, ApolloServer } = require("apollo-server");

const produtos = [
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
];

const usuarios = [
  {
    id: 1,
    nome: 'Jonatas',
    idade: 26,
    ativo: true,
    salario: 10000.00,
    tecnologias: [ "Graphql", "Node", "ReactJS"]
  },
  {
    id: 2,
    nome: 'Isiane',
    idade: 24,
    ativo: true,
    salario: 15000.00,
    tecnologias: ["ReactJS"]
  },
  {
    id: 3,
    nome: 'Davi',
    idade: 26,
    ativo: true,
    salario: 20000.00,
    tecnologias: ["Node", "ReactJS"]
  },
]

// definicao de tipos dos valores
const typeDefs = gql`
  type Produto {
    id: ID
    nome: String
    valor: Int
  }

  type Usuario {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    tecnologias: [String!]!
  }
  
  type Query {
    usuarios: [Usuario]
    produtos: [Produto]
    usuario(id: Int, nome: String): Usuario 
  }
`;

// definicao de valores
const resolvers = {
  Query: {
    usuarios() {
      return usuarios
    },
    produtos() {
      return produtos
    },
    usuario(_, args) {
      const { id, nome } = args;

      if (id) return usuarios.find((usuario) => usuario.id === id);

      return usuarios.find((usuario) => usuario.nome === nome);
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen();