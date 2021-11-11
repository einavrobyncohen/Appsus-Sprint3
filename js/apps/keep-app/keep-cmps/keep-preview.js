import noteTxt from "../keep-cmps/note-txt.js"
import noteImg from "../keep-cmps/note-img.js"
import noteTodos from "../keep-cmps/note-todos.js"
export default {
    props: ['note'],
    template: `
<section class="keep-preview">>
    
    <component :note="note" :is="note.type">
        
        </component>
    </section>
    `,
    computed: {

    },
    methods: {},
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    }
}