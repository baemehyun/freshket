import { Order,Calculator } from "./calculator";

describe("Calculator", () => {
    test("{ red: 1, green: 1 } with no member card", () => {
        const order:Order = { red: 1, green: 1 };
        const total = Calculator.calculate(order, false);
        expect(total).toBe(90); // 50 + 40 = 90
    });

    test("{ red: 2, green: 3, blue: 1 } with no member card", () => {
        const order:Order = { red: 2, green: 3, blue: 1 };
        const total = Calculator.calculate(order, false);
        expect(total).toBe(246); // 50*2 + 40*3 + 30-(80*0.05) = 100+120+ 30-4 = 246
    });

    test("{red: 2, green: 3, blue: 1 } with member card", () => {
        const order:Order = { red: 2, green: 3, blue: 1 };
        const total = Calculator.calculate(order, true);
        expect(total).toBe(221.4); // (246*0.9)
    });

    test("orange: 4, pink: 2, green: 2 (all bundle set)", () => {
        const order:Order = { orange: 4, pink: 2, green: 2 };
        const total = Calculator.calculate(order, false);
        expect(total).toBe(684); // (120*4-(240*2*0.05) + 80*2-(160*0.05) + 40*2-(80*0.05)) = 480-24 + 160-8 + 80-4= 456+152+76 = 684
    });
});