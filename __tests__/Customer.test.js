const {Customer} = require('../src/Customer')
const {Address} = require('../src/Address')

describe('Customer', () => {
    it('Should be able to create Customer', () => {
        const address = new Address('', '', 1, '', '', '', '')
        const date = new Date("2021-1-1")
        const customer = new Customer('Tom', 'Hangs', address, '+12345678901', 'email@email.com', 'note', 123, date)

        expect(customer.FirstName).toBe('Tom')
        expect(customer.LastName).toBe('Hangs')
        expect(customer.Address).toBe(address)
        expect(customer.PhoneNumber).toBe('+12345678901')
        expect(customer.Email).toBe('email@email.com')
        expect(customer.Notes).toBe('note')
        expect(customer.TotalPurchasesAmount).toBe(123)
        expect(customer.LastPurchaseDate).toBe(date)
    })
})