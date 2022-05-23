let computeBtn = document.getElementById
("compute-btn");
let result = document.getElementById("result");
let compute = () => {
    let p = Number(document.getElementById("amount").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;

    let simpleInterest = 
        duration == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
   
    let principal = p + simpleInterest;
    
    result.innerHTML = `<div>Principal Amount: <span>$
        ${p.toFixed(
            2
        )}</span></div>
        <div>Total Interest: <span>$${simpleInterest.toFixed(2)}</span></div>
        <div>Total Amount: <span>$${principal.toFixed(2)}</span> </div>`;
};
computeBtn.addEventListener("click", compute);
window.addEventListener("load", compute);
