//获取表格数据

export function getData(root, url, params) {
    root.service.get(url, { params: params || {} })
        .then((res) => {
            if (res.data.status === 200) {
                root.total = res.data.total;
                root.tableData = res.data.data;
                /* root.tableData.forEach((item) => {
                    item.sex === '1' ? (item.sex_txt = "男") : (item.sex_txt = "女");
                }); */
            }

        }).catch((err) => {
            throw err
        });
}


// 新增 / 修改
// import qs from 'qs';
// export function changeInfo(form,url,form) {
//     let data = qs.stringify(form)
//     this.service[method](url,data)
//         .then(res => {

//         })
// }


// 作业列表获取数据
export function getTableData(root , url , params ,arr){
    root.service.get(url , {params: params || {}})
        .then(res => {
            if(res.data.status === 200) {
                root.total = res.data.total;
                root.tableData = res.data.data;
                root.tableData.forEach(item => {
                    arr.forEach(aItem => {
                        item[aItem] ? item[aItem + '_txt'] = '是' : item[aItem + '_txt'] ='否'
                    })
                })
                root.loading = false
            }
        })
        .catch(err => {
            throw err
        })
}