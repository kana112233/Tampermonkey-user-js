// ==UserScript==
// @name        点击返回顶部
// @namespace    https://github.com/kana112233/Tampermonkey-user-js/blob/master/%E7%82%B9%E5%87%BB%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8.js
// @version      0.0.1
// @description  click the arrow-up pic to jump to the top of page.
// @author       kana112233
// @include      *
// @match        *
// @grant        none
// @name:zh-CN       点击返回顶部
// @description:zh-CN  点击向上的箭头按钮返回到页面顶部
// ==/UserScript==

(function() {
    console.log('DOM already loaded.');
    if(window.top == window.self){
        var aNode = document.createElement('a');
        aNode.href = 'javascript:;';
        aNode.id = 'click-to-top';
        aNode.title = 'Click it to go to the top';
        var availHeight = window.screen.availHeight; // 获取可用高度
        var css = '#click-to-top{ display:none; position: fixed; right: 0.1%; bottom: 50%; opacity: 0.5; z-index: 9999; } #click-to-top:hover{ position: fixed; right: 0.1%; bottom: 50%; opacity: 30; z-index: 9999; }';
        //滚出一屏以后才显示返回顶部按钮
        window.onscroll = function(){
            var curPos = (document.documentElement.scrollTop == 0) ? document.body.scrollTop : document.documentElement.scrollTop;
            if(curPos > availHeight){
                aNode.style.display = 'block';
            }else {
                aNode.style.display = 'none';
            }
        };
        //图片相关
        var img = document.createElement('img');
        img.src = 'data:image/png;base64,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';
        img.style = 'width: 50px; height: 50px;';
        //样式相关
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
        aNode.append(img);
        aNode.addEventListener('click', function(){
            document.body.scrollIntoView();
        });
        var eBody = document.querySelector('body');
        eBody.append(aNode);
    }

})();
