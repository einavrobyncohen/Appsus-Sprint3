
import {storageService} from '../../../services/async-storage-service.js'
import {utilService} from "../../../services/util-service.js"


const EMAILS_KEY ='emails'
_createEmails();


export const gmailService = {
    query,
    getEmailById,
    changeEmailToRead,
    getUnreadEmails,
    sendEmail,
    removeEmail
}


function sendEmail(email) {
    console.log(email)
    return query()
    .then(emails => {
        emails.push(email)
      return storageService.post(EMAILS_KEY, email)
    })
}

function getUnreadEmails() {
   const lala= query().then(Promise.resolve(emails))
   return lala
   
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

function changeEmailToRead(email) {
        email.isRead = true;
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
                body: 'Would love to catch up sometimes, its been a while!',
                isRead: false,
                sentAt : 1636623867,
                to: 'user@appsus.com',
                from: 'sheker@mimi.com'
            },
            {
                id: 'e102',
                sender: 'Mahatma Appsus',
                subject: 'Miss you!',
                body: 'How are you? im so hungry what can i do im always eating',
                isRead: false,
                sentAt : 1636382735,
                to: 'momo@momo.com',
                from: 'user@appsus.com'
            },
            {
                id: 'e103',
                sender: 'Shuki',
                subject: 'Ani Aohevet Et Shlomo Artzi',
                body: 'yesh li isha zot haima shlchaaaaaaaaaaaaa lalalalaa',
                isRead: false,
                sentAt : 1636299935,
                to: 'user@appsus.com',
                from: 'mize@ani.com'
            },
            {
                id: 'e104',
                sender: 'Luki',
                subject: 'BA LI PIZZA ZEITIM',
                body: 'IM LECHEM SHUM, HARBEEEE GVINA IGLIDA',
                isRead: false,
                sentAt : 1633707935,
                to: 'user@appsus.com',
                from: 'mize@ani.com'
            },
            {
                id: 'e105',
                sender: 'Luki',
                subject: 'BA LI PIZZA ZEITIM',
                body: 'IM LECHEM SHUM, HARBEEEE GVINA IGLIDA',
                isRead: false,
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

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}