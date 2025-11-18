let shoppingList = ["bread", "milk", "eggs"];

function addItem(item) {
    if (!item) return;

    const normalized = item.toLowerCase();

    if (shoppingList.includes(normalized)) {
        console.log(`"${normalized}" already in the list.`);
        return;
    }

    shoppingList.push(normalized);
    console.log(`Added "${normalized}".`);
}

function removeItem(item) {
    if (!item) return;

    const normalized = item.toLowerCase();
    const index = shoppingList.indexOf(normalized);

    if (index === -1) {
        console.log(`"${normalized}" not found in the list.`);
        return;
    }

    shoppingList.splice(index, 1);
    console.log(`Removed "${normalized}".`);
}

function printList() {
    if (shoppingList.length === 0) {
        console.log("Shopping list is empty.");
        return;
    }

    console.log("Shopping list:");
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`${i + 1}. ${shoppingList[i]}`);
    }
}

function clearList() {
    shoppingList = [];
    console.log("Shopping list cleared.");
}

printList();
addItem("cheese");
addItem("Milk");     
printList();

removeItem("bread");
removeItem("water");  
printList();

clearList();
printList();