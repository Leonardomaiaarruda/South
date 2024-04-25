import { Sequelize } from "sequelize";

// Criar uma nova instância do Sequelize
const sequelize = new Sequelize('south_forms', 'root', '0000', {
  host: 'localhost', // Host do banco de
  dialect: 'mysql'   // Tipo do banco de  dadosdados 
});


export default sequelize;
