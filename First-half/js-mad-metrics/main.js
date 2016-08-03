
// What percentage of the page was viewed
// Total Distance Scrolled

// Time spent on each section of the page

var start = Date.now()
var signtime
var clicktime
var totaltime


// Time before clicking Sign Up

 document.getElementById("signup").onclick = function() {
            signtime = Date.now()
            clicktime = (signtime - start) / 1000
            return clicktime;
        }
        
// Time spent on page

document.getElementById("collector").onclick = function() {
    totaltime = (Date.now() - start) / 1000;
    return alert("It took " + clicktime + " seconds to click signup." + "And they have been on the page for " + totaltime + " seconds");
}