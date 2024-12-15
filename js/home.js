if(document.getElementById("headline-animation")){
    let animationIndex = 0;
    const textElements = [
        document.getElementById("text1"),
        document.getElementById("text2"),
        document.getElementById("text3")
    ];
    function headlineAnimation(){
        switch(animationIndex){
            case 0:
                textElements[0].classList.replace("in-place", "under-place");
                textElements[1].classList.replace("under-place", "upper-place");
                textElements[2].classList.replace("upper-place", "in-place");
                break;
            case 1:
                textElements[2].classList.replace("in-place", "under-place");
                textElements[0].classList.replace("under-place", "upper-place");
                textElements[1].classList.replace("upper-place", "in-place");
                break;
            default:
                textElements[1].classList.replace("in-place", "under-place");
                textElements[2].classList.replace("under-place", "upper-place");
                textElements[0].classList.replace("upper-place", "in-place");
                break;
        }
        animationIndex++;
        if(animationIndex > 2){animationIndex = 0;}
    }
    setInterval(headlineAnimation, 3000);
}