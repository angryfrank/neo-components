<template>
    <div class="neo-timeline">
        <neo-timeline-item v-for="item in list" :key="item.timestamp" :item="item"></neo-timeline-item>
    </div>
</template>
<script>
    export default {
        name: 'NeoTimeline',
        props: {
            itemList: {
                type: Array,
                required: true
            }
        },
        data() {
            return {};
        },
        computed: {
            list: function () {
                const len = this.itemList.length;
                let list = this.itemList.map((item, index) => {
                    return {
                        ...item,
                        isCurrent: index === (len - 1)
                    }
                });
                return list;
            }
        }
    }
</script>