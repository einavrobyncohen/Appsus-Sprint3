import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    components: {
        emailPreview
    },
    template:`
    <section class="emails-list">
        <ul>
            <li v-for="email in emails" Key="email.id">
                <email-preview :email="email"></email-preview>
            </li>
        </ul>
    </section>
    `,
    created() {
    }
}