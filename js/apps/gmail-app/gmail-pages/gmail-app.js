import { eventBus } from "../../../services/event-bus-service.js"
import { gmailService } from "../services/gmail-service.js"
import emailList from "../gmail-cmps/email-list.cmp.js"
import emailFilter from "../gmail-cmps/email-filter.cmp.js"

export default {
    components: {
        emailList,
        emailFilter
    },

    template:`<section class="gmail-app app-main">
        <email-filter @filtered="setFilter" @sorted="setSort"/>
        <email-list :emails="emailsToShow"/>
    </section>`
    ,

    data() {
        return {
            emails: null,
            filterBy: null,
            sortBy: null,
        }
    },
    created() {
        this.loadEmails(),
        eventBus.$on('remove' ,this.removeEmail)
        eventBus.$on('emailSent', this.sentEmail)
        
    },
    methods: {
        loadEmails() {
            gmailService.query()
                .then(emails => {
                    this.emails = emails
            })
        },
        removeEmail(emailId) {
            gmailService.removeEmail(emailId).then(
                this.emails = this.emails.filter(email => email.id !== emailId)
            )
        },
        sentEmail(emptyEmail) {
            gmailService.sendEmail(emptyEmail).then(()=> this.loadEmails())
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setSort(num) {
            this.sortBy = num
        }
    },
    computed: {
        emailsToShow() {
            var emailsList;
            if (this.sortBy === 2) {
                emailsList= this.emails.sort((a, b) => (a.subject > b.subject) - (a.subject < b.subject))

            } else if (this.sortBy === 1) {
                emailsList= this.emails.sort((a, b) => (b.sentAt - a.sentAt))
            }

            else {
                emailsList = this.emails
            }
            if (!this.filterBy) return this.emails
            const searchStr = this.filterBy.subject.toLowerCase();
            const emailsToShow = emailsList.filter( email => {
                if (!this.filterBy.show || this.filterBy.show=== 'All') {
                    return email.subject.toLowerCase().includes(searchStr) 
                } else if(this.filterBy.show === 'Read') {
                    return email.isRead && email.subject.toLowerCase().includes(searchStr) 
                } else if(this.filterBy.show === 'Unread') {
                    return !email.isRead && email.subject.toLowerCase().includes(searchStr) 
                } 
            })
            return emailsToShow
        }
    }
}

