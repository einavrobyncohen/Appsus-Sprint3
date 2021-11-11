
import emailCompose from '../gmail-cmps/email-compose.cmps.js'
import emailFolders from '../gmail-cmps/email-folder-list.cmp.js'

export default {
    components: {
        emailCompose,
        emailFolders

    },
    template: `<section class="email-filter">
        <form class="filtering">
            <input class="filterby" @input="filter" v-model="filterBy.subject" placeholder="Search mail" />
           Filter: <select @input="filter" v-model="filterBy.show">
                <option>All</option>
                <option>Read</option>
                <option>Unread</option>
            </select>

            Sort: <select class="sortby" @input="sort($event)">
                <option value="1">Date</option>
                <option value="2">Subject</option>
            </select>

        </form>
        <button class="compose-btn">
            <p @click="isOpenCompose">compose</p>
            <email-compose @closeModal="close()" v-if="openCompose"/>
        </button>
    </section>`,
    data() {
        return{
            openCompose: false,
            filterBy: {
                subject: '',
                show: ''
            }
        }
    },
    methods: {
        isOpenCompose() {
            this.openCompose = true
        },
        close() {
            this.openCompose = false
        },
        filter() {
            this.$emit('filtered', this.filterBy)
        },
        sort(event) {
            this.$emit('sorted', +event.target.value)
        }

    },
    computed: {
    }
}