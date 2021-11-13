import bookPreview from '../book-cmps/book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-preview-container" >
            <router-link  style="text-decoration: none; color: inherit;" :to="'/book/'+book.id">
                <book-preview :book="book"/>
                <div class="actions">
                </div>
            </router-link>
            </li>
        </ul>
    `,
    methods: {
    },
    components: {
        bookPreview
    }
};