import NeoInputNumber from "./src/input-number"

/* istanbul ignore next */
NeoInputNumber.install = function(Vue) {
	Vue.component(NeoInputNumber.name, NeoInputNumber);
};

export default NeoInputNumber;