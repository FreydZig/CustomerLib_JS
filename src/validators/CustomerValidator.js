class CustomerValidator {
  static ErrorMessages = {
    firstNameIsTooLong: "First Name Is Too Long!",
    lastNameIsEmptyOrTooLong: "Last Name Is Empty Or Too Long!",
    addressIsEmpty: "Address Is Empty",
    phoneNumberIsIncorrect: "Phone Number Is Incorrect!",
    emailIsIncorrect: "Email Is Incorrect!",
    notesIsEmpty: "Notes Is Empty!",
    lastPurchaseDateIsIncorrect: "Last Purchase Date Is Incorrect!",
  };

  static Rules = {
    firstNameMaxLength: 50,
    lastNameMaxLength: 50,
    phoneNumberRegex: /^(\+1|1)?([2-9]\d\d[2-9]\d{6})$/,
    emailRegex: /^[a-zA-Z\d_.+-]+@[a-zA-Z\d-]+\.[a-zA-Z\d-.]+$/,
    lastPurchaseDateMin: new Date("2020-1-1"),
  };

  static Validate = (customer) => {
    const errors = [];

    if (customer.FirstName.length > this.Rules.firstNameMaxLength)
      errors.push(this.ErrorMessages.firstNameIsTooLong);

    if (!customer.LastName || customer.LastName.length > this.Rules.lastNameMaxLength)
      errors.push(this.ErrorMessages.lastNameIsEmptyOrTooLong);

    if (customer.Address === null || customer.Address.length < 1)
      errors.push(this.ErrorMessages.addressIsEmpty);

    if (!customer.PhoneNumber.match(this.Rules.phoneNumberRegex))
      errors.push(this.ErrorMessages.phoneNumberIsIncorrect);

    if (!customer.Email.match(this.Rules.emailRegex))
      errors.push(this.ErrorMessages.emailIsIncorrect);

    if (customer.Notes.length < 1) errors.push(this.ErrorMessages.notesIsEmpty);

    if (customer.LastPurchaseDate < this.Rules.lastPurchaseDateMin)
      errors.push(this.ErrorMessages.lastPurchaseDateIsIncorrect);

    return errors;
  };
}

module.exports = { CustomerValidator };
