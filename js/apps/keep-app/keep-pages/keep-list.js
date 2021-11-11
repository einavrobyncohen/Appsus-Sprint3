import { keepService } from '../services/keep-service.js';
import { utilService } from '../../../services/util-service.js';
import keepPreview from '../keep-cmps/keep-preview.js';

export default {
    props: ['notes'],
    template: `
    <section class="keep-list">
        <form @submit.prevent="add()" >
            <div class="notes-box">
                <input v-model="newNote.info.txt" type="text" placeholder="What\'s on your mind...">
                <ul class="cmp-type"> <li>💭</li><li>🖼</li><li>🎞</li><li>♒</li></ul>
            </div>
        </form>

        <div>
            <ul class="note-list" >
                <li v-for="note in notes" :key="note.id" class="note-container">
                    <keep-preview :isEdited="isEdited" :note="note"></keep-preview>
                    <ul class="tool-bar">
                        <li>📌</li>
                        <li @click="getColorsOptions(note.id)">🎨</li>
                        <li>📧</li>
                        <li @click="edit(note.id)">✍🏻</li>
                        <li @click="remove(note.id)">🗑</li>
                    </ul> 
                    <section class="colors" v-if="isColorOpen">
                        <section v-for="color in colors">
                            <div class="note-color" :style="{backgroundColor: color.color}" @click="changeBcgColor(note.id, color)">.</div>
                        </section>
                    </section>
                </li>
            </ul>
        </div>
    </section>
    `,
    data() {
        return {
            newNote: {
                id: '',
                type: "note-txt",
                info: {
                    txt: ''
                },
            },
            isEdited: false,
            colors: keepService.getColorsOption(),
            isColorOpen: false,
        };
    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        add() {
            keepService.save(this.newNote)
                .then(note => {
                    this.newNote = {
                        id: '',
                        type: "note-txt",
                        info: {
                            txt: ''
                        },
                    }
                    this.$emit('added')
                });
            console.log(this.newNote);
        },
        edit(noteId) {
            this.isEdited = !this.isEdited;
            this.$emit('edited', noteId)
                // if (noteId) {
                //     keepService.getById(noteId)
                //         .then(note => {
                //             keepService.update(note)
                //                 .then(() => {
                //                     this.$emit('edited')
                //                 })
                //         })
                // }
            console.log('edit');
        },
        changeBcgColor(noteId, color) {
            keepService.getById(noteId)
                .then(note => {
                    console.log(note);
                    this.isColorOpen = false
                    note.style.backgroundColor = color
                    console.log(color);
                    keepService.update(note)
                        .then(() => this.$emit('changeColor'))
                })
        },
        getColorsOptions(noteId) {
            keepService.getById(noteId)
                .then(() => this.isColorOpen = !this.isColorOpen)
            console.log(noteId);
        }
    },
    computed: {
        backgroundColor() {
            return note.style.backgroundColor
        },
    },
    components: {
        keepPreview
    }
};