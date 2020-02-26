<template>
    <div>
        <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title class="text-subtitle2">
                    <router-link to="/profile">
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar.png" />
                        </q-avatar> 
                    </router-link>
                Some cool girl
                </q-toolbar-title>

                <q-dialog v-model="carousel">
                    <q-carousel
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        swipeable
                        animated
                        v-model="slide"
                        control-color="primary"
                        navigation-icon="radio_button_unchecked"
                        navigation
                        padding
                        height="200px"
                        class="bg-white shadow-1 rounded-borders"
                    >
                        <q-carousel-slide :name="1" class="column no-wrap flex-center">
                        <q-icon name="view_list" color="primary" size="56px" />
                        
                        <div class="q-mt-md text-center">
                            Quickly access your projects in Recent projects section. Here you can delete projects and see the published page
                            by clicking eye button in a project.
                        </div>
                        </q-carousel-slide>
                        <q-carousel-slide :name="2" class="column no-wrap flex-center">
                        <q-icon name="edit" color="primary" size="56px" />
                        <div class="q-mt-md text-center">
                            Edit projects by clicking the pencil icon. In the editor change the components or the project name or 
                            add new component by dragging it into the highlighted sections in the middle. To add component to other
                            place in the page add a new cell at the top.
                        </div>
                        </q-carousel-slide>
                        <q-carousel-slide :name="3" class="column no-wrap flex-center">
                        <q-icon name="publish" color="primary" size="56px" />
                        <div class="q-mt-md text-center">
                            Publish the project by clicking the Publish button in the editor. You can see the published page afterwards. Either right after 
                            publication or in thr Recent projects section, by clicking the eye icon.
                        </div>
                        </q-carousel-slide>
                        <q-carousel-slide :name="4" class="column no-wrap flex-center">
                        <q-icon name="mobile_friendly" color="primary" size="56px" />
                        <div class="q-mt-md text-center">
                            To see how the page behaves on mobile, switch between mobile and standard version of the page by clicking the mobile icon
                            in the right top corner in the editor.
                        </div>
                        </q-carousel-slide>
                        <q-carousel-slide :name="5" class="column no-wrap flex-center">
                        <q-icon name="accessibility_new" color="primary" size="56px" />
                        <div class="q-mt-md text-center">
                            Create your web page easily and publish them in no time! Save time for the bigger moments!
                        </div>
                        </q-carousel-slide>
                    </q-carousel>
                </q-dialog>

                <q-btn flat round color="white" icon="help_outline" @click="carousel=true" />

                <q-btn-dropdown auto-close stretch flat icon="build" label="Settings">
                    <q-list bordered padding class="text-primary">
                        <q-item to="/profile">
                            <q-item-section avatar>
                                <q-icon name="perm_identity"/>
                            </q-item-section>
                            <q-item-section>Your profile</q-item-section>
                        </q-item>
                        <q-item to="/" exact>
                            <q-item-section avatar>
                                <q-icon name="power_settings_new"/>
                            </q-item-section>
                            <q-item-section>Log out</q-item-section>
                        </q-item>
                        
                    </q-list>
                </q-btn-dropdown>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    
        </q-layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      carousel: false,

      slide: 1,
    }
  }
}
</script>