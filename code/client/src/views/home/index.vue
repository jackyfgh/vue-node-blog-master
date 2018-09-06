<template>
    <div class="home-wrapper cf">
        <h2 class="tittle">文章</h2>
        <div :class="{'tags-box': pc_bol}">
            <TagsComponent></TagsComponent>
        </div>
        <div :class="{'view-box': pc_bol}">
            <router-view>
                <BlogComponent></BlogComponent>
            </router-view>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import BlogComponent from './blog.vue'
    import TagsComponent from './tags.vue'
    import Split from '../../components/split/split.vue'
    export default {
        data () {
            return {
                winH: document.documentElement.clientHeight || document.body.clientHeight
            }
        },
        components: {
            BlogComponent,
            TagsComponent,
            Split
        },
        mounted () {
            window.addEventListener('scroll', () => {
                let distance = document.documentElement.scrollTop || document.body.scrollTop,
                    scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
                
                if (distance+this.winH >= scrollH) {
                    if (this.blogLoadingBol) {
                        console.log(111)
                        // this.pageindex ++;
                        // this.$store.dispatch('getBlogList', {
                        //     type: this.$route.params.classify,
                        //     pageindex: this.pageindex
                        // })
                    }
                }
            })
        },
        computed: {
            ...mapGetters(['pc_bol'])
        }
    }
</script>
<style lang="less" scoped>
    .home-wrapper
    {
        padding-left: 40px;
    }
    .tittle{
        width: 100%;
        font-size: 46px;
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
    .tags-box {
        width: 100%;
    }
    .view-box {
        width: 100%;
    }
</style>