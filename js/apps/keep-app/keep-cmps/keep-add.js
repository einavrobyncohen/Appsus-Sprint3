export default {
    props: [],
    template: `
<section class="keep-add">
<form @submit.prevent="add()" >
            <!--  // --v-if="!isFromGmail"> -->
            <div class="notes-box">
                <input v-if="" v-model="newNote.info.txt" type="text" placeholder="What\'s on your mind...">
                <ul class="cmp-type">
                    <li @click="changeCmp('note-txt')">💭</li>
                    <li @click="changeCmp('note-img')">🖼</li>
                    <li @click="changeCmp('note-video')">🎞</li>
                    <li @click="changeCmp('note-todos')">♒</li>
                </ul>
            </div>

            <!-- v-if="isFromGmail" -->

        </form>
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
                style: {
                    backgroundColor: 'white'
                }
            },
            isTxt: false,
            isImg: false,
            isTodos: false,
            isVideo: false,
        }
    },
    computed: {
        // noteType() {
        //     if (this.newNote.type === "note-txt") return 'note-txt'
        //     else if (this.newNote.type === "note-img") return 'note-img'
        //     else if (this.newNote.type === "note-todos") return 'note-todos'

        // }
    },
    methods: {
        add() {
            this.$emit('add', this.newNote)
            const newNote = {
                id: '',
                type: "note-txt",
                info: {
                    txt: ''
                },
                style: {
                    backgroundColor: 'white'
                }
            }
            this.newNote = newNote
        },
        changeCmp(cmp) {
            this.newNote.type = cmp
            if (cmp === 'note-txt') this.isTxt = !this.isTxt
            else if (cmp === 'note-img') this.isImg = !this.isImg
            else if (cmp === 'note-video') this.isVideo = !this.isVideo
            else if (cmp === 'note-todos') this.isTodos = !this.isTodos
            console.log(this.isTxt, this.isTodos, this.isImg);
        }

    }
}