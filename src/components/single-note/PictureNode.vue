<template>
    <div class="PictureWrapper">
        <v-img
            aspect-ratio="16/9"
            cover
        ></v-img>
        <button @click="checkRemoving">[Удалить картинку сверху]</button>
    </div>
</template>

<script lang="ts">
    import { PropType } from 'vue';
    import { defineComponent } from 'vue'

    import { PictureNodeType } from '@/types/PictureNode';

    export default defineComponent({
        name: 'PictureNode',
        props: {
            content: {
                type: Object as PropType<PictureNodeType>,
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
    .PictureWrapper {
        margin: 20px 0;
    }
</style>