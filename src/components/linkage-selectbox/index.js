import NeoLinkageSelectbox from "./src/linkage-selectbox"

/* istanbul ignore next */
NeoLinkageSelectbox.install = function(Vue) {
	Vue.component(NeoLinkageSelectbox.name, NeoLinkageSelectbox);
};

export default NeoLinkageSelectbox;