const { gql, ApolloServer } = require("apollo-server");

const db = {
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

// definicao de tipos dos valores
const typeDefs = gql`
  enum TipoPerfil {
    ADMIN
    NORMAL
  }

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
    perfil: Perfil
  }
  
  type Perfil {
    id: Int
    descricao: TipoPerfil
  }

  type Query {
    usuarios: [Usuario]
    produtos: [Produto]
    perfis: [Perfil]
    usuario(id: Int, nome: String): Usuario 
    produto(id: Int, nome: String): Produto 
  }
`;

// definicao de valores
const resolvers = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find(perfil => perfil.id === usuario.perfil)
    }
  },
  Query: {
    usuarios() {
      return db.usuarios
    },
    usuario(_, args) {
      const { id, nome } = args;

      if (id) return db.usuarios.find((usuario) => usuario.id === id);

      return db.usuarios.find((usuario) => usuario.nome === nome);
    },
    produtos() {
      return db.produtos
    },
    produto(_, args) {
      const { id, nome } = args;

      if (id) return db.produtos.find((produto) => produto.id === id);

      return db.produtos.find((produto) => produto.nome === nome);
    },
    perfis() {
      return db.perfis
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen();