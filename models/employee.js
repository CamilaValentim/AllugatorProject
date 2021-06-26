const defineEmployeeModel = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employee', {
        cpf: { primaryKey: true, type: DataTypes.STRING},
        name: DataTypes.STRING,
        office: DataTypes.STRING,
        registrationDate: DataTypes.DATEONLY,
        ufOfBirth:DataTypes.STRING(2),
        wage:DataTypes.FLOAT,
        status:DataTypes.STRING,

    }, { timestamps: false });
    return Employee;
};

module.exports = defineEmployeeModel;