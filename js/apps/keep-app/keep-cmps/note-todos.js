export default {
    props: ['note', 'isEdited'],
    template: `
<section class="note-todos">
  <h1>{{note.info.label}}</h1>
  <ul class="todo-list" v-for="todo in note.info.todos">
    <li>{{todo.txt}}</li>
  </ul>
</section>
    `,
    computed: {

    }
}