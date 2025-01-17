function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,

    getDescription() {
      visitStatus = this.visited ? 'have visited' : 'haven\'t visited';
      console.log(`${this.name} is located in ${this.continent}. I ${visitStatus} ${this.name}.`);
    },

    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// chile.getDescription();       // "The Republic of Chile is located in South America."
// canada.getDescription();      // "Canada is located in North America."
// southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

canada.getDescription(); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
canada.getDescription(); // "Canada is located in North America. I have visited Canada."