<template>
      <div class="content">
        <el-row>
            <el-col :span="24">
                <el-form :inline="true" :model="model" class="demo-form-inline">
                    <el-form-item label="角色编号:">
                        <el-input size="medium" prefix-icon="el-icon-search" v-model="model.roleId" placeholder="请输入查询的角色编号" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item label="角色名称:">
                        <el-input size="medium" prefix-icon="el-icon-search" v-model="model.roleName" placeholder="请输入查询的角色名称" style="width:200px;"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-button size="medium"  @click="handleReset">重置</el-button>
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
                <el-table-column prop="roleId" label="角色编号"></el-table-column>
                <el-table-column prop="roleName" label="角色名称"></el-table-column>
                <el-table-column prop="description" label="描述"></el-table-column>
                <el-table-column prop="roleStatus" label="状态"></el-table-column>
                <el-table-column prop="createrName" label="创建人"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>    
                </el-table-column>                
            </el-table>
        </el-col>
    </el-row>
      </div>
</template>

<script>
import * as util from '@/utils/utils.js'
export default {
    data() {
        return {
            showAdd:false,
            model:{
                roleId:'',
                roleName:'',
            },
            modelReset:{},
            tableData:[],
        }
    },
    computed:{
        tableFilter() {
            let roleIdSearch = this.model.roleId
            let roleNameSearch = this.model.roleName
            if(!util.isNull(roleIdSearch) || !util.isNull(roleNameSearch)) {
                return this.tableData.filter(function(item) {
                    return  item.roleId.toLowerCase().indexOf(roleIdSearch.toLocaleLowerCase()) != -1 &&
                            item.roleName.toLowerCase().indexOf(roleNameSearch.toLocaleLowerCase()) != -1
                });
            }else{
                return this.tableData;
            }
        }
    },
    created() {
        this.modelReset = Object.assign({},this.model);
        this.handleGetTable();
    },
    methods:{
        // 删除
        handleDelete(index,row) {
            
        },
        // 编辑
        handleEdit (index,row) {},
        // 重置
        handleReset () {
            this.model = Object.assign({},this.modelReset);
        },
        // 获取数据
        handleGetTable() {
            this.$http.get('/api/role').then(response => {
                let {code,datas} = response.data;
                if(util.isCode(code)){
                    this.tableData = datas;
                }
            });
        }
    }

}
</script>

<style>
    .content{
        background-color: #fff;
        margin: 5px;
        padding: 10px;
    }

</style>
