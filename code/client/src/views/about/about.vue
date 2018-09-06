<template>
    <div class="aboutWrap">
        <h2 class="tittle">关于</h2>
        <div class="content">
            <p class="statement">声明：本站所有文章均为本人原创，仅代表个人思想，与其他任何人或组织无关。</p>
            <h3>博客简介</h3>
            <p>本博客会不定期更新文章包括前端，nodejs，数据库等相关技术文章当然也会有些杂谈</p>
            <p>本站为个人网站仅供学习所用</p>
            <h3>个人介绍</h3>
            <p>博主的网名叫饭饭而谈，毕业于郑州轻工业大学物联网工程系。现主要进行中移在线研发总部从事前端相关开发</p>
            <br/>
            <p>技能树</p>
            <ul class="tree">
                <li><p>vue全家桶</p></li>
                <li><p>avalon(小型框架)</p></li>
                <li><p>css预处理</p></li>
                <li><p>Nodejs略懂略懂</p></li>
            </ul>
            <br/>
            <p>作为一个码农希望自己能够成长为大牛同时有一个良好的身体</p>
            <p>喜欢看漫画，偶尔玩些大型单机，喜欢广交好友</p>
            <p>联系邮箱：jackyfgh@126.com</p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Split from '../../components/split/split.vue'
export default {
    components:{
        Split
    }
}
</script>

<style lang="less" scoped>
    .aboutWrap{
        padding-left: 40px;
        padding-top: 20px;
    }
        .content h3{
            font-size: 30px;
            height: 60px;
            line-height: 60px;
        }
        .content p{
            color: #666;
            font-size: 20px;
            height: 30px;
            line-height: 30px;
        }
        .content .tree{
            padding-left: 40px;
        }
    .tittle{
        width: 100%;
        font-size: 46px;
        height: 80px;
        line-height: 80px;
        text-align: left;
    }
</style>