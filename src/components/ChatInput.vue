<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    emits: {
        submit(payload: string) {
            if (payload.length > 0) {
                return true
            }
            return false
        }
    },
    data() {
        return {
            content: ''
        }
    },
    methods: {
        submitMessage() {
            const username = sessionStorage.getItem('username')
            const payload = JSON.stringify({username, content: this.content })
            fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payload
            }).then((res) => res.json().then((jsn) => {if(jsn.success === true) this.content = ''}) )
        }
    }
    
})
</script>
<template>
    <div>
        <textarea v-model="content" cols="30" rows="4"></textarea>
        <button @click="submitMessage">Wyślij</button>
    </div>
</template>