export default {
    props: ['book'],
    template: `
    <div class="book-preview">
            <div v-if="book.listPrice.isOnSale"><img class="sale" src="imgs/sale.png"></div>
            <p>{{book.title}}</p>
            <img :src="book.thumbnail">
            <p :class="colorPrice">price: {{book.listPrice.amount}}
            <span :currentIcon="setCurrencyIcon(book.listPrice.currencyCode)">{{currencyIcon}}</span>
            </p>
    </div>
    `,
    data() {
        return {
            currencyIcon: null
        }
    },

    methods: {
        setCurrencyIcon(currency) {
            if (currency=== 'EUR') this.currencyIcon = '€'
            else if(currency=== 'USD') this.currencyIcon = '$'
            else if(currency=== 'ILS') this.currencyIcon = '₪'
        }
    },

    computed: {
        colorPrice() {
            let bookPrice = this.book.listPrice.amount
            return {red: bookPrice > 150 , green: bookPrice < 20 }
        }

    }
}