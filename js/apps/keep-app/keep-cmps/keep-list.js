import { keepService } from '../services/keep-service.js';
import keepPreview from './keep-preview.js';

export default {
    props: ['notes'],
    template: `
    <section class="keep-list">
        <div class="notes-box">
            <input @input="add()" v-model="newNote.type" type="text" placeholder="What\'s on your mind...">
        <div> <span>💭</span><span>🖼</span><span>🎞</span><span>♒</span></div>
        </div>
        <ul class="note-list">
            <li v-for="note in notes" :key="note.id" class="note-container" >
                <keep-preview :note="note" />
                <div>
                <span>📌</span>
                <input type="color"><span>🎨</span>
                <span>📧</span>
                <span>✍🏻</span>
                <span @click="remove(note.id)">🗑</span>
            </div>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            newNote: {
                type: null,
            }
        };
    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        add() {
            keepService.save(this.newNote)
                .then(newNote => notes.push(this.newNote));
            console.log(newNote);
        }
    },
    components: {
        keepPreview
    }
};