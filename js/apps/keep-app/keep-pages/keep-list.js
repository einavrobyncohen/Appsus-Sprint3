import keepPreview from '../keep-cmps/keep-preview.js';
import keepAdd from '../keep-cmps/keep-add.js';

export default {
    props: ['notes'],
    template: `
    <section class="keep-list">
        <keep-add @add="add"></keep-add>
        <div>
            <ul class="note-list" >
                <li v-for="note in notes"  :key="note.id" class="note-container" :style="{backgroundColor: note.style.backgroundColor}">
                    <keep-preview @pinNote="pinNote" @editNote="editNote" @duplicateNote="duplicateNote" :note="note" @remove="remove" @changeColor="changeColor"></keep-preview>
                </li>
            </ul>
        </div>
    </section>
    `,
    data() {
        return {};
    },
    created() {
        console.log(this.$route.params)

    },
    methods: {
        add(newNote) {
            this.$emit('add', newNote)
        },
        editNote(note) {
            console.log('edit-list');
            this.$emit('editNote', note)
        },
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        getNoteFromEmail() {

            this.add()

        },
        changeColor(noteId, color) {
            this.$emit('changeColor', noteId, color)
            this.isColorOpen = false
        },
        getColorsOptions() {


            this.isColorOpen = !this.isColorOpen
        },
        duplicateNote(newNote) {
            this.$emit('duplicateNote', newNote)
        },
        pinNote(noteId) {
            this.$emit('pinNote', noteId)
            console.log('note-list', noteId);
        }
    },
    components: {
        keepPreview,
        keepAdd
    },
    watch: {
        '$route.params.email': {
            handler() {
                const { email } = this.$route.params;
                console.log(email)
            }
        }
    }
};