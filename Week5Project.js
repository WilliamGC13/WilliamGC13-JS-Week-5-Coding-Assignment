class Dessert {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}

class DessertMenu {
    constructor(name){
        this.name = name;
        this.desserts = [];
    }
}

class Menu {
    constructor(){
        this.dessertTypes = [];
        this.selectedDessertType = null;
    }

    begin(){
        let selection = this.showDessertMenuOptions();

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
            selection = this.showDessertMenuOptions();
        }
        alert("Come back, we have dessert!");
    }

    showDessertMenuOptions(){
        return prompt(`
        0) Exit Dessert Menu Creator
        1) Create new dessert for menu
        2) View, describe, and assign type for new dessert
        3) Delete dessert name
        4) Display all dessert names
        
        `);
    }

    showDescriptionOptions(dessertTypeInfo){
        return prompt(`
        1) Describe dessert
        2) Delete dessert description
        3) Return to Dessert Main Menu
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

            let selection = this.showDescriptionOptions(description);
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
        let name = prompt("Enter a description for your new dessert");
        let type = prompt("Categorize your new dessert (pie, cake, etc.):");
        this.selectedDessertType.desserts.push(new Dessert(`This brand new dessert is ${name}`, `and is an great example of a ${type}.`));
    }

    deleteDessertType(){
        let index = prompt("Enter the index of the dessert you would like removed from the menu:");
        if(index > -1 && index< this.selectedDessertType.desserts.length){
            this.selectedDessertType.desserts.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.begin();