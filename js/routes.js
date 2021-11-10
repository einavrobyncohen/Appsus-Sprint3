import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import gmailApp from './pages/gmail-pages/gmail-app.js'
import keepApp from './pages/keep-pages/keep-app.js'
import bookApp from './pages/books-pages/book-app.js'



const routes = [
    {
      path: '/',
      component: homePage,
    },
    {
      path: '/about',
      component: aboutPage,
    },
    {
      path: '/keepApp',
      component: keepApp,
    },
    {
      path: '/gmailApp',
      component: gmailApp,
    },
    {
        path: '/bookApp',
        component: bookApp,
    }
]
  
export const router = new VueRouter({ routes })