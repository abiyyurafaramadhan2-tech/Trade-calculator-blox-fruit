// Data Fruits (value, price, demand)
const fruitsData = {
    "Kitsune": { value: 145, price: 4500000, demand: 9.5 },
    "Dragon (Old)": { value: 130, price: 3500000, demand: 9 },
    "Dragon (West)": { value: 220, price: 5000000, demand: 10 },
    "Dragon (East)": { value: 210, price: 4800000, demand: 9.8 },
    "Leopard": { value: 85, price: 3000000, demand: 8.5 },
    "Yeti": { value: 95, price: 3200000, demand: 9.2 },
    "Gas": { value: 80, price: 2800000, demand: 8.8 },
    "T-Rex": { value: 55, price: 2700000, demand: 8 },
    "Mammoth": { value: 45, price: 2300000, demand: 7.5 },
    "Spirit": { value: 40, price: 2100000, demand: 7 },
    "Venom": { value: 38, price: 1900000, demand: 6.8 },
    "Control": { value: 35, price: 1800000, demand: 6.5 },
    "Shadow": { value: 30, price: 1600000, demand: 6 },
    "Dough": { value: 32, price: 1700000, demand: 7.2 },
    "Buddha": { value: 25, price: 1200000, demand: 8 },
    "Rumble": { value: 22, price: 1100000, demand: 5.5 },
    "Portal": { value: 20, price: 1000000, demand: 6 },
    "Blizzard": { value: 18, price: 950000, demand: 5 },
    "Sound": { value: 16, price: 850000, demand: 4.5 },
    "Magma": { value: 8, price: 400000, demand: 3 },
    "Ice": { value: 6, price: 350000, demand: 2.5 }
};

// Get DOM elements
const youFruitSelect = document.getElementById('you-fruit');
const themFruitSelect = document.getElementById('them-fruit');
const youValueSpan = document.getElementById('you-value');
const youPriceSpan = document.getElementById('you-price');
const youDemandSpan = document.getElementById('you-demand');
const themValueSpan = document.getElementById('them-value');
const themPriceSpan = document.getElementById('them-price');
const themDemandSpan = document.getElementById('them-demand');
const yourOfferValue = document.getElementById('your-offer-value');
const yourOfferDemand = document.getElementById('your-offer-demand');
const yourOfferPrice = document.getElementById('your-offer-price');
const theirOfferValue = document.getElementById('their-offer-value');
const theirOfferDemand = document.getElementById('their-offer-demand');
const theirOfferPrice = document.getElementById('their-offer-price');
const tradeStatus = document.getElementById('trade-status');
const resetBtn = document.getElementById('reset-btn');
const swapBtn = document.getElementById('swap-btn');

// Populate dropdowns
function populateDropdowns() {
    const fruits = Object.keys(fruitsData);
    const options = fruits.map(fruit => `<option value="${fruit}">${fruit}</option>`).join('');
    youFruitSelect.innerHTML = options;
    themFruitSelect.innerHTML = options;
    
    // Set default values
    youFruitSelect.value = "Kitsune";
    themFruitSelect.value = "Leopard";
}

// Update all UI based on selected fruits
function updateCalculator() {
    const youFruit = youFruitSelect.value;
    const themFruit = themFruitSelect.value;
    
    const youData = fruitsData[youFruit];
    const themData = fruitsData[themFruit];
    
    // Update stats panels
    youValueSpan.textContent = youData.value;
    youPriceSpan.textContent = youData.price.toLocaleString();
    youDemandSpan.textContent = youData.demand;
    
    themValueSpan.textContent = themData.value;
    themPriceSpan.textContent = themData.price.toLocaleString();
    themDemandSpan.textContent = themData.demand;
    
    // Update offer cards
    yourOfferValue.textContent = youData.value;
    yourOfferDemand.textContent = youData.demand;
    yourOfferPrice.textContent = youData.price.toLocaleString();
    
    theirOfferValue.textContent = themData.value;
    theirOfferDemand.textContent = themData.demand;
    theirOfferPrice.textContent = themData.price.toLocaleString();
    
    // Determine trade fairness
    const diff = youData.value - themData.value;
    let status = "Neutral";
    let statusColor = "#f59e0b";
    
    if (diff > 0) {
        status = "You Overpay";
        statusColor = "#ef4444";
    } else if (diff < 0) {
        status = "You Gain";
        statusColor = "#10b981";
    } else {
        status = "Fair Trade";
        statusColor = "#3b82f6";
    }
    
    tradeStatus.textContent = status;
    tradeStatus.style.color = statusColor;
    tradeStatus.style.borderColor = statusColor;
}

// Reset to default fruits
function resetTrade() {
    youFruitSelect.value = "Kitsune";
    themFruitSelect.value = "Leopard";
    updateCalculator();
}

// Swap sides
function swapSides() {
    const temp = youFruitSelect.value;
    youFruitSelect.value = themFruitSelect.value;
    themFruitSelect.value = temp;
    updateCalculator();
}

// Event listeners
youFruitSelect.addEventListener('change', updateCalculator);
themFruitSelect.addEventListener('change', updateCalculator);
resetBtn.addEventListener('click', resetTrade);
swapBtn.addEventListener('click', swapSides);

// Initialize
populateDropdowns();
updateCalculator();
