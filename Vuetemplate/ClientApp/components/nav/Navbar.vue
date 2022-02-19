<template>
    <div id="sm-navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-0">
            <div class="navbar-header">
                <a class="navbar-brand py-0 mr-0" href="#"></a>
            </div>
            <button class="navbar-toggler ml-auto collapsed"
                    type="button"
                    id="navbar-toggler"
                    ref="navbarToggler"
                    @click="toggleMenu">
                <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" ref="navbarContent">
                <div class="navbar-nav mr-auto">
                    <template v-for="(button,index) in buttons" :key="index">
                        <a class="nav-item nav-link" :href="button.href" :id="button.id">
                            <div class="d-lg-none pl-3 row">
                                <div class="col-2 col-md-1">
                                    <img :src="button.img" :alt="button.alt" :id="'img-'+ button.id" class="navbar-icon" @mouseover="button.show = true" @mouseleave="button.show = false" />
                                </div>
                                <div class="col-10 pl-0 col-center">
                                    <div class="nav-item-mbl-text">{{button.label}}
                                </div>
                                </div>
                            </div>
                            <img :src="button.img" :alt="button.alt" :id="'img-'+ button.id" class="navbar-icon d-none d-lg-block" @mouseover="button.show = true" @mouseleave="button.show = false" />
                            <div v-show="button.show" class="nav-item-text">{{button.label}}</div>
                        </a>
                    </template>
                    
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
      name: 'nav-bar',
        data() {
            return {
                buttons: [
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_shop_active@2x.png', id: 'menu_item_shop', href: '', alt: 'Shop', label: 'Shop', show: false, },
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_open_active@2x.png', id: 'menu_item_open', href: '', alt: 'Open', label: 'Open', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_market_active@2x.png', id: 'menu_item_market', href: '', alt: 'Market', label: 'Market', show: false, },
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_cards_active@2x.png', id: 'menu_item_cards', href: '', alt: 'Cards', label: 'Cards', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_battle_active@2x.png', id: 'menu_item_battle', href: '', alt: 'Battle', label: 'Battle!', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_events_active@2x.png', id: 'menu_item_events', href: '', alt: 'Events', label: 'Events', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_guilds_active@2x.png', id: 'menu_item_guilds', href: '', alt: 'Guilds', label: 'Guilds', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_faq_active@2x.png', id: 'menu_item_help', href: '', alt: 'Help', label: 'Help', show: false, }
                ]
            }
        },
      methods: {
        toggleMenu() {
          if (!this.$refs || !this.$refs.navbarToggler || !this.$refs.navbarContent) {
            return;
          }
          this.$refs.navbarToggler.classList.toggle('collapsed');
          this.$refs.navbarContent.classList.toggle('show');
        },
      },
    };
</script>

<style lang="scss">
    #sm-navbar {

        .navbar {
            background-color: $navbar-bg;

            .navbar-header {
                max-height: 64px;
            }

            .nav-item {
                position: relative;
            }

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

            .col-center {
                margin-top: auto;
                margin-bottom: auto;
            }
        }

        .navbar-brand {
            background-image: url(https://d36mxiodymuqjm.cloudfront.net/website/icons/img_icon_splinterlands.svg);
            max-width: 78px;
            max-height: 78px;
            min-width: 64px;
            min-height: 64px;
            background-repeat: no-repeat;
        }
    }
</style>