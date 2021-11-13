import { keepService } from '../services/keep-service.js';
import keepList from '../keep-pages/keep-list.js';
import noteFilter from '../keep-cmps/note-filter.js';

export default {
    template: `
    <section class="app-main">
    <note-filter @filtered="setFilter"/>
    <keep-list :notes="notesToShow"  @changeColor="changeColor"  
    @editNote="editNote" @pinNote="pinNote" @duplicateNote="duplicateNote" @remove="removeNote" @add="add"></keep-list>
    </section>
    `,
    data() {
        return {
            notes: null,
            filterBy: null,
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
        setFilter(filterBy) {
            this.filterBy = filterBy;
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
        pinNote(note) {
            keepService.save(note)
                .then(() => {
                    this.loadNotes()
                })
            console.log('app', note);
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            console.log(this.notes);
            const searchStr = this.filterBy.type.toLowerCase();
            const notesToShow = this.notes.filter(note => {
                return note.type.toLowerCase().includes(searchStr);
            });
            return notesToShow;
            console.log(notesToShow);
        },
        // pinnedNotes() {

        //     const pinnedNotes = this.notes.filter(note => {
        //         if (pinnedNotes) return this.note;
        //         return note.isPinned
        //     })
        //     return pinnedNotes
        // }
    },
    components: {
        keepList,
        noteFilter
    }
}