export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-img">
  <img :src="note.info.url" alt="">
</section>
    `,
    computed: {

    }
}