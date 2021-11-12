import { gmailService } from "../services/gmail-service.js";
import { eventBus } from "../../../services/event-bus-service.js";

export default {
    component: {
    },
    template:`<section class="gmail-details main-content">
        <div class="mail-content">
            <div class="subject">{{email.subject}}</div>
            <div class="date">{{showDate}}</div>
            <img  @click="deleteEmail(email.id)" src="imgs/delete.png">
            <img  @click="backToMailList" src="imgs/back.png"> 
            <div class="sender-details">
                <div class="sender">{{email.sender}}</div>
                <div class="from"><{{email.from}}></div>
            </div>
            <div class="body">{{email.body}}</div>
        </div>

    </section>`
    ,
    data() {
        return {
            email: null
        }
    },
    methods: {
        backToMailList() {
            this.$router.push({ path: '/gmailApp' })
        },
        deleteEmail(emailId) {
            eventBus.$emit('remove', emailId)
            this.$router.push({ path: '/gmailApp' })
        }

    },
    computed: {
        showDate(){
            let date =`${new Date(this.email.sentAt).toString().slice(4,34)}` 
            return date
        }
    },
    watch: {
        '$route.params.mailId': {
            handler() {
                const { mailId } = this.$route.params;
                gmailService.getEmailById(mailId)
                    .then(email => this.email = email)
            },
            immediate: true
        }
    }
}