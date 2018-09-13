import NeoGallery from "./src/gallery"

/* istanbul ignore next */
NeoGallery.install = function(Vue) {
	Vue.component(NeoGallery.name, NeoGallery);
};

export default NeoGallery;