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
                        <nav-item :button="button"></nav-item>
                    </template>
                </div>
                <div class="ml-auto">
                    <div :class="{
                           'dropdown row h-100 pt-1 mx-auto px-3  mb-4 mb-lg-0' : true,
                            'dropright pt-3' : mobileMenu
                         }">
                        <dropdown-button label="Farpetrad" :class="{ 'ml-2': !mobileMenu, 'col-12 pt-3': mobileMenu }">
                            <template v-slot:content="{ on }">
                                <player-profile @click="on"></player-profile>
                            </template>
                            <template v-slot:dropdownItems>
                                <a class="dropdown-item" href="#">Action A</a>
                                <a class="dropdown-item" href="#">Another action A</a>
                                <a class="dropdown-item" href="#">Something else here A</a>
                            </template>
                        </dropdown-button>
                        <dropdown-button label="EN" :class="{ 'ml-2': !mobileMenu, 'col-12 pt-3': mobileMenu }">
                            <template v-slot:dropdownItems>
                                <a class="dropdown-item" href="#">Action B</a>
                                <a class="dropdown-item" href="#">Another action B</a>
                                <a class="dropdown-item" href="#">Something else here B</a>
                            </template>
                        </dropdown-button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import NavItem from "./NavItem";
    import PlayerProfile from "../PlayerProfile";
    import DropdownButton from './DropdownButton';

    export default {
        name: 'nav-bar',
        components: {
            'nav-item': NavItem,
            'player-profile': PlayerProfile,
            'dropdown-button': DropdownButton
        },
        data() {
            return {
                buttons: [
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_shop_active@2x.png', id: 'menu_item_shop', href: '', alt: 'Shop', label: 'Shop', },
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_open_active@2x.png', id: 'menu_item_open', href: '', alt: 'Open', label: 'Open',},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_market_active@2x.png', id: 'menu_item_market', href: '', alt: 'Market', label: 'Market', },
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_cards_active@2x.png', id: 'menu_item_cards', href: '', alt: 'Cards', label: 'Cards',},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_battle_active@2x.png', id: 'menu_item_battle', href: '', alt: 'Battle', label: 'Battle!',},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_events_active@2x.png', id: 'menu_item_events', href: '', alt: 'Events', label: 'Events',},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_guilds_active@2x.png', id: 'menu_item_guilds', href: '', alt: 'Guilds', label: 'Guilds',},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_faq_active@2x.png', id: 'menu_item_help', href: '', alt: 'Help', label: 'Help',}
                ],
                mobileMenu: false,
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
            handleResize() {
                this.mobileMenu = window.matchMedia("screen and (max-width:768px)").matches;
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize)
        }
    };
</script>

<style lang="scss">
    #sm-navbar {

        .navbar {
            background-color: $navbar-bg;

            .navbar-header {
                max-height: 64px;
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

        .dropdown {
            .dropdown-profile {
                position: absolute;
                top: -1vh;
                left: -3vw;

                .dropdown-profile-frame {
                    position: absolute;
                    max-width: 48px;
                    max-height: 48px;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }

                .dropdown-profile-avatar {
                    position: absolute;
                    max-width: 36px;
                    max-height: 36px;
                    z-index: 10;
                    top: 5px;
                    left: 24px;
                    transform: translateX(-50%);
                }
            }

            &:not(.dropright) {
                .dropdown-menu-language {
                    left: 4vw;
                }

                .dropdown-menu-profile {
                    left: 6vw;
                }

                @media (min-width: 992px) {
                    .dropdown-menu-language {
                        left: -5vw;
                    }

                    .dropdown-menu-profile {
                        left: -10vw;
                    }
                }

                @media (min-width: 1200px) {
                    .dropdown-menu-language {
                        left: -3vw;
                    }

                    .dropdown-menu-profile {
                        left: -6vw;
                    }
                }
            }

            &.dropright {
                .dropdown-menu-language {
                    left: 6vw;
                    top: 2.5vh;
                }

                .dropdown-menu-profile {
                    top: 0.5vh;
                    left: 14vw;
                }

                @media (max-width: 576px) {
                    .dropdown-menu-language {
                        left: 10vw;
                        top: 5vh;
                    }

                    .dropdown-menu-profile {
                        top: 3.5vh;
                        left: 18vw;
                    }
                }

                @media (min-width: 768px) {
                    .dropdown-menu-language {
                        left: 10vw;
                        top: 5vh;
                    }

                    .dropdown-menu-profile {
                        top: 0.5vh;
                        left: 18vw;
                    }
                }
            }
        }
    }
</style>