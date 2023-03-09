var drop_btn = null
drop_down = document.getElementById("noi_dung");
bodypage = document.getElementById("bodypage");

function OnmouseOver(id){
    if(id == "nut_dropdown_mans"){
        drop_down.setAttribute("value", 1)
    }
    if(id == "nut_dropdown_womans"){
        drop_down.setAttribute("value", 2)
    }
    if(id == "nut_dropdown_kids"){
        drop_down.setAttribute("value" ,3)
    }

    drop_btn = document.getElementById(id);
    drop_btn.style.opacity = 1;
    drop_btn.style.visibility = "visible"
    drop_btn.style = "border-bottom: 2px solid black";
    if(bodypage != null){
        bodypage.style.opacity = 0.5;
    }

    drop_down.style.opacity = 1;
    drop_down.style.visibility = "visible"
    drop_down.onmouseover = function(){
        if(id == "nut_dropdown_mans"){
            drop_down.setAttribute("value", 1)
        }
        if(id == "nut_dropdown_womans"){
            drop_down.setAttribute("value", 2)
        }
        if(id == "nut_dropdown_kids"){
            drop_down.setAttribute("value" ,3)
        }
        drop_down.style.opacity = 1;
        if(bodypage != null){
            bodypage.style.opacity = 0.5;
        }
        drop_down.style.visibility = "visible"
        drop_btn.style = "border-bottom: 2px solid black";
    }
}

function OnmouseOut(id){
    drop_btn = document.getElementById(id);
    drop_btn.style.opacity = 0;
    if(bodypage != null){
        bodypage.style.opacity = 1;
    }
    drop_btn.style.visibility = "hidden"
    drop_btn.style = "border-bottom: 0px";

    drop_down.style.opacity = 0;
    drop_down.style.visibility = "hidden"
    drop_down.onmouseout = function(){
        drop_down.style.opacity = 0;
        if(bodypage != null){
            bodypage.style.opacity = 1;
        }
        drop_down.style.visibility = "hidden"
        drop_btn.style = "border-bottom: 0px";
        drop_down.setAttribute("value", "none")
    }
}
document.addEventListener("touchstart", function(){}, true);





