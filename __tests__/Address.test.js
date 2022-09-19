const { Address } = require('../src/Address')

describe('Address', () => {
    it('Should be able to create Address' , () => {
        const address = new Address('adLine', 'adLine2', 1, 'city', 123456, 'state', 'country')

        expect(address.addressLine).toBe('adLine')
        expect(address.addressLine2).toBe('adLine2')
        expect(address.addressType).toBe(1)
        expect(address.city).toBe('city')
        expect(address.postalCode).toBe(123456)
        expect(address.state).toBe('state')
        expect(address.country).toBe('country')
    })
})