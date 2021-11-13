export default {
    template: `
        <div class="note-filter">
            <input @input="filter" v-model="filterBy.type" type="text" placeholder="Search By Type">
        </div>
    `,
    data() {
        return {
            filterBy: {
                type: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });
            console.log('filtered');
        }
    }
}