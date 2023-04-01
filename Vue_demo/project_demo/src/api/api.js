import service from '../service.js';
import qs from 'qs';

// 登录接口
export function login(data){
    console.log("请求发送中！！！");
    return service({
        method:'post',
        url:'/login',
        data
    })
}

// 学生列表查询
export function students(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}

// 学生列表删除
export function studentDel(id){
    return service({
        method: 'delete',
        url: `/students/${id}`,
    })
}


// 信息列表 新增接口
export function info(data) {
    data =qs.stringify(data)
    // let obj = {method: typeof}
    return service({
        method:"post",
        url: '/info',
        data
    })
}

// 信息列表 修改信息接口
export function updateInfo(data) {
    data =qs.stringify(data)
    // let obj = {method: typeof}
    return service({
        method:"put",
        url: '/info',
        data
    })
}

// 信息列表 查询接口
export function getInfo() {
    // let obj = {method: typeof}
    return service({
        method:"get",
        url: '/info',
    })
}

// 信息列表 --》删除
export function deleInfo(id) {
    return service({
        method:"delete",
        url: `/info/${id}`
    })
}

// 数据概览
export function dataview() {
    return service({
        method: 'get',
        url: '/dataview'
    })
}

// 旅游地图接口
export function travel() {
    return service({
        method:"get",
        url: '/travel'
    })
}