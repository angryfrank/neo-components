import NeoDividingLine from "./src/dividing-line"

/* istanbul ignore next */
NeoDividingLine.install = function(Vue) {
	Vue.component(NeoDividingLine.name, NeoDividingLine);
};

export default NeoDividingLine;