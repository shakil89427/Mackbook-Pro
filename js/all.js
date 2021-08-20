// Memory part
function memory(input){
    let memoryCost = document.getElementById('memory-cost');
    if (input == 1){
        memoryCost.innerText = 0;
    }
    else if (input == 2){
        memoryCost.innerText = 180;
    }
    document.getElementById('promo-input').disabled = false;
    prices();
}
// Storage part
function storage(input){
    let storageCost = document.getElementById('storage-cost');
    if (input == 1){
        storageCost.innerText = 0;
    }
    else if (input == 2){
        storageCost.innerText = 100;
    }
    else if (input == 3){
        storageCost.innerText = 180;
    }
    document.getElementById('promo-input').disabled = false;
    prices()
}
// Delivery part
function delivery(input){
    let deliveryCharge = document.getElementById('delivery-charge');
    if (input == 1){
        deliveryCharge.innerText = 0;
    }
    else if (input == 2){
        deliveryCharge.innerText = 20;
    }
    document.getElementById('promo-input').disabled = false;
    prices()
}
// price part
function prices(){
    let bestPrice = document.getElementById('best-price');
    let bestPriceAmount = parseFloat(bestPrice.innerText);
    let memoryCost = document.getElementById('memory-cost');
    let memoryCostAmount = parseFloat(memoryCost.innerText);
    let storageCost = document.getElementById('storage-cost');
    let storageCostAmount = parseFloat(storageCost.innerText);
    let deliveryCharge = document.getElementById('delivery-charge');
    let deliveryChargeAmount = parseFloat(deliveryCharge.innerText);

    let totalPrice = document.getElementById('total-price');
    let allTotal = document.getElementById('all-total');

    let newTotalPrice = bestPriceAmount+memoryCostAmount+storageCostAmount+deliveryChargeAmount;
    totalPrice.innerText = newTotalPrice;
    allTotal.innerText = newTotalPrice;
}
// Promo part
document.getElementById('apply-button').addEventListener('click', function(){
    let promoInput = document.getElementById('promo-input');
    let promoInputValue = promoInput.value;
    const promoStockValue = 'ttt'
    let allTotal = document.getElementById('all-total');
    let allTotalValue = parseFloat(allTotal.innerText);
    if (promoInputValue == promoStockValue){
        let final = (allTotalValue*20)/100;
        allTotal.innerText = allTotalValue-final;
        promoInput.value = '';
        promoInput.disabled = true;
    }
    else {
        promoInput.value = '';
    }
})