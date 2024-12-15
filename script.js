
/*   <-- toggle for theme button -->  */
if(document.getElementById("themeToggle")){
    const themeIconLight = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
    `;
    const themeIconDark = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
    `;
    document.addEventListener("DOMContentLoaded", function() {
        let currentTheme = localStorage.getItem("theme") || "dark";
        document.body.setAttribute("data-theme", currentTheme);
        
        /* <-- svg correction for theme button --> */
        if(currentTheme == "dark")
        {
            document.getElementById("themeToggle").innerHTML = themeIconDark;
        }else
        {
            document.getElementById("themeToggle").innerHTML = themeIconLight;
        }
    });
    document.getElementById("themeToggle").addEventListener("click", function() {
        let theme = document.body.getAttribute("data-theme");
        let themeToggle = document.getElementById("themeToggle");
        if (theme == "light") {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = themeIconDark;
            
        } else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = themeIconLight;
        }
    });
};

/*  <-- toggle for language button -->  */
if(document.getElementById("languageToggle")){
    let languageToggle = document.getElementById("languageToggle");
    const activeLanguage = languageToggle.dataset.activelanguage;
    const activeSite = languageToggle.dataset.activesite;

    languageToggle.addEventListener("click", function(){
        if(activeLanguage == "en")
        {
            switch(activeSite){
                case "history":
                    window.location.href = "../de/geschichte.html";
                    break;
                case "events":
                    window.location.href = "../de/veranstaltungen.html";
                    break;
                case "contact":
                    window.location.href = "../de/kontakt.html";
                    break;
                case "imprint":
                    window.location.href = "../de/impressum.html";
                    break;
                case "privacy":
                    window.location.href = "../de/datenschutz.html";
                    break;
                default:
                    window.location.href = "de/start.html";
            }
        }else
        {
            switch(activeSite){
                case "geschichte":
                    window.location.href = "../en/history.html";
                    break;
                case "veranstaltungen":
                    window.location.href = "../en/events.html";
                    break;
                case "kontakt":
                    window.location.href = "../en/contact.html";
                    break;
                case "impressum":
                    window.location.href = "../en/imprint.html";
                    break;
                case "datenschutz":
                    window.location.href = "../en/privacy.html";
                    break;
                default:
                    window.location.href = "../index.html";
            }
        }
    });
}
