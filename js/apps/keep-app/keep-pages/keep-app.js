import { keepService } from '../services/keep-service.js';
import keepList from '../keep-pages/keep-list.js';

export default {
    template: `
    <section class="app-main">
    <keep-list :notes="notes" @changeColor="changeColor"  
    @editNote="editNote" @duplicateNote="duplicateNote" @remove="removeNote" @add="add"></keep-list>
    </section>
    `,
    data() {
        return {
            notes: null
        };
    },
    created() {
        this.loadNotes();
    },
    methods: {
        loadNotes() {
            keepService.query()
                .then(notes => {
                    this.notes = notes;
                });
        },
        changeColor(noteId, color) {

            keepService.getById(noteId)
                .then(note => {
                    note.style.backgroundColor = color
                    keepService.update(note)
                        .then(() => {
                            this.loadNotes();
                        })
                })
        },

        editNote(note) {
            keepService.update(note)
                .then(() => {
                    this.loadNotes();
                })

        },
        duplicateNote(newNote) {
            console.log('note3', newNote);
            keepService.save(newNote)
                .then(() => {
                    this.loadNotes();

                })
        },
        add(newNote) {
            keepService.save(newNote)
                .then(() => {

                    this.loadNotes()
                })
        },
        removeNote(id) {
            keepService.remove(id)
                .then(() => {
                    this.notes = this.notes.filter(note => note.id !== id)
                });
        },
    },
    computed: {},
    components: {
        keepList,
    }
}