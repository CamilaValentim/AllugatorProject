const { StatusCodes } = require('http-status-codes')
const  employeeService  = require('../service/employeeService');


const findAll = async (req, res) => {
    try {
        const employees = await employeeService.findAll();
        return res.status(StatusCodes.OK).json(employees);
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }   
};

const create = async (req, res) => {
    try {
        const { cpf, name, office, ufOfBirth, wage, status } = req.body;
        console.log('name:', name);
        
        const result = await employeeService.create(cpf, name, office, ufOfBirth, wage, status);
        return res.status(StatusCodes.CREATED).json(result);
        
    } catch (error) {
        console.log('erro cacth:', error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
        
    }
    
};




module.exports = {
    findAll,
    create,  
};