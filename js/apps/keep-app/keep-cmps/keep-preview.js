import { keepService } from "../services/keep-service.js"
import noteTxt from "../keep-cmps/note-txt.js"
import noteImg from "./note-img.js"
import noteTodos from "../keep-cmps/note-todos.js"
import noteVideo from "../keep-cmps/note-video.js"
export default {
    props: ['note'],
    template: `
<section class="keep-preview"  >
    
    
    <component @changeColor="changeColor" :note="note" :isEdited='isEdited' :is="note.type">
        
        </component>
    <section class="edit">
                  <div>
                  <ul class="tool-bar">
                        <!-- <li @click="pinNote()"><img src="imgs/pin.png" alt=""></li> -->
                        <li @click="isColorOpen=!isColorOpen"><img src="imgs/palette.png" alt=""></li>
                        <li><img src="imgs/letter.png" alt=""></li>
                        <li @click="duplicate()"><img src="imgs/duplicate.png" alt=""></li>
                        <li @click="editNote()"><img src="imgs/edit.png" alt=""></li>
                        <li @click="remove(note.id)"><img src="imgs/trash-can.png" alt=""></li>
                    </ul> 
                  </div>
                   <div class="colors" v-if="isColorOpen">
                     <div v-for="color in colors">
                      <div class="note-color" :style="{backgroundColor: color.color}" @click="changeColor(note.id, color.color)">.</div>
                    </div>
                   </div>
    </section>
</section>
    `,
    data() {
        return {
            colors: keepService.getColorsOption(),
            isColorOpen: false,
            isEdited: false,
        }
    },
    computed: {

    },
    methods: {
        changeColor(noteId, color) {
            this.isColorOpen = false
            this.$emit('changeColor', noteId, color)

        },
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        editNote() {
            this.isEdited = !this.isEdited;
            this.$emit('editNote', this.note)
        },
        duplicate() {
            const newNote = {...this.note }
            newNote.id = null
            this.$emit('duplicateNote', newNote)
        },
        // pinNote(note) {
        //     this.note.isPinned = !this.note.isPinned
        //     note = this.note
        //     this.$emit('pinNote', note)
        //     console.log('note-preview', note);
        // }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    }
}