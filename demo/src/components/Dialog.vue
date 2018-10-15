<template>
<div>
    <div class="payment-info J_PaymentInfo">
        <div class="mask"></div>
        <div class="bem-dialog bem-dialog_color-blue_shadow">
            <div class="bem-dialog__header bem-dialog__title_border bem-dialog__title_margin10">
                <span class="bem-dialog__title">{{title||'默认标题'}}</span>
                <div class="bem-dialog__closeed bem-dialog__closeed_right J_Closeed">
                    <i class="bem-icon icon-close"></i></div>
            </div>
            <div class="bem-dialog__content">{{title||'默认内容'}}
            </div>
            <div class="bem-dialog__footer">
                <button @click="closeed" class="bem-btn bem-btn_color-blue_shadow">我知道了</button>
            </div>
        </div>
    </div>
    <transition name="fade">
        <p style="position:absolute;z-index:10000;font-size:36px;" v-if="show">hello</p>
    </transition>
</div>
</template>

<script>
export default {
    props: {
        title: "String",
        content: "String"
    },
    data: function () {
        console.log(this);
        return {
            show: false
        };
    },
    methods: {
        closeed() {
            if (this.show) {
                this.show = false;
            } else {
                this.show = true;
            }

            console.log(this);
        }
    }
};
</script>

<style lang="less">
@import "../less/mixins.less";

.bem-dialog {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;

    background: #fff;
}

.bem-dialog__header {
    text-align: center;
    position: relative;
}

.bem-dialog__title_border {
    border-bottom: 1px solid #ddd;
}

.bem-dialog__title_margin10 {
    margin-left: 10px;
    margin-right: 10px;
}

.bem-dialog__title {
    display: inline-block;

    font-size: 16px;
    color: #333;
}

.bem-dialog__closeed {
    position: absolute;
    top: 50%;

    width: 14px;
    height: 14px;

    margin-top: -7px;
}

.bem-dialog__closeed_right {
    right: 10px;
}

.icon-close {
    width: 100%;
    height: 100%;
    text-indent: -100000px;
    cursor: pointer;
    outline: 0;
    overflow: hidden;
    opacity: 0.6;
    transition: all 0.5s;
    background: url(../assets/close.png) no-repeat center;
}

.icon-close:hover {
    opacity: 1;
    transform: rotate(-180deg);
}

.bem-dialog__content {
    font-size: 14px;
    padding: 15px;
}

.bem-dialog__footer {}

.bem-btn {
    display: inline-block;

    border: 0 solid transparent;
    font-size: 14px;
    color: #666;
    background: transparent;
    border-radius: 3px;
}

.bem-btn_color-blue_shadow {
    border: 1px solid #0066ff;
    color: #0066ff;
    box-shadow: 5px 5px 5px rgba(0, 102, 255, 0.3);
}

.bem-btn_color-blue_shadow:hover {
    .transition(all 0.3s);
    color: #fff;
    background: rgba(0, 102, 255, 0.7);
}

.bem-dialog_color-blue_shadow {
    .bem-btn_color-blue_shadow();
}

.payment-info {
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;

        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.5);
    }

    .bem-dialog {
        left: 50%;
        top: 50%;
        min-width: 600px;
        margin-left: -250px;
        margin-top: -100px;
    }

    .bem-dialog__header {}

    .bem-dialog__title {
        color: #2a7efd;
        line-height: 46px;
    }

    .bem-dialog__content {
        padding: 40px 0;

        color: #000;
        text-align: center;

        box-sizing: border-box;
    }

    .bem-dialog__footer {
        text-align: center;
        padding: 0 0 20px 0;
    }

    .bem-btn {
        padding: 5px 10px;
    }
}

.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave {}

.fade-leave-active {}

.fade-leave-to {}
</style>
