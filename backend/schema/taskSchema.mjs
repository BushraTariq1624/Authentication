import joi from "joi"

const taskSchema = joi.object({
   title: joi.string().required(),
   assignedTo : joi.string().required(),
   description: joi.string().required(),
   status : joi.string().required(),

})

export default taskSchema;