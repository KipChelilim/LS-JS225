function makeFruit(name, color) {
  return {
    name,
    color,

    isRipe: function() {
      return `This ${this.name} is ripe.`;
    },

    describe: function() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

let apple = makeFruit('Apple', 'Red');
let banana = makeFruit('Banana', 'Yellow');
let blackberry = makeFruit('Blackberry', 'Black');