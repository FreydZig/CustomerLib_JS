const {AddressValidator} = require('../../src/validators/AddressValidator')
const {Address} = require("../../src/Address");

describe('AddressValidator', () => {
    it('Should be able to return all Errors', () => {
        const addressLine = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        const address = new Address('', addressLine, 'd', '', '', '', 'F')

        expect(AddressValidator.Validate(address)[0]).toBe("Address Line Is Empty Or Too Long!")
        expect(AddressValidator.Validate(address)[1]).toBe("Address Line 2 Is Empty Or Too Long!")
        expect(AddressValidator.Validate(address)[2]).toBe("Address Type Is Incorrect!")
        expect(AddressValidator.Validate(address)[3]).toBe("City Is Empty Or Too Long!")
        expect(AddressValidator.Validate(address)[4]).toBe("Postal Code Is Empty Or Too Long!")
        expect(AddressValidator.Validate(address)[5]).toBe("State Is Empty Or Too Long!")
        expect(AddressValidator.Validate(address)[6]).toBe("Country Is Incorrect!")
        expect(AddressValidator.Validate(address).length).toBe(7)
    })

    it('Should be able to return else Errors', () => {
        const addressLine = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        const address = new Address(addressLine, 'addressLine', 'd', '', '1234567', '', 'F')

        expect(AddressValidator.Validate(address)[0]).toBe("Address Line Is Empty Or Too Long!")
        expect(AddressValidator.Validate(address)[3]).toBe("Postal Code Is Empty Or Too Long!")
    })

})