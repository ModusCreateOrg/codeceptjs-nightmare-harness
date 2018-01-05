
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  root: '#offCanvasContact',

  // insert your locators and methods here
  firstNameField: {
    css: 'input[name="firstname"]'
  },
  lastNameField: {
    css: 'input[name="lastname"]'
  },

  fillInEmailForm(first, last) {
    within(this.root, () => {
      I.waitForVisible(this.firstNameField, 5);
      I.fillField(this.firstNameField, first);
      I.fillField(this.lastNameField, last);
    });
  }
}
