<template>
    <div class="SingleNote">
        <EditMenu @add-node="handleAddNode" @save-single-note="handleSaveSingleNote" />
        <div class="SingleNote-contents">
            <component v-for="node in nodes"
                :is="node.name" :key="node.id" :content="node" @self-remove="handleSelfRemove"
                @edit-text="handleEditText" />
        </div>
    </div>
</template>

<script lang="ts">
    import EditMenu from './EditMenu.vue';
    import TextNode from './TextNode.vue';
    import PictureNode from './PictureNode.vue';
    import { defineComponent } from 'vue';

    import { TextNodeType } from '@/types/TextNode';
    import { PictureNodeType } from '@/types/PictureNode';

    export default defineComponent({
        name: "SingleNote",
        components: {
            EditMenu,
            TextNode,
            PictureNode
        },
        data() {
            return {
                nodes: [
                    {
                        name: "TextNode",
                        id: 1,
                        text: ''
                    }
                ] as (TextNodeType | PictureNodeType)[],
                idNodesSequenceLast: 1
            }
        },
        methods: {
            handleAddNode({node, additional}: {node: string, additional: {text: string} | {link: File[]}}) {
                this.nodes.push({ ...additional, name: node, id: ++this.idNodesSequenceLast });
            },
            handleSaveSingleNote() {

            },
            handleEditText(editedNode: TextNodeType) {
                this.nodes.splice(this.nodes.findIndex(node => node.id === editedNode.id), 1, editedNode);
            },
            handleSelfRemove(id: number) {
                //this.nodes.splice(this.nodes.lastIndexOf(this.nodes.find((node) => node.id === id)), 1);
                this.nodes.forEach((node, index) => node.id === id && this.nodes.splice(index, 1));
                console.log(this.nodes);
                alert(id);
            }
        }
    });
</script>

<style scoped>
    .SingleNote-contents {
        width: 30%;
        margin: 0 auto;
    }
</style>
