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