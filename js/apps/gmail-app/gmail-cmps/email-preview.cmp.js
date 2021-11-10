import { gmailService } from '../services/gmail-service.js'
import {eventBus} from '../../../services/event-bus-service.js'
import longText from '../../../cmps/long-text.cmp.js'

export default {
    props: ['email'],
    components:{
        longText
    },
    template: `
    <section class="email-preview">
        <div  class="email-modal-small" @click="showPreview" :class="{read: isEmailRead}">
            <p class="sender-small">{{email.sender}}</p>
            <p class="subject-small">{{email.subject}}</p>
            <long-text :txt="email.body" />
            <p>{{showDate}}</p>
        </div>  
        <div v-if="isShowPreview" class="email-modal-medium" @click="isShowPreview = !isShowPreview">
            <p class="subject-medium">{{email.subject}}</p>
            <p class="from-medium">{{email.sender}}<span> <{{email.from}}></span></p>
            <p class="body-medium">{{email.body}}</p>
        </div>
    </section>

    `,
    data() {
        return {
            isShowPreview: false,
            isEmailRead: false
        }

    },
    methods: {
        showPreview() {
            console.log(this.email)
            gmailService.changeEmailToRead(this.email.id)
                .then(() => {
                    if (!this.isRead)eventBus.$emit('read')
                    this.isShowPreview = !this.isShowPreview
                    this.isEmailRead = true
                    
                })
        }
    },
    computed: {
        showDate() {
            let hours = new Date(this.email.sentAt).getHours()
            let minutes = new Date(this.email.sentAt).getMinutes()
            return hours+':'+minutes
        }
    }
}