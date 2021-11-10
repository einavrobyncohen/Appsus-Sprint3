import { gmailService } from "../services/gmail-service.js"
import emailList from "../gmail-cmps/email-list.cmp.js"
import emailFilter from "../gmail-cmps/email-filter.cmp.js"


export default {
    components: {
        emailList,
        emailFilter
    },

    template:`<section class="gmail-app app-main">
        <email-filter :unread="amountUnread"/>
        <email-list :emails="emailsToShow"/>
    </section>`
    ,

    data() {
        return {
            emails: null,
            filterBy: null,
            amountUnread: 4

        }
    },
    created() {
        this.loadEmails()
        
    },
    methods: {
        loadEmails() {
            gmailService.query()
                .then(emails => {
                    this.emails = emails
                })
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails

        }
    }
}