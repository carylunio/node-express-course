const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(bodyParser.json());

//Get usage
const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' },
    {
        name: 'Caryle',
        surname: 'MEDEHO',
    }
]
app.get('/users', function (requete, response) {
    response.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

// Use of variable in URL
app.get('/users/:name',(requete,response)=>{
	console.log(requete.params.name)
	response.json({
		success: true,
		message: 'got one user',
		user: requete.params.name
	})
})

//Making a post Route
app.post('/login',function(requete,response){
    const username=requete.body.username;
    const password=requete.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
        response.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
        response.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

app.listen(8000, function () {
    console.log("le serveur est en cours d'exécution")
})