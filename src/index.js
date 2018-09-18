// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//var Button = require('./components/button/index.js');
import Button from './components/button/index.js'
import Breadcrumb from './components/breadcrumb/index.js'
import BreadcrumbItem from './components/breadcrumb-item/index.js'
import Tabs from './components/tabs/index.js'
import TabPane from './components/tab-pane/index.js'
import Step from './components/step/index.js'
import Steps from './components/steps/index.js'
import DividingLine from './components/dividing-line/index.js'
import Timeline from './components/timeline/index.js'
import TimelineItem from './components/timeline-item/index.js'
import CheckboxTag from './components/checkbox-tag/index.js'
import CheckboxTagGroup from './components/checkbox-tag-group/index.js'
import Gallery from './components/gallery/index.js'
import Input from './components/input/index.js'
import InputNumber from './components/input-number/index.js'
import LinkageSelectbox from './components/linkage-selectbox/index.js'

const components = [
	Button,
	Breadcrumb,
	BreadcrumbItem,
	Tabs,
	TabPane,
	Step,
	Steps,
	DividingLine,
	Timeline,
	TimelineItem,
	CheckboxTag,
	CheckboxTagGroup,
	Gallery,
	Input,
	InputNumber,
	LinkageSelectbox
];

const install = function(Vue, opts = {}) {
	components.map(component => {
		Vue.component(component.name, component);
	});
}

/* istanbul ignore if */
if(typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	version: '1.0.9',
	install,
	Button,
	Breadcrumb,
	BreadcrumbItem,
	Tabs,
	TabPane,
	Step,
	Steps,
	DividingLine,
	Timeline,
	TimelineItem,
	CheckboxTag,
	CheckboxTagGroup,
	Gallery,
	Input,
	InputNumber,
	LinkageSelectbox
};