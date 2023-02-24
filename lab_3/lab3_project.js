var k = 1
function Add(){
    var a = document.getElementById("input_1").value;
    let div1 = document.createElement('div');
    div1.id = `div_4_${k}`;
    div1.className = "div_4";
    div1.innerHTML = `<input id="u_${k}" type="checkbox" class="u" onClick="Underline(this)"> <p id="p_${k}">${a}</p> <button id="${k}" class="k" onClick="Delete(this)"></button>`;
    var div3 = document.getElementById("div_3");
    div_3.appendChild(div1);
    k++;
}
function Delete(button){
    var a = button.id;
    var deleting = document.getElementById(`div_4_${a}`);
    deleting.remove();
}
function Underline(button){
    var a = String(button.id);
    a = a.split("_").pop();
    if (document.getElementById(`p_${a}`).style.textDecoration != "line-through"){
        document.getElementById(`p_${a}`).style.textDecoration = "line-through";
    }
    else{
        document.getElementById(`p_${a}`).style.textDecoration = "none";
    }

}