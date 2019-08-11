import {validationResult} from 'express-validator'
module.exports = {
    validate(req, res){
        const errors =  validationResult(req)
        if(!errors.isEmpty()){
            res.status(422).json({errors: errors.array()})
        }
    }
}