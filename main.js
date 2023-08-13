console.log('hellojopa');
var Biome;
(function (Biome) {
    Biome["Desert"] = "Desert";
    Biome["Tundra"] = "Tundra";
    Biome["Tropical"] = "Tropical";
})(Biome || (Biome = {}));
var bear = {
    Name: "Stepa",
    CountEat: 5,
    AnimalKind: "Bear",
    Biome: Biome.Tundra,
    Water: true,
    NeedSquare: 5,
    Eat: "Fish",
    AnimalType: "Carnivorous"
};
var tiger = {
    Name: "Petya",
    CountEat: 10,
    AnimalKind: "Tiger",
    Biome: Biome.Tundra,
    Water: true,
    NeedSquare: 10,
    Eat: "Meet",
    AnimalType: "Carnivorous"
};
var camel = {
    Name: "Sergey",
    CountEat: 1,
    AnimalKind: "Camel",
    Biome: Biome.Desert,
    Water: false,
    NeedSquare: 1,
    Eat: "Grass",
    AnimalType: "Herbivore"
};
var jiraf = {
    Name: "Pitek",
    CountEat: 1,
    AnimalKind: "jiraf",
    Biome: Biome.Desert,
    Water: false,
    NeedSquare: 1,
    Eat: "Grass",
    AnimalType: "Herbivore"
};
var floor1 = {
    Animals: [],
    Biome: Biome.Desert,
    Water: false,
    Square: 10,
    FreeSquare: function () {
        var freesquare = this.Square;
        this.Animals.forEach(function (element) {
            freesquare -= element.NeedSquare;
        });
        return freesquare;
    },
    Add: function (a) {
        if (this.CheckAddAnimal(a)) {
            this.Animals.push(a);
        }
        else {
            console.log("\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F ".concat(a.Name, " ").concat(a.AnimalType));
        }
    },
    CheckAddAnimal: function (a) {
        if (this.Biome != a.Biome) {
            console.log("Биом не подходит");
            return false;
        }
        if (this.Water != a.Water || a.Water != false) {
            console.log("Нужна Вода");
            return false;
        }
        if (this.FreeSquare() < a.NeedSquare) {
            console.log("Нужно нужно больше места");
            return false;
        }
        if (a.AnimalType == "Carnivorous") {
            this.Animals.forEach(function (element) {
                if (element.AnimalKind != a.AnimalKind) {
                    console.log("Плотоядные должны быть одного вида");
                    return false;
                }
            });
        }
        else {
            this.Animals.forEach(function (element) {
                if (element.AnimalType != a.AnimalType) {
                    console.log("Травоядные должны жить с травоядными");
                    return false;
                }
            });
        }
        return true;
    },
    Delete: function (name) {
        var _this = this;
        this.Animals.forEach(function (element, index) {
            if (element.Name == name) {
                _this.Animals.splice(index, 1);
                return true;
            }
        });
        console.log("животное не найдено");
        return false;
    }
};
var floor2 = {
    Animals: [],
    Biome: Biome.Tundra,
    Water: true,
    Square: 20,
    FreeSquare: function () {
        var freesquare = this.Square;
        this.Animals.forEach(function (element) {
            freesquare -= element.NeedSquare;
        });
        return freesquare;
    },
    Add: function (a) {
        if (this.CheckAddAnimal(a)) {
            this.Animals.push(a);
        }
        else {
            console.log("\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F ".concat(a.Name, " ").concat(a.AnimalKind));
        }
    },
    CheckAddAnimal: function (a) {
        var result = true;
        if (this.Biome != a.Biome) {
            console.log("Биом не подходит");
            result = false;
        }
        if (this.Water != a.Water && a.Water != false) {
            console.log("Нужна Вода");
            result = false;
        }
        if (this.FreeSquare() < a.NeedSquare) {
            console.log("Нужно нужно больше места");
            result = false;
        }
        if (a.AnimalType == "Carnivorous") {
            this.Animals.forEach(function (element) {
                if (element.AnimalKind != a.AnimalKind) {
                    console.log("Плотоядные должны быть одного вида");
                    result = false;
                }
            });
        }
        else {
            this.Animals.forEach(function (element) {
                if (element.AnimalType != a.AnimalType) {
                    console.log("Травоядные должны жить с травоядными");
                    result = false;
                }
            });
        }
        return result;
    },
    Delete: function (name) {
        var _this = this;
        this.Animals.forEach(function (element, index) {
            if (element.Name == name) {
                _this.Animals.splice(index, 1);
                return true;
            }
        });
        console.log("животное не найдено");
        return false;
    }
};
var zoo = {
    Floor: [floor1, floor2],
    HowMuchFood: function () {
        var number = 0;
        zoo.Floor.forEach(function (element) {
            element.Animals.forEach(function (element) {
                number += element.CountEat;
            });
        });
        return number;
    }
};
zoo.Floor[1].Add(bear);
zoo.Floor[0].Add(camel);
zoo.Floor[0].Add(jiraf);
zoo.Floor[1].Add(tiger);
console.log("\u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043A\u043E\u0440\u043C\u0438\u0442\u044C \u043D\u0443\u0436\u043D\u043E ".concat(zoo.HowMuchFood(), " \u0435\u0434\u044B"));
