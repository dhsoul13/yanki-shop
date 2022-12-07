/* eslint-disable no-throw-literal */
class ErrorValid extends Error {
  constructor(messange, value) {
    super(messange);
    this.name = 'Validate Error';
    this.value = value;
  }
}

export class Validate {
  static isCheckEmail(email) {
    try {
      if (typeof email === 'string') {
        const req = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);

        if (req.test(email)) {
          return {
            status: 'Ok',
            messange: 'Успешно',
            value: email,
          };
        } else {
          throw new ErrorValid('Не валидно', {
            status: 'Error',
            messange: 'Не валидно',
            value: null,
          });
        }
      } else {
        throw new ErrorValid('Ничего не введенно', {
          status: 'Error',
          messange: 'Ничего не введенно',
          value: null,
        });
      }
    } catch (e) {
      throw e;
    }
  }
}
