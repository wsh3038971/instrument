<template>
    <div>
        <van-nav-bar
        title="musicPlayer"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <aplayer autoplay v-for="(item, index) in musicList" :key="index" :music="item" />
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
    data() {
        return {
            musicList: [
                {
                    title: '听见下雨的声音',
                    artist: 'Silent Siren',
                    src: require('../../assets/music/听见下雨的声音.mp3'),
                    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                },
                {
                    title: '听见下雨的声音',
                    artist: 'Silent Siren',
                    src: require('../../assets/music/听见下雨的声音.mp3'),
                    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                },
                {
                    title: '听见下雨的声音',
                    artist: 'Silent Siren',
                    src: require('../../assets/music/听见下雨的声音.mp3'),
                    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                }
            ]
        }
    },
    components: {
        Aplayer
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>