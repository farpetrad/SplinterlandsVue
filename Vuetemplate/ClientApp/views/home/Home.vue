﻿<template>
    <div id="home" class="container-fluid sitepage">
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
                                <img src="../../assets/500px-Vue.js_Logo_2.svg.png"
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
                <play-now></play-now>
                <about-player></about-player>
                <status></status>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { provide, inject, readonly, ref, computed, defineAsyncComponent, defineComponent } from 'vue';

    import PlayNow from './components/PlayNow';
    // we are going to load these async since they don't show until the user scrolls some
    const AboutPlayer = defineAsyncComponent(() => import('./components/AboutPlayer.vue'));
    const Status = defineAsyncComponent(() => import('./components/Status.vue'));
    

    const screenSize = inject('screenSize', {});

    const screenIsSmallOrMedium = computed(() => {
        return screenSize.value.screenSize.sm === true || screenSize.value.screenSize.md === true;
    })
    
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
    #home {
        &.sitepage {
            h6 {
                text-transform: uppercase;

                &.heading {
                    color: white;
                    font-family: nanami-bold;
                    font-size: 46px;
                    text-align: center;
                    text-shadow: 0 0 12px #ffffcbbe;

                    &:hover {
                        text-decoration: none;
                        outline: 0;
                        text-shadow: 0 0 12px rgb(0 0 0 / 75%);
                    }
                }
            }


            a {
                text-decoration: none;

                h6 {
                    &.motion-glow {
                        position: relative;
                        top: 50%;

                        @media (max-width: 1199.98px) {
                            left: 0;
                        }


                        &:before {
                            content: "";
                            background: linear-gradient(90deg,rgba(0,0,0,0) 15%,rgba(0,0,0,0.8) 50%,rgba(0,0,0,0) 85%);
                            z-index: 0;
                            display: block;
                            width: 100%;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            padding-left: 20%;
                            padding-right: 20%;
                        }
                    }

                    &.motion-glow-tall {
                        &:before {
                            height: 310%;
                        }
                    }

                    &.motion-glow-wrap {
                        @media (max-width: 767.98px) {
                            top: 25%;
                        }
                    }
                }
            }


            .overlay {
                display: block;
                position: fixed;
                top: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0,0,0,0.7);
                z-index: 1100;
                opacity: 1;
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

                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .sp-logo {
                        left: 8vw;
                    }
                }

                @media (max-width: 575.98px) {
                    .about {
                        &.container {
                            left: 0;
                        }
                    }
                }

                @media (max-width: 991.98px) {
                    .about {
                        left: -3vw;
                    }
                }

                @media (min-width: 992px) {
                    .about {
                        left: -1.8vw;
                    }
                }

                @media (min-width: 1200px) {
                    .about {
                        left: -3vw;
                    }
                }

                .about {
                    &.container {
                        background: rgba(0,0,0,0.75);
                        border-radius: 8px;
                        padding: 40px;
                        z-index: 0;
                        position: relative;
                        top: -9vh;
                        color: $text-color;

                        #play-now-btn {
                            background: linear-gradient(180deg,#ffffb7 0,#ff9300 16%,#650000 82%,#f00 100%);
                            border: 2px solid #fff188;
                            border-radius: 6px;
                            padding: 8px 64px;
                            transition: transform .2s ease-out;
                            color: #fff7b9;
                            font-family: nanami-bold;
                            font-size: 30px;
                            text-shadow: 0 0 8px #feffddd5;
                            text-transform: uppercase;

                            &:hover {
                                transform: scale(1.05);
                            }
                        }

                        @media (max-width: 991.98px) {
                            #play-now-btn {
                                font-size: 24px !important;
                            }
                        }
                    }
                }

                .row {
                    &.spacer {
                        min-height: 10vh;
                    }
                }
            }

            #about-player {
                #how-to-battle {
                    background-image: url("https://d36mxiodymuqjm.cloudfront.net/website/home/thumb_battle.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    min-height: 300px; // don't lke this
                }

                #card-ownership {
                    background-image: url("https://d36mxiodymuqjm.cloudfront.net/website/home/thumb_cards.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    min-height: 300px; // don't lke this
                }

                #community {
                    background-image: url("https://d36mxiodymuqjm.cloudfront.net/website/home/thumb_community.png");
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    min-height: 300px; // don't lke this
                }
            }

            #status {
                background-image: url("https://d36mxiodymuqjm.cloudfront.net/website/home/bg_status.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
        }
    }
</style>
