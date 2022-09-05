const { gql, ApolloServer } = require("apollo-server");

// definicao de tipos dos valores
const typeDefs = gql`
  type Query {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
    tecnologias: [String!]!
  }
`;

// definicao de valores
const resolvers = {
  Query: {
    idade() {
      return 26;
    },
    salario() {
      return 10000,00;
    },
    nome() {
      return "Jonatas";
    },
    ativo() {
      return true;
    },
    id() {
      return 123456789
    },
    tecnologias() {
      return [ "Graphql", "Node", "ReactJS"]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen();