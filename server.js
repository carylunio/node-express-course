const express = require('express');
const app = express();

/*
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
})*/

// Use of variable in URL
app.get('/users/:name',(requete,response)=>{
	console.log(requete.params.name)
	response.json({
		success: true,
		message: 'got one user',
		user: requete.params.name
	})
})

app.listen(8000, function () {
    console.log("le serveur est en cours d'exécution")
})