
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  // Insert your locators and methods here. Both CSS and XPATH can be used.
  practiceContainer: {
    css: 'div[class="practice--container"]'
  },
  emailButton: {
    xpath: '//*[@id="practices"]/div/div[6]/div/a'
  }
}
