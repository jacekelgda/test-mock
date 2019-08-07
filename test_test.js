
Feature('Test');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('My mocked content');
});
