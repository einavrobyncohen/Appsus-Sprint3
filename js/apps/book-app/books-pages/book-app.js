import {bookService} from '../services/book-services.js'
import bookList from '../book-cmps/book-list.cmp.js';
import bookFilter from '../book-cmps/book-filter.cmp.js';
import bookAdd from '../book-cmps/book-add.cmp.js'

export default {
    components: {
        bookList,
        bookFilter,
        bookAdd
    },
    template: `
        <section class="book-app app-main">
            <book-filter @filtered="setFilter" />
            <book-add/>
            <book-list :books="booksToShow" />
        </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null
        };
    },
    created() {
        this.loadBooks()
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const searchStr = this.filterBy.name.toLowerCase();
            const fromPrice = this.filterBy.fromPrice
            const toPrice = this.filterBy.toPrice || Infinity
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) &&
                book.listPrice.amount >= fromPrice &&
                book.listPrice.amount <= toPrice
            });
            return booksToShow;
        }
    }

}
