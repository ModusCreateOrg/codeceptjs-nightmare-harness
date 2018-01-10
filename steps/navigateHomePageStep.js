
'use strict';

let I,
  homePage;

module.exports = {

  _init() {
    I = actor();
    homePage = require('../pages/modusHomePage');
    homePage._init();
  },

  navigateToHomePage() {
    I.amOnPage('/');
  },

  verifyPractice(practice) {
    // action composed from actions of page objects
    this.navigateToHomePage();
    I.seeElement(homePage.practiceContainer);
    within(homePage.practiceContainer, () => {
      I.see(practice);
    });
  }
}
