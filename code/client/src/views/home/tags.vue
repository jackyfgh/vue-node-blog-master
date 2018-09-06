<template>
    <div class="tags-wrapper">
        <ul class="tags">
            <li v-for="tag in blogTypeList">
                    <router-link :to="'/blog/'+tag.name"><el-tag>{{tag.name}}({{tag.value}})</el-tag></router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {}
        },
        methods: {
        },
       async created () {
            let types={
                typeArr:['JavaScript','MongoDB','HTML','CSS','Vue','Webpack','Node','算法','工具','黑科技']
            }
            await this.$store.dispatch('getTypeList', {types:JSON.stringify(types)})
        },
        computed: {
            ...mapGetters([
                'blogTypes',
                'blogTypeList'
            ])
        }
    }
</script>
<style lang="less" scoped>
    .tags-wrapper {
        width: 100%;
        margin: 20px auto;
    }
        .tags{
            margin: 0 auto;
        }
    li {
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
        padding: 10px 10px;
    }
</style>