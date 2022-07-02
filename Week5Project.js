class Dessert {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    
    describe(){
        return`${this.name} is ${this.type}.`
    }
}

class DessertMenu {
    constructor(name){
        this.name = name;
        this.desserts = [];
    }

    addDessert(dessert){
        if (dessert instanceof Dessert){
        this.desserts.push(dessert);
        }   else {
        throw new Error(`You can only add an instance of Dessert. Argument is not a dessert: ${dessert}`);
        }
}

    describe(){
    return `${this.type} has ${this.desserts.length} desserts.`;   
    }
}

class Menu {
    constructor(){
        this.dessertTypes = [];
        this.selectedDessertType = null;
    }

    start(){
        let selection = this.showMainMenuOptions();

        while (selection != 0){
            switch(selection){
                case "1":
                this.createDessertMenu();
                break;
                case "2":
                this.viewDessertMenu();
                break;
                case "3":
                this.deleteDessertMenu();
                break;
                case "4":
                this.displayDessertMenu();
                break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Maybe Next Time.");
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new dessert name
        2) view dessert name
        3) delete dessert name
        4) display all dessert name
        `);
    }

    showMenuOptions(dessertTypeInfo){
        return prompt(`
        0) back
        1) create dessert
        2) delete dessert
       --------------------- 
        ${dessertTypeInfo}
        `);
    }

    displayDessertMenu() {
        let dessertTypeString = "";
        for (let i = 0; i < this.dessertTypes.length; i++){
            dessertTypeString += i + ") " + this.dessertTypes[i].name + "\n";
        }
        alert(dessertTypeString);
    }
    
    createDessertMenu(){
        let name = prompt("Enter name of new dessert");
        this.dessertTypes.push(new DessertMenu(name));
    }

    viewDessertMenu(){
        let index = prompt("Enter the index of the dessert menu you wish to view:");
        if (index > -1 && index < this.dessertTypes.length){
            this.selectedDessertType = this.dessertTypes[index];
            let description = "Dessert Menu: " + this.selectedDessertType.name + "\n";

            for (let i = 0; i < this.selectedDessertType.desserts.length; i++){
                description += i + ") " + this.selectedDessertType.desserts[i].name 
                + " - " + this.selectedDessertType.desserts[i].type + "\n"
            }

            let selection = this.showMenuOptions(description);
            switch(selection){
                case "1":
                this.createDessertType();
                break;
                case "2":
                this.deleteDessertType();
            }
        }
    }
    
    deleteDessertMenu(){
    let index = prompt("Enter the index of the desert menu you wish to delete");
    if(index > -1 && index < this.dessertTypes.length){
        this.dessertTypes.splice(index, 1);
        }
    }

    createDessertType(){
        let name = prompt("Enter name for the new dessert");
        let type = prompt("Enter type for new dessert:");
        this.selectedDessertType.desserts.push(new Dessert(name, type));
    }

    deleteDessertType(){
        let index = prompt("Enter the index of the dessert you wish to delete:");
        if(index > -1 && index< this.selectedDessertType.desserts.length){
            this.selectedDessertType.desserts.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();