const {Person} = require("./Person");
class Customer extends Person {
  constructor(
    firstName,
    lastName,
    addresses,
    phoneNumber,
    email,
    notes,
    totalPurchasesAmount,
    lastPurchaseDate
  ) {
    super(firstName, lastName);

    this.Address = addresses;
    this.PhoneNumber = phoneNumber;
    this.Email = email;
    this.Notes = notes;
    this.TotalPurchasesAmount = totalPurchasesAmount;
    this.LastPurchaseDate = lastPurchaseDate;
  }
}

module.exports = { Customer };
