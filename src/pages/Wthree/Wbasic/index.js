import React,{Component} from 'react'
import { Icon } from 'antd'

class Wbasic extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <div
        style={{
          width:'100%',
          overflow:'hidden'
        }}>
        {/* 1 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>Three.Js 基本知识</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # 浏览器支持情况  
            <br/>
            <br/>
            Google Chrome 9+、Firefox 4+、Opera 15+、Safari 5.1+、Internet Explorer 11 和 Microsoft Edge
            <br />
            <br />
            参考链接: https://caniuse.com/#feat=webgl
            <br/>
            <br/>
            现代浏览器都支持 WebGL，这样我们就不必使用 Flash、Java 等插件就能在浏览器中创建三维图形。虽然 WebGL 提供的接口非常丰富和强大，但使用起来过于繁琐和复杂。
            Three.js 的出现完美地解决了这个矛盾。它提供一个很简单的关于 WebGL 特性的 JavaScript API，使得用户不需要详细地学习 WebGL，就能轻松创作出好看的三维图形样例。
            <br/>
          </div>
        </div>
        {/* 2 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>Three.Js 使用</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # React中的使用  
            <br/>
            <br/>
            直接下载 three.min.js 文件 https://github.com/mrdoob/three.js<br/>
            TrackballControls.js 鼠标移动相机跟随移动的js组件，封装好的，可以直接调用 <br/>
            &lt;!-- 引入three.js --> <br/>
            &lt;script src="./three.min.js">&lt;/script> <br/>
            &lt;script src="./TrackballControls.js">&lt;/script>< br/>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default Wbasic
