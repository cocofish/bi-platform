define(["template","dialog","report/global-setting-btns/global-template"],function(a,b,c){return Backbone.View.extend({initialize:function(){},setGlobal:function(){b.showDialog({content:c.render(),title:"参数维度设置",dialog:{height:400,width:400,open:function(){var a=$(this);a.on("click",".j-global-close",function(){$(this).parent().remove()}),a.find(".j-global-add").click(function(){var a=$(".j-con-global-attr").find(".j-global-attr").clone(!0);$(".j-global-box").append(a)})},buttons:{"确认":function(){$(this).dialog("close")},"取消":function(){$(this).dialog("close")}}}})}})});