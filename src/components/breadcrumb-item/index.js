import NeoBreadcrumbItem from "../breadcrumb/src/breadcrumb-item"

/* istanbul ignore next */
NeoBreadcrumbItem.install = function(Vue) {
	Vue.component(NeoBreadcrumbItem.name, NeoBreadcrumbItem);
};

export default NeoBreadcrumbItem;