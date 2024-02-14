const db = require('../Services/db')

const getAllContacts=()=>{
    return db.user.find().then(
        (result)=>{
               if(result){
                   return{
                    statusCode:200,
                    users:result
                   }
               }
               else{
                     return{
                        statusCode:404,
                        message:'Contact not found.'
                     }
               }
        }
    )
}

// Add
const addContacts=(id,name,address,phone,email)=>{
    return db.user.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Contact already exist."
            }
        }
        else{
           const newContact=new db.user({id,name,address,phone,email}) 
           newContact.save()
           return{
            statusCode:200,
            message:"Contact added successfully."
           }
        }
    })
}

const deleteContact=(id)=>{
    return db.user.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"Contact deleted successfully."
            }
        }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"Can't delete that contact from the database."
        }
    })
}

const updateContact=(id,name,address,phone,email)=>{
    return db.user.findOne({id}).then((result)=>{
            if(result){
                result.id=id;
                result.name=name;
                result.address=address;
                result.phone=phone;
                result.email=email;


                result.save()
                return{
                    statusCode:200,
                    message:'Contact details updated successfully.'
                }
            }

            else{
                return{
                    statusCode:404,
                    message:'Contact not found.'
                }
            }
        }
    )
}

const getAContact=(id)=>{
    return db.user.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    users:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Contact not found.'
                }
            }
        }
    )
}
module.exports={
    getAllContacts,
    addContacts,
    deleteContact,
    updateContact,
    getAContact
}