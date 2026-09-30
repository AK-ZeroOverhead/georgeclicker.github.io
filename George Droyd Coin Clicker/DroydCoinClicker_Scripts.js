// variables
var currency = 0; // George Droyd Coins
var countOnAdd = 1.5;
var multyplier = 1.0;
//_____________________________________________
var multyplier1UpgCount = 0;
var multyplier2UpgCount = 0;
var multyplier3UpgCount = 0;
//_____________________________________________
var count1UpgCount = 0;
var count2UpgCount = 0;
var count3UpgCount = 0;
//_____________________________________________
var multypUpg1Cost = 100.0;
var multypUpg2Cost = 500.0;
var multypUpg3Cost = 2000.0;
//_____________________________________________
var countUpg1Cost = 100.0;
var countUpg2Cost = 1000.0;
var countUpg3Cost = 5000.0;
//_____________________________________________





//functions

function selectSkin() {
    let selectElement = document.getElementById("SelectSkin");
    let selectedValue = selectElement.value;
    let droydButton = document.getElementById("droydButton");
    droydButton.querySelector("img").src = selectedValue;
}
//____________________________________________________________________________
function selectBackground() {
    let selectElement = document.getElementById("SelectBackground");
    let selectedValue = selectElement.value;
    let bodyElement = document.body;
    bodyElement.style.backgroundImage = "url('" + selectedValue + "')";
}
//____________________________________________________________________________
function updateLog() {
    let selectElement = document.getElementById("SelectLog");
    let selectedValue = selectElement.value;
    if(selectedValue === "UpdateLogRelease") 
    {
    alert(logNote_ReleaseV1_069);
    }
}
//____________________________________________________________________________


//____________________________________________________________________________
//Variables
var logNote_ReleaseV1_069 = "V1.069: Im going all in with the George Droyd Coin!";        
var numberOfCoins = 1;   

//funcs
function changeCurrency() {
currency = currency + (countOnAdd * multyplier);
console.log("current currency is: " + currency);
DroydCoinCount.innerHTML = "Droyd Coins: " + parseInt(currency);
if((multyplier1UpgCount >= 10 && multyplier2UpgCount >= 10 && multyplier3UpgCount >= 10) && (count1UpgCount >= 10 && count2UpgCount >= 10 && count3UpgCount >= 10))
    {
        alert("Brace for impact");
        FinalSound.play();
    }
}
//_____________________________________________
function multyplierUpgradeOne() {
    if(currency >= multypUpg1Cost && multyplier1UpgCount < 10)
        {
        currency -= multypUpg1Cost;
        multyplier = multyplier + 0.1;
        ++multyplier1UpgCount;
        multypUpg1Cost = multypUpg1Cost * 1.5;
        console.log("Upgrade[multyplier1] Level[" + multyplier1UpgCount + "]");
        MultipUpgradeButton1.innerHTML = "Upgrade Multiplier1: " + multyplier1UpgCount;
        
        }
    else
        {
            if(multyplier1UpgCount >= 10)
            {
                alert("You have reached the maximum level for this upgrade");
                console.log("Failed to buy upgrade[multyplier1] - max level reached");
            }
            else
            {
        alert("You need "+multypUpg1Cost+" George Droyd Coins to afford that upgrade");
        console.log("Failed to buy upgrade[multyplier1]");
            }
        }
}
//_____________________________________________
function multyplierUpgradeTwo() {
    if(currency >= multypUpg2Cost && multyplier2UpgCount < 10)
        {
        currency -= multypUpg2Cost;
        multyplier = multyplier + 0.3;
        ++multyplier2UpgCount;
        multypUpg2Cost = multypUpg2Cost * 2.5;
        console.log("Upgrade[multyplier2] Level[" + multyplier2UpgCount + "]");
        MultipUpgradeButton2.innerHTML = "Upgrade Multiplier2: " + multyplier2UpgCount;
        
        }
    else
        {
            if(multyplier2UpgCount >= 10)
            {
                alert("You have reached the maximum level for this upgrade");
                console.log("Failed to buy upgrade[multyplier2] - max level reached");
            }
            else
            {
        alert("You need "+multypUpg2Cost+" George Droyd Coins to afford that upgrade");
        console.log("Failed to buy upgrade[multyplier2]");
            }
        }
}
//_____________________________________________
function multyplierUpgradeThree() {
    if(currency >= multypUpg3Cost && multyplier3UpgCount < 10)
        {
        currency -= multypUpg3Cost;
        multyplier = multyplier + 0.5;
        ++multyplier3UpgCount;
        multypUpg3Cost = multypUpg3Cost * 4;
        console.log("Upgrade[multyplier3] Level[" + multyplier3UpgCount + "]");
        MultipUpgradeButton3.innerHTML = "Upgrade Multiplier3: " + multyplier3UpgCount;
        
        }
    else
        {
            if(multyplier3UpgCount >= 10)
            {
                alert("You have reached the maximum level for this upgrade");
                console.log("Failed to buy upgrade[multyplier3] - max level reached");
            }
            else
            {
        alert("You need "+multypUpg3Cost+" George Droyd Coins to afford that upgrade");
        console.log("Failed to buy upgrade[multyplier3]");
            }
        }
}
//_____________________________________________
function upgradeCountOne() {
if(currency >= countUpg1Cost && count1UpgCount < 10)
        {
        currency -= countUpg1Cost;
        countOnAdd += 1;
        ++count1UpgCount;
        countUpg1Cost = countUpg1Cost * 3;
        console.log("Upgrade[count1] Level[" + count1UpgCount + "]");
        CountUpgradeButton1.innerHTML = "Upgrade Count1: " + count1UpgCount;
        
        }
    else
        {
            if(count1UpgCount >= 10)
            {
                alert("You have reached the maximum level for this upgrade");
                console.log("Failed to buy upgrade[count1] - max level reached");
            }
            else
            {
        alert("You need "+countUpg1Cost+" George Droyd Coins to afford that upgrade");
        console.log("Failed to buy upgrade[count1]");
            }
        }
}
//_____________________________________________
function upgradeCountTwo() {
if(currency >= countUpg2Cost && count2UpgCount < 10)
        {
       currency -= countUpg2Cost;
        countOnAdd += 2;
        ++count2UpgCount;
        countUpg2Cost = countUpg2Cost * 5;
        console.log("Upgrade[count2] Level[" + count2UpgCount + "]");
        CountUpgradeButton2.innerHTML = "Upgrade Count2: " + count2UpgCount;
        
        }
    else
        {
            if(count2UpgCount >= 10)
            {
                alert("You have reached the maximum level for this upgrade");
                console.log("Failed to buy upgrade[count2] - max level reached");
            }
            else
            {
        alert("You need "+countUpg2Cost+" George Droyd Coins to afford that upgrade");
        console.log("Failed to buy upgrade[count2]");
            }
        }
}
//_____________________________________________
function upgradeCountThree() {
if(currency >= countUpg3Cost && count3UpgCount < 10)
        {
        currency -= countUpg3Cost;
        countOnAdd += 3;
        ++count3UpgCount;
        countUpg3Cost = countUpg3Cost * 8;
        console.log("Upgrade[count3] Level[" + count3UpgCount + "]");
        CountUpgradeButton3.innerHTML = "Upgrade Count3: " + count3UpgCount;
        
        }
    else
        {
            if(count3UpgCount >= 10)
            {
                alert("You have reached the maximum level for this upgrade");
                console.log("Failed to buy upgrade[count3] - max level reached");
            }
            else
            {
        alert("You need "+countUpg3Cost+" George Droyd Coins to afford that upgrade");
        console.log("Failed to buy upgrade[count3]");
            }
        }
} 

