const User = require('../model/loginSchema')

const getUser =(req, res)=>{
    const allInfo = req.body;
    res.json(allInfo)
}

//--------------Login-------------

const Login = async(req, res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username, password})
 
 
    if(user){
       res.json(`Welcome back ${username}`);
    }else{
       res.json("Username on Password involid")
    }
 }
 // ----------Register------------
 
 const Register = async(req, res)=>{
    const allInfo = req.body;
    const exisitingUser = await User.findOne(allInfo.username);
 
    if(exisitingUser){
       res.json(`Username already exists.`);
    }else{
       const newUser = new User(allInfo);
       await newUser.save();
       res.json("Registeration successful")
    }
 }

 // ---------------Delete User-----------

 const deleteUser = async (req, res)=>{
    try{
        let {_id}= req.body;
        let deleted = await User.findByIdAndDelete(_id)
        
        if (!deleted) {
            return res.json({
                succes: false,
                message: "User deleted!",
                innerData: deleted
            })
        }
    
    }catch (error){
        res.json({succes: false, message: error})
    }
 }
 
 // ----------Update user---------

 const updateUser = async (req, res)=>{
    try{
        let { id} = req.body;
        let body = req.body;

        let editUser = await User.updateMany({_id: id}, body);

        if (!editUser){
            return res.json({
                succes: false,
                massage: "User is not updated!",
                innerData: editUser
            })
        }
        res.json({
            succes: true,
            massage: "User is updated!",
            innerData: editUser
        })
    }catch (error){
        res.json({succes: false, message: error})
    }
 }



module.exports = {
    getUser,
    Login,
    Register,
    deleteUser,
    updateUser
}