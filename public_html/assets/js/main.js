
// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});


// validation
function validateName() {
    const name = document.getElementById("contactName");
    console.log('inside validate name');
  
    if (name.value.trim() == "" || !name.value.match(/^[A-Za-z]/)) {
      name.style.border = "2px solid red";
      document.getElementById("invalidName").style.visibility="visible";
      return false;
    } else {
      name.style.border = "none"
      document.getElementById("invalidName").style.visibility = "hidden";
      return true;
    }
  }
  
  function validateEmail() {
    const email = document.getElementById("inputEmail");
    console.log('inside validate email');
  
    if (email.value.trim() == "" || !email.value.match(/^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/)) {
      console.log('matches');
      email.style.border = "2px solid red";
      document.getElementById("invalidEmail").style.visibility = "visible";
      return false;
    } else {
      console.log("not matching");
      email.style.border = "none"
      document.getElementById("invalidEmail").style.visibility = "hidden";
      return true;
    }
  
  }

  function validateMobile(){
    const number= document.getElementById("inputMobile");

    if( number.value.trim() =="" || !number.value.match(/^[0]?[6789]\d{9}$/)) {
        number.style.border="2px solid red";
        document.getElementById("invalidMobile").style.visibility="visible";
        return false;
    }else{
        number.style.border="none";
        document.getElementById("invalidMobile").style.visibility = "hidden";
        return true;

    }
  }
  
  function validateMessage() {
    const message = document.getElementById("inputMessage");
  
    if(message.value.trim() == "") {
      message.style.border = "2px solid red";
      document.getElementById("invalidMessage").style.visibility = "visible";
      return false;
    } else {
      message.style.border = "none"
      document.getElementById("invalidMessage").style.visibility = "hidden";
      return true;
    }
  }
  
  
  
  



// submission
$("#data").submit((e) => {
    e.preventDefault()
    const nameFlag = validateName();
    const emailFlag = validateEmail();
    const messageFlag = validateMessage();
    const mobileFlag = validateMobile();
    if (nameFlag && emailFlag && messageFlag && mobileFlag) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxpICChsXhdZC8OLXtdBgktB5CaWAbLkIIqnQRH_XBbZ9_jFNOkTSfrmEE4bqaY0_B0/exec",
      data: $("#data").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")
  
      }
    })
    }
  })
