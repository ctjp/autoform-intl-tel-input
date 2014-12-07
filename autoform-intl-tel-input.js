AutoForm.addInputType('intl-tel-input', {
  template: 'afIntlTelInput',
  valueOut: function () {
    return this.val();
  }
});

Template.afIntlTelInput.rendered = function () {
  var $input = this.$('input');
  var data = this.data;

  // instanciate intlTelInput
  $input.intlTelInput(data.selectOptions);

  // set and reactively update values
  this.autorun(function () {
    var data = Template.currentData();

    // set field value
    if (typeof data.value !== 'undefined') {
      $input.val(data.value);
    }
  });

};

Template.afIntlTelInput.destroyed = function () {
  this.$('input').intlTelInput('destroy');
};
