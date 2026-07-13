const joi=require('joi')

const campgroundSchema=Joi.object({
    campground:Joi.object({
        title:Joi.string().required(),
        price:Join.number().required().min(0),
        image:Joi.string().required(),
        location:Joi.string().required(),
        description:Joi.string().required()
    }).required()
})
    
    