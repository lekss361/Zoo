console.log('hellojopa')
interface Zoo{
    Floor: Floor[]
    HowMuchFood():number;
}
interface Floor{
 Animals:CurrentAnimal[],
 Biome:Biome,
 Water:boolean,
 Square:number
 Add(a:CurrentAnimal):void;
 CheckAddAnimal(a:CurrentAnimal):boolean;
 FreeSquare():number;
 Delete(name:string):boolean;
}

interface AbstractAnimal{
    AnimalKind:AnimalKinds;
    Biome:Biome;
    Water:boolean;
    NeedSquare:number;
    Eat:Eats;
    AnimalType:AnimalTypes;
}
interface CurrentAnimal extends AbstractAnimal{
Name: string;
CountEat:number;
}

enum Biome{
    Desert='Desert',
    Tundra='Tundra',
    Tropical='Tropical' 
}
type Eats= "Fish"|"Grass"|"Meet";
type AnimalTypes="Herbivore"|"Carnivorous"
type AnimalKinds= "Bear"|"Camel"|"Tiger"|"Lion"|"jiraf"

const bear:CurrentAnimal={
    Name: "Stepa",
    CountEat: 5,
    AnimalKind: "Bear",
    Biome: Biome.Tundra,
    Water: true,
    NeedSquare: 5,
    Eat: "Fish",
    AnimalType: "Carnivorous"
}
const tiger:CurrentAnimal={
    Name: "Petya",
    CountEat: 10,
    AnimalKind: "Tiger",
    Biome: Biome.Tundra,
    Water: true,
    NeedSquare: 10,
    Eat: "Meet",
    AnimalType: "Carnivorous"
}
const camel:CurrentAnimal={
    Name: "Sergey",
    CountEat: 1,
    AnimalKind: "Camel",
    Biome: Biome.Desert,
    Water: false,
    NeedSquare: 1,
    Eat: "Grass",
    AnimalType: "Herbivore"
}
const jiraf:CurrentAnimal={
    Name: "Pitek",
    CountEat: 1,
    AnimalKind: "jiraf",
    Biome: Biome.Desert,
    Water: false,
    NeedSquare: 1,
    Eat: "Grass",
    AnimalType: "Herbivore"
}
function AddAnimal(a: CurrentAnimal): void {
    if (this.CheckAddAnimal(a)) {
        this.Animals.push(a);
    }else{

        console.log(`требования не подходят для ${a.Name} ${a.AnimalKind}`);
    }
}
function CheckAddAnimalInMass (a: CurrentAnimal): boolean {
    if (this.Biome != a.Biome) {
        console.log("Биом не подходит");
        return false;
    }
    
    if(a.Water==true&&this.Water ==false){
            console.log("Нужна Вода");
            return false;
    }
    if (this.FreeSquare() < a.NeedSquare) {
        console.log("Нужно нужно больше места");
        return false;
    }
    if (a.AnimalType == "Carnivorous") {
        this.Animals.forEach(element => {
            if (element.AnimalKind != a.AnimalKind) {
                console.log("Плотоядные должны быть одного вида");
                return false;
            }
        });
    } else {
        this.Animals.forEach(element => {
            if (element.AnimalType != a.AnimalType) {
                console.log("Травоядные должны жить с травоядными");
                return false;
            }
        });
    }
    return true;
}
function FreeSquareInFloor(): number {
    let freesquare = this.Square;
    this.Animals.forEach(element => {
        freesquare -= element.NeedSquare;
    });
    return freesquare;
}
function DeleteInMass(name: string): boolean {
       
    this.Animals.forEach((element,index) => {
       if(element.Name==name){
        this.Animals.splice(index,1);
        return true
       }
    });
    console.log("животное не найдено")
    return false;
}

const floor1:Floor={
    Animals: [],
    Biome: Biome.Desert,
    Water: false,
    Square: 10,
    FreeSquare: FreeSquareInFloor,
    Add: AddAnimal,
    CheckAddAnimal:CheckAddAnimalInMass,
    Delete: DeleteInMass
}

const floor2:Floor={
    Animals: [],
    Biome: Biome.Tundra,
    Water: true,
    Square: 20,
    FreeSquare: FreeSquareInFloor,
    Add: AddAnimal,
    CheckAddAnimal:CheckAddAnimalInMass,
    Delete: DeleteInMass
}

let zoo:Zoo={
    Floor: [floor1,floor2],
    HowMuchFood: function (): number {
        let number:number=0;
        zoo.Floor.forEach(element => {
            element.Animals.forEach(element => {
                number+=element.CountEat;
            });
        });
        return number;
    }
}
zoo.Floor[1].Add(bear);
zoo.Floor[0].Add(camel);
zoo.Floor[0].Add(jiraf);
zoo.Floor[1].Add(tiger);
console.log(`чтобы накормить нужно ${zoo.HowMuchFood()} еды`)
