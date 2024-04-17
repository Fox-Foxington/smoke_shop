import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file
const app = express();
const port = process.env.PORT;


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});



app.listen(port, () => {
    console.log(`Server ruinning on port ${port}.`);
})