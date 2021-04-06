<template>
    <div class="nextTick">
        <van-nav-bar
            title="nextTick"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div>
            <van-button @click="showBtn">{{btnText}}</van-button>
            <div>点击按钮显示输入框,并且获取输入框焦点,但是因为视图渲染慢于获取焦点,焦点并没有获得</div>
        </div>
        <div>
            <van-button @click="nextTickBtn">{{btnText}}</van-button>
            <div>使用nexttick确保在视图渲染完毕之后操作,此时可以获得焦点</div>
        </div>
        <div class="box" id="box" v-show="boxFlas"></div>
        <input type="text" v-show="boxFlas" id="inputs">
    </div>
</template>

<script>
export default {
    data() {
        return {
            btnText: '',
            boxFlas: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            console.log('视图渲染完毕')
        })
    },
    watch: {
        boxFlas: {
            handler() {
                if (this.boxFlas) {
                    this.btnText = '隐藏'
                } else {
                    this.btnText = '显示'
                }
            },
            immediate: true
        }
    },
    methods: {
        showBtn() {
            this.boxFlas = !this.boxFlas
            document.getElementById("inputs").focus()
        },
        nextTickBtn() {
            this.boxFlas = !this.boxFlas
            this.$nextTick(function() {
                document.getElementById("inputs").focus()
            })
        },
        onClickLeft() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="less">
.box {
    width: 50px;
    height: 50px;
    background-color: red;
}
</style>