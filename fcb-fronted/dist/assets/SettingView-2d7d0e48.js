import{b as U,E as z}from"./el-input-179f1fb5.js";import{E as x,a as S}from"./el-form-item-396e2f40.js";import"./el-tag-c459b38d.js";import{E as w,a as c}from"./el-select-70a1eef0.js";import"./el-popper-05f0215b.js";import{d as E,a7 as C,s as B,a as M,w as o,ac as g,o as V,B as e,f as s,Z as f,S as i,X as m,V as h,W as N,aA as v}from"./index-13550890.js";import"./_baseClone-27aed35d.js";const A={style:{"margin-left":"0.4rem"}},I={style:{"margin-left":"0.4rem"}},D={key:0},F={style:{display:"flex",height:"38px"}},K={style:{"margin-right":"0.4rem"}},T={style:{width:"200px","margin-left":"0.4rem"}},q={style:{display:"flex",height:"38px"}},O={style:{width:"3rem","margin-right":"0.4rem"}},W={style:{width:"200px","margin-left":"0.4rem"}},X={style:{display:"flex",height:"38px"}},Z={style:{"margin-right":"0.4rem"}},j={style:{width:"200px","margin-left":"0.4rem"}},G={style:{display:"flex",height:"38px"}},H={style:{width:"3rem","margin-right":"0.4rem"}},J={style:{width:"200px","margin-left":"0.4rem"}},te=E({__name:"SettingView",setup(L){const{t:n}=C(),l=B({name:"",description:"",file_storage:"",admin_token:"",keywords:"",openUpload:1,uploadSize:1,uploadMinute:1,s3_access_key_id:"",background:"",page_explain:"",s3_secret_access_key:"",aws_session_token:"",s3_signature_version:"",s3_region_name:"",s3_bucket_name:"",s3_endpoint_url:"",s3_hostname:"",uploadCount:1,errorMinute:1,errorCount:1});(()=>{g({url:"/admin/config/get",method:"get"}).then(r=>{l.value=r.detail})})();const b=()=>{g({url:"/admin/config/update",method:"patch",data:l.value}).then(r=>{r.code==200?v.success(n("admin.settings.saveSuccess")):v.error(r.message)})};return(r,a)=>{const d=U,u=S,p=w,_=c,y=z,k=x;return V(),M(k,null,{default:o(()=>[e(u,{size:"large",label:s(n)("admin.settings.name")},{default:o(()=>[e(d,{modelValue:l.value.name,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value.name=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.description")},{default:o(()=>[e(d,{modelValue:l.value.description,"onUpdate:modelValue":a[1]||(a[1]=t=>l.value.description=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.keywords"),style:{"letter-spacing":"0.3rem"}},{default:o(()=>[e(d,{modelValue:l.value.keywords,"onUpdate:modelValue":a[2]||(a[2]=t=>l.value.keywords=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.background")},{default:o(()=>[e(d,{modelValue:l.value.background,"onUpdate:modelValue":a[3]||(a[3]=t=>l.value.background=t),placeholder:"url"},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.explain")},{default:o(()=>[e(d,{type:"textarea",modelValue:l.value.page_explain,"onUpdate:modelValue":a[4]||(a[4]=t=>l.value.page_explain=t),placeholder:"explain"},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.admin_token")},{default:o(()=>[e(d,{type:"password",modelValue:l.value.admin_token,"onUpdate:modelValue":a[5]||(a[5]=t=>l.value.admin_token=t)},null,8,["modelValue"])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.uploadSize")},{append:o(()=>[f("Bytes")]),default:o(()=>[e(d,{type:"number",modelValue:l.value.uploadSize,"onUpdate:modelValue":a[6]||(a[6]=t=>l.value.uploadSize=t)},null,8,["modelValue"]),i("small",null,m(s(n)("admin.settings.uploadSizeNote")),1)]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.openUpload.title")},{default:o(()=>[e(_,{modelValue:l.value.openUpload,"onUpdate:modelValue":a[7]||(a[7]=t=>l.value.openUpload=t)},{default:o(()=>[e(p,{label:s(n)("admin.settings.openUpload.open"),value:1},null,8,["label"]),e(p,{label:s(n)("admin.settings.openUpload.close"),value:0},null,8,["label"])]),_:1},8,["modelValue"]),i("small",A,m(s(n)("admin.settings.openUpload.note")),1)]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.file_storage.title")},{default:o(()=>[e(_,{modelValue:l.value.file_storage,"onUpdate:modelValue":a[8]||(a[8]=t=>l.value.file_storage=t)},{default:o(()=>[e(p,{label:s(n)("admin.settings.file_storage.local"),value:"local"},null,8,["label"]),e(p,{label:s(n)("admin.settings.file_storage.s3"),value:"s3"},null,8,["label"])]),_:1},8,["modelValue"]),i("small",I,m(s(n)("admin.settings.file_storage.note")),1)]),_:1},8,["label"]),l.value.file_storage==="s3"?(V(),h("div",D,[e(u,{size:"large",label:"S3 AccessKeyId"},{default:o(()=>[e(d,{modelValue:l.value.s3_access_key_id,"onUpdate:modelValue":a[9]||(a[9]=t=>l.value.s3_access_key_id=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"S3 SecretAccessKey"},{default:o(()=>[e(d,{modelValue:l.value.s3_secret_access_key,"onUpdate:modelValue":a[10]||(a[10]=t=>l.value.s3_secret_access_key=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"S3 BucketName"},{default:o(()=>[e(d,{modelValue:l.value.s3_bucket_name,"onUpdate:modelValue":a[11]||(a[11]=t=>l.value.s3_bucket_name=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"S3 EndpointUrl"},{default:o(()=>[e(d,{modelValue:l.value.s3_endpoint_url,"onUpdate:modelValue":a[12]||(a[12]=t=>l.value.s3_endpoint_url=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"S3 hostname"},{default:o(()=>[e(d,{modelValue:l.value.s3_hostname,"onUpdate:modelValue":a[13]||(a[13]=t=>l.value.s3_hostname=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"S3 region name"},{default:o(()=>[e(d,{modelValue:l.value.s3_region_name,"onUpdate:modelValue":a[14]||(a[14]=t=>l.value.s3_region_name=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"S3 Signature Version"},{default:o(()=>[e(d,{modelValue:l.value.s3_signature_version,"onUpdate:modelValue":a[15]||(a[15]=t=>l.value.s3_signature_version=t)},null,8,["modelValue"])]),_:1}),e(u,{size:"large",label:"Aws Session Token"},{default:o(()=>[e(d,{modelValue:l.value.aws_session_token,"onUpdate:modelValue":a[16]||(a[16]=t=>l.value.aws_session_token=t)},null,8,["modelValue"])]),_:1})])):N("",!0),e(u,{size:"large",label:s(n)("admin.settings.uploadlimit")},{default:o(()=>[i("span",F,[i("span",K,m(s(n)("admin.settings.mei")),1),e(d,{type:"number",modelValue:l.value.uploadMinute,"onUpdate:modelValue":a[17]||(a[17]=t=>l.value.uploadMinute=t)},null,8,["modelValue"]),i("span",T,m(s(n)("admin.settings.minute")),1)]),i("span",q,[i("span",O,m(s(n)("admin.settings.upload")),1),e(d,{type:"number",modelValue:l.value.uploadCount,"onUpdate:modelValue":a[18]||(a[18]=t=>l.value.uploadCount=t)},null,8,["modelValue"]),i("span",W,m(s(n)("admin.settings.files")),1)])]),_:1},8,["label"]),e(u,{size:"large",label:s(n)("admin.settings.errorlimit")},{default:o(()=>[i("span",X,[i("span",Z,m(s(n)("admin.settings.mei")),1),e(d,{type:"number",modelValue:l.value.errorMinute,"onUpdate:modelValue":a[19]||(a[19]=t=>l.value.errorMinute=t)},null,8,["modelValue"]),i("span",j,m(s(n)("admin.settings.minute")),1)]),i("span",G,[i("span",H,m(s(n)("admin.settings.allow")),1),e(d,{type:"number",modelValue:l.value.errorCount,"onUpdate:modelValue":a[20]||(a[20]=t=>l.value.errorCount=t)},null,8,["modelValue"]),i("span",J,m(s(n)("admin.settings.errors")),1)])]),_:1},8,["label"]),e(u,null,{default:o(()=>[e(y,{onClick:b,type:"primary",style:{margin:"auto"}},{default:o(()=>[f(m(s(n)("admin.settings.save")),1)]),_:1})]),_:1})]),_:1})}}});export{te as default};
