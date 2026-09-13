class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Number.MAX_SAFE_INTEGER;
        let maxProfit = 0;

        for (let i=0; i<prices.length; i++) {
            const currentPrice = prices[i];

            const profit = currentPrice - minPrice;
            if (profit < 0) {
                minPrice = currentPrice;
                continue;
            }

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }


        return maxProfit;
    }
}
