<template>
    <div class="content">
        <el-row>
        <el-col :span="24">
            <el-form :inline="true" :model="model" class="demo-form-inline">
                <el-form-item label="员工名称:">
                    <el-input size="medium" prefix-icon="el-icon-search" v-model="model.username" placeholder="请输入查询的员工名称" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item class="form-operation">
                    <el-button size="medium" type="primary" @click="showAdd=true">新增</el-button>
                    <el-button size="medium" type="primary" @click="">下载</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-table 
                :data="tableFilter"
                border
                style="width: 100%">
                <el-table-column type="selection"></el-table-column>
                <el-table-column type="index" label="序号" width="80"></el-table-column>
                <el-table-column prop="userNO" label="员工编号"></el-table-column>
                <el-table-column prop="userName" label="员工名称"></el-table-column>
                <el-table-column prop="depUser" label="部门"></el-table-column>
                <el-table-column prop="postUser" label="岗位"></el-table-column>
                <el-table-column prop="roles" label="角色"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>    
                </el-table-column>                
            </el-table>
        </el-col>
    </el-row>
    <!-- 新增 -->
    <div v-if="showAdd">
         <a-d-d :visible="showAdd" @cancel="showAdd=false"></a-d-d>
    </div>   
    </div>    
</template>

<script>
import ADD from './add'
import * as util from '@/utils/utils.js'
export default {
    components:{
        ADD
    },
    data() {
        return {
            showAdd:false,
            model:{
                username:'',
            },
            tableData:[],
        }
    },
    computed:{
        tableFilter() {
            let userNameSearch = this.model.username
            if(!this.isEmpty(userNameSearch)) {
                return this.tableData.filter(data => {
                    return Object.keys(data).some(key => {
                        return String(data[key]).toLowerCase().indexOf(userNameSearch) > -1;
                    });
                });
            }else{
                return this.tableData;
            }
        }
    },
    methods:{
        isEmpty(obj){
            return typeof obj === 'undefined' || obj === null || obj === ''
        },
        handleEdit(index,row) {
            
        },
        handleDelete(index,row) {
            this.$confirm('此操作将永久删除该员工，是否继续？','提示',{
                confirmButtonText:'确定',
                cancelButtonText :'取消',
                type:'warning'
            }).then(() => {
                this.tableData.splice(index,1);
                this.$message({
                    type:"success",
                    message:"删除成功！"
                });
            }).catch(() => {
                this.$message({
                    type:"info",
                    message:"已取消删除！"
                });
            });
        },
        handleGetTableData() {
            this.$http.get('/api/user').then(response => {
                let {code,datas} = response.data;
                if(util.isCode(code)) {
                    this.tableData =  datas;
                }
            });
        }
    },
    created() {
        this.handleGetTableData();
    },
}
</script>

<style>
    .content{
        background-color: #fff;
        margin: 5px;
        padding: 10px;
    }
    .form-operation{
        float: right;
        margin-right: 10px;
    }

</style>
