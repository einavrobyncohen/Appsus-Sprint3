import emailPreview from './email-preview.cmp.js'
import emailSent from './email-sent.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    props: ['emails'],
    components: {
        emailPreview,
        emailSent
    },
    template:`
    <section class="emails-list">
        <ul class="list"v-if="showFolder === 'inbox' || !showFolder">
            <li v-for="email in emails" Key="email.id">
                <email-preview v-if="email.to === 'user@appsus.com'" :email="email"></email-preview>
            </li>
        </ul>
        <ul  class="list" v-else-if="showFolder === 'sent'">
            <li v-for="email in emails" Key="email.id">
                <email-sent v-if="email.from === 'user@appsus.com'" :email="email"></email-sent>
            </li>
        </ul>
    </section>
    `,
    created() {
        eventBus.$on('display', this.show)
    },
    data() {
        return {
            showFolder: ''
        }

    },
    methods: {
        show(folder) {
            console.log(folder)
            console.log('clicked')
            this.showFolder = folder
            console.log(this.showFolder)
            console.log(this.emails)
        }
    },
    computed: {

    }
}
