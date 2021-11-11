import emailPreview from './email-preview.cmp.js'
import emailFolderList from './email-folder-list.cmp.js'
import emailSent from './email-sent.cmp.js'

export default {
    props: ['emails'],
    components: {
        emailPreview,
        emailFolderList,
        emailSent
    },
    template:`
    <section class="emails-list">
        <email-folder-list @display="show"/>
        <ul v-if="showFolder === 'inbox' || !showFolder">
            <li v-for="email in emails" Key="email.id">
                <email-preview v-if="email.to === 'user@appsus.com'" :email="email"></email-preview>
            </li>
        </ul>
        <ul v-else-if="showFolder === 'sent'">
            <li v-for="email in emails" Key="email.id">
                <email-sent v-if="email.from === 'user@appsus.com'" :email="email"></email-sent>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            showFolder: ''
        }

    },
    methods: {
        show(folder) {
            this.showFolder = folder
            console.log(this.showFolder)
        }
    },
    computed: {
        getEmailsToDisplay() {
            if (this.showFolder === 'inbox') 
            return 'email.is'
            console.log(this.showFolder)
        }
    }
}
