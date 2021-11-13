import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
export const keepService = {
    query,
    save,
    remove,
    update,
    getById,
    getEmptyNote,
    getColorsOption
};

const gNotes = [{
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        isPinned: true,
        info: {
            txt: "🙌🏻 למצוא את השביל המואר 🙌🏻"
        },
        style: {
            backgroundColor: '#f28b82'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_460,w_690/616587",
            title: "😎 מחכה לך כאן "
        },
        style: {
            backgroundColor: '#d7aefb'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        isPinned: true,
        info: {
            txt: 'Sprint is over! 🥳 Now go take a shower, you smell 💩🤨'
        },
        style: {
            backgroundColor: '#ccff90'
        }
    },


    // {
    //     id: utilService.makeId(),
    //     type: "note-video",
    //     isPinned: false,
    //     info: {
    //         url: '   https://www.youtube.com/embed/Uw4zU-fHpx0',
    //         title: "Break Time"
    //     },
    //     style: {
    //         backgroundColor: 'lightgreen'
    //     }
    // },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "תזכורת- החיים הם כמו מנת פלאפל. לא משנה איך תאכל, תמיד תנזל לך טחינה מהצד"
        },
        style: {
            backgroundColor: '#fff475'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://img.mako.co.il/2011/12/17/cake_c.jpg",
            title: "Winter Is Coming"
        },
        style: {
            backgroundColor: '#fdcfe8'
        }
    },

    {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
            label: "What to do today:",
            todos: [
                { txt: 'Wake Up' },
                { txt: 'Go Back To Sleep' },

            ]
        },
        style: {
            backgroundColor: '#a7ffeb'
        }
    }
];

_createNotes();

function query() {
    return storageService.query(NOTES_KEY);
}

function getColorsOption() {
    return [
        { color: '#f28b82' },
        { color: '#fbbc04' },
        { color: '#fff475' },
        { color: '#ccff90' },
        { color: '#a7ffeb' },
        { color: '#cbf0f8' },
        { color: '#aecbfa' },
        { color: '#d7aefb' },
        { color: '#fdcfe8' },
        { color: '#e6c9a8' },
        { color: '#e8eaed' },
        { color: '#ffffff' },
    ]
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note);
    else return storageService.pushNote(NOTES_KEY, note);
}

function getById(noteId) {
    return storageService.get(NOTES_KEY, noteId);
}

function update(note) {
    return storageService.put(NOTES_KEY, note)
}

function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: "note-txt",
        info: {
            txt: ''
        },
        style: {
            backgroundColor: ''
        }
    };
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = gNotes
        utilService.saveToStorage(NOTES_KEY, notes)
    }
    return notes;
}