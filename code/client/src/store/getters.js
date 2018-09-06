const getters = {
    // app
    screen_width: state => state.app.screen_width,
    pc_width: state => state.app.pc_width,
    pc_bol: state => state.app.pc_bol,

    // blog
    blogTypes: state => state.blog.types,
    blogList: state => state.blog.list,
    blogTotal:state => state.blog.total,
    blogInfo: state => state.blog.info,
    blogLoadingMore: state => state.blog.loadingMore,
    blogLoadingBol: state => state.blog.loadingBol,
    blogTypeList:state=> state.blog.typeList,


}
export default getters