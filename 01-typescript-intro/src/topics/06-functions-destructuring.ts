export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}


const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

export function taxCalculation(options: TaxCalculationOptions): [number, number]{

    let total = 0;
    const {tax, products: shoppingProducts} = options;


    shoppingProducts.forEach( ({price: productPrice}) => {
        total += productPrice;
    });

    return [total, total * tax];

}

const [total, totalWithTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});


console.log('Total: ', total);
console.log('Tax: ', totalWithTax);
export {};