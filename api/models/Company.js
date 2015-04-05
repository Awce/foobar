/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    company_name  : { type: 'string', required: true, unique: true },
    company_rfc   : { type: 'string', required: true, maxLength: 13},
    owner         : { model: 'User'}
  }
};
