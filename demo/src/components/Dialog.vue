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
    <p ref="refInfo" style="top:100px;position:absolute;z-index:10000;font-size:36px;">hello</p>
    <transition name="fade" :duration="1000"
     v-on:before-enter="beforeEnter" 
     v-on:enter="enter"
     v-on:after-enter="afterEnter"
     v-on:enter-cancelled="enterCancelled">
        <p style="position:absolute;z-index:10000;font-size:36px;" v-if="show">hello</p>
    </transition>
</div>
</template>

<script>
let inBrowser = true;
let raf = inBrowser ?
    window.requestAnimationFrame ?
    window.requestAnimationFrame.bind(window) :
    setTimeout :
    /* istanbul ignore next */
    function (fn) {
        return fn();
    };

function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }

    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(" ") > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.add(c);
            });
        } else {
            el.classList.add(cls);
        }
    } else {
        var cur = " " + (el.getAttribute("class") || "") + " ";
        if (cur.indexOf(" " + cls + " ") < 0) {
            el.setAttribute("class", (cur + cls).trim());
        }
    }
}

function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }

    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(" ") > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.remove(c);
            });
        } else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute("class");
        }
    } else {
        var cur = " " + (el.getAttribute("class") || "") + " ";
        var tar = " " + cls + " ";
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, " ");
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute("class", cur);
        } else {
            el.removeAttribute("class");
        }
    }
}
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
            let refs = this.$refs;
            console.log(refs);
            let el = refs.refInfo;
            if (this.show) {
                this.show = false;
                 el.style.display = "none";
                removeClass(el, "fade-enter");
                removeClass(el, "fade-enter-to");
                removeClass(el, "fade-enter-active");
            } else {
                this.show = true;
                 el.style.display = "block";
                addClass(el, "fade-enter");
                addClass(el, "fade-enter-active");
                raf(function () {
                  raf(function () {
                        removeClass(el, "fade-enter");
                        addClass(el, "fade-enter-to");
                        let onend = function () {
                            console.log("执行完毕！");
                            removeClass(el, "fade-enter-to");
                            removeClass(el, "fade-enter-active");
                            el.removeEventListener("transitionend", onend);
                        }
                        el.addEventListener("transitionend", onend);
                    });
                });
                  
               
            }

            // console.log(this);
        },
        beforeEnter(el){
            console.log(el);
        },
        enter(el,done){
            console.log(el);
             console.log(done);
            // alert('enter');
            setTimeout(function(){
                done();
            },2000);
            
        },
        afterEnter(el){
            console.log('完成');
        },
        enterCancelled(){
             console.log('取消');
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
    font-size: 45px !important;
}

.fade-enter-active {
    transition: all 2s;
}

.fade-enter-to {
    opacity: 1;
    font-size: 90px !important;
}

.fade-leave {}

.fade-leave-active {}

.fade-leave-to {}
</style>
