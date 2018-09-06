import NeoButton from "./src/button"

/* istanbul ignore next */
NeoButton.install = function(Vue) {
	Vue.component(NeoButton.name, NeoButton);
};

export default NeoButton;