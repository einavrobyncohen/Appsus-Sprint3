import { keepService } from "../services/keep-service.js"
import noteTxt from "../keep-cmps/note-txt.js"
import noteImg from "../keep-cmps/note-img.js"
import noteTodos from "../keep-cmps/note-todos.js"
export default {
    props: ['note'],
    template: `
<section class="keep-preview"  >
    
    
    <component @changeColor="changeColor" :note="note" :isEdited='isEdited' :is="note.type">
        
        </component>
    <section class="edit">
                  <div>
                  <ul class="tool-bar">
                        <li>📌</li>
                        <li @click="isColorOpen=!isColorOpen">🎨</li>
                        <li>📧</li>
                        <li @click="editNote(note.id)">✍🏻</li>
                        <li @click="remove(note.id)">🗑</li>
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
        editNote(noteId) {
            this.isEdited = !this.isEdited;
            this.$emit('editNote', this.note)
        },
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    }
}