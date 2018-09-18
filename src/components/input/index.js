import NeoInput from './src/input';

/* istanbul ignore next */
NeoInput.install = function(Vue) {
  Vue.component(NeoInput.name, NeoInput);
};

export default NeoInput;
