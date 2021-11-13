
import {eventBus}  from '../../../services/event-bus-service.js'

export default {
    template:`
    <section class="email-compose">
    <p class="exit" @click="closeModal">X<p>
        <form>
            <h1>New Message</h1>
            <input class="input1" v-model="emptyEmail.to" placeholder="To:"/>
            <input v-model="emptyEmail.subject" placeholder="Subject:"/>
            <textarea v-model="emptyEmail.body"></textarea>
            <div class="actions">
                <button :disabled="isLimit" class="send" @click.prevent="sendEmail">Send</button>
                <button  @click="closeModal" class="trash"><img class="close-modal" src="imgs/delete.png"></button>
            </div>
        </form>
        <div class ="user-msg-compose" v-if="isShowMsg"><img class="speach"src="imgs/speach.png"><span class="speach-txt">Keep It Short!<span></div>
    </section>
    `,
    data() {
        return{
            emptyEmail: {
                id: null,
                sender: 'Mahatma',
                subject:'',
                body:'',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt: Date.now(),
                to: '',
                from: 'user@appsus.com'
            },
            isLimit: false,
            isShowMsg: false
        }
    },
    methods: {
        sendEmail() {
           this.closeModal()
            eventBus.$emit('emailSent', this.emptyEmail)
        },
        closeModal() {
            this.$emit('closeModal')
        }
    },
    watch: {
        'emptyEmail.subject'(newVal){
            if (newVal.length > 20) {
                this.isLimit = true
                this.isShowMsg = true
                setTimeout( ()=> {
                    this.isShowMsg = false;
                }, 3500)
            } else {
                this.isLimit = false
            }
        }
    }
}
