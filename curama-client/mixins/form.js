import _ from 'lodash';

export default {
  methods: {
    validateModel (model = 'model') {
      _.keys(this[model]).forEach((modelKey) => {
        if (this.$v[model][modelKey]) {
          this.$v[model][modelKey].$touch();
        }
      });
    }
  }
};
