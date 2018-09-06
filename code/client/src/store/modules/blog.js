import axios from '../../utils/fetch'
import { blogTypes } from './classify'

const blog = {
    state: {
        types: blogTypes,
        list: [],
        homeList: [],
        info: {},
        total:'',
        currType: '',
        pagesize: 5,
        typeList:[]
    },
    mutations: {
        BLOGLIST (state, res) {
            state.list = res.list;
            state.total= res.total;
        },
        BLOGINFO (state, res) {
            state.info = res.data;
        },
        TYPELIST(state,res){
            state.typeList=res;
        }
    },
    actions: {
        //查询文章类型数量
        getTypeList ({commit}, params) {
            return new Promise( (resolve, reject) => {
                axios.get('blog/typeList', params)
                    .then( res => {
                        res=JSON.parse(res.data);
                        commit('TYPELIST', res)
                        resolve(res)
                    }).catch( err => {
                    reject(err)
                })
            })
        },
        // 获取博客列表
        async getBlogList ({commit, state}, params) {
            
            params.pagesize = params.pagesize || state.pagesize 
            params.type = params.type === 'all' ? null:params.type 

            return new Promise( (resolve, reject) => {
                axios.get('blog/list', params).
                    then( res => {
                        resolve(res)
                        if (res.data.length <= 0 && params.pageindex > 1) return
                            commit('BLOGLIST', res.data)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        },

        // 获取博客详情
        getBlogInfo ({commit}, _id) {
            return new Promise( (resolve, reject) => {
                axios.get('blog/info', {_id}).
                    then( res => {
                        commit('BLOGINFO', res)
                        resolve(res)
                    }).catch( err => {
                        // console.log(err)
                        reject(err)
                    })
            })
        }
    }
}
export default blog