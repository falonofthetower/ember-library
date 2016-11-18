import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidText: Ember.computed.gte('messageText.length', 5),
  isValid: Ember.computed.and('isValidText', 'isValidEmail'),

  actions: {

    sendMessage() {
      alert(`The following message is being sent: ${this.get('messageText')} with this email: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thanks! We have your message and will be in touch soon!`);
      this.set('messageText', '');
      this.set('emailAddress', '');
    }
  }
});
