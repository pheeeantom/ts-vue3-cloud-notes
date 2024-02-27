<template>
    <div class="EditMenu">
        <v-btn variant="plain" @click="emitAddNode('TextNode', {})">Добавить текст</v-btn>
        <v-dialog width="500">
            <template v-slot:activator="{ props }">
                <v-btn variant="plain" v-bind="props" text="Добавить картинку"> </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Диалог">
                    <v-card-text>
                        Загрузите картинку:
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <form action='/upload' method="post" enctype=multipart/form-data>
                            <v-file-input name="file" label="File input"
                                @change="(e: Event) => changePicture((e.target as HTMLInputElement).files, isActive)">
                            </v-file-input>
                        </form>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
        <br />
        <v-btn variant="plain" @click="emitSaveSingleNote()">Сохранить заметку</v-btn>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Ref } from 'vue';
    import axios from 'axios';

    export default defineComponent({
        name: "EditMenu",
        methods: {
            emitAddNode(node: string, additional: object) {
                this.$emit('add-node', { node, additional });
            },
            emitSaveSingleNote() {
                this.$emit('save-single-note');
            },
            changePicture(files: FileList | null, isActive: Ref<boolean>) {
                //this.emitAddNode('PictureNode', { link: files });
                let formData = new FormData();
                setTimeout(() =>
                    {
                        console.log(files);
                        if (files) {
                            formData.append("file", files[0]);
                            axios.post('/upload', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(() => isActive.value = false);
                        }
                    }
                , 2000);
            }
        }
    });
</script>

<style scoped>
    .EditMenu {
        margin-bottom: 40px;
    }
</style>