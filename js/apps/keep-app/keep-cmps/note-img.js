export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-img">
  <img :src="note.info.url" alt="">
  <h1>{{note.info.title}}</h1>
</section>
    `,
    computed: {

    }
}