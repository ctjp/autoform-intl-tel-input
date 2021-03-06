# AutoForm International Telephone Input [![Build Status](https://travis-ci.org/ctjp/autoform-intl-tel-input.png)](https://travis-ci.org/ctjp/autoform-intl-tel-input)

An add-on Meteor package for [aldeed:autoform](https://github.com/aldeed/meteor-autoform). Provides a single custom input type, "intl-tel-input", which renders an input using the [intl-tel-input](https://github.com/Bluefieldscom/intl-tel-input) plugin.

## Prerequisites

The plugin library must be installed separately.

In a Meteor app directory, enter:

```bash
$ meteor add ctjp:meteor-intl-tel-input
$ meteor add aldeed:autoform
```

## Installation

In a Meteor app directory, enter:

```bash
$ meteor add ctjp:autoform-intl-tel-input
```

## Usage

Specify "intl-tel-input" for the `type` attribute of any input. This can be done in a number of ways:

In the schema, which will then work with a `quickForm` or `afQuickFields`:

```js
{
  tel: {
    type: String,
    autoform: {
      type: 'intl-tel-input',
      'class': 'form-control',
      afFieldInput: {
        inputOptions: {
          autoFormat: true,
          defaultCountry: 'auto'
        }
      }
    }
  }
}
```

Or on the `afFieldInput` component or any component that passes along attributes to `afFieldInput`:

```js
{{> afQuickField name="tel" type="intl-tel-input"}}

{{> afFormGroup name="tel" type="intl-tel-input"}}

{{> afFieldInput name="tel" type="intl-tel-input"}}
```

To provide intl-tel-input options, set a `inputOptions` attribute equal to a helper that returns the options object.
