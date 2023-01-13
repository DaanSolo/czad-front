<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            username: ''
        }
    },
    methods: {
        submit() {
            if(this.username.length > 0) {
                sessionStorage.setItem('username', this.username);
                this.$router.replace('/chat')
            }
        }
    },
    mounted() {
        if(sessionStorage.getItem('username')) {
            this.$router.replace('/chat') 
        }
    }
    
})
</script>
<template>
    <div>
        <label for="username">Wpisz swoją nazwę użytkownika:</label><br/>
        <input type="text" name="username" v-model="username">
        <button @click="submit">Ustaw</button>
    </div>
</template>