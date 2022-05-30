import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}


const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "johnDoe@email.com",
        phone: "123456789",
        website: "www.johnDoe.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "janeDoe@email.com",
        phone: "987654321",
        website: "www.janeDoe.com"
    },
    {
        id: 3,
        name: "Jack Doe",
        email: "jackDoe@email.com",
        phone: "123456789",
        website: "www.jackDoe.com"
    },
    {
        id: 4,
        name: "Jill Doe",
        email: "jillDoe@email.com",
        phone: "987654321",
        website: "www.jillDoe.com"
    }
]

type UserPost = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

//post array
const posts: UserPost[] = [
    {
        id: 1,
        title: "Post 1",
        body: "This is the first post",
        userId: 1
    },
    {
        id: 2,
        title: "Post 2",
        body: "This is the second post",
        userId: 2
    },
    {
        id: 3,
        title: "Post 3",
        body: "This is the third post",
        userId: 3
    },
    {
        id: 4,
        title: "Post 4",
        body: "This is the fourth post",
        userId: 4
    }
]


app.post("/posts/:id", (req, res) => {
const getPost = posts.map(post => post.id === parseInt(req.params.id))
res.send(getPost)

})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});