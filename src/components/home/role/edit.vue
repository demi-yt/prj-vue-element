<template>
    <el-dialog title="编辑" :visible="visibleShow" width="550px">
        <el-form :model="model" ref="roleRef" label-width="80px" label-position="left">
            <el-form-item label="角色编号">
                <el-input v-model="model.roleId"></el-input>
            </el-form-item>
            <el-form-item label="角色名称">
                <el-input v-model="model.roleName"></el-input>
            </el-form-item>
             <el-form-item label="状态">
                <el-input v-model="model.roleStatus"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="model.description"></el-input>
            </el-form-item>           
            <el-form-item label="创建人">
                <el-input v-model="model.createrName"></el-input>
            </el-form-item>
             <el-form-item label="创建时间">
                <el-input v-model="model.createTime"></el-input>
            </el-form-item>
        </el-form>
    </el-dialog>    
</template>

<script>
export default {
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        model:{
            type:Object,
            default:{}
        }
    },
    data() {
        return {
            visibleShow:this.visible,
        }
    },
    watch:{
        visible(val){
            this.visibleShow = val;
        }
    }
}
</script>

<style>

</style>
