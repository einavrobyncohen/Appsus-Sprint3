import {eventBus} from '/js/services/event-bus-service.js'

export default {
    props: ['unread'],
    template: `<section class="email-filter">
        <ul>
            <li>Inbox <span>{{notRead}}</span></li>
            <li>Starred</li>
            <li>Sent</li>
            <li>Drafts</li>
            <li>Trash</li>
        </ul>
    </section>`,
    data() {
        return{
            notRead: this.unread
 
        }
    },
    created() {
        eventBus.$on('read', this.read)
    },
    methods: {
        read() {
            this.notRead--
        }

    },
    computed: {
    }
}