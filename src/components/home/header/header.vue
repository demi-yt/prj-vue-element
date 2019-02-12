<template>
    <div>
        <header>
            <img src="./logo.svg" class="header-logo"/>
            <div class="header-operations">
                <el-dropdown @command="handleCommand" menu-align='start'>
                    <span class="el-dropdown-link header-lang ">{{username}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="singout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>        
           
        </header>
    </div>
</template>
<script>
export default {
    props:{
        username:{
            type:String,
            default:'',
        }
    },
    data() {
        return {
            
        }
    },
    methods:{
        handleCommand(command) {
            if(command == 'singout'){
                this.$confirm('确定要退出该系统？','提示',{
                confirmButtonText:'确定',
                cancelButtonText :'取消',
                type:'warning'
            }).then(() => {
               this.$router.push({path: '/'})
            }).catch(() => {
                this.$message({
                    type:"info",
                    message:"已取消退出！"
                });
            });
            }
        }
    }
}
</script>

<style>
header {
    background-color: rgb(32, 160, 255);
    height: 80px;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 20px;
    z-index: 999;
    box-sizing: border-box;
    position: fixed;
  }
  .header-logo {
    display: inline-block;
    vertical-align: middle;
  }

  .header-operations {
        display: inline-block;
        vertical-align: middle;
        float: right;
        margin-top: 30px;
  }
  .header-opacity{
    opacity: .7;
  }
  .header-operations:after, header:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
  .header-lang{
      color: #fff;
  }
</style>

