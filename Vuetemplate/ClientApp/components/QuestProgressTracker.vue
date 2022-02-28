<template>
    <div id="quest-progress-tracker" class="info">
        <div class="progress-meter">
            <div class="progress-meter-icon life-icon">
                <img alt="Defend the Borders" src="https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/icon_life_active.svg" class="img-fluid"/>
            </div>
            <div class="progress-meter-progress"></div>
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
                }

                .progress-meter-end-icon {
                    position: relative;
                    z-index: 1;
                    max-height: 59px;

                    img {
                        transform: scale(1.0) translateY(-2vh);
                    }

                    @media (min-width: 992px) and (max-width: 1199.98px) {
                        img {
                            transform: scale(1.0) translateY(-1vh);
                        }
                    }
                }
            }
        }
    }
</style>
