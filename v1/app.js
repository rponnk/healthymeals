const express = require('express'),
app = express();

app.set("view engine", "ejs");

app.get('/', (req, res)=> {
    res.render("index");
});

app.get('/recipes', (req, res)=> {
    let recipe = 
    [
        {title: "Fish and rice"},
        {title: "Tacos"},
        {title: "Chicken and brocolli"}
    ];

    res.render('recipes', {recipe: recipe});
});

app.listen(3000, ()=> {
    console.log(`running...`);
});