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
    Mock.mock('/api/getTable', {
      "code": "000",
      "datas|5-20": [
        {
          "date": '@date("yyyy-MM-dd")',
          "name": "@cname",
          "address": "@county(true)"
        }
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
