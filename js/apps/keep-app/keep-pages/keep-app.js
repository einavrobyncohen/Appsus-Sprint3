import { keepService } from '../services/keep-service.js';
import keepList from '../keep-pages/keep-list.js';

export default {
    template: `
    <section class="app-main">
    <h1>Keep App</h1>
    <keep-list :notes="notes" @changeColor="loadNotes" @edited="editNote" @remove="removeNote" @added="added"></keep-list>
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
                    console.log(this.notes);
                });
        },

        editNote(noteId) {
            console.log('in keep-app', noteId);
            keepService.getById(noteId)
                .then(note => {
                    keepService.update(note)
                        // .then(() => {
                        //     this.$emit('edited')
                        // })
                })
                // this.loadNotes();
                // console.log('edit');
        },
        added() {
            console.log('added');
            this.loadNotes()
        },
        removeNote(id) {
            keepService.remove(id)
                .then(() => {
                    // const msg = {
                    //     txt: 'Deleted succesfully',
                    //     type: 'success'
                    // };
                    // eventBus.$emit('showMsg', msg);
                    this.notes = this.notes.filter(note => note.id !== id)
                })
                // .catch(err => {
                //     console.log('err', err);
                //     const msg = {
                //         txt: 'Error. Please try later',
                //         type: 'error'
                //     };
                //     eventBus.$emit('showMsg', msg);
                // });
        },

    },
    computed: {},
    components: {
        keepList,
    }
}