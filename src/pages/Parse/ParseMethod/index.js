import React,{Component} from 'react'
import { Icon } from 'antd'

class ParseMethod extends Component{
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
            }}>parseRegister</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 用户注册<br/>
            * @param &#123;当前的Parse对象new Parse.User()&#125; a<br/> 
            * @param &#123;需要设置的字段类型为此&#123;username:'wyx',password:'123456',phone:'10086'&#125;&#125; b<br/>
            * @param &#123;成功或者失败后的回调函数&#125; c<br/> 
            */<br/><br/>
            function parseRegister(a,b,c)&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;let user = a<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;for(let i in b)&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user.set(i,b[i])<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;user.signUp().then(req=>&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c(req)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c(err)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>
        {/* 2 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseLogin</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 用户登陆<br/>
            * @param &#123;当前的Parse对象&#125; a<br/> 
            * @param &#123;当前需要登陆的用户名&#125; b<br/>
            * @param &#123;当前需要登陆的用户密码&#125; c<br/> 
            * @param &#123;登陆成功或者失败后的回掉函数&#125; d<br/> 
            * @param &#123;是否对数据进行序列化后在输出，默认为false&#125; e<br/> 
            */<br/><br/>
            function parseLogin(a,b,c,d,e=false)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;a.User.logIn(b,c).then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if(e)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let obj = JSON.parse(JSON.stringify(req))<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.id = e.id<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.className = e.className<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(e?obj:req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>
        {/* 3 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseDataFormate</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 格式化获取的数据<br/>
            * @param &#123;用户需要格式化的数据，可以是对象或者是数组对象的形式&#125; a<br/> 
            */<br/><br/>
            function parseDataFormate(a)&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;if(a instanceof Array)&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let backArr = []<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let i=0; i&lt;a.length; i++)&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let obj = &#123;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.className = a[i]['className']<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.id = a[i]['id']<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj._objCount = a[i]['_objCount']<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let j in a[i].attributes)&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj[j] = a[i].attributes[j]<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backArr.push(obj)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return backArr<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;else&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let obj = &#123;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.className = a['className']<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.id = a['id']<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj._objCount = a['_objCount']<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let j in a.attributes)&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj[j] = a.attributes[j]<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return obj<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &#125;<br/> 
          </div>
        </div>
        {/* 4 */}
        <div style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseGetData</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 用户查询当前class类的数据<br/>
            * @param &#123;传入的Parse对象&#125; a<br/> 
            * @param &#123;需要查询的class类名&#125; b<br/> 
            * @param &#123;查询成功后的回调函数&#125; c<br/> 
            * @param &#123;查询的字段中是否包含Pointer字段，包含的话查询字段名称&#125; d<br/> 
            */<br/><br/>
            function parseGetData(a,b,c,d='')&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;let queryData = a.Object.extend(b)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;let queryDatas = new a.Query(queryData)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;if(d==='')&#123;&#125;else&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queryDatas.include(d)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;queryDatas.find().then(req=>&#123;<br/> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c(req)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c(err)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/> 
            &#125;<br/> 
          </div>
        </div>
        {/* 5 */}
        <div style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseAddData</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 用户增加当前class的数据<br/>
            * @param &#123;传入的Parse对象&#125; a<br/> 
            * @param &#123;当前想要增加数据的class类名&#125; b<br/> 
            * @param &#123;当前需要设置字段和改字段需要设置的值&#125; c<br/> 
            * @param &#123;设置成功或失败后的回调函数&#125; d<br/> 
            * @param &#123;是否设置有关Pointer字段的属性，默认为false&#125; e<br/> 
            * @param &#123;添加改Pointer对象的数组[[f,g,h],[f,g,h]]&#125; f<br/> 
            * 数组参数说明
            * @param &#123;关联字段的Class类名字&#125; f<br/> 
            * @param &#123;需要关联对象的ID&#125; g<br/> 
            * @param &#123;该Pointer字段在增加数据class类名中的名字&#125; h<br/> 
            */<br/><br/>
            function parseAddData(a,b,c,d,e=false,f)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;const addDatas = a.Object.extend(b)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;const addData = new addDatas()<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;for(let i in c)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addData.set(i,c[i])<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;if(e)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let i=0;i&lt;f.length;i++)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let T = Parse.Object.extend(f[i][0])<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let t = T.createWithoutData(f[i][1])<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;addData.set(f[i][2],t)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;addData.save().then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>
        {/* 6 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseRemoveData</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 从制定的class类里面删除一个对象<br/>
            * @param &#123;需要删除的用户数据对象，即class类里面的对象&#125; a<br/> 
            * @param &#123;删除成功或者失败后的回调函数&#125; b<br/>
            */<br/><br/>
            function parseRemoveData(a,b)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;a.destroy().then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b(req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>
        {/* 7 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseSearch</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 用户搜索功能<br/>
            * @param &#123;需要传递的Parse对象&#125; a<br/>
            * @param &#123;需要在那个class类下进行搜索填写当前的class类名&#125; b<br/> 
            * @param &#123;输入查询的字段的值 Object&#125; c<br/>
            * @param &#123;查询完成后的返回结果&#125; d<br/>
            * @param &#123;是否开启模糊匹配 boolean 默认开启&#125; e<br/>
            */<br/><br/>
            function parseSearch(a,b,c,d,e=true)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let searchList = a.Object.extend(b)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let list = new a.Query(searchList)<br/>

            &nbsp;&nbsp;&nbsp;&nbsp;if(e)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let i in c)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list.equalTo(i,&#123;"$regex":c[i]&#125;)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;else&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let i in c)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list.equalTo(i,&#123;"$regex":c[i]&#125;)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list.equalTo(i,c[i])<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;list.find().then(res=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(res)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
          &#125;<br/>
          </div>
        </div>
        {/* 8 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseGetRelationData</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * Relation 形式的数据查询<br/>
            * @param &#123;需要查询带有relation格式数据的字段&#125; a<br/> 
            * @param &#123;relation格式字段的名称&#125; b<br/>
            * @param &#123;查询成功或者失败的回调函数&#125; c<br/>
            * @param &#123;增加条件查询&#125; d<br/>
            */<br/><br/>
            function parseGetRelationData(a,b,c,d='')&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;let relationData = a.relation(b)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;if(d==='')&#123;&#125;else&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let i in d)&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;relationData.query().equalTo(i,d[i])<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;relationData.query().find().then(req=>&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c(req)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c(err)<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/> 
            &#125;<br/> 
          </div>
        </div>
        {/* 9 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseFileSave</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * 存储图片<br/>
            * @param &#123;需要传入的Parse对象&#125; a<br/> 
            * @param &#123;存储图片的字段名称 String&#125; b<br/>
            * @param &#123;需要传入的base64图片&#125; c<br/>
            * @param &#123;图片存储成功后的回调函数&#125; d<br/>
            */<br/><br/>
            function parseFileSave(a,b,c,d)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let file = new a.File(b, &#123; base64: c &#125;)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;file.save().then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125; <br/>
          </div>
        </div>
        {/* 10 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseRelationAdd</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * Relation格式的数据的增加<br/>
            * @param &#123;带有relation数据结构的对象&#125; a<br/> 
            * @param &#123;带有relation数据结构的对象的字段名称&#125; b<br/>
            * @param &#123;需要添加的对象，可以是单个对象或者是数组对象&#125; c<br/>
            * @param &#123;添加成功或失败后的回调函数&#125; d<br/>
            */<br/><br/>
            function parseRelationAdd(a,b,c,d)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let relation = a.relation(b)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;relation.add(c)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;a.save().then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>
        {/* 11 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parseRelationRemove</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * Relation格式的数据的删除<br/>
            * @param &#123;带有relation数据结构的对象&#125; a<br/> 
            * @param &#123;带有relation数据结构的对象的字段名称&#125; b<br/>
            * @param &#123;需要删除的对象，可以是单个对象或者是数组对象&#125; c<br/>
            * @param &#123;删除成功或失败后的回调函数&#125; d<br/>
            */<br/><br/>
            function parseRelationRemove(a,b,c,d)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let relation = a.relation(b)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;relation.remove(c)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;a.save().then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>
        {/* 12 */}
        <div
          style={{marginTop:'30px'}}>
          <p
            style={{
              letterSpacing:1,
              fontSize:'22px',
              color:'#1890FF'
            }}>parsePagingQuery</p>
          <div
            style={{fontSize:'13px',color:'#666',letterSpacing:1,padding:'20px',background:'#fff',borderRadius:'12px'}}>
            /**<br/>
            * Parse分页效果查询，用来做分页<br/>
            * @param &#123;需要传入的Parse对象&#125; a<br/> 
            * @param &#123;需要查询的class类名&#125; b<br/>
            * @param &#123;跳过的条数&#125; c<br/>
            * @param &#123;限制输出的条数&#125; d<br/>
            * @param &#123;查询成功或者失败的回调函数&#125; e<br/>
            * @param &#123;指定返回指定的字段，数组格式，里面包含想要查询的字段名称&#125; f<br/>
            */<br/><br/>
            function parsePagingQuery(a,b,c,d,e,f='')&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let DataList = a.Object.extend(b)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;let queryData = new a.Query(DataList)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;if(f==='')&#123;&#125;else&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for(let i=0;i&lt;f.length;i++)&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queryData.select(f[i])<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;queryData.skip(c)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;queryData.limit(d)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;queryData.find().then(req=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e(req)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;).catch(err=>&#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e(err)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;)<br/>
            &#125;<br/>
          </div>
        </div>


            

      </div>
    )
  }
}

export default ParseMethod
