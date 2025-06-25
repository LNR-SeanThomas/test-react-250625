// Sample price data for energy over 12 months with daily prices
const energyPrices = {
    h20: generateMonthlyData('h20'),
    coal: generateMonthlyData('coal'),
    gas: generateMonthlyData('gas'),
    nuclear: generateMonthlyData('nuclear'),
};

function generateMonthlyData(type) {
    const monthlyData = [];
    for (let month = 1; month <= 12; month++) {
        const dailyPrices = [];
        for (let day = 1; day <= 30; day++) {
            dailyPrices.push(generateRandomPrice(type));
        }
        monthlyData.push({
            month,
            dailyPrices,
        });
    }
    return monthlyData;
}

function generateRandomPrice(type) {
    switch (type) {
        case 'h20':
            return parseFloat((Math.random() * 10 + 20).toFixed(2)); // $20-$30
        case 'coal':
            return parseFloat((Math.random() * 20 + 50).toFixed(2)); // $50-$70
        case 'gas':
            return parseFloat((Math.random() * 30 + 100).toFixed(2)); // $100-$130
        case 'nuclear':
            return parseFloat((Math.random() * 50 + 200).toFixed(2)); // $200-$250
        default:
            return 0;
    }
}

export default energyPrices;