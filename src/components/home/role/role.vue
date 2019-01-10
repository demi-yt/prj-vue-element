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
                    <el-form-item class="form-operation">
                        <el-button size="medium" type="primary" @click="showAdd=true">新增</el-button>
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
      </div>
</template>

<script>
export default {
    data() {
        return {
            showAdd:false,
            tableFilter:[],
            model:{
                roleId:'',
                roleName:'',
            }
        }
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
