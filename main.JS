const searchForm = document.querySelector("#microfono");

function mostrar() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            document.getElementById("imagen").src = reader.result;
            const imagen = document.getElementById("imagen");

        }
    }

}

$("#typeText").change(function(){
          var url = $(this).val();    
          document.getElementById("imagen").src = url;
          $("#img").html('<img src="'+ url +'" alt="imagen">')

       })

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    console.log("Your Browser supports speech Recognition");

    searchForm.insertAdjacentHTML("beforeend", '<center><button type="button"><i class="fas fa-microphone"></i></button></center>');
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "es-MX";
    recognition.start();
    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick() {
        if (micIcon.classList.contains("fa-microphone")) {
            recognition.start();
        }
        else {
            recognition.stop();
        }
    }

    recognition.addEventListener("start", startSpeechRecognition);
    function startSpeechRecognition() {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        console.log("Speech Recognition Active");
    }

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        console.log("Speech Recognition Disconnected");
    }

    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition() {
        const currentResultIndex = event.resultIndex;
        const transcript = event.results[currentResultIndex][0].transcript;

if(transcript.toLowerCase().trim()==="ayuda del sitio") {
      window.open("Ayuda.html" , "ventana1" , "width=1920,height=1080,scrollbars=NO")
    }
    
    if(transcript.toLowerCase().trim()==="salir del sitio") {
     //window.close(); 
      var mensaje;
      var opcion = confirm("da clic en aceptar para salir");     
      if (opcion == true) {
         mensaje = "Gracias";
         window.close();     //window.close();
         recognition.stop();
    } else {
        mensaje = "Has clickado Cancelar";
    }document.getElementById("ejemplo").innerHTML = mensaje;
  }


        if (transcript.toLowerCase().trim() === "aumento") {
            var t1 = just.animate({
                targets: ".ball",
                duration: 2000,
                web: {                 
                    transform: [
                        { offset: 0.3, value: "scale(.500, .500)" },
                           { offset: 0.4, value: "scale(2, 2)" },
                           { offset: 0.5, value: "scale(.19, .67)" },
                           { offset: 1, value: "scale(1, 1)" }  
                    ]
                }
            });
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "maroma") {
            const v = document.querySelector(".ball").animate(
                [
                  {transform: "rotate(0)"},
                  { offset: 0.5, value: "scale(.19, .67)" }, 
                  {transform: "rotate(360 deg)"},
                  { offset: 1, value: "scale(1, 1)" }                   
                ],
                {
                  duration: 1000, fill: "forwards"
                }
              );
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "desaparece") {
            var t1 = just.animate({
                targets: ".ball",
                duration: 3000,
                web: {
                    opacity: [1, 0, 1]
                    
                }
            });
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "loco") {
            const v = document.querySelector(".ball").animate(
                [
                  {transform: "rotate(100deg)"},
                  {transform: "rotate(15deg)"},
                  {transform: "rotate(1200deg)"},
                  {transform: "rotate(5deg)"},
                  {transform: "rotate(2deg)"},
                  {transform: "rotate(250deg)"},
                  {transform: "rotate(-360deg)"},
                  {transform: "rotate(0deg)"},
                  {transform: "rotate(-150deg)"},
                  {transform: "rotate(-2deg)"},
                  {transform: "rotate(0)"}
                ],
                {
                  duration: 3000, fill: "forwards"
                }
              );
            t1.play();
        }
        else if (transcript.toLowerCase().trim() === "voltea") {
            const v = document.querySelector(".ball").animate(
                [
                  {transform: "rotate(0)"},
                  {transform: "rotate(-180deg)"}
                ],
                {
                  duration: 2500, fill: "forwards"
                }
              );
            t1.play();
        }
        
        else if (transcript.toLowerCase().trim() === "deforma") {
            const v = document.querySelector(".ball").animate(
                [
                  {transform: "translate(0)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(-30deg)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(90deg)"},
                  {transform: "translate(200)"},
                  {transform: "skewX(-90deg)"},
                  {transform: "translate(0)"},
                  {transform: "skewY(-360deg)"}
                  
                ],
                {
                  duration: 1500, fill: "forwards"
                }
              );
            t1.play();
        }
        if(transcript.toLowerCase().trim()==="aplasta"){
            var t1 = just.animate({
              targets: ".ball",
              duration: 1200,
              web: {
                  transform: [
                    { offset: 0, value: "scale(1, 1)" },
                    { offset: 0.3, value: "scale(2, .10)" },
                    { offset: 0.4, value: "scale(.50, 1.25)" },
                    { offset: 0.5, value: "scale(1.5, .80)" },
                    { offset: 0.65, value: "scale(.75, 1.15)" },
                    { offset: 0.75, value: "scale(1.25, .85)" },
                    { offset: 0.80, value: "scale(.85, 1.10)" },
                    { offset: 0.85, value: "scale(1.15, .90)" },
                    { offset: 0.90, value: "scale(.95, 1.05)" },
                    { offset: 0.95, value: "scale(1.05, .95)" },
                    { offset: 1, value: "scale(1, 1)" },
                    { offset: 0, value: "scale(1, 1)" }
                  ]
              }
            });
            t1.play();
        }
        if(transcript.toLowerCase().trim()==="vete"){
            const v = document.querySelector(".ball").animate(
                [
                {transform: "translateY(0)"},
                {transform: "translateX(0)"},
                {transform: "translateX(200px)"},
                {transform: "translateY(300px)"}
                ],

                {
                    duration: 1000, fill: "forwards"
                }
            );
             t1.play();
            }
             if (transcript.toLowerCase().trim() === "vuelve") {
                const v = document.querySelector(".ball").animate(
                [
                {transform: "translateY(0)"},
                {transform: "translateX(0)"},
                {transform: "translateX(-20px)"},
                {transform: "translateY(-30px)"}
                ],

                {
                    duration: 1000, fill: "forwards"
                }
                );
                   t1.play();            
        }
        if (transcript.toLowerCase().trim() === "dona"){
            const v = document.querySelector(".ball").animate(
                [
                {transform: "translateX(300px)"},
                {transform: "translateY(300px)"},
                {transform: "translateX(-300px)"},
                {transform: "translateY(-300px)"},
                {transform: "translateX(300px)"},
                {transform: "translateY(300px)"},
                {transform: "translateX(-300px)"},
                {transform: "translateY(-300px)"},
                {transform: "translateX(0px)"},
                {transform: "translateY(0px)"}
                ],

                {
                    duration: 1000, fill: "forwards"
                }
            );
             t1.play();
            }  
         console.log(event);
 
     }
 }

else {
    console.log("Your Browser does not support speech Recognition");
}