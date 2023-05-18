function OpenSelection(){
  document.getElementById("interaction").style.display = "block";
  document.getElementById('id01').style.display='block'
  document.getElementById("DDO").style.display = "none";
  document.getElementById("PK").style.display = "none";
  }
  var modal = document.getElementById('id01');
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
   function afficherCalendrier() {
           document.getElementById("interaction").style.display = "none";
        var Location = document.getElementsByName('Location');
        for (var i = 0; i < Location.length; i++) {
          if (Location[i].checked) {
            var strLocation = Location[i].value;
          }
        }
        switch (strLocation) {
          case "D":
            console.log("dollard-des-ormeaux");
                  document.getElementById("DDO").style.display = "block";
                 document.getElementById("PK").style.display = "none";
            break;
  
            break;
          case "PK":
          console.log("pierrefonds ou Kirkland");
                 document.getElementById("PK").style.display = "block";
                 document.getElementById("DDO").style.display = "none";
  
            break;
  
          default:
            alert("Please select a location to continue")
            document.getElementById("interaction").style.display = "block";
            break;
        }
      }
