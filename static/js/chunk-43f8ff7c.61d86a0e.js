(window["webpackJsonp_VueMicroApp"]=window["webpackJsonp_VueMicroApp"]||[]).push([["chunk-43f8ff7c"],{4:function(n,c){},5:function(n,c){},cddd:function(n,c,t){"use strict";t.r(c),t.d(c,"export_txt_to_zip",(function(){return f}));t("90c8"),t("f2e9"),t("fa87");var o=t("0be6"),e=t("3da4"),i=t.n(e);function f(n,c,t,e){var f=new i.a,a=t||"file",r=e||"file",u=c,p="".concat(n,"\r\n");u.forEach((function(n){var c="";c=n.toString(),p+="".concat(c,"\r\n")})),f.file("".concat(a,".txt"),p),f.generateAsync({type:"blob"}).then((function(n){Object(o["saveAs"])(n,"".concat(r,".zip"))}),(function(n){alert("导出失败")}))}}}]);