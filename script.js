// Welcome message
console.log("👑 Welcome to TheRoyalSMP");

// Fade-in animation for cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
});

cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all 0.6s ease";
observer.observe(card);
});

// Animated online status
const status = document.getElementById("status");

setInterval(()=>{
status.style.opacity="0.4";

setTimeout(()=>{
status.style.opacity="1";
},500);

},1000);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});
});

// Dynamic copyright year
const footer=document.querySelector("footer p");
if(footer){
footer.innerHTML=`© ${new Date().getFullYear()} TheRoyalSMP • All Rights Reserved`;
}
// Dynamic copyright year
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} TheRoyalSMP`;
}

// 👇 Paste the new server status code HERE

async function updateServerStatus() {
    try {
        const response = await fetch("https://api.mcsrvstat.us/bedrock/3/theroyalsmp9.mcsh.io");
        const data = await response.json();

        if (data.online) {
            document.getElementById("status").innerHTML = "🟢 Online";
            document.getElementById("players").innerHTML = data.players ? data.players.online : "0";
        } else {
            document.getElementById("status").innerHTML = "🔴 Offline";
            document.getElementById("players").innerHTML = "0";
        }
    } catch (e) {
        document.getElementById("status").innerHTML = "❓ Error";
        document.getElementById("players").innerHTML = "-";
    }
}

updateServerStatus();
setInterval(updateServerStatus, 30000);
particlesJS("particles-js",{
  particles:{
    number:{value:80},
    color:{value:"#FFD700"},
    shape:{type:"circle"},
    opacity:{value:0.5},
    size:{value:3},
    line_linked:{
      enable:true,
      distance:150,
      color:"#FFD700",
      opacity:0.4,
      width:1
    },
    move:{
      enable:true,
      speed:2
    }
  },
  interactivity:{
    events:{
      onhover:{enable:true,mode:"repulse"},
      onclick:{enable:true,mode:"push"}
    },
    modes:{
      repulse:{distance:100},
      push:{particles_nb:4}
    }
  }
});
