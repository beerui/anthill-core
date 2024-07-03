"use strict";const e=require("vue"),u=require("vue-router"),p=e.defineComponent({name:"ABaseBreadcrumb",__name:"BaseBreadcrumb",props:{list:{},isBack:{type:Boolean,default:!1},maxItemWidth:{default:"150"},mb:{default:20}},setup(d){const n=u.useRouter(),r=()=>{n.back()};return(t,_)=>{const a=e.resolveComponent("t-breadcrumbItem"),c=e.resolveComponent("t-breadcrumb"),m=e.resolveComponent("t-icon"),s=e.resolveComponent("t-button"),l=e.resolveComponent("t-row");return e.openBlock(),e.createBlock(l,{align:"center",justify:"space-between",style:e.normalizeStyle({marginBottom:`${t.mb}px`})},{default:e.withCtx(()=>[e.createVNode(c,{"max-item-width":t.maxItemWidth},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.list,(o,i)=>(e.openBlock(),e.createBlock(a,{key:`breadcrumbItem-${i}`,to:o.path},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.title),1)]),_:2},1032,["to"]))),128))]),_:1},8,["max-item-width"]),e.renderSlot(t.$slots,"right"),t.isBack?(e.openBlock(),e.createBlock(s,{key:0,theme:"primary",shape:"round",variant:"base",onClick:r},{icon:e.withCtx(()=>[e.createVNode(m,{name:"rollback"})]),default:e.withCtx(()=>[e.createTextVNode(" 返回 ")]),_:1})):e.createCommentVNode("",!0)]),_:3},8,["style"])}}});module.exports=p;
