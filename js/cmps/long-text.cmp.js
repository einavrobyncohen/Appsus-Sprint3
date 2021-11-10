
export default {
    props: ['txt'],
    template:`
    <section class="email-body">
    <p>{{showDesc}} <span  v-if="txt.length>30">{{buttonTxt}}</span></p>
    </section>
    `,
    data() {
        return {
            isShowThirty: true,
            buttonTxt: '...'
        }
    },

    computed: {
        showDesc() {
            let text;
            if (this.txt.length >30 && this.isShowThirty) text = this.txt.slice(0,30)
            else {text = this.txt}
            return text
        }
        
    }
};