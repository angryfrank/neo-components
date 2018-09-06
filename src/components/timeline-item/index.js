import NeoTimelineItem from '../timeline/src/timeline-item.vue'

NeoTimelineItem.install = function(Vue){
    Vue.component(NeoTimelineItem.name,NeoTimelineItem);
}

export default NeoTimelineItem;