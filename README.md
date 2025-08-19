# Food Store Calculator

This project provides a `Calculator` class for a food store with 7 menu items.  
It can calculate the total price of an order with support for bundle discounts and member card discounts.

---

## 🛒 Menu

| Item        | Price (THB/set) |
|-------------|-----------------|
| Red set     | 50              |
| Green set   | 40              |
| Blue set    | 30              |
| Yellow set  | 50              |
| Pink set    | 80              |
| Purple set  | 90              |
| Orange set  | 120             |

---

## 🎯 Discount Rules
1. **Member Card**: Customers get **10% off the total bill**.
2. **Bundle Discount**:  
   - Orange, Pink, and Green sets get **5% off every pair (2 items)**.  
   - Example: 5 Orange sets → 2 discounted pairs (4 items) + 1 full price.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/baemehyun/freshket.git
cd freshket
npm install
```

---

##  Running unit-test
```bash
npx jest
```
