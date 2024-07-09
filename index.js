// const express = require('express');
// const mongoose = require('mongoose');
// const {ApolloServer,gql} = require('apollo-server-express');
// const typeDefs = require('./schema');
// const cors = require('cors'); // Import CORS
// const resolvers = require('./resolvers');
// const userApiFromRouter = require('./routes/userRoute')
// const app = express();
// const port = 3001
// const url = 'mongodb+srv://koppisettinaveen1432:naveen@cluster0.hvokupr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// // CORS middleware
// app.use(cors());
// app.use(express.json())//parsing
// mongoose.connect(url,{useNewUrlParser:true,
// useUnifiedTopology:true}).then(()=>{})
// .catch((err)=>{});
// const server = new ApolloServer({typeDefs,resolvers});
// app.use('/users',userApiFromRouter); //api
// async function StartServer(){
//     await server.start();
// server.applyMiddleware({app});//run my express code
// app.listen(port,()=>{
//     console.log('server live 3001');
// })
// }
// function Testing(){
//     return 1;
// }
// Testing()
// StartServer();


const express = require('express');
const mongoose = require('mongoose')
const {ApolloServer,gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors')//import cors
const userApiFromRouter = require('./routes/userRoutes') //import
const app = express() 
const port = 3001;
const url= 'mongodb+srv://koppisettinaveen1432:naveen@cluster0.hvokupr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json())
app.use(cors()) //using cors
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{})
.catch((err)=>{})

const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);//add router

async function StartServer(){
   await server.start();
   server.applyMiddleware({app});
   app.listen(port,()=>{
    console.log('Server Live 3001');
   })
}

StartServer();

