/* Starting With Task No-1 */

/* <----Convert seerToMons start----> */
function seerToMon(seer) {
    if (typeof seer != 'number') {
        return 'Hello, Please Input Your Number';
    }
    if (seer < 0) {
        return 'Hello, Please Input Positive Number';
    }
    var mon = seer / 40;
    return mon;
}
var seer = 100;
var myMon = seerToMon(seer);
console.log(myMon);
/* <----Convert seerToMons end----> */

/* <----Total Sales start here----> */
function totalSales(shirtPieces, pantPieces, shoesPieces) {
    /* <----If Condition are Start for 3 Paramter----> */

    // <----Input Validation for shirtPieces---->
    if (typeof shirtPieces != 'number') {
        return 'Hello, Please Input Your Number';
    }
    if (shirtPieces >= 100) {
        return 'Hello, Please Input Price';
    }
    // <----Input Validation for pantPieces---->
    if (typeof pantPieces != 'number') {
        return 'Hello, Please Input Your Number';
    }
    if (pantPieces >= 200) {
        return 'Hello, Please Input Price';
    }
    // <----Input Validation for shoesPieces---->
    if (typeof shoesPieces != 'number') {
        return 'Hello, Please Input Your Number';
    }
    if (shoesPieces >= 500) {
        return 'Hello, Please Input Price';
    }
    /* <----If Condition are Finished for 3 Paramter----> */

    /* <----Let Variable for price are started----> */
    let perShirtPrice = 100;
    let perPantPrice = 200;
    let perShoesPrice = 500;
    /* <----Let Variable for price are finished----> */

    /* <----Const Variable(Calculation) for Unchangbale values are start----> */
    const totalShirtSales = perShirtPrice * shirtPieces;
    const totalPantSales = perPantPrice * pantPieces;
    const totalShoesSales = perShoesPrice * shoesPieces;

    const totalSales = totalShirtSales + totalPantSales + totalShoesSales;
    return totalSales;
}
/* <----Const Variable (Calculation) for Unchangbale values are finished----> */
let finalSaleReport = totalSales(6, 10, 8);
console.log(finalSaleReport);
/* <----Total Sales finished here----> */

/* <----Delivery Cost start here----> */
function deliveryCost(productQuantity) {
    /* <----typeof product quantity must be a number----> */
    if (typeof productQuantity != 'number') {
        return 'This is not a number. Perhaps!! pass a numeric number as quantity'
    }

    /* <----Product quantity must be a positive number----> */
    if (productQuantity < 0) {
        return 'Quantity must be a positive number.'
    }

    const first100Items = 100;
    const second100Items = 80;
    const fromSecond100ItemsToRest = 50;

    let totalCost = 0;
    if (productQuantity <= 100) {
        totalCost = productQuantity * first100Items;
    } else if (productQuantity <= 200) {
        const second100ItemsCost = (productQuantity - 100) * second100Items;
        totalCost = (first100Items * 100) + second100ItemsCost;
    } else {
        const fromSecond100ItemsToRestCost = (productQuantity - 200) * fromSecond100ItemsToRest;
        totalCost = (first100Items * 100) + (second100Items * 100) + fromSecond100ItemsToRestCost;
    }

    return totalCost;
}
console.log(deliveryCost(245));
/* <----Delivery Cost start here----> */

/* Perfect Friend start here  */
const bestFriend = ['Joti', 'Tomal', 'Sifat', 'Epty', 'Junnur'];

function perfectFriend(bestFriend) {
    /* <----If Condition are Started for bestFriend----> */

    // <----Input Validation for bestFriend---->

    /* <----If Condition are Finished for bestFriend----> */

    /* <----Let Variable are started with for fiveCharacterName----> */
    let fiveCharacterName = bestFriend[5];
    /* <----Let Variable are finished for fiveCharacterName----> */

    /* <----For Loop Start With Return element----> */
    for (let i = 0; i < bestFriend.length; i++) {
        const element = bestFriend[i];
        if (element.length == 5) {
            return element;
        }
    }
    /* <----For Loop Validation bestfriend----> */
    for (let i = 0; i < bestFriend.length; i++) {
        const friends = bestFriend[i];
        if (friends.length != 5) {
            return "Please Enter Five Character Length String";
        }
    }
    return fiveCharacterName;
}

/* <----For Loop End With Return element----> */
const result = perfectFriend(bestFriend);
console.log(result);

/* Ending With Task No-4 */