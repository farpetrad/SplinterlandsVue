<template>
    <div id="quest-progress-tracker" class="info">
        <div class="progress-meter quest neutral">
            <div class="progress-meter-icon life-icon">
                <img alt="Defend the Borders" src="https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/icon_life_active.svg" class="img-fluid"/>
            </div>
            <div class="progress-meter-progress">
                <div :class="{ 'progress-info pb-3' : true,  'mx-3' : !screenIsSmall}">
                    <span class="progress-info-title">
                        Quest
                        <img class="icon-info" src="https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/popups/icon_info.svg"
                             data-toggle="tooltip"
                             data-placement="top"
                             title=""
                             data-original-title="Players who have purchased the Summoner’s Spellbook will receive a daily Quest. Completing your daily quests will result in Loot Chests!"> :
                    </span>
                    <a role="button" class="progress-info-desc">Stealth Mission - Win 5 battles using a Sneak monster.</a>
                </div>
                <div class="progress mb-3">
                    <div class="progress-bar w-100" aria-valuenow="100" aria-valuemax="100" aria-valuemin="0">
                        <span class="sr-only">100% Complete</span>
                    </div>
                </div>
                
            </div>
            <div class="progress-meter-end-icon">
                <img alt="Chest"
                     class="img-fluid"
                     src="https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/loot-chest_open.png" 
                     srcset="https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/loot-chest_open.png 1x,
                             https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/loot-chest_open@2x.png 2x" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { inject, computed } from 'vue';

    const screenSize = inject('screenSize', {});
    const screenIsSmall = computed(() => {
        return screenSize.value.screenSize.sm === true;
    })
</script>

<style lang="scss">
    #quest-progress-tracker {
        &.info {
            background: rgba(0,0,0,0.75);
            border-radius: 8px;
            padding: 40px;

            .progress-meter {
                display: flex;
                align-items: flex-end;
                flex-direction: row;
                position: relative;

                .progress-meter-icon {
                    max-width: 47px;
                    max-height: 47px;
                    border-radius: 50%;
                    border: 2px solid;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    z-index: 1;

                    &.life-icon {
                        background: transparent radial-gradient(closest-side at 50% 50%,#767676 0,#000 100%) 0 0 no-repeat padding-box;
                        border-color: #fff;
                    }
                }

                .progress-meter-progress {
                    flex: 1;
                    margin: auto -8px;
                    position: relative;
                    z-index: 0;

                    .progress-info {
                        .progress-info-title {
                            color: #fff;
                            font-family: OpenSans-Bold;
                            font-size: 12px;
                            line-height: 20px;
                            text-align: left;
                            text-transform: uppercase;

                            .icon-info {
                                filter: saturate(0) brightness(1);
                                vertical-align: sub;
                            }
                        }

                        a.progress-info-desc {
                            color: #ffeda0;
                            font-family: OpenSans;
                            font-size: 13px;
                            line-height: 20px;
                            text-align: left;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }

                    .progress {
                        background: #434343;
                        height: 11px;
                        overflow: hidden;
                        border-radius: 4px;
                        -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
                        box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);

                        .progress-bar {
                            .sr-only {
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                padding: 0;
                                margin: -1px;
                                overflow: hidden;
                                clip: rect(0,0,0,0);
                                border: 0;
                            }
                        }
                    }
                }

                .progress-meter-end-icon {
                    position: relative;
                    z-index: 1;
                    max-height: 59px;
                    left: -0.3vw;

                    img {
                        transform: scale(1.0) translateY(-2vh);
                        max-width: 85%;
                    }

                    @media (min-width: 992px) and (max-width: 1199.98px) {
                        img {
                            transform: scale(1.0) translateY(-1vh);
                        }
                    }
                }

                &.quest,
                &.neutral {
                    .progress-meter-progress {
                        .progress {
                            .progress-bar {
                                background: transparent linear-gradient(270deg,#93b3fa 0,#324a77 100%) 0 0 no-repeat padding-box !important;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
