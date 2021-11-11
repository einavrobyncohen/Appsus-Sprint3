import noteTxt from "../keep-cmps/note-txt.js"
import noteImg from "../keep-cmps/note-img.js"
import noteTodos from "../keep-cmps/note-todos.js"
export default {
    props: ['note', 'isEdited'],
    template: `
<section class="keep-preview">>
    
    <component :note="note" :isEdited='isEdited' :is="note.type">
        
        </component>
    </section>
    `,
    data() {
        return {
            isColorOpen: false,
        }
    },
    computed: {

    },
    methods: {},
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    }
}