/**
 * Created by suwt on 2017/3/9.
 */
import Mock from 'mockjs';

export default {
  mockData () {
    Mock.mock('/api/user', {
      "code": "0000",
      "datas": [
          {"userNO":"user001","userName":"admin","password":"123456","postUser":"总经理","depUser":"总经办","roles":"[3001,3002]"},
          {"userNO":"user002","userName":"demi","password":"123456","postUser":"前端开发","depUser":"技术部","roles":"[3001,3002]"},
          {"userNO":"user003","userName":"testAA","password":"123456","postUser":"php","depUser":"技术部","roles":"[3001,3002]"},
          {"userNO":"user004","userName":"testBB","password":"123456","postUser":"php","depUser":"技术部","roles":"[3001,3002]"},
          {"userNO":"user005","userName":"testCC","password":"123456","postUser":"php","depUser":"技术部","roles":"[3001,3002]"},
      ]
    });
    Mock.mock('/api/role', {
      "code": "0000",
      "datas": [
        {"roleId":"3001","roleName":"超级管理员","description":"超级管理员","postUser":"总经理","depUser":"总经办","roles":"[3001,3002]"},
        {"roleId":"3002","roleName":"系统管理员","description":"系统管理员","postUser":"前端开发","depUser":"技术部","roles":"[3001,3002]"},
        {"roleId":"3003","roleName":"查看权限管理员","description":"查看权限管理员","postUser":"php","depUser":"技术部","roles":"[3001,3002]"},
        {"roleId":"3004","roleName":"新增权限管理员","description":"新增权限管理员","postUser":"php","depUser":"技术部","roles":"[3001,3002]"},
        {"roleId":"3005","roleName":"删除权限管理员","description":"删除权限管理员","postUser":"php","depUser":"技术部","roles":"[3001,3002]"},
      ]
    });
    Mock.mock('/api/getOptions', {
      "code": "000",
      "datas|5-7": [
        {
          "label": '广东省',
          "value": "@natural(10, 100)",
          "children|5-8": [
            {
              "label": '深圳市',
              "value": "@natural(10, 100)",
              "children|5-5": [
                {
                  "label": '南山区',
                  "value": "@natural(10, 100)"
                }
              ]
            }
          ]
        }
      ],
      "places|9-18": [
        {
          "label": '广东省',
          "value": "@natural(10, 100)"
        }
      ]
    });
  }
};
