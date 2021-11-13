export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-todos">
  <h1>{{note.info.label}}</h1>
  <ul class="todo-list" v-for="todo in note.info.todos">
    <li v-if="!isEdited">{{todo.txt}}</li>
    <input type="text" v-if="isEdited" v-model="todo.txt" autofocus>
    
  </ul>
</section>
    `,
    data() {
        return {
            isDone: false,
        }
    },
    created() {},
    computed: {
        class() {
            if (this.isDone) return 'done'
            return ''
        }
    }
}