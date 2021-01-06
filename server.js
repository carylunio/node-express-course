const express = require('express');
const app = express();

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


app.listen(8000, function () {
    console.log("le serveur est en cours d'exécution")
})