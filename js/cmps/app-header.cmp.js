
export default {
    template: `
    <header class="app-header">
        <div class="logo">
            <h3>Appsus</h3>
        </div>
        <nav @click="isOpenNav = !isOpenNav" class="main-nav">😍
            <nav v-if="isOpenNav" class="main-nav-container">
                <!-- //TODO: USE FAVICON// -->
                <router-link to="/">Home</router-link> 
                <router-link to="/about">About</router-link> 
                <router-link to="/keepApp">MissKeep</router-link>
                <router-link to="/gmailApp">MisterEmail</router-link>
                <router-link to="/bookApp">MissBooks</router-link>

            </nav>
        </nav>


    </header>
    `,
    data() {
        return {
            isOpenNav: false
        }
    }

}