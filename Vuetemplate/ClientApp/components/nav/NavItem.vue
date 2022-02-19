<template>
    <a class="nav-item nav-link" :href="button.href" :id="button.id">
        <div class="d-lg-none pl-3 row">
            <div class="col-2 col-md-1">
                <img :src="button.img" :alt="button.alt" :id="'img-'+ button.id" class="navbar-icon" />
            </div>
            <div class="col-10 pl-0 col-center">
                <div class="nav-item-mbl-text">
                    {{button.label}}
                </div>
            </div>
        </div>
        <img :src="button.img" :alt="button.alt" :id="'img-'+ button.id" class="navbar-icon d-none d-lg-block" @mouseover="onMouseOver" @mouseleave="onMouseLeave" />
        <div v-show="state.show" class="nav-item-text">{{button.label}}</div>
    </a>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({
        show: false,
    });

    const props = defineProps({
        button: {
            type: Object,
            required: true,
            default: () => {
                return {
                    label: '',
                    id: '',
                    href: '',
                    img: '',
                    alt: '',
                }
            }
        }
    });

    function onMouseOver(e) {
        state.show = true;
        e.stopPropagation();
    }

    function onMouseLeave(e) {
        state.show = false;
        e.stopPropagation();
    }
</script>

<style lang="scss">
    .nav-item {
        position: relative;

        .nav-item-text {
            position: absolute;
            color: $navbar-li-active-color;
            font-family: OpenSans-Bold;
            font-size: 10px;
            font-weight: bold;
            width: 60px;
            text-align: center;
            background-color: rgba(0,0,0,0.8);
            border-radius: 2px;
            height: 16px;
            line-height: 1.6;
            text-transform: uppercase;
            left: -0.5vw;
        }

        .nav-item-mbl-text {
            font-family: OpenSans;
            text-transform: uppercase;
            color: #96d3d3;
        }

        .navbar-icon {
            height: 33px;
            width: 33px;
            position: relative;
        }
    }

</style>
