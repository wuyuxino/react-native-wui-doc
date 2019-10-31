import React, { Component } from 'react';
import { Icon } from 'antd';
import wtoptitle from '../../../assets/wtoptitle.png';

class WtopTitle extends Component {
  constructor() {
    super();
    this.state = {};
  }

  textValue = () => {
    let container = document.getElementsByClassName('textarea')[0];
    let str =
      'import { WtopTitle } from react-native-wui\r\rimport { View } from "react-native"\r\rclass Modal extends Component{\r\xa0\xa0\xa0\xa0render(){\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return(\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<View style={{flex:1}}>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<WtopTitle />\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</View>\r\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0)\r\xa0\xa0\xa0\xa0}\r\xa0\xa0}\r\rexport default Modal';
    container.value = str;
  };

  componentDidMount = () => {
    this.textValue();
  };

  render() {
    return (
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '50%',
            float: 'right',
          }}
        >
          <h2 style={{ marginTop: '60px' }}>
            <Icon type="snippets" theme="filled" style={{ color: '#1890FF' }} /> 属性
          </h2>
          <ol>
            {[
              {
                title: 'containerStyle (object)',
                explain: '容器整体样式设置',
              },
              {
                title: 'tabHeight (number)',
                explain: '顶部容器的高度',
              },
              {
                title: 'titleStyleOne (object)',
                explain: '顶部标题样式设置',
              },
              {
                title: 'titleStyleTwo (object)',
                explain: '顶部悬浮标题样式设置',
              },
              {
                title: 'topContentHeight (number)',
                explain: '顶部容器高度设置',
              },
            ].map((i, n) => {
              return (
                <li key={n}>
                  <span
                    style={{
                      letterSpacing: 1,
                      fontSize: '20px',
                      color: '#003a8c',
                    }}
                  >
                    {i.title}
                  </span>
                  <br />
                  <span
                    style={{
                      letterSpacing: 1,
                      color: '#666',
                      lineHeight: '26px',
                    }}
                  >
                    {i.explain}
                  </span>
                </li>
              );
            })}
          </ol>
          <h2>
            <Icon type="setting" theme="filled" style={{ color: '#1890FF' }} /> 方法
          </h2>
          <ol>
            {[
              {
                title: 'tabInner (func)',
                explain: 'tab标签内部显示内容',
              },
              {
                title: 'topContent (func)',
                explain: '顶部容器内部显示内容',
              },
              {
                title: 'bottomContent (func)',
                explain: '底部容器内部显示内容',
              },
            ].map((i, n) => {
              return (
                <li key={n}>
                  <span
                    style={{
                      letterSpacing: 1,
                      fontSize: '20px',
                      color: '#003a8c',
                    }}
                  >
                    {i.title}
                  </span>
                  <br />
                  <span
                    style={{
                      letterSpacing: 1,
                      color: '#666',
                      lineHeight: '26px',
                    }}
                  >
                    {i.explain}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
        <div
          style={{
            width: '50%',
            float: 'left',
            paddingLeft: '30px',
          }}
        >
          <h1 style={{ fontSize: '30px', color: '#1890FF', letterSpacing: 1 }}>WtopTitle</h1>
          <h2 style={{ marginTop: '10px' }}>
            <Icon type="picture" theme="filled" style={{ color: '#1890FF' }} /> 效果图
          </h2>
          <img
            width="300px"
            style={{
              borderRadius: '45px',
            }}
            src={wtoptitle}
          />
          <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>
            <Icon type="code" theme="filled" style={{ color: '#1890FF' }} /> 使用方法
          </h2>
          <textarea
            className="textarea"
            rows="20"
            cols="48"
            style={{
              borderColor: '#ccc',
              background: '#f2f2f2',
              borderRadius: '8px',
              padding: '20px',
              whiteSpace: 'pre',
            }}
          ></textarea>
          <h2 style={{ marginTop: '30px', marginBottom: '30px' }}>
            <Icon type="warning" theme="filled" style={{ color: 'orange' }} /> 注意事项
          </h2>
        </div>
      </div>
    );
  }
}

export default WtopTitle;
