import {bookService} from '../services/book-services.js'
import { eventBus } from "../../../services/event-bus-service.js"

export default {
    props: ['book'],
    template: `
    <section class="add-review">
        <p>Leave a review</p>
        <form>
            Name: <input ref="Authorname"  v-model="review.author" type="text" placeholder="Enter Full Name"/>
            Rating:<select v-model.number="review.rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            Read At:<input v-model="review.readAt" type="date"/>
            Review:<textarea v-model="review.text"></textarea>
            <button class="savebtn" @click.prevent="saveReview(book.id)">Save</button>
        </form>

        <div class="reviews">
            <table>
                <thead>
                    <th>Author</th>
                    <th>Rating</th>
                    <th>Date Read</th>
                    <th>Review</th>
                </thead>
                <tbody>
                    <tr v-for="(review,idx) in book.reviews" :key="review">
                        <td>{{review.author}}</td>
                        <td>{{review.rating}}</td>
                        <td>{{review.readAt}}</td>
                        <td>{{review.reviewText}}</td>
                        <a href="#" @click="deleteReview(book.id, idx)">X</a>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            review: {
                author: 'Books Reader',
                rating: 0,
                readAt: Date.now(),
                reviewText: ''
            }
        }

    },
    methods: {
        saveReview(bookId) {
            bookService.addReview(bookId, this.review)
                .then(() => {
                    const msg = {
                        txt: 'Review Added succesfully',
                        type: 'success',
                        link:'/book/'+this.book.id
                    };
                    eventBus.$emit('showMsg', msg);
                    this.$router.push('/book')})
        
        },
        mounted() {
            this.$refs.Authorname.focus();
        }
        ,

        deleteReview(bookId, reviewIdx) {
            bookService.removeReview(bookId, reviewIdx)
                .then(() => {
                    console.log('here')
                    const msg = {
                        txt: 'Deleted succesfully',
                        type: 'success',
                        link:'/book/'+this.book.id
                    };
                    eventBus.$emit('showMsg', msg);
                    this.$router.push('/book')
                })

        }

    },
    created() {
        console.log(this.book)
    }
}