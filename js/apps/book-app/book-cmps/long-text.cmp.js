
export default {
    props: ['txt'],
    template:`
    <section class="book-description">
    <p>Description: {{showDesc}} <span  v-if="txt.length>100" @click="toggleShow()">{{buttonTxt}}</span></p>
    </section>
    `,
    data() {
        return {
            isShowHundred: true,
            buttonTxt: '...'
        }
    },
    methods: {
        toggleShow() {
            this.isShowHundred = !this.isShowHundred
            this.buttonTxt = (this.isShowHundred)? '...': '^'
        }
    },
    computed: {
        showDesc() {
            let text;
            if (this.txt.length >100 && this.isShowHundred) text = this.txt.slice(0,100)
            else {text = this.txt}
            return text
        }
        
    }
};