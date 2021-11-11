export default {
    props: ['note'],
    template: `
<section>
  <h1>{{note.info.label}}</h1>
  <ul class="todo-list" v-for="todo in note.info.todos">
    <li>{{todo.txt}}</li>
  </ul>
</section>
    `,
    computed: {

    }
}