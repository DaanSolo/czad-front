<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        message: {}
    }
})
</script>

<template>
    <p><span class="username">{{ message.username }}</span>{{ message.content }}</p>
</template>

<style>
.username {
    background: green;
    margin-right: 1.5em;
}
</style>