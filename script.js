const fetch = require("node-fetch");

fetch("https://swapi.dev/api/people/1/")
.then(resonse => resonse.json())
.then(data => console.log(data))
.catch(err => console.log(err))
