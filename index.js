let count = document.getElementById("count")
let add = document.getElementById("add")
let sub= document.getElementById("sub")
let  reset = document.getElementById("reset")

add.addEventListener('click',()=>{
  count.textContent++;
  colorChange()
})


sub.addEventListener('click',()=>{
    count.textContent--;
    colorChange()
  })
  
reset.addEventListener('click',()=>{
    count.textContent = 0;
    colorChange()
  })

function colorChange(){
    if(count.textContent >0){
        count.style.color="green";
    }else if (count.textContent < 0){
        count.style.color="red";
    }else{
        count.style.color="black";
    }
}
  

  