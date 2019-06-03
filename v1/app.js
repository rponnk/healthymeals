const express = require('express'),
bp = require('body-parser'),
app = express();


app.use(bp.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/', (req, res)=> {
    res.render("index");
});

app.get('/recipes', (req, res)=> {
    res.render('recipes', {recipe: recipe});
});

app.post('/recipes', (req, res)=> {
    //get data 
    const title = {title: req.body.title};
    recipe.push(title);
    //redirect
    res.redirect('/recipes');
});
app.listen(3000, ()=> {
    console.log(`running...`);
});