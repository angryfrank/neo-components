import NeoTabPane from '../tabs/src/tab-pane';

/* istanbul ignore next */
NeoTabPane.install = function(Vue) {
  Vue.component(NeoTabPane.name, NeoTabs);
};

export default NeoTabPane;
