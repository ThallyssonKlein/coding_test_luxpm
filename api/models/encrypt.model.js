module.exports = (sequelize, Sequelize) => {
    const Encrypt = sequelize.define('encrypt', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        character: { type: Sequelize.STRING, allowNull: false }
    });
    
    return Encrypt;
}