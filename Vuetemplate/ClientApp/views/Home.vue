<template>
    <div class="container-fluid sitepage">
        <div class="row">
            <div class="col-2 pl-0">
                <teleport to="#target" :disabled="!showDrawer">
                    <drawer v-show="showDrawer"
                            @close-drawer="handleClose"
                            key="drawer"
                            title="Navigation Drawer">
                        <div class="col-12">
                            A drawer!
                        </div>
                    </drawer>
                </teleport>
                <teleport to="#target" :disabled="!showModal">
                    <modal v-show="showModal" @close="showModal=false" :dismissOnClick="true" class="text-center">
                        <template v-slot:header>
                            Header
                        </template>
                        <template v-slot:body>
                            <div>
                                This is a body
                                <img src="../assets/500px-Vue.js_Logo_2.svg.png"
                                     class="img-fluid"
                                     alt="vue logo" />
                            </div>
                        </template>
                    </modal>
                </teleport>

                <transition name="leftSlide" mode="in-out">
                    <div class="overlay" key="overlay" v-show="showDrawer"></div>
                </transition>
            </div>
            <div class="col-12 px-0 mx-0">
                <section id="play-now" class="h-100 w-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-6 offset-md-3">
                                <img class="sp-logo mt-5 img-fluid" alt="Splinterlands" src="https://d36mxiodymuqjm.cloudfront.net/website/home/splinterlands_logo_fx_1000.png" />
                                <div class="about container">
                                    <div class="row spacer"></div>
                                    <div class="row mt-5 pt-3">
                                        <div class="col-12">
                                            <h5>Welcome back Farpetrad</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { provide, readonly, ref } from 'vue';
    
    // use ref instead of state as this will be reactive when used by inject('modalOpen')
    const showModal = ref(false);
    const showDrawer = ref(false);
    provide('modalOpen', readonly(showModal));
    provide('drawerOpen', readonly(showDrawer));
    

    function doShowModal(e) {                
        showModal.value = !showModal.value;
        e.stopPropagation();
    };

    function handleClose() {
        showDrawer.value = !showDrawer.value;
    };
</script>

<style lang="scss">
    .overlay{
        display:block;
        position:fixed;
        top:0;
        width:100vw;
        height:100vh;

        background: rgba(0,0,0,0.7);
        z-index:1100;
        opacity:1;
    }

    #play-now {
        background-image: url(https://d36mxiodymuqjm.cloudfront.net/website/home/bg_home_hero_chaos.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-content: stretch;

        .sp-logo {
            z-index: 100;
            position: relative;
            top: 0;
            left: 1vw;
        }

        .about {
            background: rgba(0,0,0,0.75);
            border-radius: 8px;
            padding: 40px;
            z-index: 0;
            position: relative;
            left: -3vw;
            top: -9vh;
            color: $text-color;
        }

        .row {
            &.spacer {
                min-height: 10vh;
            }
        }
    }
</style>
