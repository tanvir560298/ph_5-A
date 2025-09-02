const hearts = document.querySelectorAll(".heart-btn");

for(let heart of hearts)
{
    heart.addEventListener("click", function(){
      const lifeline = document.getElementById("life").innerText;
      const lifeIncrease = Number(lifeline) + 1;
      document.getElementById("life").innerText=lifeIncrease;
    })
}


// calling section progamming 

function CallBtnClick(event) {
  let coinStorage = Number(document.getElementById("coin-storage").innerText);

  if (coinStorage < 20) {
    alert("Not enough coins");
    return;
  }
  coinStorage -= 20;
  document.getElementById("coin-storage").innerText = coinStorage;

    
  let divAdder = event.currentTarget;
  const temp = divAdder.id;

  let heading = document.getElementById(temp).parentElement.parentElement.children[1].children[0].innerText;
  let paragraph = document.getElementById(temp).parentElement.parentElement.children[1].children[2].innerText;
  
  let alertHeading =document.getElementById(temp).parentElement.parentElement.children[1].children[1].innerText;

  alert(" 📞 Calling " + heading + " "+ paragraph);


  let newDiv = document.createElement("div");
  newDiv.innerHTML =
  `
  <div class="addingdiv w-full h-20 bg-[#fafafa] mt-5 rounded-lg flex p-2 gap-3 justify-between items-center">
        <div>
            <h2 class="font-bold">${heading}</h2>
            <p class = "text-gray-500" >${paragraph}</p>
        </div>
        <div class="clock">

        </div>
  `;
  let tm = divAdder.parentElement.parentElement.parentElement.parentElement.children[1].children[1];
  console.log(tm)
  tm.appendChild(newDiv);

  const clockDiv= newDiv.querySelector(".clock");


  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let time = hours + " : " + minutes + " : " + seconds;
    clockDiv.innerText = time;
  }
  updateClock();




}

document.getElementById("call-btn-1").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-2").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-3").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-4").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-5").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-6").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-7").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-8").addEventListener("click", CallBtnClick);
document.getElementById("call-btn-9").addEventListener("click", CallBtnClick);

// copy button 

function CopyBtnClick(event) {
  let button = event.currentTarget; 
  let receive = button.parentElement.parentElement.children[1].children[2].innerText;
  navigator.clipboard.writeText(receive);
  let storageCopy = document.getElementById("copy-nav-btn").innerText;
  document.getElementById("copy-nav-btn").innerText = Number(storageCopy) + 1;

}

document.getElementById("copy-btn-1").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-2").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-3").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-4").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-5").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-6").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-7").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-8").addEventListener("click", CopyBtnClick);
document.getElementById("copy-btn-9").addEventListener("click", CopyBtnClick);

// clear button task

const ClearBtn = document.getElementById("clear").addEventListener("click",function()
{
  document.getElementById("massage-store-div").innerHTML =
  ``
});
console.log(ClearBtn);




