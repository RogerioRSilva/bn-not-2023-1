// Importação do model
const Supplier = require('../models/Supplier')

const controller = {} // Objeto vazio

controller.create = async (req, res) =>{  // Para funcionar o await precisa do async 
    try{
        // Manda as informações que vieram em req.body
        // para serem gravadas no banco de dados. 
        await Supplier.create(req.body)
        
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
} 

controller.retrieveAll = async (req, res) =>{
    try{
        // Retorna todos os documentos da coleção
        const result = await Supplier.find()
        // HTTP 200: OK (implícito)
        res.send(result)
    }catch{
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.retrieveOne = async (req,res) =>{
    try{
       const result = await Supplier.findById(req.params.id)
       if(result){
        // Encontrou o documento -> HTTP 200: OK (implícito)
        res.send(result)
       }else{
        // Não econtrou o documento -> HTTP 404: Not Found
        res.status(404).end()
       }
    }catch{
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.update = async (req, res) =>{
    try{
        const result = await Supplier.findByIdAndUpdate(req.params.id, req.body)

        if(result){
            // Encontrou e atualizou -> HTTP204: No content
            res.status(204).end()
        }else{
            // Não encontrou para atualizar -> HTTP 404: Not Found
            res.status(404).end()
        }
    }catch{
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

controller.delete = async (req, res) =>{
    try{
        const result = await Supplier.findByIdAndDelete(req.params.id)

        if(result){
            // Encontrou e excluiu -> HTTP204: No content
            res.status(204).end()
        }else{
            // Não encontrou para excluir -> HTTP 404: Not Found
            res.status(404).end()
        }
    }catch{
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller