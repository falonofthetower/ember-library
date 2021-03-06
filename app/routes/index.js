import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then(() => this.transitionTo(''));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
