var car1 = new Object();
car1.color = "black";
car1.maxSpeed = 240;
car1.driver = {
    name: "Sirko Anhelina",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "blue",
    maxSpeed: 290,
    driver: {
        name: "Sirko Anhelina",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};

car2.drive = function() {
    console.log("I can drive anytime");
};

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var msg = "Driver " + this.driver.name;
        msg += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        msg += " and has " + this.driver.experience + " years of experience";
        console.log(msg);
    }
};

var truck1 = new Truck("gray", 5252, 80, "Audi", "Q7");
truck1.AssignDriver("Sirko Anhelina", true, 25);
truck1.trip();

var truck2 = new Truck("yellow", 7070, 80, "Porsche", "911");
truck2.AssignDriver("Sirko Anhelina", false, 30);
truck2.trip();