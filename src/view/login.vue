<template>
   <div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<p>elm后台管理系统</p>
		  		</div>
		    	<el-form :model="model" :rules="rules" ref="loginRef">
					<el-form-item prop="username">
						<el-input v-model="model.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="model.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm()" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">温馨提示：</p>
				<p class="tip">未登录过的新用户，自动注册</p>
				<p class="tip">注册过的用户可凭账号密码登录</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
              model:{
                userName:'',
                userPassword:'',
              },
              rules:{
                userName:[
                  {require:true,message:'请输入用户名',trigger:'blur'}
                ],
                userPassword:[
                  {require:true,message: '请输入密码',trigger:'blur'}
                ]
              }
            }
        },
        methods:{
            handleSubmit() {
                this.$refs['loginRef'].validate(async (valid) => {
                  if (valid) {
                      let userData = [];
                      this.$http.get('/api/user').then(response => {
                          let {code,data} = response.data;
                          if(code == '0000') {
                              userData = data;
                          }
                      });
                      let isLogin = false;
                      if(Array.isArray(userData) && userData.length > 0) {
                          userData.forEach(item => {
                              let {empName,password} = item
                              if(empName == model.userName  && password == model.userPassword) {
                                  return isLogin = true
                              }                            
                          });
                      }
                      if(isLogin) {
                          this.message({
                            type: 'success',
		                        message: '登录成功'
                          });
                          this.$router.push({path: '/index'})
                      }
                  }
                })
            },
            // 非空判断
            isEmpty(obj){
                return typeof obj === 'undefined' || obj === null || obj === ''
            },
        }
    }
</script>

<style lang="less" scoped>
  @import '../style/mixin';
  .login_page{
    background-color: #324057;
  }
  .manage_tip{
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p{
      font-size: 34px;
      color: #fff;
    }
  }
  .form_contianer{
    .wh(320px, 210px);
    .ctp(320px, 210px);
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn{
      width: 100%;
      font-size: 16px;
    }
  }
  .tip{
    font-size: 12px;
    color: red;
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
