import longText from '../book-cmps/long-text.cmp.js'
import {bookService} from '../services/book-services.js'
import reviewAdd from '../book-cmps/review-add.cmp.js'

export default {
    components: {
        longText,
        reviewAdd
    },

    template: `
        <section v-if="book" class="book-details app-main">
            <h3>Book Title: "{{book.title}}"</h3>
            <h4 v-for="author in book.authors">By {{author}}</h4>
            <h4>Published At: {{book.publishedDate}}</h4>
            <img :src="book.thumbnail">
            <p>{{book.subtitle}}</p>
            <p><span>{{bookLength}}</span> <span>| {{bookAge}}</span></p>
            <p>Categories: <span v-for="category in book.categories"> {{category}} </span></p>
            <long-text :txt="book.description" />
            <review-add :book="book"/>
        </section>
    `,

    data() {
        return {
            book: null
        }
    },

    created() {
        const {bookId} = this.$route.params
        bookService.getById(bookId)
            .then(Book => this.book = Book)
    },
    computed: {
        bookLength() {
            const bookLength = this.book.pageCount
            var length;
            if (bookLength <=200) length = 'Light Reading'
            else if(bookLength >200 && bookLength <500) length='Decent Reading'
            else if(bookLength >= 500) length ='Long Reading'

            return length
        },

        bookAge() {
            const bookAge = new Date().getFullYear() -this.book.publishedDate
            let age;
            if (bookAge >10) age = 'Veteran Book👵🏻'
            else if(bookAge <1) age ='New!'
            return age
        }

    }
}

