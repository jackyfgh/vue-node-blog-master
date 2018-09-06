import blogModel from '../../models/blog'
import path from 'path'

module.exports = {
    async typeList(ctx,next){
        console.log('----------------获取博客分类数量列表client_demo_api/blog/typeList------------');
        let types=[];
        types=JSON.parse(ctx.request.query.types).typeArr;
        try {
            let dataArry=[];
            for(let i=0;i<types.length;i++){
                let type=types[i].toString();
                let data=await ctx.findTypeCount(blogModel,{"type":type},null,null);
                let jsonArr={
                    name:type,
                    value:data
                }
                dataArry.push(jsonArr);
            }
            return ctx.send(JSON.stringify(dataArry));
        }
        catch (e){
            console.log(e)
            return ctx.sendError(e)
        }
    },
    async list(ctx, next) {
        console.log('----------------获取博客列表 client_demo_api/blog/list-----------------------');
        let { type = null, pageindex = 1, pagesize = 5} = ctx.request.query;
        console.log('type:'+type+','+'pageindex:'+pageindex +','+ 'pagesize:'+pagesize)
        try {
            
            let data = await ctx.findPage(blogModel, {type, isVisible: true, source: 1}, null, {limit: pagesize*1, skip: (pageindex-1)*pagesize, sort: {level: -1, createTime: -1}});
            return ctx.send(data)
        }catch (e){
            console.log(e)
            return ctx.sendError(e)
        }

    },
    async info(ctx, next) {
        console.log('----------------获取博客信息 client_demo_api/blog/info-----------------------');
        let _id = ctx.request.query._id;
        try {
            let data = await ctx.findOne(blogModel, { _id });
            return ctx.send(data);
        } catch (e) {
            return ctx.sendError(e)
        }
    }
}