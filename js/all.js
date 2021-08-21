// Items And Price part
function itemAndprice(input){
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCharge = document.getElementById('delivery-charge');
    if (input == '8GB'){
        memoryCost.innerText = 0;
    }
    else if (input == '16GB'){
        memoryCost.innerText = 180;
    }
    else if (input == '256GB'){
        storageCost.innerText = 0;
    }
    else if (input == '512GB'){
        storageCost.innerText = 100;
    }
    else if (input == '1TB'){
        storageCost.innerText = 180;
    }
    else if (input == 'free'){
        deliveryCharge.innerText = 0;
    }
    else if (input == 'cost'){
        deliveryCharge.innerText = 20;
    }
    const newTotalPrice = parseFloat(bestPrice.innerText)+parseFloat(memoryCost.innerText)+parseFloat(storageCost.innerText)  +parseFloat(deliveryCharge.innerText);
    document.getElementById('total-price').innerText = newTotalPrice;
    document.getElementById('all-total').innerText = newTotalPrice;
    document.getElementById('promo-input').disabled = false;
}
// Promo part
function promo(){
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const allTotal = document.getElementById('all-total');
    const allTotalValue = parseFloat(allTotal.innerText);
    if (promoInputValue == 'stevekaku'){
        const discount = (allTotalValue*20)/100;
        allTotal.innerText = allTotalValue-discount;
        promoInput.value = '';
        promoInput.disabled = true;
    }
    else {
        promoInput.value = '';
    }
}