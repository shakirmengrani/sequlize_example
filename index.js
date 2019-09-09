const bcrypt = require("bcrypt");
const db = require("./models");
const users = db.user;
const programs = db.program;
 
 const comparePassword = function(plainPass, hashword, callback) {
    bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
        return err == null ?
            callback(null, isPasswordMatch) :
            callback(err);
    });
 };


// const user1 = users.create({
//     name: "Shakir Mengrani",
//     email: "shakir.mengrani@gmail.com",
//     password: bcrypt.hashSync("Shakir@786", bcrypt.genSaltSync(10))
// });


// const program1 = programs.create({
//     name: "Test Program"
// });



let user = async () => {
    let u = await users.findAll({
        include:[{model: programs, as: "programs", require: false, through:{attributes:[]}}]
    }).catch((err) =>{
        console.log(err);
    })
    console.log("user", JSON.stringify(u));
}

let program = async () => {
    let p = await programs.findAll({
        include:[{model: users, as: "users", require: false, through:{attributes:[]}}]
    }).catch((err) =>{
        console.log(err);
    })
    console.log("program", JSON.stringify(p));
}

let addUser = async () => {
    programs.findOne({
        where:{id: 1} 
    }).then((program1) => {
        users.findOne({where:{id:1}}).then((user1) => {
            program1.addUser(user1);
        });
    });
} 
