import { gmailService } from '../services/gmail-service.js'
import {eventBus} from '../../../services/event-bus-service.js'
import longText from '../../../cmps/long-text.cmp.js'


export default {
    props: ['email'],
    components:{
        longText,
    },
    template: `
    <section class="email-preview">
        <div  class="email-modal-small" @click="showPreview(email)" :class="{read: email.isRead}">
            <div class="sender-small">{{email.sender}}</div>
            <div class="subject-small">{{email.subject}}</div>
            <long-text :txt="email.body" />
            <p>{{showDate}}</p>
        </div>  
        <div v-if="isShowPreview" class="email-modal-medium" @click="isShowPreview = !isShowPreview">
            <p class="subject-medium">{{email.subject}}</p>
            <p class="from-medium">{{email.sender}}<span> <{{email.from}}></span></p>
            <p class="body-medium">{{email.body}}</p>
            <button class="remove-email" @click="remove(email.id)"><img class="preview-btn" src="imgs/delete.png"></button>
            <button class="show-details" @click="showDetails(email.id)"><img class="preview-btn expand" src="imgs/expand.png"></button>

            
        </div>
    </section>

    `,
    data() {
        return {
            isShowPreview: false,
            
        }

    },
    created() {
        console.log(this.email)

    },
    methods: {
        showPreview() {
            if (!this.email.isRead) {
                eventBus.$emit('read')

            } 
            gmailService.changeEmailToRead(this.email)
                .then(() => {
                    if (this.email.isRead) {
                        this.isShowPreview = !this.isShowPreview
                    
                    }
                })
        },
        remove(emailId) {
            eventBus.$emit('remove', emailId)
        },
        showDetails(emailId) {
            this.$router.push({ path: '/gmail/' + emailId })
        }
    },
    computed: {
        showDate() {
            let date =`${new Date(this.email.sentAt).toString().slice(4,10)}, ${new Date(this.email.sentAt*1000).toString().slice(20,25)}` 
            return date
        }
    }
}