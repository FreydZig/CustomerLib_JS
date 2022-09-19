class AddressValidator {
  static ErrorMessages = {
    addressLineIsEmptyOrTooLong: "Address Line Is Empty Or Too Long!",
    addressLine2IsEmptyOrTooLong: "Address Line 2 Is Empty Or Too Long!",
    addressTypeIsIncorrect: "Address Type Is Incorrect!",
    cityIsEmptyOrTooLong: "City Is Empty Or Too Long!",
    postalCodeIsEmptyOrTooLong: "Postal Code Is Empty Or Too Long!",
    stateIsEmptyOrTooLong: "State Is Empty Or Too Long!",
    countryIsIncorrect: "Country Is Incorrect!",
  };

  static Constraints = {
    addressLineMaxLength: 100,
    addressLine2MaxLength: 100,
    addressType: { Shipping: 1, Billing: 2 },
    cityMaxLength: 50,
    postalCodeMaxLength: 6,
    stateMaxLength: 20,
    countries: ["USA", "Canada"],
  };

  static Validate = (address) => {
    const errors = [];

    if (
      !address.addressLine ||
      address.addressLine.length > this.Constraints.addressLineMaxLength
    )
      errors.push(this.ErrorMessages.addressLineIsEmptyOrTooLong);

    if (
      !address.addressLine2 ||
      address.addressLine2.length > this.Constraints.addressLine2MaxLength
    )
      errors.push(this.ErrorMessages.addressLine2IsEmptyOrTooLong);

    if (
      !Object.values(this.Constraints.addressType).includes(address.addressType)
    )
      errors.push(this.ErrorMessages.addressTypeIsIncorrect);

    if (!address.city || address.city.length > this.Constraints.cityMaxLength)
      errors.push(this.ErrorMessages.cityIsEmptyOrTooLong);

    if (
      !address.postalCode ||
      address.postalCode.length > this.Constraints.postalCodeMaxLength
    )
      errors.push(this.ErrorMessages.postalCodeIsEmptyOrTooLong);

    if (
      !address.state ||
      address.state.length > this.Constraints.stateMaxLength
    )
      errors.push(this.ErrorMessages.stateIsEmptyOrTooLong);

    if (!this.Constraints.countries.includes(address.country))
      errors.push(this.ErrorMessages.countryIsIncorrect);

    return errors;
  };
}

module.exports = { AddressValidator };
