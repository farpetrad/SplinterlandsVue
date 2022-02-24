<template>
    <div class="player-profile">
        <img src="https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar-frame_diamond.png"
             class="profile-frame" />
        <img src="https://d36mxiodymuqjm.cloudfront.net/website/icons/avatars/avatar_12.png"
             class="profile-avatar" />
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .player-profile {
        position: absolute;
        top: -1vh;
        left: -3vw;

        .profile-frame {
            position: absolute;
            max-width: 48px;
            max-height: 48px;
            top: 0;
            left: 0;
            z-index: 1;
        }

        .profile-avatar {
            position: absolute;
            max-width: 36px;
            max-height: 36px;
            z-index: 10;
            top: 5px;
            left: 24px;
            transform: translateX(-50%);
        }
    }
</style>
