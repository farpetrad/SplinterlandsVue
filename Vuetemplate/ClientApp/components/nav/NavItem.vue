<template>
    <a class="nav-item nav-link" :href="button.href" :id="button.id">
        <div class="d-lg-none pl-3 row">
            <div class="col-2 col-md-1">
                <img :src="button.img" 
                     :alt="button.alt" 
                     :id="'img-'+ button.id" class="navbar-icon" />
            </div>
            <div class="col-10 pl-0 col-center">
                <div class="nav-item-mbl-text">
                    {{button.label}}
                </div>
            </div>
        </div>
        <img :src="button.img" 
             :alt="button.alt" 
             :id="'img-mbl-'+ button.id" 
             class="navbar-icon d-none d-lg-block" 
             @mouseover="onMouseOverIcon" 
             @mouseleave="onMouseLeaveIcon" />
        <div v-show="state.showLabel" class="nav-item-text">{{button.label}}</div>
    </a>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({
        showLabel: false,
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

    function onMouseOverIcon(e) {
        state.showLabel = true;
        e.stopPropagation();
    }

    function onMouseLeaveIcon(e) {
        state.showLabel = false;
        e.stopPropagation();
    }
</script>

<style lang="scss">
    .nav-item {
        position: relative;
        opacity: 0.6;

        &:hover {
            opacity: 1;
        }

        .nav-item-text {
            position: absolute;
            font-family: 'OpenSans-Bold';
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
            color: $navbar-li-active-color;
        }



        .nav-item-mbl-text {
            font-family: OpenSans;
            text-transform: uppercase;
            color: #96d3d3;

            &:hover {
                color: $navbar-active-route-color !important;
            }
        }

        .navbar-icon {
            height: 33px;
            width: 33px;
            position: relative;
        }
    }

</style>
