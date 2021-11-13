
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
                sender: 'Muki',
                subject: 'This is just a random subject',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam!',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636623867,
                to: 'user@appsus.com',
                from: 'sheker@mimi.com'
            },
            {
                id: 'e102',
                sender: 'Mahatma',
                subject: 'Miss you!',
                body: 'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636382735,
                to: 'momo@momo.com',
                from: 'user@appsus.com'
            },
            {
                id: 'e103',
                sender: 'Shuki',
                subject: 'Ani Aohevet Et Shlomo Artzi',
                body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636299935,
                to: 'user@appsus.com',
                from: 'mize@ani.com'
            },
            {
                id: 'e104',
                sender: 'Luki',
                subject: 'Ba Li Pizza Zeitim!',
                body: 'ze kreiv moozar, aval ze ma shabali. vemi shlo tov lo, yom tov lo',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1633707935,
                to: 'user@appsus.com',
                from: 'mize@ani.com'
            },
            {
                id: 'e105',
                sender: 'Luki',
                subject: 'Contrary to popular belief..',
                body: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ',
                isRead: false,
                isStarred: false,
                isTrash: false,
                sentAt : 1636209935,
                to: 'user@appsus.com',
                from: 'mize@ani.com'
            }
    
        ]

    }

    utilService.saveToStorage(EMAILS_KEY, emails)
    return emails
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

// const criteria = {
//     status: 'inbox/sent/trash/draft',
//     txt: 'puki', // no need to support complex text search
//     isRead: true, // (optional property, if missing: show all)
//     isStared: true, // (optional property, if missing: show all)
//     lables: ['important', 'romantic'] // has any of the labels
// }