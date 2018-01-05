
Feature('Navigate Modus Create Site');

Scenario('Navigate to Home Page @home', (I, modusHomePage, navigateHomePageStep) => {
  navigateHomePageStep.verifyPractice('Business Analysis');
});

Scenario('Fill in First and Last Name in Email Form @modal', (I, modusHomePage, modusEmailModalFragment, navigateHomePageStep) => {
  navigateHomePageStep.navigateToHomePage();
  I.click(modusHomePage.emailButton);
  I.say('I can fill in the email form'); // You can add comments within your tests
  modusEmailModalFragment.fillInEmailForm('James', 'Bond');
})
