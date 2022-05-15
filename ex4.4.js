const mycountry = {
  country: `spain`,
  capital: `madrid`,
  language: `spanish`,
  population: `6 million`,
  neighbours: ["minsk", `maroco`, `tunsia`],

  describe() {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, 
        they have 3 neighbouring countries ${this.neighbours[0]} and ${this.neighbours[1]} 
        a capital called ${this.capital}.`);
  },

  checkIsland() {
    mycountry[`isIsland`] = true;
    if (mycountry.neighbours.length !== 0) isIsland = false;
    console.log(isIsland);
  },
};
