<template>
    <div class="neo-gallery">
        <div class="neo-gallery__booth" @mousemove="selectContainerMouseMove" @mouseover="selectContainerMouseOver"
            @mouseout="selectContainerMouseOut">
            <img :src="imgSrcUrl" alt="" id="select-img" class="select-img" />
            <span v-if="imgSrcUrl" class="mask" id="mask" @mouseover="maskMouseOver" @mouseout="maskMouseOut"></span>
            <div class="big-box" id="big-box">
                <img :src="imgSrcUrl" alt="" id="big-img" class="big-img" />
            </div>
        </div>
        <div class="neo-gallery__thumb">
            <i class="swiper-button-prev neo-icon" slot="button-prev">&#xe6a3;</i>
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in homeBanner" :key="index">
                    <img @click="imgClick(item)" :src="item" alt="" class="img">
                </swiper-slide>
            </swiper>
            <i class="swiper-button-next neo-icon" slot="button-next">&#xe6a2;</i>
        </div>
    </div>
</template>

<script>
    // import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    // import 'swiper/dist/css/swiper.css'
    export default {
        name: 'NeoGallery',
        components: {
            // Swiper, 
            // SwiperSlide
        },
        props: {
            homeBanner: {
                type: Array,
                default: function () {
                    return [];
                },
            },
            isShowBigImg: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                imgSrcUrl: this.homeBanner[0] ? this.homeBanner[0] : "",
                swiperOption: {
                    slidesPerView: 4,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },
            };
        },
        methods: {
            imgClick,
            selectContainerMouseOver,
            selectContainerMouseOut,
            selectContainerMouseMove,
            maskMouseOver,
            maskMouseOut,
        }
    }

    function imgClick(item) {
        this.imgSrcUrl = item
    }

    function selectContainerMouseOver() {
        if (this.isShowBigImg) {
            let mask = document.getElementById("mask");
            if (mask.style) {
                mask.style.display = "block";
                mask.style.cursor = "pointer";
            }
        }
    }

    function selectContainerMouseOut() {
        let mask = document.getElementById("mask");
        if (mask.style) {
            mask.style.display = "none";
        }
    }

    function selectContainerMouseMove(ev) {
        let bigImg = document.getElementById("big-img");
        let mask = document.getElementById("mask");
        let selectImg = document.getElementById("select-img");
        if (!bigImg && !mask && !selectImg) {
            return;
        }
        let clientRect = ev.currentTarget.getBoundingClientRect();
        let evX = (ev.clientX || window || window.event) - clientRect.left;
        let evY = (ev.clientY || window || window.event) - clientRect.top;
        let x = (evX) - mask.offsetWidth / 2;
        let y = (evY) - mask.offsetHeight / 2;
        if ((evX) < mask.offsetWidth / 2) {
            x = 0;
        }
        if ((evX) > selectImg.offsetWidth - mask.offsetWidth / 2) {
            x = selectImg.offsetWidth - mask.offsetWidth;
        }
        if ((evY) < mask.offsetHeight / 2) {
            y = 0;
        }
        if ((evY) > selectImg.offsetHeight - mask.offsetHeight / 2) {
            y = selectImg.offsetHeight - mask.offsetHeight;
        }
        if ((evX) < 264 && (evY) < 264) {
            mask.style.left = x + 'px';
            mask.style.top = y + 'px';
            bigImg.style.left = -x * (bigImg.offsetWidth / selectImg.offsetWidth) + 'px';
            bigImg.style.top = -y * (bigImg.offsetHeight / selectImg.offsetHeight) + 'px';
        }
    }

    function maskMouseOver() {
        let bigBox = document.getElementById("big-box");
        if (!bigBox) {
            return;
        }
        bigBox.style.display = "block";
    }

    function maskMouseOut() {
        let bigBox = document.getElementById("big-box");
        if (!bigBox) {
            return;
        }
        bigBox.style.display = "none";
    }

</script>