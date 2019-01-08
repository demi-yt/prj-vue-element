<template>
   <div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer">
		  		<div class="manage_tip">
		  			<p>element后台管理系统</p>
		  		</div>
		    	<el-form :model="model" :rules="rules" ref="loginRef">
					<el-form-item prop="userName">
						<el-input v-model="model.userName" placeholder="用户名"></el-input>
					</el-form-item>
					<el-form-item prop="userPassword">
						<el-input type="password" placeholder="密码" v-model="model.userPassword"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="handleSubmit()" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
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
              },
              userData:[],
            }
        },
        created() {
            this.handleUserInfo();
        },
        methods:{
            handleUserInfo() {
              this.$http.get('/api/user').then((response) => {
                  let {code,datas} = response.data;
                  if(code == '0000') {
                      this.userData = datas;
                  }
              });
            },
            handleSubmit() {
                this.$refs['loginRef'].validate(async (valid) => {
                  if (valid) {                 
                    if(Array.isArray(this.userData) && this.userData.length > 0) {
                      let isLogin = false;
                      if(Array.isArray(this.userData) && this.userData.length > 0) {
                          this.userData.forEach(item => {
                              let {userName,password} = item
                              if(userName == this.model.userName  && password == this.model.userPassword) {
                                  isLogin = true
                              }                            
                          });
                      }
                      if(isLogin) {
                          this.$message({
                            type: 'success',
                            message: '登录成功'
                          });
                          sessionStorage.setItem('username', this.model.userName)
                          console.log(sessionStorage.getItem("username"))
                          this.$router.push({path: '/index'})
                      }else{
                          this.$message({
                            type: 'error',
                            message: '用户名或密码不存在！'
                          });
                      }
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
  @import '../style/mixin.less';
  .login_page{
    background: url('../assets/login-bg.jpg')  no-repeat;
    background-size: 100%
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
