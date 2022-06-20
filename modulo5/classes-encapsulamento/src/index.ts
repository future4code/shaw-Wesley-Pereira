export class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value
        this.date = date
    }

    
}

const transaction = new Transaction('Salary', 1000, '01/01/2019')

console.log(transaction)