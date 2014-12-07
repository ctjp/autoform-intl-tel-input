Tinytest.add('afIntlTelInput - Defines', function (test) {
  // Instance
  test.equal(Template.afIntlTelInput instanceof Blaze.Template, true);
  test.equal(typeof Template.afIntlTelInput.rendered, 'function');
  test.equal(typeof Template.afIntlTelInput.destroyed, 'function');
});
