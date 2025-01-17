function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(price) {
      if (price >= 0) {
        this.price = price;
      } else {
        console.log('That price is invalid, please enter a price equal to 0 or more.');
      }
    },

    describeProduct() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let broom = createProduct(2, 'Push Broom', 20, 8);
let screwdriver = createProduct(3, 'Screwdriver', 10, 15);

scissors.describeProduct();
broom.describeProduct();
screwdriver.describeProduct();