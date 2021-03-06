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
            txt: 'Sprint is over! 馃コ Now go take a shower, you smell like 馃挬'
        },
        style: {
            backgroundColor: '#f28b82'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        isPinned: true,
        info: {
            txt: "馃檶馃徎 诇诪爪讜讗 讗转 讛砖讘讬诇 讛诪讜讗专 馃檶馃徎"
        },
        style: {
            backgroundColor: '#fbbc04'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_460,w_690/616587",
            title: "馃槑 诪讞讻讛 诇讱 讻讗谉 "
        },
        style: {
            backgroundColor: '#fff475'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        isPinned: true,
        info: {
            txt: 'Until when caSep 21?! 馃槴'
        },
        style: {
            backgroundColor: '#ccff90'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "转讝讻讜专转- 讛讞讬讬诐 讛诐 讻诪讜 诪谞转 驻诇讗驻诇. 诇讗 诪砖谞讛 讗讬讱 转讗讻诇, 转诪讬讚 转谞讝诇 诇讱 讟讞讬谞讛 诪讛爪讚"
        },
        style: {
            backgroundColor: '#a7ffeb'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyc9AbeKBpo0iCFZJ41TndaO0hZ68SuzuCQ&usqp=CAU",
            title: "I am beautiful, no matter what they say"
        },
        style: {
            backgroundColor: '#cbf0f8'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        info: {
            label: "How to survive this week:",
            todos: [
                { txt: 'Breathe' },
                { txt: 'Breathe more' },

            ]
        },
        style: {
            backgroundColor: '#aecbfa'
        }
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/asos-name-meaning-1502458810.jpg",
            title: "Black  friday is coming!!"
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
            txt: "Yup, I totally deserve pizza and cake for breakfest 馃巶馃崟"
        },
        style: {
            backgroundColor: '#fdcfe8'
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
        type: "note-img",
        isPinned: false,
        info: {
            url: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/02/25/Pictures/_056331ba-57bd-11ea-8884-f7c338dc7f56.jpg",
            title: "Happiness is only real when shared"
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
            url: "https://img.mako.co.il/2011/12/17/cake_c.jpg",
            title: "讬砖专 诇转讞转"
        },
        style: {
            backgroundColor: '#a7ffeb'
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
            backgroundColor: '#fff475'
        }
    },
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