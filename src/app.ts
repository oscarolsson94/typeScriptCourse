// const anchor = document.querySelector('a')!; //<---- add ! if you are sure there is an <a>-tag in the DOM

// console.log(anchor.href) // typeScript doesnt know if there is an <a>-tag in the dom or not

// const form = document.querySelector('form')!; // typescript knows what kind of element it is, and what methods it has available

// const form = document.querySelector('.new-item-form'); //typescript doesnt know what kind of element it is, only that it has a class
// const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type cast it into a Form-element

// classes -----------------------------------
class Invoice{

    client: string;
    details: string;
    amount: number;

    constructor(c:string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// // inputs --------------------------
// const type = document.querySelector('#type')! as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
// const details = document.querySelector('#details')! as HTMLInputElement;
// const amount = document.querySelector('#amount')! as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault(); // prevents browser from refreshing on submit

//     console.log( // grab values from the input fields (as strings)
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber // grab the value as a number instead of a string
//     )

// })

