import express from "express";
import cors from "cors";
import  users  from "./lista";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 1
// app.get("/users", (req, res) => {
//     res.json(users);
// });


type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

//Exercício 2
// app.get("/users", (req, res) => {
//     const { type } = req.query;
//     const filteredUsers = users.filter(user => user.type === type);
//     res.json(filteredUsers);
// });


//Exercício 3
// app.get("/users", (req, res) => {
//     let codeError = 400;
//     try{
//         const name = req.query.name as string;
//     const filteredUsers = users.filter(user => user.name.includes(name));
//     if(!filteredUsers.length) {
//         codeError = 404;
//         throw new Error("User not found");
//     }
//     res.status(200).json(filteredUsers);
//     } catch(error: any) {
//         res.status(codeError).send({
//             message: error.message
//         });
//     }
   
// });


//Exercício 4
app.post("/users", (req, res) => {
    const { name, email, type, age } = req.body;
    const user: user = {
        id: users.length + 1,
        name,
        email,
        type,
        age
    };
    users.push(user);
    res.status(201).json(users);
});


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});