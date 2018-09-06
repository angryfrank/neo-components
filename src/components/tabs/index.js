import NeoTabs from './src/tabs';

/* istanbul ignore next */
NeoTabs.install = function(Vue) {
  Vue.component(NeoTabs.name, NeoTabs);
};

export default NeoTabs;
