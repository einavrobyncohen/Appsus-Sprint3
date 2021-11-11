export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-txt">
<h1 v-if="!isEdited">{{note.info.txt}}</h1>
<input type="text" v-if="isEdited" v-model="note.info.txt">
    <!-- <textarea v-if="isEdited" v-model="note.info.txt" name="" id="" cols="20" rows="3">{{note.info.txt}}</textarea> -->
</section>
    `,
    computed: {

    }
}