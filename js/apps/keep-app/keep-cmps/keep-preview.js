export default {
    props: ['note'],
    template: `
        <section class="keep-preview">
            <h3>{{note.type}}</h3>
            <p>{{note.info}}</p>
</section>
    `,
    computed: {

        currency() {

        },
    }
}