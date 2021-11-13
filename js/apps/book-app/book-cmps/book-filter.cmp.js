

export default {
    template: `
        <div class="book-filter">
            <input class="input-book" v-model="filterBy.name" type="text" placeholder="Enter Book Name">
            From:<input  class="input-book" v-model.number="filterBy.fromPrice" type="number" placeholder="0">
            To:<input  class="input-book" v-model.number="filterBy.toPrice" type="number" placeholder="0">
            <button class="btn-book" @click="$emit('filtered', {...filterBy})">Filter</button>
        </div>
    `,
    data() {
        return {
            filterBy: {
                name: '',
                fromPrice:0,
                toPrice: Infinity
            }
        };
    }
}