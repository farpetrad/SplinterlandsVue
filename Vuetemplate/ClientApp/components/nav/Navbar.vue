<template>
    <div id="sm-navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                            <img :src="button.img" :alt="button.alt" :id="'img-'+ button.id" class="navbar-icon" @mouseover="button.show = true" @mouseleave="button.show = false" />
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

        @media (min-width: 992px) {
            .navbar {
                max-height: 80px;
            }
        }

        .navbar {
            background-color: $navbar-bg;

            .nav-item {
                position: relative;
            }

            .nav-item-text {
                position: absolute;
                color: $navbar-li-active-color;
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
            }

            .navbar-icon {
                height: 33px;
                width: 33px;
                position: relative;
            }
        }

        .navbar-brand {
            background-image: url(https://d36mxiodymuqjm.cloudfront.net/website/icons/img_icon_splinterlands.svg);
            width: 78px;
            height: 78px;
            background-repeat: no-repeat;
        }
    }
</style>