const maxProfit = prices => {
    let max = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            max = prices[j] - prices[i] > max ? (prices[j] - prices[i]) : max;
        }
    }
    return max
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));