<template>
    <el-dialog title="aaa" :visible="visible">
        <el-form :model="model" :rules="rules" ref="userRef">
            <el-form-item :label="员工编号">
                <el-input></el-input>
            </el-form-item>
        </el-form>
    </el-dialog>
    
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
