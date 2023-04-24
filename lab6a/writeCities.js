const fs = require('fs');

let cities = ["Budapest", "venice", "New York"];
let population = [234322, 342234, 454333];
let city = []

for(i = 0; i < cities.length; i++) {
    let country = {
        "name": cities[i],
        "population": population[i]
    }
    city.push(country);
}

let data = JSON.stringify(city, null, 2);

fs.writeFile("./JSONFiles/newCities.json", data, (err) => {
  if(err) throw err;
      console.log("data written to file");
});