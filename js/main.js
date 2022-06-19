// Vérifier que le contenu de la page est bien chargée.
// IMPORTANT : Mettre toute notre logique dans cet écouteur
document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
  
    //   Détecter le clique n'importe où sur la page
     // document.addEventListener("click", () => {
       //console.log("cliqué!");
    // });
    document.querySelector("#displayText").addEventListener("click", () => {
        console.log("hello1");
        document.querySelector("#text").classList.remove("hidden");
    });

    document.querySelector("#hideText").addEventListener("click", () => {
        console.log("hello2");
        document.querySelector("#text").classList.add("hidden");
    });

    document.querySelector("#displayHideText").addEventListener("click", () => {
        console.log("hello");
        document.querySelector("#text").classList.toggle("hidden");
    });
   
    // Requête du formulaire -----------------------------------------------------
    document.querySelector("#form").addEventListener("submit", async (event) => {
      event.preventDefault(); // annule le comportement par défaut de rafraichissement
      console.log("submit");
  
      const response = await axios.post("https://form-bknd-ed.herokuapp.com/form", {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      });
  
      console.log("response>>>", response);
    });
  });