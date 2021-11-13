import homePage from './pages/home-page.cmp.js'
import gmailApp from './apps/gmail-app/gmail-pages/gmail-app.js'
import keepApp from './apps/keep-app/keep-pages/keep-app.js'
import bookApp from './apps/book-app/books-pages/book-app.js'
import gmailDetails from './apps/gmail-app/gmail-pages/gmail-details.js'


const routes = [
    {
      path: '/',
      component: homePage,
    },
    {
      path: '/keepApp:email?',
      component: keepApp,
    },
    {
      path: '/gmailApp',
      component: gmailApp,
    },
    {
          path: '/gmail/:mailId',
          component: gmailDetails
    },
    {
        path: '/bookApp',
        component: bookApp,
    }
]
  
export const router = new VueRouter({ routes })