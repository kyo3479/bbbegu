
const good = ["김범준","우승연","안준후","백주호","전수현","김나영","성예영","정안나"];


function print(){
    const user_id = document.getElementById("iname").value;
    console.log(user_id)
    if (good.includes(user_id)){
        document.getElementById("result").innerText = "합격입니다!";
    }else if(user_id === ""){
        document.getElementById("result").innerText = ""
    }else{
        document.getElementById("result").innerText = "불합격입니다 아쉽군요.";
    }
    
}