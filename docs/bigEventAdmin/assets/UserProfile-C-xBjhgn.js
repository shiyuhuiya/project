import{_ as f}from"./pageContainer-DsdfqMgt.js";import{a as g,r as u,o as b,v,e as l,d as e,f as V,bP as E,E as k}from"./index-k3YW5qJL.js";import{a as y,E as x}from"./el-form-item-BFKEt8dq.js";import{E as U}from"./_plugin-vue_export-helper-DWe8d4KH.js";import{E as w}from"./el-input-CYp91zm4.js";import"./_baseClone-Bj1oCUNN.js";const F={__name:"UserProfile",setup(z){const s=g(),m=u(),a=u(s.user),i={nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{pattern:/^\S{1,10}$/,message:"密码必须是1-10的非空字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"请输入正确格式的邮箱",trigger:"blur"}]},p=async()=>{await m.value.validate(),await E({...a.value}),s.getUser(),k.success("修改成功")};return(A,t)=>{const n=w,r=y,d=U,_=x,c=f;return b(),v(c,{title:"基本资料"},{default:l(()=>[e(_,{ref_key:"form",ref:m,model:a.value,style:{width:"50%"},rules:i,"label-width":"100px"},{default:l(()=>[e(r,{label:" 登录名称"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.username=o),type:"text",disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",clearable:"",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.nickname=o),type:"text"},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",clearable:"",prop:"email"},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.email=o),type:"email"},null,8,["modelValue"])]),_:1}),e(r,{label:""},{default:l(()=>[e(d,{type:"primary",onClick:p},{default:l(()=>[V("提交修改")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}};export{F as default};
