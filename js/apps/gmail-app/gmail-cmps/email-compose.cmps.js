
import {eventBus}  from '../../../services/event-bus-service.js'

export default {
    template:`
    <section class="email-compose">
        <form>
            <h1>New Message</h1>
            <input v-model="emptyEmail.to" placeholder="To:"/>
            <input v-model="emptyEmail.subject" placeholder="Subject:"/>
            <textarea v-model="emptyEmail.body"></textarea>
            <div class="actions">
                <button class="send" @click.prevent="sendEmail">Send</button>
                <button class="trash">🗑</button>
            </div>
        </form>
    </section>
    `,
    data() {
        return{
            emptyEmail: {
                id: null,
                sender: 'Mahatma Appsus',
                subject:'',
                body:'',
                isRead: false,
                sentAt: Date.now(),
                to: '',
                from: 'user@appsus.com'
            }
        }
    },
    methods: {
        sendEmail() {
            this.$emit('closeModal')
            eventBus.$emit('emailSent', this.emptyEmail)
        }
    }

}
