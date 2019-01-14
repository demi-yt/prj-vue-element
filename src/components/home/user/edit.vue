<template>
    <el-dialog title="新增" :visible="visibleShow" width="550px" :close-on-click-modal="false" :before-close="handleClose">
        <el-form :model="model" ref="userRef" label-width="80px" label-position="left">
            <el-form-item label="员工编号">
                <el-input v-model="model.userNO" disabled></el-input>
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
        },
        model:{
            type:Object,
            default:function() {
                return {}
            }
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
    },
    methods:{
        handleClose() {
            this.visibleShow = false;
            this.$emit('cancel');
        },
        handleSave() {
            this.$emit('seccuss',this.model)
        }
    }
}
</script>

<style>

</style>
