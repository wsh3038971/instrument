<template>
    <div>
        <van-nav-bar
        title="musicPlayer"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <aplayer theme="pic" :float="float" :mini="mini" :list="musicList" :autoplay="autoplay" :music="musicList[0]" />
        <div>
            <a href="https://github.com/SevenOutman/vue-aplayer/blob/develop/docs/README.zh-CN.md">文档</a>
        </div>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
    data() {
        return {
            mini: false, // 迷你模式
            autoplay: false, // 自动播放
            float: true, // 浮动模式
            musicList: [
                {
                    title: '听见下雨的声音',
                    artist: '周杰伦',
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