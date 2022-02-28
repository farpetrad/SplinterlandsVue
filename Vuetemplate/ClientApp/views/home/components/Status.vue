<template>
    <section id="status" class="pt-5 pb-3">
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 text-center">
                    <h6 class="heading">status</h6>
                </div>
                <div class="col-12 col-lg-6">
                    <QuestProgressTracker quest="sneak"></QuestProgressTracker>
                </div>
                <div :class="{'col-12 col-lg-6' : true, 'pt-3' : screenIsSmallOrMedium}">
                    <PlayerRanking></PlayerRanking>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { defineAsyncComponent } from 'vue';

    const QuestProgressTracker = defineAsyncComponent(() => import('../../../components/QuestProgressTracker.vue'));
    const PlayerRanking = defineAsyncComponent(() => import('../../../components/PlayerRanking.vue'));
</script>