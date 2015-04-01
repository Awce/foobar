/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  bearer: {
    strategy: require('passport-http-bearer').Strategy
  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: 'XNpvuHU0DgtB54XdJtuBlFgzN',
      consumerSecret: 'PslvCrnypSdELihWmR8PePPxGYTBZJlYZodUX8b2K0OIq2I3XO'
    }
  },

  // github: {
  //   name: 'GitHub',
  //   protocol: 'oauth2',
  //   strategy: require('passport-github').Strategy,
  //   options: {
  //     clientID: 'your-client-id',
  //     clientSecret: 'your-client-secret'
  //   }
  // },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '740842142629552',
      clientSecret: '96be659155c4a56fbe2375d29f8b7ee2',
      scope: ['email'] /* email is necessary for login behavior */
    }
  },

  // google: {
  //   name: 'Google',
  //   protocol: 'oauth2',
  //   strategy: require('passport-google-oauth').OAuth2Strategy,
  //   options: {
  //     clientID: 'your-client-id',
  //     clientSecret: 'your-client-secret'
  //   }
  // },

  cas: {
    name: 'CAS',
    protocol: 'cas',
    strategy: require('passport-cas').Strategy,
    options: {
      ssoBaseURL: 'http://your-cas-url',
      serverBaseURL: 'http://localhost:1337',
      serviceURL: 'http://localhost:1337/auth/cas/callback'
    }
  },
  
  intuit: {
    name: 'QuickBooks',
    protocol: 'oauth',
    strategy: require('passport-intuit-oauth').Strategy,
    options: {
      consumerKey: 'qyprd7IKWSyEekLuKrO3qCvmkQ81gM',
      consumerSecret: 'BCEnCQOibsyc52oC6Qr1kuYYi2mSJ68oOKgCQza5'
      //callbackURL: "http://127.0.0.1:1337/auth/intuit/callback"
    }
  }
};