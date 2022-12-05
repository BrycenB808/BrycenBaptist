application.get('/home', (req, res)=>{
res.render("home.ejs")
})

let nameArray =[
    {fname: "Mickey", animal: "mouse"},
    {fname: "Donald", animal: "Duck"},
    {fname: "Goofy", animal: "Dog"},
]
res.render("home.ejs", {data: nameArray})