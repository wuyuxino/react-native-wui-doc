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
            # 根目录下配置<br/>.babelrc
            &#123;<br/>
            &nbsp;&nbsp;"presets": ["module:metro-react-native-babel-preset"],<br/>
            &nbsp;&nbsp;"plugins": [<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;["@babel/plugin-proposal-decorators", &#123; "legacy" : true &#125;]<br/>
            &nbsp;&nbsp;]<br/>
            &#125;<br/>
            # 根目录下配置<br/>tsconfig.json
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
        {/* 4 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>React Native Image Picker 的安装</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install react-native-image-picker / yarn add react-native-image-picker<br/><br/>

            # react-native link react-native-image-picker<br/><br/>

            # ios相机相册权限添加代码,将以下代码添加到info.plist中<br/><br/>

            &lt;key&gt;NSCameraUsageDescription&lt;/key&gt; <br/>
            &lt;string&gt;$(PRODUCT_NAME) would like to use your camera（Used for uploading user avatars）&lt;/string&gt; <br/>
            &lt;key&gt;NSLocationWhenInUseUsageDescription&lt;/key&gt; <br/>
            &lt;string&gt;&lt;/string&gt; <br/>
            &lt;key&gt;NSMicrophoneUsageDescription&lt;/key&gt; <br/>
            &lt;string&gt;$(PRODUCT_NAME) would like to your microphone (for videos)&lt;/string&gt; <br/>
            &lt;key&gt;NSPhotoLibraryAddUsageDescription&lt;/key&gt; <br/>
            &lt;string&gt;$(PRODUCT_NAME) would like to save photos to your photo gallery （Used for save user avatars）&lt;/string&gt; <br/>
            &lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt; <br/>
            &lt;string&gt;$(PRODUCT_NAME) would like access to your photo gallery （Used for uploading user avatars）&lt;/string&gt; <br/><br/>

            # 页面内部使用代码<br/><br/>
            
            import ImagePicker from 'react-native-image-picker' <br/><br/>

            selectPhoto = () => &#123; <br/>
            &nbsp;&nbsp;const options = &#123; <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;title: 'Select photos',  <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;cancelButtonTitle: 'Cancel', <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;// takePhotoButtonTitle: 'Photograph', <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;chooseFromLibraryButtonTitle: 'Select photos',  <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;customButtons: [ <br/>
              &nbsp;&nbsp;&nbsp;&nbsp; // &#123; name: 'fb', title: 'Choose Photo from Facebook'}, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;], <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;cameraType: 'back', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;mediaType: 'photo', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;videoQuality: 'high', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;durationLimit: 10, <br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;maxWidth: 300, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;maxHeight: 300, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;quality: 0.8, <br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;angle: 0, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;allowsEditing: false,  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;noData: false, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;storageOptions: &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;skipBackup: true  <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;};<br/>
              &nbsp;&nbsp;ImagePicker.showImagePicker(options, (response) => &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// console.log('Response = ', response); <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (response.didCancel) &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp; // console.log('User cancelled image picker'); <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;} else if (response.error) &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp; // console.log('ImagePicker Error: ', response.error); <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;} else if (response.customButton) &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;  // console.log('User tapped custom button: ', response.customButton); <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;} else &#123; <br/>
              &nbsp;&nbsp;const source = &#123; uri: response.uri }; <br/> 
              &nbsp;&nbsp;// You can also display the image using data: <br/>
              &nbsp;&nbsp;// const source = &#123; uri: 'data:image/jpeg;base64,' + response.data }; <br/>
              &nbsp;&nbsp;this.setState(&#123; <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;selectAvatar: source, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;base64:response.data <br/>
                &nbsp;&nbsp;}); <br/>
                &nbsp;&nbsp;} <br/>
              }) <br/>
            } <br/>
          </div>
        </div>
        {/* 5 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>react-native-linear-gradient 的安装</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save react-native-linear-gradient <br/><br/>
            # react-native link react-native-linear-gradient <br/><br/>
            # 页面中的使用 <br/><br/>
            import LinearGradient from 'react-native-linear-gradient' <br/><br/>

            &lt;LinearGradient<br/>
            &nbsp;&nbsp;start=&#123;&#123; x : 0.0, y : 1 &#125;&#125; end=&#123;&#123; x : 0, y : 0 &#125;&#125;<br/>
            &nbsp;&nbsp;locations=&#123;[ 0, 0.2, 1 ]&#125;<br/>
            &nbsp;&nbsp;colors=&#123;[ '#333', '#666', 'rgba(0,0,0,0)' ]&#125;<br/>
            &nbsp;&nbsp;style=&#123;&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;position:'absolute',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;width:'100%',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;height:'100%',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;justifyContent:'flex-end',<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:'rgba(0,0,0,0)'<br/>
            &nbsp;&nbsp;&#125;&#125;&gt;<br/>
            &lt;/LinearGradient&gt;<br/><br/>
          </div>
        </div>
        {/* 6 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>react-native-gifted-chat 的安装</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save react-native-gifted-chat <br/><br/>
            # 在页面中的使用 <br/><br/>

            import &#123; GiftedChat, Bubble &#125; from 'react-native-gifted-chat' <br/><br/>


            this.state = &#123; <br/>
            &nbsp;&nbsp;messages: this.props.navigation.state.params.talk===''?[]:[ <br/>
              &nbsp;&nbsp;&#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;_id: 1, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;text: this.props.navigation.state.params.talk, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;createdAt: new Date(), <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;user: &#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_id: 2, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: 'React Native', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;avatar: 'https://placeimg.com/140/140/any', <br/>
              &nbsp;&nbsp;&#125;, <br/>
              &nbsp;&nbsp;&#125;]} 
            <br/><br/>

            onSend(messages = []) &#123; <br/>
            &nbsp;&nbsp;this.setState(previousState => (&#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;messages: GiftedChat.append(previousState.messages, messages) <br/>
              &nbsp;&nbsp;&#125;)) <br/>
            &#125; <br/><br/>


            &lt;GiftedChat <br/>
            &nbsp;&nbsp;onPressAvatar=&#123;()=> &#123; <br/>
            &nbsp;&nbsp;// 点击头像的回调函数 <br/>
            &nbsp;&nbsp;&#125;&#125; <br/>
            &nbsp;&nbsp;placeholder='input message' <br/>
            &nbsp;&nbsp;loadEarlier=&#123;true&#125; <br/>
            &nbsp;&nbsp;onLoadEarlier=&#123;()=>&#123; <br/>
            &nbsp;&nbsp;  // 加载更多消息回调 <br/>
            &nbsp;&nbsp;&#125;&#125; <br/>
            &nbsp;&nbsp;// 不显示头像 <br/>
            &nbsp;&nbsp;renderAvatar=&#123;null&#125; <br/>
            &nbsp;&nbsp;// 定义气泡 <br/>
            &nbsp;&nbsp;renderBubble=&#123;(props)=>&#123; <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return( <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Bubble <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;...props&#125; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wrapperStyle=&#123;&#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left: &#123; //对方的气泡 <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: 'rgb(225,238,240)', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right:&#123; //我方的气泡 <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor:'#E9967A', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;) <br/>
              &nbsp;&nbsp;&#125;&#125; <br/>
              &nbsp;&nbsp;// bottomOffset=&#123;120&#125; <br/>
              &nbsp;&nbsp;textInputProps=&#123;&#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;position:'relative', <br/>
              &nbsp;&nbsp;&#125;&#125; <br/>
              &nbsp;&nbsp;renderAvatarOnTop=&#123;true&#125; <br/>
              &nbsp;&nbsp;showUserAvatar=&#123;true&#125; <br/>
              &nbsp;&nbsp;messages=&#123;this.state.messages&#125; <br/>
              &nbsp;&nbsp;onSend=&#123;messages =>&#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// save message <br/>
              &nbsp;&nbsp;&#125;&#125; <br/>
              &nbsp;&nbsp;user=&#123;&#123; <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;_id: 1, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;avatar:'http://life.southmoney.com/tuwen/UploadFiles_6871/201808/20180808151217516.jpg', <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;name:'pater' <br/>
              &nbsp;&nbsp;&#125;&#125; <br/>
            /&gt; <br/><br/>
          </div>
        </div>
        {/* 7 */}
        <div>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>React中使用Mobx方法</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px',marginBottom:'25px'}}>
            # npm install --save mobx mobx-react react-app-rewired
            <br/>
            <br/>
            # 在你的项目的根目录新建config-overrides.js文件
            <br/>
            <br/>
            const &#123; override, addDecoratorsLegacy &#125; = require('customize-cra');<br/>
            module.exports = override(<br/>
              addDecoratorsLegacy()<br/>
            );
            <br/>
            <br/>
            # 修改package.json文件如下
            <br/>
            <br/>
            "scripts": &#123; <br/>
              "start": "react-app-rewired start", <br/>
              "build": "react-app-rewired build", <br/>
              "test": "react-app-rewired test",   <br/>
              "eject": "react-app-rewired eject"  <br/>
              &#125;
            <br/>
            <br/>
            # npm start 运行即可
          </div>
        </div>
      </div>
    )
  }
}

export default Winstall
