export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // 首页显示，默认显示列表的第一个选项
      { path: '/', redirect: '/wui/user/wlogin'},
      //  wui
      {
        name: '用户',
        icon: 'login',
        path: '/wui',
        routes: [
          {
            path: '/wui/user/wlogin',
            name: '用户登陆',
            component: './Wui/User/Wlogin',
          },
          {
            path: '/wui/user/wregister',
            name: '用户注册',
            component: './Wui/User/Wregister',
          }
        ],
      },
      // nav
      {
        name: '导航',
        icon: 'bars',
        path: '/wnav',
        routes: [
          {
            path: '/wnav/wheader',
            name: '顶部导航',
            component: './Wnav/Wheader'
          },
          {
            path: '/wnav/wtitle',
            name: '标题栏',
            component: './Wnav/Wtitle'
          },
          {
            path: '/wnav/wsearch',
            name: '搜索框',
            component: './Wnav/Wsearch'
          },
          {
            path: '/wnav/wtab',
            name: 'Tab',
            component: './Wnav/Wtab'
          }
        ],
      },
      // card
      {
        name: '卡片',
        icon: 'credit-card',
        path: '/wuicard',
        routes: [
          {
            path: '/wuicard/card/wcard',
            name: '资料卡片',
            component: './WuiCard/Card/Wcard'
          },
          {
            path: '/wuicard/card/wimagecard',
            name: '图片卡片',
            component: './WuiCard/Card/WimageCard'
          },
          {
            path: '/wuicard/card/wcardone',
            name: '图片卡片一',
            component: './WuiCard/Card/Wcardone'
          }
        ],
      },
      // list
      {
        name: '列表评论',
        icon: 'ordered-list',
        path: '/wlist',
        routes: [
          {
            path: '/wlist/warticle',
            name: '文章列表',
            component: './Wlist/Warticle'
          },
          {
            path: '/wlist/wcomment',
            name: '评论列表',
            component: './Wlist/Wcomment'
          }
        ],
      },
      // tool
      {
        name: '辅助工具',
        icon: 'tool',
        path: '/wtool',
        routes: [
          {
            path: '/wtool/wloading',
            name: 'Loading',
            component: './Wtool/Wloading'
          },
          {
            path: '/wtool/wtips',
            name: '弹框提示',
            component: './Wtool/Wtips'
          },
          {
            path: '/wtool/wtimeselect',
            name: '时间选择',
            component: './Wtool/WtimeSelect'
          },
          {
            path: '/wtool/wdate',
            name: '日期选择',
            component: './Wtool/Wdate'
          },
          {
            path: '/wtool/wcategory',
            name: '分类选择',
            component: './Wtool/Wcategory'
          },
          {
            path: '/wtool/wswitch',
            name: '开关',
            component: './Wtool/Wswitch'
          },
          {
            path: '/wtool/whelp',
            name: '帮助中心',
            component: './Wtool/Whelp'
          }
        ],
      },
      // mall
      {
        name: '商城组件',
        icon: 'appstore',
        path: '/wmall',
        routes: [
          {
            path: '/wmall/wquantity',
            name: '数量选择',
            component: './Wmall/Wquantity'
          },
          {
            path: '/wmall/wspinner',
            name: '下拉列表',
            component: './Wmall/Wspinner'
          },
          {
            path: '/wmall/wmessage',
            name: '聊天消息',
            component: './Wmall/Wmessage'
          },
          {
            path: '/wmall/wcode',
            name: '验证码',
            component: './Wmall/Wcode'
          },
          {
            path: '/wmall/wpsbox',
            name: '密码输入',
            component: './Wmall/Wpsbox'
          }
        ],
      },
      // parse
      {
        name: 'ParseMethod',
        icon: 'pic-center',
        path: '/parse',
        routes: [
          {
            path: '/parse/parsemethod',
            name: '常用函数',
            component: './Parse/ParseMethod'
          }
        ],
      },
      // adaptation
      {
        name: '屏幕适配',
        icon: 'fullscreen-exit',
        path: '/designsize',
        routes: [
          {
            path: '/designsize/adaptation',
            name: '常用函数',
            component: './DesignSize/Adaptation'
          }
        ],
      },
      // 组件安装常见问题
      {
        name: '组件安装',
        icon: 'download',
        path: '/winstall',
        routes: [
          {
            path: '/winstall/winstall',
            name: '常用组件的安装',
            component: './Winstall/Winstall'
          }
        ],
      },
      {
        component: '404',
      }
    ],
  },
];
