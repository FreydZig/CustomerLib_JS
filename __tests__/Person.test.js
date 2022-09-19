const {Person} = require('../src/Person')

describe('Person', () => {
    it('Should be able to create Person', () => {
        const person = new Person('Tom', 'Hangs');

        expect(person.FirstName).toBe('Tom')
        expect(person.LastName).toBe('Hangs')
    })
})