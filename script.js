var i=0
function abrir(){
    if(i==0){
document.getElementById(`menu`).classList.replace(`menu`, `lista`)
i++
}else{
    document.getElementById(`menu`).classList.replace(`lista`,`menu`)
    i=0
}}
