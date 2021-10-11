interface SmallestPriceItem {
    fullPrice: string;
    priceWithDiscount: string;
}

export const getSmallestPrice = (array: SmallestPriceItem[]) => {
    const allPrices = array.reduce((acc, item) => {
        acc.push(Number(item.priceWithDiscount), Number(item.fullPrice))
        return acc;
    }, [] as number[]);

    return Math.min(...allPrices);
};