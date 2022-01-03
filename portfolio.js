$(function(){
//-----------------------------------------------------------------

let sc=$('.section');

$('#main').fullpage({
    anchors:['intro','portfolio_01','portfolio_02','portfolio_03','portfolio_04','portfolio_05','profile',],              /*풀페이지에서 페이지 번호 정해주기*/
    afterLoad:function(origin, destination, direction){
        let idx=destination.index;                                 /*<-afterLoad가 실행될때 이름을 붙이는거라 안쪽에 넣고 섹션은 매번 해야하니까 바깥쪽에!*/
        sc.eq(idx).addClass("on").siblings().removeClass('on');
    },

});
    
    
    
    
    
    
    
//-----------------------------------------------------------------
});