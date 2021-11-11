import {eventBus} from '../../../services/event-bus-service.js'
export default {
    template: `<section class="email-folder-list">
        <ul>
            <li @click="$emit('display', 'inbox')">Inbox <span>{{unread}}</span></li>
            <li>Starred</li>
            <li @click="$emit('display', 'sent')">Sent</li>
            <li>Drafts</li>
            <li>Trash</li>
        </ul>
    </section>`,
    created() {
        eventBus.$on('read', this.read)
    },
    data() {
        return {
            unread: 5
        }
    }, methods: {
        read() {
            this.unread =  this.unread -1
        },
    }
}