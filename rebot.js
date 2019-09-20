// ==UserScript==
// @name    robot
// @version  1
// @grant    none
// @author  Chris Tsang
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

console.info("Starting....");
autoToBottom("ghx-pool");
autoRefresh(15);
console.info("Ending....");


function autoToBottom(key) {
    setInterval(function () {
        var ele = document.getElementById(key);
        let dy = (ele.scrollTop + 1) / 4; // 每次更新scrollTop改变的大小            
        ele.scrollTop += 300;//Math.max(dy, 100);
        setTimeout(() => {
            autoToBottom(ele, dy);
        }, 3000);
    }, 5000);  // 1000为间隔时间，单位毫秒
}

function autoRefresh(seconds) {

    setInterval(function () {
        document.getElementById("ghx-pool").scrollTop = -999;
        location.reload();
    }, seconds * 1000);

}



