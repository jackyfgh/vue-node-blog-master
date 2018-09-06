<template>
    <div id="app">
        <div class="navWrap">
            <div class="bgImg">
                <h3>Jackyfgh的小站</h3>
                <ul class="tabWrap">
                    <li class="tabItem">
                        <i class="icon iconfont icon-wenzhang-copy"></i><router-link to="/" >文章</router-link>
                    </li>
                    <li class="tabItem">
                        <i class="icon iconfont icon-guanyu"></i><router-link to="/about" >关于</router-link>
                    </li>
                    <li class="tabItem">
                        <i class="icon iconfont icon-lianjie"></i><a href="javascript:;">链接</a>
                    </li>
                    <li class="tabItem">
                        <i class="icon iconfont icon-GitHub"></i><a href="javascript:;">开源</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name:'app'
    }
</script>
<style lang="less" scoped>
    .iconfont{
        font-size: 20px;
        margin-right: 8px;
        color: #ffffff;
        height: 30px;
        line-height: 30px;
    }
    a:hover, a:visited, a:link, a:active {
        color: #ffffff;
        font-size: 20px;
    }
    .navWrap{
        float: left;
        width: 20%;
        height: 100%;
    }
     .navWrap{
        height: 100%;
        background-image: url("images/sidebar.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 0;
        transition: background-position 2s ease-in-out;
    }
   .navWrap:hover{
        background-position: center 0;
    }
   .navWrap .bgImg{
       margin-top: 200px;
   }
    .tabWrap .tabItem
    {
        width: 100%;
        height: 30px;
        text-align: center;
        margin-bottom: 6px;
        line-height: 30px;
    }
   .tabWrap .tab-Item a{
       font-size: 20px;
       vertical-align: middle;

   }
   .bgImg h3{
       color: #fff;
       font-size: 26px;
       height: 50px;
       line-height: 50px;
       width: 100%;
       text-align: center;
   }
    .content{
        float: left;
        width: 80%;
        height: 100%;
        overflow-y:scroll;
    }
</style>