export const menu: Record<string, number> = {
    red: 50,
    green: 40,
    blue:30,
    yellow: 50,
    pink:80,
    purple:90,
    orange:120,
}

export interface Order {
    red?: number;
    green?: number;
    blue?: number;
    yellow?: number;
    pink?: number;
    purple?: number;
    orange?: number;
}

const bundleSet = ["orange","pink","green"]

export class Calculator {
    public static calculate(order: Order,hasMemberCard:boolean = false): number{
        let total = 0;

        let subTotal = 0;
        // loop order
        for (const item in order) {
            console.log(`item: ${item} ${menu[item]}`);
            subTotal += menu[item] * order[item];
        }

        // check if has ordered bundle set
        let bundleDiscount = 0;
        
        for (const bundleItem of bundleSet) {
            let pairCount = Math.floor(order[bundleItem] / 2);
            if (pairCount > 0) {
                bundleDiscount += menu[bundleItem]* 2 * pairCount * 0.05
            }
        }

        total = subTotal - bundleDiscount;

        // check if has member card
        if (hasMemberCard) {
            total = total * 0.9; // 10% discount for member card
        }


        return Math.round(total*100)/100;
    }
}

// Example usage
const order1: Order = {red: 2, green: 3, blue: 1};
let test = Calculator.calculate(order1, false);
console.log(test); // Output: 50*2+40*3-(80*0.05)+30=100+116+30= 246
