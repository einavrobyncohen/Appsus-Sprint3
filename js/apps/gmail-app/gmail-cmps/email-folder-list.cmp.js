import {eventBus} from '../../../services/event-bus-service.js'
import { gmailService } from '../services/gmail-service.js'
export default {
    template: `<section class="email-folder-list">
        <ul>
            <li @click="$emit('display', 'inbox')">📮Inbox <span>{{getUnread}}</span></li>
            <li>⭐️Starred</li>
            <li @click="$emit('display', 'sent')">💌Sent</li>
            <li>📑Drafts</li>
            <li>🗑Trash</li>
        </ul>
    </section>`,
    created() {
        eventBus.$on('read', this.read)
        eventBus.$on('getUnread', this.updateUnread)
    },
    data() {
        return {
            unread: null
        }
    }, methods: {
        read() {
            console.log(this.unread)
            this.unread--
            this.updateUnread()
        },
        updateUnread(amount) {
            this.unread = amount
        }
    }, 
    computed: {
        getUnread() {
            console.log(this.unread)
            var amount = gmailService.getUnread()
            this.unread = amount
            return this.unread
        }
    }
}