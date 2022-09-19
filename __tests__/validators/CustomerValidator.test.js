const {Customer} = require('../../src/Customer')
const {CustomerValidator} = require('../../src/validators/CustomerValidator')
const {Address} = require('../../src/Address')

describe('CustomerValidator', () => {
    it('Should be able to return all Errors', () => {
        const firstName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        //const address = new Address('', 'addressLine', 'd', '', '', '', 'F')
        const customer = new Customer(firstName, '', null, '', '', '', 0, new Date("2000-1-1"))

        //expect(CustomerValidator.Validate(customer).length).toBe(7);
        expect(CustomerValidator.Validate(customer)[0]).toBe("First Name Is Too Long!")
        expect(CustomerValidator.Validate(customer)[1]).toBe("Last Name Is Empty Or Too Long!")
        expect(CustomerValidator.Validate(customer)[2]).toBe("Address Is Empty")
        expect(CustomerValidator.Validate(customer)[3]).toBe("Phone Number Is Incorrect!")
        expect(CustomerValidator.Validate(customer)[4]).toBe("Email Is Incorrect!")
        expect(CustomerValidator.Validate(customer)[5]).toBe("Notes Is Empty!")
        expect(CustomerValidator.Validate(customer)[6]).toBe("Last Purchase Date Is Incorrect!")
    })
})