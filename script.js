
//mobile menu start
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});
//mobile menu end

//themes start
const themeicon = document.getElementById("themeicon");

if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark")
}

let localData = localStorage.getItem("theme")

if(localData == "dark") {
    themeicon.src = "img/sun.png";
    document.body.classList.remove("light-theme")
} else if (localData == "light") {
    themeicon.src = "img/moon.png";
    document.body.classList.add("light-theme")
}

themeicon.onclick = function() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains("light-theme")) {
        themeicon.src = "img/moon.png"
        localStorage.setItem("theme", "light")
        
    } else {
        themeicon.src = "img/sun.png"
        localStorage.setItem("theme", "dark")
    }
}

//for mobile
const themeiconm = document.getElementById("themeiconm");

if(localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark")
}

let localDataMobile = localStorage.getItem("theme")

if(localDataMobile == "dark") {
    themeiconm.src = "img/sun.png";
    document.body.classList.remove("light-theme")
} else if (localDataMobile == "light") {
    themeiconm.src = "img/moon.png";
    document.body.classList.add("light-theme")
}

themeiconm.onclick = function() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains("light-theme")) {
        themeiconm.src = "img/moon.png"
        localStorage.setItem("theme", "light")

    } else {
        themeiconm.src = "img/sun.png"
        localStorage.setItem("theme", "dark")
    }
}
//themes end

window.addEventListener('scroll', function() {
    const packages = document.querySelector('.packages');
    const packagesPosition = packages.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (packagesPosition < windowHeight) {
      packages.style.opacity = 1;
      packages.style.transform = 'translateY(0)';
    }

  });
  
