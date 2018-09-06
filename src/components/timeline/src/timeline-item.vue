<template>
    <div class="neo-timeline__item" :class="`is-${status}`">
        <span class="neo-timeline__timestamp">{{item.timestamp}}</span>
        <div class="neo-timeline__line" :class="`is-${status}`"></div>
        <p class="neo-timeline__content">
            <span :style="[item.isCurrent ? {fontSize:'16px'} : null]">{{item.content}}</span>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'NeoTimelineItem',
        props: {
            item: Object,
        },
        data() {
            return {};
        },
        computed:{
            status(){
                return this.item.isCurrent ? 'current':'prev';
            }
        }
    }
</script>