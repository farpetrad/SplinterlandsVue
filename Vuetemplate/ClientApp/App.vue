<template>
    <div id="wrap">
        <div class="main">
            <nav-bar></nav-bar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { provide, ref } from 'vue';
    import IScreensize, { screenSize }  from './utilities/screensize';

    const size = ref<IScreensize>(screenSize);
    provide('screenSize', size);
</script>

<style lang="scss">
@import 'scss/site.scss';
</style>