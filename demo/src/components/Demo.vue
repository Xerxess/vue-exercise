<template>
<div class="demo">
    <div class="flex">
        <div :id="id">{{name2}}</div>
        <div v-text="conut"></div>
        <div v-text="data.name"></div>
        <div @click="logSex">{{sex}}</div>
        <div @click="logSex">{{data.data.name}}</div>
        <div @click="logSex">{{setDemo}}</div>
        <input type="input" @input="input" v-model="data.name"/>
</div>
        <transition-group tag="ul">
            <li v-for="item in list.data" :key="item.id" v-show="item.show" @click="item.show=null">
                姓名：{{item.name}};性别：{{item.sex}}
            </li>
        </transition-group>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    name: "demo-data",
    props: ["name2"],
    data: function () {
        return {
            id: "first_demo",
            name: "江湖小白",
            sex: "男",
            data: {
                data: {
                    name: ""
                }
            },
            conut: 0,
            age: 28,
            list: {
                data: [{
                        id: 1,
                        name: "小明",
                        sex: "男",
                        show: true
                    },
                    {
                        id: 2,
                        name: "小哎",
                        sex: "女",
                        show: true
                    },
                    {
                        id: 3,
                        name: "小美",
                        sex: "女",
                        show: true
                    }
                ]
            }
        };
    },
    computed: {
        setDemo: {
            get: function () {
                return "demo_this";
            },
            set: function (value) {
                this.data.data.name = value;
            }
        }
    },
    methods: {
        logSex: function (event) {
            console.log(this.$props);
            console.log(this.$attrs);
            console.log(this);
            console.log(this.$listeners);
            this.sex = "保密";
            $("#first").html("小明");
            this.$emit("my-event");
            this.setDemo = "我已经修改了名字了亲";
            // this.list.data.shift();
            this.list.data.sort(function (a, b) {
                return b.id - a.id;
            });
        },
        input: function ($event) {
            const $target = $($event.target);
            // console.log($target.val().trim());
        }
    },
    watch: {
        sex: function () {
            this.conut++;
        },
        name: {
            get: function () {
                return "name_get";
            },
            set: function (v) {}
        },
        setDemo: function () {
            console.log("computed");
        }
    }
};
</script>

<style lang="less">
.demo {
    .flex {
        display: flex;
        width: 400px;

        >div {
            border: 1px solid #ddd;
            box-sizing: border-box;
            height: 200px;
            flex: 1;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity .5s;
}

.v-enter,
.v-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
