import {eventBus} from '../../../services/event-bus-service.js'
import { gmailService } from '../services/gmail-service.js'
import emailCompose from './email-compose.cmps.js'
export default {
    components: {
        emailCompose

    },
    template: `<section class="email-folder-list">
            <button  class="compose-btn" @click="isOpenCompose">
            <img class="compose-img" src="imgs/compose.png"><span class="span">Compose</span>
            </button>
            <email-compose @closeModal="close()" v-if="openCompose"/>
        <div class="side-bar">
            <div @click.stop="inboxClicked"><img class="folder-icons" src="imgs/inbox.png">Inbox <span>{{getUnread}}</span></div>
            <div><img class="folder-icons" src="imgs/star.png">Starred</div>
            <div @click.stop="sentClicked"><img class="folder-icons" src="imgs/sent.png">Sent</div>
            <div><img class="folder-icons" src="imgs/draft.png">Drafts</div>
            <div><img class="folder-icons" src="imgs/delete.png">Trash</div>
        </div>
    </section>`,
    created() {
        eventBus.$on('read', this.read)
        eventBus.$on('getUnread', this.updateUnread)
    },
    data() {
        return {
            unread: null,
            openCompose: false,
        }
    }, methods: {
        read() {
            console.log(this.unread)
            this.unread--
            this.updateUnread()
        },
        updateUnread(amount) {
            this.unread = amount
        },
        inboxClicked() {
            eventBus.$emit('display', 'inbox')
        },
        sentClicked() {
            eventBus.$emit('display', 'sent')
        },
        isOpenCompose() {
            this.openCompose = true
        },
        close() {
            this.openCompose = false
        }
    }, 
    computed: {
        getUnread() {
            var amount = gmailService.getUnread()
            this.unread = amount
            return this.unread
        }
    }
}