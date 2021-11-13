import emailPreview from './email-preview.cmp.js'
import emailSent from './email-sent.cmp.js'
import emailStarred from './email-starred.cmp.js'
import emailTrash from './email-trash.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    props: ['emails'],
    components: {
        emailPreview,
        emailSent,
        emailStarred,
        emailTrash
    },
    template:`
    <section class="emails-list">
        <ul class="list"v-if="showFolder === 'inbox' || !showFolder">
            <li v-for="email in emails" Key="email.id">
                <email-preview v-if="email.to === 'user@appsus.com' && !email.isTrash" :email="email"></email-preview>
            </li>
        </ul>
        <ul  class="list" v-else-if="showFolder === 'sent'">
            <li v-for="email in emails" Key="email.id">
                <email-sent v-if="email.from === 'user@appsus.com' && !email.isTrash" :email="email"></email-sent>
            </li>
        </ul>
        <ul  class="list" v-else-if="showFolder === 'star'">
            <li v-for="email in emails" Key="email.id">
                <email-starred v-if="email.isStarred" :email="email"></email-starred>
            </li>
        </ul>
        <ul  class="list" v-else-if="showFolder === 'trash'">
            <li v-for="email in emails" Key="email.id">
                <email-trash v-if="email.isTrash" :email="email"></email-trash>
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
            
            this.showFolder = folder
            console.log(this.show)
        }
    },
    computed: {

    }
}
