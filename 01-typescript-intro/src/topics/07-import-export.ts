import { Product, taxCalculation } from './06-functions-destructuring';

const shoppingCard: Product[] = [
    {   
        description: "Nokia A1",
        price: 150.0 
    },
    {   
        description: "iPad Air",
        price: 250.0
    }
];

const [ total, totalWithTax ] = taxCalculation({
    tax: 0.15,
    products: shoppingCard
});

console.log('Total: ', total);
console.log('Tax: ', totalWithTax);
