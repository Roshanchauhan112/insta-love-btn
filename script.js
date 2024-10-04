var con = document.querySelector("#container")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    love.style.transform = ' translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.8

    setTimeout(function(){
        love.style.opacity= 0;
    },1000)

    setTimeout(function(){
        love.style.transform = ' translate(-50%,-50%) scale(0)';
    },2000)
});


var likebtn = document.querySelector("#add")

var like1 = 0

likebtn.addEventListener("dblclick",function(){
if(like1 === 0 ){
    likebtn.innerHTML = "liked"
    likebtn.style.backgroundColor = "red"
    like1 = 2
}
else{
    likebtn.innerHTML = "like"
    likebtn.style.backgroundColor = "rgb(25, 172, 103)"
    like1 = 0
}
    // console.log("fuck");
})

