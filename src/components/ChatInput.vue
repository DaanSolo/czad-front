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
    <div class="bottom-box">
        <textarea v-model="content" rows="1" cols="1" maxlength="100" placeholder="Wpisz wiadomość"></textarea>
        <button @click="submitMessage">Wyślij</button>
    </div>
</template>
<style scoped>
.bottom-box {
    display: grid;
    grid-template-columns: 4fr 1fr;
}
textarea {
    width: 100%;
    outline: 0;
    background: #121317;
    border: 0;
    resize: none;
    padding: 0.65em 1.75em;
    border-radius: 5px;
    color: #fff;
    overflow: hidden;
    border-radius: 5px 0 0 5px;
}
textarea::placeholder {
    color: rgb(226, 215, 215);
}
button {
    background: #5934a2;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    border-radius: 0 0 5px 0;
}
button:hover {
    background: #5f4c85;
}
</style>