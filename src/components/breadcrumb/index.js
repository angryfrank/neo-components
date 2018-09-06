import NeoBreadcrumb from "./src/breadcrumb"

/* istanbul ignore next */
NeoBreadcrumb.install = function(Vue) {
	Vue.component(NeoBreadcrumb.name, NeoBreadcrumb);
};

export default NeoBreadcrumb;