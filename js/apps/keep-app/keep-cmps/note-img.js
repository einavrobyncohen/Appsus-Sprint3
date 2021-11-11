export default {
    props: ['note'],
    template: `
<section class="note-img">
  <img :src="note.info.url" alt="">
</section>
    `,
    computed: {

    }
}