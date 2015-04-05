var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', required: true, unique: true },
    email     : { type: 'email', required: true,  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    companies  : { collection: 'Company', via: 'owner' }
  },
  validationMessages: { //hand for i18n & l10n
        email: {
            required: 'Email es requerido',
            email: 'Proporciona una dirección de correo electrónico válida.',
            unique: 'La dirección de correo electrónico ya está en uso'
        },
        username: {
            required: 'Se requiere nombre de usuario'
        }
    }
};

module.exports = User;
