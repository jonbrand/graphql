const db = require("../../../db");

module.exports = {
  Usuario: {
    perfil(usuario) {
      return db.perfis.find(perfil => perfil.id === usuario.perfil)
    }
  },
  Query: {
    usuarios(obj, args) {
      return db.usuarios.find((db) => db.id === args.id);
    },
    usuario(_, args) {
      const { id, nome } = args;

      if (id) return db.usuarios.find((usuario) => usuario.id === id);

      return db.usuarios.find((usuario) => usuario.nome === nome);
    },
  }
}