const { employee } = require('../models');
const dictionary = require('../dictionary/messages');

const findAll = async () => await employee.findAll();


const findByCpf = async (cpf) => await employee.findOne({ where: { cpf } });

const create = async(cpf, name, office, ufOfBirth, wage, status) => {
    console.log('service:', cpf);
    
    if ( await findByCpf(cpf)) return dictionary.cpfExist;

    const registrationDate = new Date();

    const result = await employee.create({cpf, name, office, registrationDate, ufOfBirth, wage, status});
    return result;
}

module.exports = {
    findAll,
 
    create
};