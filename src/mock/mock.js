import Mock from 'mockjs'

export default {
    mockData () {
        Mock.mock('/api/user',{
            code:'0000',
            data:[
                {empNo:'emp001',empName:'admin',password:'123456',depName:'总经办',postName:'总经理',roleIds:['3001','3002']},
                {empNo:'emp002',empName:'test1',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp003',empName:'test2',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp004',empName:'test3',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp005',empName:'test4',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp006',empName:'test5',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp007',empName:'test6',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp008',empName:'test7',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp009',empName:'test8',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},
                {empNo:'emp010',empName:'test9',password:'123456',depName:'技术部',postName:'php',roleIds:['3001','3002']},                
            ]
        });
    }
}