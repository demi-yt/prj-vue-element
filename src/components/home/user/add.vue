<template>
    <el-dialog title="新增" :visible="visibleShow" width="550px" :close-on-click-modal="false" :before-close="handleClose">
        <el-form :model="model" :rules="rules" ref="userRef" label-width="80px" label-position="left">
            <el-form-item label="员工编号" prop="userNO">
                <el-input v-model="model.userNO" placeholder="请输入员工编号"></el-input>
            </el-form-item>
            <el-form-item label="员工姓名" prop="userName">
                <el-input v-model="model.userName" placeholder="请输入员工姓名"></el-input>
            </el-form-item>
            <el-form-item label="部门" prop="depUser">
                <el-input v-model="model.depUser" placeholder="请输入部门"></el-input>
            </el-form-item>
            <el-form-item label="岗位" prop="postUser">
                <el-input v-model="model.postUser" placeholder="请输入岗位"></el-input>
            </el-form-item>
            <el-form-item label="角色" prop="roles">
                <el-select v-model="model.roles" placeholder="请选择角色" multiple collapse-tags style="width:430px">
                   <el-option
                        v-for="item in roleArr"
                        :key="item.roleId"
                        :label="item.roleName"
                        :value="item.roleId">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleSave">确 定</el-button>
        </span>
    </el-dialog>    
</template>

<script>
export default {
    props:{
        visible:{
            type:Boolean,
            default:false
        },
        roleArr:{
            type:Array,
            default:[]
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
                roles:[],
            },
            rules:{
                userNO: [
                    { required: true, message: '请输入员工编号', trigger: 'blur' },
                ],
                userName: [
                    { required: true, message: '请输入员工姓名', trigger: 'blur' },
                ],
                depUser: [
                    { required: true, message: '请输入部门', trigger: 'blur' },
                ],
                postUser: [
                    { required: true, message: '请输入岗位', trigger: 'blur' },
                ],
                roles: [
                    { required: true, message: '请选择角色', trigger: 'change' },
                ],
            }
        }
    },
    watch:{
        visible(val){
            this.visibleShow = val;
        }
    },
    methods:{
        handleClose() {
            this.visibleShow = false;
            this.$emit('cancel');
        },
        handleSave() {
            this.$refs['userRef'].validate((valid) => {
                if (valid) {
                    this.$emit('seccuss',this.model);
                } else {
                    return false;
                }
            });
        }
    }
}
</script>

<style>

</style>
