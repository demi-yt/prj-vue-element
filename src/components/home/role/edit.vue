<template>
    <el-dialog title="编辑" :visible="visibleShow" width="550px"  :close-on-click-modal="false" :before-close="handleClose">
        <el-form :model="model" ref="roleRef" label-width="80px" label-position="left">
            <el-form-item label="角色编号">
                <el-input v-model="model.roleId" disabled></el-input>
            </el-form-item>
            <el-form-item label="角色名称">
                <el-input v-model="model.roleName" clearable></el-input>
            </el-form-item>
             <el-form-item label="状态">
                <el-select v-model="model.roleStatus" placeholder="请选择" style="width:430px">
                    <el-option
                    v-for="item in status"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="权限菜单">
                <div class="div-tree">
                    <el-tree
                        ref="treeRef"
                        :data="treeArr"
                        show-checkbox
                        default-expand-all
                        node-key="id"
                        highlight-current
                        :props="defaultProps"
                        :default-checked-keys="model.operationPermissions"
                        >
                    </el-tree>
                </div>               
            </el-form-item> 
            <el-form-item label="备注">
                <el-input v-model="model.description" clearable></el-input>
            </el-form-item>           
            <el-form-item label="创建人">
                <el-input v-model="model.createrName" disabled></el-input>
            </el-form-item>
             <el-form-item label="创建时间">
                <el-input v-model="model.createTime" disabled></el-input>
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
        model:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {
            visibleShow:this.visible,
            status:[
                {value:'true',label:'启用'},{value:'false',label:'禁用'}
            ],
            treeArr: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                    {
                        id: 4,
                        label: '二级 1-1',
                        children: [
                        {
                            id: 9,
                            label: '三级 1-1-1'
                        },
                        {
                            id: 10,
                            label: '三级 1-1-2'
                        }
                        ]
                    }
                    ]
                },
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                    {
                        id: 5,
                        label: '二级 2-1'
                    },
                    {
                        id: 6,
                        label: '二级 2-2'
                    }
                    ]
                },
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                    {
                        id: 7,
                        label: '二级 3-1'
                    },
                    {
                        id: 8,
                        label: '二级 3-2'
                    }
                    ]
                },
                {
                    id: 11,
                    label: '一级 4',
                    children: [
                    {
                        id: 12,
                        label: '二级 4-1'
                    },
                    {
                        id: 13,
                        label: '二级 4-2'
                    }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
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
            let treeList = this.$refs.treeRef.getCheckedNodes();
            let treeIds = []
            if(Array.isArray(treeList) && treeList.length > 0) {
                treeList.forEach(item => {
                    let {id,label} = item;
                    treeIds.push(id)                    
                });
            }
            this.model.operationPermissions = treeIds
            this.$emit('seccuss',this.model)
        },
        recursionGetData(data) {
            if(Array.isArray(data) && data.length > 0) {
                data.forEach(item => {
                    let {id,children} = item
                    item.disabled = true;
                    if(Array.isArray(children) && children.length > 0) {
                        this.recursionGetData(children)
                    }
                })
            }
            return data;
        }
    }
}
</script>

<style lang="less" scoped>
    .div-tree{
        height: 250px;
        padding: 3px;
        border: 1px solid #dcdfe6;
        overflow:auto
    }
</style>

