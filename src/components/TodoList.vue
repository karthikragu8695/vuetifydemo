<template>
    <section>
        <v-container>
            <v-card>
                <v-toolbar color="cyan-lighten-1">
                    <v-btn variant="text" icon="mdi-menu"></v-btn>
                    <v-toolbar-title>Todo List</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" icon="mdi-magnify"></v-btn>
                </v-toolbar>
            <v-card class="mt-10 h-[400px]">
                <v-list-item value="notifications">
                        <template v-slot:prepend="{ isActive }">
                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                    </v-list-item-action>
                        </template>
                <v-list-item-title>Notifications</v-list-item-title>
                    <v-list-item-subtitle>
                    Notify me about updates to apps or games that I downloaded
                    </v-list-item-subtitle>
                </v-list-item>
            </v-card>
            <v-card class="text-right mr-10 ">
                <v-btn :loading="loading" class="flex-grow-1 w-[100px]"  height="48" variant="tonal" @click="load">Add</v-btn>
            </v-card>
        </v-card>
        </v-container>
    </section>
</template>