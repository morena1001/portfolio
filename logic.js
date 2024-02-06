// Buttons for projects section
document.getElementById("buttons").addEventListener("click", function(event) {
    console.log(event.target.tagName);
    if (event.target.tagName == "BUTTON" || event.target.tagName == "SPAN") {
        var buttonFilter = event.target.tagName == "BUTTON" ? event.target.id : event.target.parentElement.id;
        var projectItems = document.getElementsByClassName("project-item");

        if(buttonFilter == "all") {
            for (let i = 0; i < projectItems.length; i++) {
                projectItems[i].setAttribute("style", "display: inline");
            };
        }

        else if(buttonFilter == "web") {
            for (let i = 0; i < projectItems.length; i++) {
                if (projectItems[i].getAttribute("data-category") == "web") {
                    projectItems[i].setAttribute("style", "display: inline");
                }
                else {
                    projectItems[i].setAttribute("style", "display: none")
                }
            };
        }

        else if(buttonFilter == "other") {
            for (let i = 0; i < projectItems.length; i++) {
                if (projectItems[i].getAttribute("data-category") == "other") {
                    projectItems[i].setAttribute("style", "display: inline");
                }
                else {
                    projectItems[i].setAttribute("style", "display: none")
                }
            };
        }
    }
});


// Buttons for header
document.querySelectorAll('a[href^="#"]').forEach(element  => {
    element.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.filter-button').forEach(element => {
    element.addEventListener("click", function(e) {
        let parent = e.target.id.includes("text") ? e.target.parentElement : e.target;
        let previous = document.getElementById("highlight-project");
        let previousParent = previous.parentElement;

        let underline = document.createElement("canvas");
        underline.setAttribute("class", "highlight-project");
        underline.setAttribute("id", "highlight-project");
        previousParent.removeChild(previousParent.firstElementChild);
        parent.insertBefore(underline, parent.firstElementChild);
    });
});


window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY;

    document.querySelectorAll("section[id]").forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if (scrollValue > sectionTop && scrollValue <= sectionTop + sectionHeight) {
            let parent = document.getElementById(sectionId + "-button parent");
            let previous = document.getElementById("highlight");
            let previousParent = previous.parentElement;


            if (previousParent.id != parent.id) {
                let underline = document.createElement("canvas");
                underline.setAttribute("class", "highlight");
                underline.setAttribute("id", "highlight");
                previousParent.removeChild(previousParent.firstElementChild);
                parent.insertBefore(underline, parent.firstElementChild);

            }
        }
    });   
  });

// document.getElementById("age").innerHTML = Math.floor(Math.abs(new Date() - new Date("2003, 02, 27")) / 3.154e+10);
