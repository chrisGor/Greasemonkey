// ==UserScript==
// @name    robot
// @version  1
// @grant    none
// @author  Chris Tsang
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

console.info("Starting....");
autoToBottom("ghx-pool-column");
//autoRefresh(15);
console.info("Ending....");


function autoToBottom(id) {
    let add = 0;
    setInterval(function () {
        let ele = document.getElementById(id);
        let top = ele.scrollTop;
        ele.scrollTop += 5;
        if (top == ele.scrollTop) {        
          
          	autoToTop("ghx-pool-column");
          
          
        }

    }, 500);  // 1000为间隔时间，单位毫秒
}

function autoToTop(id){

    setInterval(function () {
        let ele = document.getElementById(id);
        let top = ele.scrollTop;
        ele.scrollTop -= 5;
        if(top == 0){
            location.reload();
        }

    },500);
}




