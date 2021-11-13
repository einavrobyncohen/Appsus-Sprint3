export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-img">
  <img :src="note.info.url" alt="image">
  <h1 v-if="!isEdited">{{note.info.title}}</h1>
  <input type="text" v-if="isEdited" v-model="note.info.title" autofocus>
</section>
    `,
    computed: {

    }
}