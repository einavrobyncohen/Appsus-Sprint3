export default {
    props: ['note'],
    template: `
        <section class="keep-preview" :class="{img: note.type==='img', audio: not.type==='audio}">
            <h3>{{note.type}}</h3>
            <p v-if="note.type==='img'">{{note.inf.url}}</p>
</section>
    `,
    computed: {

        currency() {

        },
    }
}