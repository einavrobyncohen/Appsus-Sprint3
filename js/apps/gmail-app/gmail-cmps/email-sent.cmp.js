import longText from '../../../cmps/long-text.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    props: ['email'],
    components:{
        longText,
    },
    template: `
    <section class="email-preview">
        <div  class="email-modal-small" @click="showPreview(email)">
            <p class="sender-small">{{email.sender}}</p>
            <p class="subject-small">{{email.subject}}</p>
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
    methods: {
        showPreview() {
            this.isShowPreview = !this.isShowPreview
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
            let date = `${new Date(this.email.sentAt).toString().slice(4,10)}, ${new Date(this.email.sentAt*1000).toString().slice(20,25)}`
            return date
        }
    }
}