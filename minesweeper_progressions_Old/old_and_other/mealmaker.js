//1
const menu = {
  //2
  _courses: {
    //3
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      /*return this._courses.__appetizers;   OLD*/
      return this._appetizers;    // SGN : Added getter
    },
    //4
    set appetizers(appetizerIn) {
    	/*this.courses.__appetizers = appetizerIn; OLD*/
      this._appetizers = appetizerIn;       // SGN : Added setter
  	},
    get mains() {
      /*return this.courses.__mains;  OLD*/
      return this._mains;     // SGN : Added getter
    },
    set mains(mainIn) {
    	/*this.courses.__mains = mainIn;  OLD */
      this._mains = mainsIn;               // SGN : Added setter
  	},
    get desserts() {
      /*return this.courses.__desserts;  */
      return this._desserts;     // SGN : Added getter
    },
    set desserts(dessertIn) {
    	/*this.courses.__desserts = dessertIn;  OLD*/
      this._desserts = dessertsIn;        // SGN : Added setter
  	}
  },
  //5
  get courses() {
  //6
    /*return {
        appetizers: this._courses._appetizers,
        mains: this._courses._mains,
        desserts: this._courses._desserts
      }    OLD*/
    return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
  },
  //7
  addDishToCourse(courseName, dishName, dishPrice) {
  //8
    /*const dish = {

    };  OLD */
    const dish = {
      name: dishName,   // SGN : Assigned dishName
      price: dishPrice, // SGN : Assigned dishPrice
    };
    this._courses[courseName].push(dish); // also try using your setter method!
  },
  //9
  getRandomDishFromCourse: function (courseName) {
  //10
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    // return a dish from `dishes` by using `randomIndex`
    return dishes[randomIndex];
  },
  generateRandomMeal: function () {
  //11
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + mains.price + desserts.price;
    //return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;   OLD
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}, with a total price of ${totalPrice}.`;

  }
};

//12
//menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);     OLD

menu.addDishToCourse('appetizers', 'Caprese Salad', 5.00);

menu.addDishToCourse('appetizers', 'cheese curds', 6.00);

menu.addDishToCourse('appetizers', 'Hummus and Dip', 4.25);

menu.addDishToCourse('mains', 'Shrimp Flambee', 5.00);
menu.addDishToCourse('mains', 'Chicken Alfredo', 5.00);
menu.addDishToCourse('mains', 'Filet mignon', 5.00);


menu.addDishToCourse('desserts', 'Coconut Cake', 6.75);
menu.addDishToCourse('desserts', 'Starburst', 2.00);
menu.addDishToCourse('desserts', 'Chocolate Cake', 8.50);

//13
let meal = menu.generateRandomMeal();
console.log(meal);
