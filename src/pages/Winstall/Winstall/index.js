import React,{Component} from 'react'
import { Icon } from 'antd'

class Winstall extends Component{
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
            }}>导航组件的安装（react-navigation）</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save react-navigation 
            <br/>
            <br/>
            # npm install --save react-native-gesture-handler
            <br/>
            <br/>
            # react-native link react-native-gesture-handler
            <br/><br/>
            常用导航配置
            <br/>
            <br/>
            1.底部导航。
            <br/>
            <br/>
            2.抽屉导航。
            <br/>
            <br/>
            3.两者的结合。
            <br/>
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
            }}>MobX的安装</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save mobx
            <br/>
            <br/>
            # npm install --save mobx-react
            <br/>
            <br/>
            # 根目录下配置.babelrc
            &#123;<br/>
            &nbsp;&nbsp;"presets": ["module:metro-react-native-babel-preset"],<br/>
            &nbsp;&nbsp;"plugins": [<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;["@babel/plugin-proposal-decorators", &#123; "legacy" : true &#125;]<br/>
            &nbsp;&nbsp;]<br/>
            &#125;<br/>
            # 根目录下配置tsconfig.json
            &#123;<br/>
            &nbsp;&nbsp;"compilerOptions": &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"experimentalDecorators": true,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"allowJs": true<br/>
            &nbsp;&nbsp;&#125;<br/>
            &#125;<br/>
            
          </div>
        </div>
        {/* 3 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>Parse的安装</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save parse
          </div>
        </div>
      </div>
    )
  }
}

export default Winstall
