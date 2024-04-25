import {DataTypes } from "sequelize";
import sequelize from "./conexaodb.js";


// Definir o modelo Produto
const formulario = sequelize.define('formulario', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comomeconheceu: {
      type: DataTypes.STRING,
      allowNull: false
    }
},  {
      tableName: 'formulario',
      timestamps: false
   });
  
  // Sincronizar o modelo com o banco de dados
  formulario.sync();


  
// Exportar o modelo para uso em outros arquivos
export default formulario

