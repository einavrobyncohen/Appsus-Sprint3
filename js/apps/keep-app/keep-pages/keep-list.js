import keepPreview from '../keep-cmps/keep-preview.js';
import keepAdd from '../keep-cmps/keep-add.js';

export default {
    props: ['notes'],
    template: `
    <section class="keep-list">
        <keep-add @add="add"></keep-add>
        <!-- <form @submit.prevent="add()" > -->
            <!--  // --v-if="!isFromGmail"> -->
            <!-- <div class="notes-box">
                <input v-model="newNote.info.txt" type="text" placeholder="What\'s on your mind...">
                <ul class="cmp-type"> <li>💭</li><li>🖼</li><li>🎞</li><li>♒</li></ul>
            </div> -->

            <!-- v-if="isFromGmail" -->

        <!-- </form> -->

        <div>
            <ul class="note-list" >
                <li v-for="note in notes"  :key="note.id" class="note-container" :style="{backgroundColor: note.style.backgroundColor}">
                    <keep-preview @editNote="editNote" :note="note" @remove="remove" @changeColor="changeColor"></keep-preview>
                    <!-- <ul class="tool-bar">
                        <li>📌</li>
                        <li @click="isColorOpen=!isColorOpen">🎨</li>
                        <li>📧</li>
                        <li @click="edit(note.id)">✍🏻</li>
                        <li @click="remove(note.id)">🗑</li>
                    </ul>  -->
                    <!-- <section class="colors" v-if="isColorOpen">
                        <section v-for="color in colors">
                            <div class="note-color" :style="{backgroundColor: color.color}" @click="changeColor(note.id, color)">.</div>
                        </section>
                    </section> -->
                </li>
            </ul>
        </div>
    </section>
    `,
    data() {
        return {
            // newNote: {
            //     id: '',
            //     type: "note-txt",
            //     info: {
            //         txt: ''
            //     },
            //     style: {
            //         backgroundColor: '#cbf0f8'
            //     }
            // },
            // isEdited: false,
            // colors: keepService.getColorsOption(),
            // isColorOpen: false,
        };
    },
    created() {
        console.log(this.$route.params)

    },
    methods: {
        // remove(noteId) {
        //     this.$emit('remove', noteId);
        // },
        add(newNote) {
            this.$emit('add', newNote)
        },
        //     const newNote = {
        //         id: '',
        //         type: "note-txt",
        //         info: {
        //             txt: ''
        //         },
        //         style: {
        //             backgroundColor: '#cbf0f8'
        //         }
        //     }
        //     this.newNote = newNote
        // },
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
        // edit(noteId) {
        //     this.isEdited = !this.isEdited;
        //     this.$emit('edited', noteId)
        //         // if (noteId) {
        //         //     keepService.getById(noteId)
        //         //         .then(note => {
        //         //             keepService.update(note)
        //         //                 .then(() => {
        //         //                     this.$emit('edited')
        //         //                 })
        //         //         })
        //         // }
        //     console.log('edit');
        // },
        changeColor(noteId, color) {
            this.$emit('changeColor', noteId, color)
            this.isColorOpen = false
                // keepService.getById(noteId)
                //     .then(note => {
                //         console.log(note);
                //         this.isColorOpen = false
                //         note.style.backgroundColor = color
                //         console.log(color);
                //         keepService.update(note)
                //             .then(() => this.$emit('changeColor', color))
                //     })
        },
        getColorsOptions() {


            this.isColorOpen = !this.isColorOpen
        }
    },
    // computed: {
    //     backgroundColor() {
    //         return note.style.backgroundColor
    //     },
    // },
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