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
                    <div class="dropdown row h-100 pt-4 mx-auto">
                        <div class="col-12 col-md-8">
                            <a class="dropdown-toggle text-uppercase"
                               ref="profileDropdownTrigger"
                               href="#"
                               role="button"
                               id="profile-dropdown"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false"
                               @click="handleProfileMenuClick">Farpetrad</a>

                            <div class="dropdown-menu" aria-labelledby="profile-dropdpwn" ref="profileDropdownMenu">
                                <a class="dropdown-item" href="#">Action A</a>
                                <a class="dropdown-item" href="#">Another action A</a>
                                <a class="dropdown-item" href="#">Something else here A</a>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <a class="dropdown-toggle"
                               ref="langDropdownTrigger"
                               href="#"
                               role="button"
                               id="lang-dropdown"
                               data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false"
                               @click="handleLanguageMenuClick">EN</a>

                            <div class="dropdown-menu" aria-labelledby="lang-dropdown" ref="langDropdownMenu">
                                <a class="dropdown-item" href="#">Action B</a>
                                <a class="dropdown-item" href="#">Another action B</a>
                                <a class="dropdown-item" href="#">Something else here B</a>
                            </div>
                        </div>s
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
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_shop_active@2x.png', id: 'menu_item_shop', href: '', alt: 'Shop', label: 'Shop', show: false, },
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_open_active@2x.png', id: 'menu_item_open', href: '', alt: 'Open', label: 'Open', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_market_active@2x.png', id: 'menu_item_market', href: '', alt: 'Market', label: 'Market', show: false, },
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_cards_active@2x.png', id: 'menu_item_cards', href: '', alt: 'Cards', label: 'Cards', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_battle_active@2x.png', id: 'menu_item_battle', href: '', alt: 'Battle', label: 'Battle!', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_events_active@2x.png', id: 'menu_item_events', href: '', alt: 'Events', label: 'Events', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_guilds_active@2x.png', id: 'menu_item_guilds', href: '', alt: 'Guilds', label: 'Guilds', show: false,},
                    { img: 'https://d36mxiodymuqjm.cloudfront.net/website/nav/icon_nav_faq_active@2x.png', id: 'menu_item_help', href: '', alt: 'Help', label: 'Help', show: false, }
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
                this.mobileMenu = window.matchMedia("screen and (max-width:767px)").matches;
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
            &:not(.dropright) {
                .dropdown-menu {
                    left: 4vw;
                }

                @media (min-width: 576px) {
                    .dropdown-menu {
                        left: 2vw;
                    }
                }

                @media (min-width: 992px) {
                    .dropdown-menu {
                        left: -9vw;
                    }
                }

                @media (min-width: 1200px) {
                    .dropdown-menu {
                        left: -10vw;
                    }
                }
            }

            &.dropright {
                .dropdown-menu {
                    top: 0;
                    left: 18vw;
                }
            }
        }
    }
</style>