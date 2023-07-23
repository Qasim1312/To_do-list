const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
app.set('view engine', 'ejs');
var items=["Cook Food","Buy Food","Eat Food"];
let worklist=[]

app.use(bodyparser.urlencoded({extended:true }));
app.use(express.static("public"));

app.get("/",function (req,res) {
   let day=date.getDate();
    res.render("list",{listTitle: day, NewlistItems: items});
                                               // res.send("Hewllo")
});



app.post("/",function(req,res){
    console.log(req,res)
    var item=req.body.NewItem;
   
    if(req.body.list==="Work") {
        worklist.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
    
   
});
app.post("/work",function(req,res){
    let item=req.body.NewItem;
    worklist.push(item);
    res.redirect("/work");

});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work list", NewlistItems: worklist})

});


app.listen(3000,function(){
    console.log("server on part 3000");
});