import longText from '../../../cmps/long-text.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'
import { gmailService } from '../services/gmail-service.js'

export default {
    props: ['email'],
    components:{
        longText,
    },
    template: `
    <section class="email-preview">
    <div  v-if="!isMobileMode" class="non-mobile">
        <div  class="email-modal-small" @click="showPreview(email)" :class="{read: email.isRead}" @mouseover="isHover = true" @mouseleave="isHover = false">
            <div v-if="!email.isStarred" @click.stop="star" ><img class="star-img" src="imgs/star-before.png"></div>
            <div v-if="email.isStarred" @click.stop="unStar" ><img class="star-img" src="imgs/star-after.png"></div>
            <div class="sender-small">{{email.sender}}</div>
            <div class="subject-small">{{email.subject}}</div>
            <long-text class="body-small":txt="email.body" />
            <p class="date-preview" v-if="!isHover">{{showDate}}</p>
            <div  v-else>
            <img class="delete-hover-btn" src="imgs/delete.png" @click.stop="trash(email)">
            </div>
        </div>  
    </div>
    <div  v-else-if="isMobileMode" class="mobile">
        <div  class="email-modal-small" @click="showPreview(email)" :class="{read: email.isRead}">
            <div v-if="!email.isStarred" @click.stop="star" ><img class="star-img" src="imgs/star-before.png"></div>
            <div v-if="email.isStarred" @click.stop="unStar" ><img class="star-img" src="imgs/star-after.png"></div>
            <div class="sender-small">{{email.sender}}</div>
            <div class="subject-small">{{email.subject}}</div>
            <long-text class="body-small":txt="email.body" />
            <p class="date-preview">{{showDate}}</p>
            </div>
        </div>  
    </div>
        <div v-if="isShowPreview" class="email-modal-medium" @click="isShowPreview = !isShowPreview">
            <p class="subject-medium">{{email.subject}}</p>
            <p class="from-medium">{{email.sender}}<span> <{{email.from}}></span></p>
            <p class="body-medium">{{email.body}}</p>
            <button class="remove-email" @click="trash(email)"><img class="preview-btn" src="imgs/delete.png"></button>
            <button class="show-details" @click="showDetails(email.id)"><img class="preview-btn expand" src="imgs/expand.png"></button>
        </div>
    </section>

    `,
    data() {
        return {
            isShowPreview: false,
            isHover: false,
            isMobileMode: false,
            windowWidth: window.innerWidth
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler)
        this.determine()
    },
    methods: {
        determine() {
            if (this.windowWidth <= 460)  {
                this.isHover = false
            } 
        },
        showPreview() {
            this.isShowPreview = !this.isShowPreview
        },
        trash(email) {
            gmailService.trashEmail(email).then(email => {
                if (email.to === 'user@appsus.com') {
                    var unread = this.getUnread()
                    eventBus.$emit('read', unread)
                }
            })
            eventBus.$emit('trash', email)
        },
        showDetails(emailId) {
            this.$router.push({ path: '/gmail/' + emailId })
        },
        star() {
            gmailService.starEmail(this.email)
        },
        unStar() {
            gmailService.unStarEmail(this.email)
        },
        myEventHandler(ev) {
            if (ev.target.innerWidth <= 460) {
                this.isMobileMode = true;
            }
            else {
                this.isMobileMode = false
            }
        }
    },
    computed: {
        showDate() {
            let date =`${new Date(this.email.sentAt*1000).toString().slice(4,10)}, ${new Date(this.email.sentAt).toString().slice(20,25)}` 
            return date
        }
    }
}