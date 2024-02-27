<template>
    <v-textarea clearable label="Label" :model-value="content.text" @click:clear="checkRemoving" @update:modelValue="(newValue: string) => $emit('edit-text', {...content, text: newValue})"></v-textarea>
    <p>{{ content.text }}</p>
</template>

<script lang="ts">
    import { PropType } from 'vue';
    import { defineComponent } from 'vue';

    import { TextNodeType } from '@/types/TextNode';

    export default defineComponent({
        name: 'TextNode',
        props: {
            content: {
                type: Object as PropType<TextNodeType>,
                required: true
            }
        },
        methods: {
            checkRemoving() {
                this.$emit('self-remove', this.content.id);
            }
        },
    });
</script>

<style scoped>
    p {
        margin-bottom: 20px;
    }
</style>
<!-- 
    <textarea v-model="text" @keyup.delete="checkRemoving"></textarea>
    <br/>
-->
