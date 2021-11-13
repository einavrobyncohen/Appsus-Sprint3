export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-video">
  <video :src="note.info.url" width="100%" alt=""></video>
  <h1>{{note.info.title}}</h1>
</section>
    `,
    created() {
        video.play()
    },
    destroyed() {

    },
    computed: {

    }
}