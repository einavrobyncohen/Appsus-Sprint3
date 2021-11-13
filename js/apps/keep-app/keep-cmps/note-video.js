export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-video">
  <iframe :src="note.info.url" width="100%" frameborder="0"></iframe>
  <h1>{{note.info.title}}</h1>
</section>
    `,
    created() {},
    destroyed() {

    },
    computed: {

    }
}