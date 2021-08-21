// Items part
function item(input){
    if (input == '8GB'){
        document.getElementById('memory-cost').innerText = 0;
    }
    else if (input == '16GB'){
        document.getElementById('memory-cost').innerText = 180;
    }
    else if (input == '256GB'){
        document.getElementById('storage-cost').innerText = 0;
    }
    else if (input == '512GB'){
        document.getElementById('storage-cost').innerText = 100;
    }
    else if (input == '1TB'){
        document.getElementById('storage-cost').innerText = 180;
    }
    else if (input == 'free'){
        document.getElementById('delivery-charge').innerText = 0;
    }
    else if (input == 'cost'){
        document.getElementById('delivery-charge').innerText = 20;
    }
    prices();
    document.getElementById('promo-input').disabled = false;
}
// price part
function prices(){
    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCharge = document.getElementById('delivery-charge');

    const newTotalPrice = parseFloat(bestPrice.innerText)+parseFloat(memoryCost.innerText)+parseFloat(storageCost.innerText)  +parseFloat(deliveryCharge.innerText);
    document.getElementById('total-price').innerText = newTotalPrice;
    document.getElementById('all-total').innerText = newTotalPrice;
}
// Promo part
document.getElementById('apply-button').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const promoStockValue = 'stevekaku'
    const allTotal = document.getElementById('all-total');
    const allTotalValue = parseFloat(allTotal.innerText);
    if (promoInputValue == promoStockValue){
        const discount = (allTotalValue*20)/100;
        allTotal.innerText = allTotalValue-discount;
        promoInput.value = '';
        promoInput.disabled = true;
    }
    else {
        promoInput.value = '';
    }
})