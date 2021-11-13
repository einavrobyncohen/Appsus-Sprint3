
export default {
    template: `
    <header class="app-header">
        <div class="logo">
        <img @click="goToHome" class="logo-img" src="imgs/logo.png">
        </div>
            <nav class="main-nav-container">
                <router-link style="text-decoration: none; color: inherit" to="/">Home</router-link> 
                <router-link style="text-decoration: none; color: inherit;" to="/keepApp">MissKeep</router-link>
                <router-link style="text-decoration: none; color: inherit;" to="/gmailApp">MisterEmail</router-link>
                <router-link style="text-decoration: none; color: inherit;" to="/bookApp">MissBooks</router-link>

            </nav>
    </header>
    `,
    methods: {
        goToHome() {
            this.$router.push({ path: '/' })
        }
    }

}