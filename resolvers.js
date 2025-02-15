// const resolvers ={
//         Query:{
//             getUsers: async (_,{id})=>{
//                 return await User.findById(id)
//             },
//     getAllUsers:async()=>{return await this.User.find()}
//     },
    
//     Mutation:{
//     createUser: async (_,{input})=>{
//         const {name,email,password}= input;
//         try{
//         if(!name || !email || !password){
//         throw new Error("Please enter all the fields");
//         }
//         const newUser = new User({name,email,password});
//         return await newUser.save();
//         }catch(err){ throw Error(`Error Creating User: ${err}
//         `)}
//     },
//     changePass:async(_,{id,password})=>{
//         try{
//         const usernew= await User.findByIdAndUpdate(id,
//         {password:password},{new:true});
//         if(!usernew){
//         throw new Error("User not found");
//         }
//         console.log(usernew);
//         return usernew;
//         }catch(err){throw Error(`Error Occured :${err}`)}
//         },
//     },
//     User:{
//     email:(parent)=> parent.email || ''
//     ,
//     name:(parent)=> parent.name || ''
//     ,
//     password:(parent)=> parent.password || ''
//     },
//     };
// module.exports=resolvers;//export resolvers


const User = require('./model/userSchema');
const resolvers = {
    Query:{
        getUsers: async (_,{id})=>{
            return await User.findById(id)
        },
        getAllUsers:async()=>{return await User.find()}
        
    },
    Mutation:{
        createUser: async (_,{input})=>{
        try{
            const {name,email,password}=input;
            if(!name || !email || !password){
                throw new Error('Enter all the fields')
            }
            const newUser = new User({name,email,
                password});
           return await newUser.save();
        }catch(err){throw Error(err);}
    },
    
    changePass: async(_,{id,password})=>{
        try{
            const userNew = await 
            User.findByIdAndUpdate(id,
                {password:password},{new:true});
            if(!userNew){
                throw new Error('User not found')
            }
            return userNew;
        }catch(err){throw Error(err)}
    },
},
User:{
    email:(parent)=>parent.email || ' ',
    name:(parent)=>parent.name || ' ',
    password:(parent)=>parent.password || ' ',
}
}
module.exports=resolvers;