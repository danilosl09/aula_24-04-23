const sequelize = require('sequelize');
const connection = new sequelize ("teste5","root","123456",{
    host: "localhost",
    dialect: "mysql",
    define:{
        timestamps: false, //para não utilizar campos created_at e
        freezeTableName: true // para não adicionar o "s" no nome das 
    }
});

connection.authenticate().then(()=>{
    console.log("Conexão estabelecida com o banco de dados.");
}).catch((error)=>{
    console.error("erro ao conectar com o bano de dados", error);
});

module.exports = connection