<template>
    <div id="wrap">
        <div class="main">
            <nav-bar></nav-bar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
    import { provide, ref } from 'vue';
    import screenSize from './utilities/screensize.js';

    const size = ref(screenSize);
    provide('screenSize', size);
</script>

<style lang="scss">
@import 'scss/site.scss';
</style>