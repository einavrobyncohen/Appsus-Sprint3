export default {
    props: [],
    template: `
<section class="keep-add">

            <!--  // --v-if="!isFromGmail"> -->
            <section class="notes-box">
                    <form @submit.prevent v-if="newNote.type==='note-txt'" >
                          <input v-model="newNote.info.txt" type="text" placeholder="What\'s on your mind...">
                          <button @click="add" hidden></button>
                    </form>
                
                
                    <form @submit.prevent  v-if="newNote.type=== 'note-img'" >
                          <input v-model="newNote.info.title" type="text" placeholder="What\'s on your mind...">
                          <div class="keep-add">
                              <input type="text" v-model="newNote.info.url" :src="newNote.info.url" placeholder="Insert Image Url" alt="image" >
                          </div>
                           <button @click="add" hidden></button>
                    </form>
             
        
                   <form @submit.prevent v-if="newNote.type==='note-video'" >
                         <input v-model="newNote.info.title" type="text" placeholder="What\'s on your mind...">
                         <div class="keep-add">
                             <input v-model="newNote.info.url" type="url" name="" id="" :src="newNote.info.url" placeholder="Insert video Url">
                         </div>
                         <button @click="add" hidden></button>
                    </form>
              
              
                   <form @submit.prevent="add"  v-if="newNote.type==='note-todos'" >
                       <input v-model="newNote.info.label" type="text" placeholder="What\'s on your mind...">
                     <div class="keep-add">
                     <ul class="add-todos" >
                      <li ><input v-model="newNote.info.todos[0].txt" type="text" placeholder="Add a Mission For Today"></li>
                      <li ><input v-model="newNote.info.todos[1].txt" type="text" placeholder="Add a Mission For Today"></li>
                    </ul>
                     </div>
                        <button @click="add" hidden></button>
                    </form>
         
                      <ul class="cmp-type">
                        <li @click="changeCmp('note-txt')"><img src="imgs/txt.png" alt=""></li>
                        <li @click="changeCmp('note-img')"><img src="imgs/image.png" alt=""></li>
                        <!-- <li @click="changeCmp('note-video')" ><img src="imgs/youtube.png" alt=""></li> -->
                       <li @click="changeCmp('note-todos')"><img src="imgs/list.png" alt=""></li>
                     </ul>
            </section>

            <!-- v-if="isFromGmail" -->

</section>
`,
    data() {
        return {
            newNote: {
                id: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: '',
                    url: '',
                    title: '',
                    label: '',
                    todos: [
                        { txt: '' },
                        { txt: '' },
                    ]
                },
                style: {
                    backgroundColor: 'white'
                }
            },
            isTxt: true,
            isImg: false,
            isTodos: false,
            isVideo: false,
        }
    },
    computed: {},
    methods: {
        add() {
            this.$emit('add', this.newNote)
            const newNote = {
                id: '',
                type: 'note-txt',
                isPinned: false,
                info: {
                    txt: '',
                    url: '',
                    title: '',
                    label: '',
                    todos: [
                        { txt: '' },
                        { txt: '' },
                    ]
                },
                style: {
                    backgroundColor: 'white'
                }
            }
            this.newNote = newNote
        },
        changeCmp(cmp) {
            this.newNote.type = cmp
        }

    }
}