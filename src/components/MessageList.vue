<script lang="ts">
import { defineComponent } from 'vue';
import Message from './Message.vue';

export default defineComponent({
    components: {Message},
    props: {
        messages: {type: Array}
    }
})
</script>

<template>
    <div v-for="message in messages" :key="message.id">
        <Message :message="message"/>
    </div>
</template>