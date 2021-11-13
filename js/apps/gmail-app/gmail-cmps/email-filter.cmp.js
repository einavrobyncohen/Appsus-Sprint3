

import emailFolders from '../gmail-cmps/email-folder-list.cmp.js'

export default {
    components: {
        emailFolders

    },
    template: `<section class="email-filter">
        <form class="filtering">
            <input class="filterby" @input="filter" v-model="filterBy.subject" placeholder="Search mail" />
            <img  class="search-img" src="imgs/search.png">
            <img @click="openMoreOptions" class="filter-img" src="imgs/filter.png">
            <div v-if="isShowOptions" class="more-options">
                <img  class="options-img" src="imgs/filter 2.png">
            <select class="chooseFilter" @input="filter" v-model="filterBy.show">
                <option >All</option>
                <option>Read</option>
                <option>Unread</option>
            </select>
                <img class="options-img" src="imgs/sort.png">
            <select class="sortby" @input="sort($event)">
                <option value="1">Date</option>
                <option value="2">Subject</option>
                </select>
            </div>
        </form>
    </section>`,
    data() {
        return{
            filterBy: {
                subject: '',
                show: ''
            },
            isShowOptions: false,
            selected: 'All'
        }
    },
    methods: {

        filter() {
            this.$emit('filtered', this.filterBy)
        },
        sort(event) {
            this.$emit('sorted', +event.target.value)
        },
        openMoreOptions() {
            this.isShowOptions = !this.isShowOptions
        }

    },
    computed: {
    }
}