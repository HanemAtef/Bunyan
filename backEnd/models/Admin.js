const bcrpt = require('bcryptjs');
const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'usernname is required'], 
        
    },
    email: {
        type: String,
        required: [true,'email is required'],   
       
    },
    password: {
        type: String,
        required: [true,'password is required'],
        minlength: [ 6,'password must be at least 6 characters']
    }


},{timestamps: true});
//HASH PASSWORD BEFORE SAVING TO DB
adminSchema.pre('save', async function(next){
if(!this.isModified('password')) return next();
this.password=await bcrpt.hash(this.password,10);

});
//COMPARE PASSWORD
adminSchema.methods.matchPassword = async function(matchedPassword){
return await bcrpt.compare(matchedPassword,this.password);

};
const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;