import {eventBus} from '../../../services/event-bus-service.js'
import emailCompose from './email-compose.cmps.js'
export default {
    components: {
        emailCompose

    },
    template: `<section class="email-folder-list">
        <email-compose @closeModal="close()" v-if="openCompose"/>
        <div v-if="!isMobileMode">
                <button  class="compose-btn" @click="isOpenCompose">
                <img class="compose-img" src="imgs/compose.png"><span class="span">Compose</span>
                </button>

            <div class="side-bar">
                <div @click.stop="inboxClicked"><img class="folder-icons" src="imgs/inbox.png">Inbox <span>{{getUnread}}</span></div>
                <div @click.stop="starClicked"><img class="folder-icons" src="imgs/star.png">Starred</div>
                <div @click.stop="sentClicked"><img class="folder-icons" src="imgs/sent.png">Sent</div>
                <div><img class="folder-icons" src="imgs/draft.png">Drafts</div>
                <div><img class="folder-icons" src="imgs/delete.png">Trash</div>
            </div>
        </div>
            
            <button v-if="isMobileMode" class="compose-btn-small" @click="isOpenCompose">
                <span class="span"><img src="imgs/pencil.png"></span>
            </button>
            <div v-if="isMobileMode" class="mobile-nav">
                <button class="hamburger"@click="toggleBurger()">☰</button>
                <div class="nav-bar" :class="{hiddennav: isHaburderInactive, shownnav:isHamburgerActive}">
                    <div @click.stop="inboxClicked">Inbox <span>{{getUnread}}</span></div>
                    <div @click.stop="starClicked">Starred</div>
                    <div @click.stop="sentClicked">Sent</div>
                    <div>Drafts</div>
                    <div>Trash</div>
                </div>
            </div>



    </section>`,
    created() {
        eventBus.$on('read', this.read)
        eventBus.$on('getUnread', this.updateUnread)
        window.addEventListener("resize", this.myEventHandler)
    },
    data() {
        return {
            openCompose: false,
            unread:null,
            isMobileMode: false,
            isHamburgerActive: false,
            isHaburderInactive: true
        }
    }, 
    methods: {
        read(amount) {
            this.unread = amount
        },
        updateUnread(amount) {
            this.unread = amount
        },
        inboxClicked() {
            this.isHamburgerActive = false
            this.isHaburderInactive = true
            eventBus.$emit('display', 'inbox')
        },
        sentClicked() {
            this.isHamburgerActive = false
            this.isHaburderInactive = true
            eventBus.$emit('display', 'sent')
        },
        starClicked() {
            this.isHamburgerActive = false
            this.isHaburderInactive = true
            eventBus.$emit('display', 'star')

        },
        isOpenCompose() {
            this.openCompose = true
        },
        close() {
            this.openCompose = false
        },
        myEventHandler(ev) {
            if (ev.target.innerWidth <= 730) {
                this.isMobileMode = true;
            }
            else {
                this.isMobileMode = false
            }
        },
        toggleBurger() {
            this.isHamburgerActive = !this.isHamburgerActive
            this.isHaburderInactive = !this.isHaburderInactive

        }
    }, 
    computed: {
        getUnread() {
            console.log(this.unread)
            return this.unread
        }
    }
}