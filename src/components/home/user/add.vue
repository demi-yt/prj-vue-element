<template>
    <el-dialog title="新增" :visible="visibleShow" width="550px">
        <el-form :model="model" :rules="rules" ref="userRef" label-width="80px" label-position="left">
            <el-form-item label="员工编号">
                <el-input v-model="model.userNO"></el-input>
            </el-form-item>
            <el-form-item label="员工姓名">
                <el-input v-model="model.userName"></el-input>
            </el-form-item>
            <el-form-item label="部门">
                <el-input v-model="model.depUser"></el-input>
            </el-form-item>
            <el-form-item label="岗位">
                <el-input v-model="model.postUser"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-input v-model="model.roles"></el-input>
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
        }
    },
    data() {
        return {
            visibleShow:this.visible,
            model:{
                userNO:'',
                userName:'',
                depUser:'',
                postUser:'',
                roles:'',
            },
            rules:{

            }
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
