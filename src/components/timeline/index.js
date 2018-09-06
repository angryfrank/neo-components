import NeoTimeline from './src/timeline.vue'

NeoTimeline.install = function(Vue){
    Vue.component(NeoTimeline.name,NeoTimeline);
}

export default NeoTimeline;