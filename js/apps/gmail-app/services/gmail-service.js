
import {storageService} from '../../../services/async-storage-service.js'
import {utilService} from "../../../services/util-service.js"


const EMAILS_KEY ='emails'
_createEmails();


export const gmailService = {
    query,
    getEmailById,
    changeEmailToRead,
    sendEmail,
    removeEmail,
    getUnread,
    starEmail,
    unStarEmail,
    changeEmailToUnRead,
    trashEmail
}

function getUnread() {
    var emails = _createEmails() 
    var counter=0;
    for (var i=0; i<emails.length; i++) {
        if (!emails[i].isRead && emails[i].to === 'user@appsus.com') counter++
    }
    return counter
}


function sendEmail(email) {
    return query()
    .then(emails => {
        emails.push(email)
      return storageService.post(EMAILS_KEY, email)
    })
}


function removeEmail(emailId) {
    return storageService.remove(EMAILS_KEY,emailId);
}

function query() {
    return storageService.query(EMAILS_KEY)
}

function getEmailById(emailId) {
    return storageService.get(EMAILS_KEY,emailId)
}

function trashEmail(email) {
    email.isTrash = true
    return storageService.put(EMAILS_KEY, email)
}

function changeEmailToRead(email) {
        email.isRead = true;
        return storageService.put(EMAILS_KEY, email)
}

function changeEmailToUnRead(email) {
    email.isRead = false;
    return storageService.put(EMAILS_KEY, email)

}
function starEmail(email) {
    email.isStarred = true
    return storageService.put(EMAILS_KEY, email)
}

function unStarEmail(email) {
    email.isStarred = false
    return storageService.put(EMAILS_KEY, email)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = [        
            {
                id: 'e101',
                sender: 'Dwight',
                subject: 'Bears. Beets. Battlestar Galactica',
                body: '“Identity theft is not a joke, Jim! Millions of families suffer every year.” – Dwight Schrute',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636824908,
                to: 'user@appsus.com',
                from: 'dwight@schrute.com'
            },
            {
                id: 'e102',
                sender: 'Mahatma',
                subject: 'Hey there!',
                body: 'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636828186,
                to: 'momo@momo.com',
                from: 'user@appsus.com'
            },
            {
                id: 'e103',
                sender: 'Stanley',
                subject: 'If I don’t have some cake soon, I might die',
                body: 'Stanley just wants a piece of cake at the joint office birthday party. For heaven’s sake, the man even took an extra shot of insulin.',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 
                1636820986,
                to: 'user@appsus.com',
                from: 'stanley@hudson.com'
            },
            {
                id: 'e104',
                sender: 'Michael',
                subject: 'I’m not superstitious, but I am a little stitious',
                body: 'ze kreiv moozar, aval ze ma shabali. vemi shlo tov lo, yom tov lo',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636738186,
                to: 'user@appsus.com',
                from: 'micheal@scott.com'
            },
            {
                id: 'e105',
                sender: 'Pam',
                subject: 'And I feel god in the Chilis tonight',
                body: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636565386,
                to: 'user@appsus.com',
                from: 'pam@beesly.com'
            },
            {
                id: 'e106',
                sender: 'Jim',
                subject: 'I Miss Dwight. universe, you win',
                body: 'Okay. So far, our ideal party consists of: beer, fights to the death, cupcakes, blood pudding, blood, touch football, mating, charades, and yes, horse hunting',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 
                1636561786,
                to: 'user@appsus.com',
                from: 'Jim@helpert.com'
            }
            ,
            {
                id: 'e107',
                sender: 'Angela',
                subject: 'I dont have a headache, im just preparing',
                body: 'Angela is always prepared to be annoyed by the people around her, and she isn’t afraid to let them know about it. While Angles might be the worst at times, she luckily always makes us laugh ',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 
                1636478986,
                to: 'user@appsus.com',
                from: 'Angela@martin.com'
            }
            ,
            {
                id: 'e108',
                sender: 'Creed',
                subject: 'If my parents see this, Im toast',
                body: 'As the documentary the crew has been making about Dunder Mifflin prepares to air, Creed becomes worried when hes told that its going to air that night.',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636478986,
                to: 'user@appsus.com',
                from: 'Creed@bratton.com'
            }
            ,
            {
                id: 'e109',
                sender: 'Kevin',
                subject: 'No, its not Ashton Kutcher, its Kevin',
                body: 'But nevertheless, Kevin is still blissfully confident in his new look.',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt :1636475386,
                to: 'user@appsus.com',
                from: 'Kevin@malone.com'
            }
            ,
            {
                id: 'e110',
                sender: 'Andy',
                subject: 'Beer me that disc',
                body: 'When Jim and Andy go to the local high school to apologize for the obscene watermark that was put on some of Dunder Mifflin’s paper, Andy says beer me about basically anything he wants handed to him.',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636482586,
                to: 'user@appsus.com',
                from: 'Andy@bernard.com'
            }
            ,
            {
                id: 'e111',
                sender: 'Kelly',
                subject: 'My resolution was to get more attention',
                body: 'Whether she’s telling Ryan that she’s pregnant when she’s not or talking to Jim about the latest celebrity gossip, Kelly loves to be the center of it all.',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 
                1636493386,
                to: 'user@appsus.com',
                from: 'Kelly@kapoor.com'
            }
    
    
        ]

    }

    utilService.saveToStorage(EMAILS_KEY, emails)
    return emails
}