//_____________________________________________
function executeCommand() {
    let commandInput = document.getElementById("Console");
    let command = commandInput.value.trim().toLowerCase();
    if(command[0] === "/" && (!command.includes("<") && !command.includes(">")) && (!command.includes("{") && !command.includes("}")) && (!command.includes("[") && !command.includes("]")) && !command.includes("$")) 
        {
            switch(command) 
            {
                case "/reset_currency": 
                    currency = 0;
                    DroydCoinCount.innerHTML = "Droyd Coins: " + currency;
                    alert("Currency reset to 0");
                    console.log("Currency reset to 0");
                    break;
                case "/reset_upgrades": 
                    multyplier1UpgCount = 0;
                    multyplier2UpgCount = 0;
                    multyplier3UpgCount = 0;
                    count1UpgCount = 0;
                    count2UpgCount = 0;
                    count3UpgCount = 0;
                    countOnAdd = 1.5;
                    multyplier = 1.0;
                    multypUpg1Cost = 100.0;
                    multypUpg2Cost = 500.0;
                    multypUpg3Cost = 2000.0;
                    countUpg1Cost = 100.0;
                    countUpg2Cost = 1000.0;
                    countUpg3Cost = 5000.0;
                    alert("Upgrades reset to level 0");
                    console.log("Upgrades reset to level 0");
                    break;
                case "/reset_all":
                    currency = 0;
                    countOnAdd = 1.5;
                    multyplier = 1.0;
                    multyplier1UpgCount = 0;
                    multyplier2UpgCount = 0;
                    multyplier3UpgCount = 0;
                    count1UpgCount = 0;
                    count2UpgCount = 0;
                    count3UpgCount = 0;
                    multypUpg1Cost = 100.0;
                    multypUpg2Cost = 500.0;
                    multypUpg3Cost = 2000.0;
                    countUpg1Cost = 100.0;
                    countUpg2Cost = 1000.0;
                    countUpg3Cost = 5000.0;
                    alert("Progress has been reset");
                    DroydCoinCount.innerHTML = "Droyd Coins: " + currency;
                    console.log("Currency and upgrades reset to initial state");
                    break;
                case "/set_upgrade_prices_to_0":
                    multypUpg1Cost = 0;
                    multypUpg2Cost = 0;
                    multypUpg3Cost = 0;
                    countUpg1Cost = 0;
                    countUpg2Cost = 0;
                    countUpg3Cost = 0;
                    alert("All upgrades price set to 0");
                    console.log("All upgrades price set to 0");
                    break;
                case "/add_currency_1000":
                    currency += 1000;
                    DroydCoinCount.innerHTML = "Droyd Coins: " + currency;
                    alert("Currency added: 1000");
                    console.log("Currency added: 1000");
                    break;
                case "/set_currency_1000":
                    currency = 1000;
                    DroydCoinCount.innerHTML = "Droyd Coins: " + currency;
                    alert("Currency set to 1000");
                    console.log("Currency set to 1000");
                    break;
                case "/set_currency_10000":
                    currency = 10000;
                    DroydCoinCount.innerHTML = "Droyd Coins: " + currency;
                    alert("Currency set to 10000");
                    console.log("Currency set to 10000");
                    break;
                case "/set_currency_100000":
                    currency = 100000;
                    DroydCoinCount.innerHTML = "Droyd Coins: " + currency;
                    alert("Currency set to 100000");
                    console.log("Currency set to 100000");
                    break;
                default:
                    alert("Unknown command: " + command);
                    console.log("Unknown command: " + command);
                    break;
            }
        }
        else
        {
            alert("Invalid command format!");
            console.log("Invalid command format!");
        }

}