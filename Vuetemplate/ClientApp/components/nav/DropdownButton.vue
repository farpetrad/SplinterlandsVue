<template>
    <div>
        <slot name="content" :on="handleMenuClick"></slot>

        <a class="dropdown-toggle text-uppercase ml-4 ml-lg-0"
           ref="dropDownTrigger"
           :href="href"
           role="button"
           :id="`dropdown-${label.replace(/ /g, '')}`"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
           @click="handleMenuClick">
            {{label}}
        </a>

        <div class="dropdown-menu dropdown-menu-profile" :aria-labelledby="`dropdown-${label.replace(/ /g, '')}`" ref="dropDown">
            <slot name="dropdownItems"></slot>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, onBeforeMount, onUnmounted } from 'vue';

    const dropDown = ref(null);
    const dropDownTrigger = ref(null);

    onBeforeMount(() => {
        const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        window.addEventListener(touchEvent, handleGlobalClick);
    });
    onUnmounted(() => {
        const touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        window.removeEventListener(touchEvent, handleGlobalClick);
    });

    function handleGlobalClick(event) {
        if (!state.displaying ) return;
        if (!event || !dropDown || !dropDownTrigger) return;

        if (!dropDownTrigger.value.contains(event.target) &&
            !dropDown.value.contains(event.target)) {
            handleMenuClick(event);
        }
    };

    const props = defineProps({
        label: {
            type: String,
            required: true,
            default: '',
        },
        href: {
            type: String,
            required: false,
            default: '#'
        }
    });

    const state = reactive({
        displaying: false,
    });

    function handleMenuClick(e) {
        if (!dropDown || !dropDownTrigger) {
            return;
        }
        const expanded = dropDownTrigger.ariaExpanded
        if (expanded === 'false') {
            dropDownTrigger.ariaExpanded = 'true';
        }
        else {
            dropDownTrigger.ariaExpanded = 'false';
        }
        dropDown.value.classList.toggle('show');

        state.displaying = !state.displaying;
        e.stopPropagation();
    };
</script>

<style lang="scss">
</style>
