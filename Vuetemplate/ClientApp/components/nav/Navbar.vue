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
                        <div :class="{ 'mr-2': !mobileMenu, 'col-12': mobileMenu }">
                            <div class="dropdown-profile">
                                <img src="https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar-frame_diamond.png"
                                     class="dropdown-profile-frame" />
                                <img src="https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar_12.png"
                                     class="dropdown-profile-avatar" />
                            </div>
                            <a class="dropdown-toggle text-uppercase ml-4 ml-lg-0"
                               ref="profileDropdownTrigger"
                               href="#"
                               role="button"
                               id="profile-dropdown"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false"
                               @click="handleProfileMenuClick">Farpetrad</a>

                            <div class="dropdown-menu dropdown-menu-profile" aria-labelledby="profile-dropdpwn" ref="profileDropdownMenu">
                                <a class="dropdown-item" href="#">Action A</a>
                                <a class="dropdown-item" href="#">Another action A</a>
                                <a class="dropdown-item" href="#">Something else here A</a>
                            </div>
                        </div>
                        <div :class="{ 'ml-2': !mobileMenu, 'col-12 pt-3': mobileMenu }">
                            <a class="dropdown-toggle ml-4 ml-lg-0"
                               ref="langDropdownTrigger"
                               href="#"
                               role="button"
                               id="lang-dropdown"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false"
                               @click="handleLanguageMenuClick">EN</a>

                            <div class="dropdown-menu dropdown-menu-language" aria-labelledby="lang-dropdown" ref="langDropdownMenu">
                                <a class="dropdown-item" href="#">Action B</a>
                                <a class="dropdown-item" href="#">Another action B</a>
                                <a class="dropdown-item" href="#">Something else here B</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import NavItem from "./NavItem";
    export default {
        name: 'nav-bar',
        components: { 'nav-item': NavItem },
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
                langMenuExpanded: false,
                profileMenuExpanded: false,
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
            handleProfileMenuClick() {
                if (!this.$refs || !this.$refs.profileDropdownMenu) {
                    return;
                }
                this.$refs.profileDropdownMenu.classList.toggle('show');
                this.profileMenuExpanded = !this.profileMenuExpanded;
            },
            handleLanguageMenuClick() {
                if (!this.$refs || !this.$refs.langDropdownMenu) {
                    return;
                }
                this.$refs.langDropdownMenu.classList.toggle('show');
                this.langMenuExpanded = !this.langMenuExpanded;
            },
            handleGlobalClick(event) {
                if (!this.langMenuExpanded && !this.profileMenuExpanded) return;
                if (!event && !this.$refs) return;

                if (this.langMenuExpanded && this.$refs.langDropdownTrigger &&
                    !this.$refs.langDropdownTrigger.contains(event.target) &&
                    !this.$refs.langDropdownMenu.contains(event.target)) {
                    this.handleLanguageMenuClick();
                }
                if (this.profileMenuExpanded && this.$refs.profileDropdownTrigger &&
                    !this.$refs.profileDropdownTrigger.contains(event.target) &&
                    !this.$refs.profileDropdownMenu.contains(event.target)) {
                    this.handleProfileMenuClick();
                }
            },
            handleResize() {
                this.mobileMenu = window.matchMedia("screen and (max-width:768px)").matches;
            }
        },
        mounted() {
           const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
            window.addEventListener(touchEvent, this.handleGlobalClick);
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        beforeDestroy() {
            const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
            window.removeEventListener(touchEvent, this.handleGlobalClick);
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
                        top: 2.5vh;
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