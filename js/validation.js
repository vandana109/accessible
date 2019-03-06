var submitted="";
$(document).ready(function () {

    var form = $("#ContactForm");
    var fName = $("#fName");
    var fnameInfo = $("#fnameInfo");
    var lName = $("#lName");
    var lnameInfo = $("#lnameInfo");
    var eMail = $("#eMail");
    var eMailInfo = $("#eMailInfo");
    var subject = $("#subject");
    var subjectInfo = $("#subjectInfo");    
    var message = $("#message");
    var messageInfo = $("#messageInfo");  
    var numbers = /^[0-9]+$/; 
   
    //On Submitting
    form.submit(function (e) {
		submitted = true;
        if (validatefName() & validatelName() & validateEmail() & validateSubject() & validateMessage())
		{	 e.preventDefault();
				$( '#ContactForm' ).each(function(){
					this.reset();
				});
			$(".formSubmitText").text("Thanks for contacting").attr("tabindex","-1").focus();
		}	
        else
		
			$("#ContactForm").find("input").each(function(){
					if($(this).hasClass("error"))
					{
						$(this).focus();
						return false;
					}
			});
            return false;
    });


	function validatefName() { //For First Name
        //if it's NOT valid
        if (fName.val().length < 1) {
            fName.addClass("error");//.attr("aria-describedby","fnameInfo");
			//fnameInfo.attr("role","alert");
            fnameInfo.html("<img src='images/error.png' height='15' width='15' alt='Error' /><span>Please enter your First Name</span>");
            fnameInfo.addClass("error");
            fName.attr("aria-invalid","true");
            return false;
        }
        //if it's valid
        else {
            fName.removeClass("error");//.removeAttr("aria-describedby");
            fnameInfo.html("");
            fnameInfo.removeClass("error");
			fName.attr("aria-invalid","false");
            return true;
        }
    }

    function validatelName() { //For Last Name
        //if it's NOT valid
        if (lName.val().length < 1) {
            lName.addClass("error");//.attr("aria-describedby","lnameInfo");;
            lnameInfo.html("<img src='images/error.png' height='15' width='15' alt='Error' /><span>Please enter your last name</span>");
            lnameInfo.addClass("error");
			lName.attr("aria-invalid","true");
            return false;
        }
        //if it's valid
        else {
            lName.removeClass("error");//.removeAttr("aria-describedby");
            lnameInfo.html("");
            lnameInfo.removeClass("error");
			lName.attr("aria-invalid","false");
            return true;
        }
    }
	
    function validateEmail() { // For Email Address
        //testing regular expression
        var a = $("#eMail").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        //if it's valid email
        if (filter.test(a)) {
            eMail.removeClass("error");//.removeAttr("aria-describedby");
            eMailInfo.html("");
            eMailInfo.removeClass("error");
			eMail.attr("aria-invalid","true");
            return true;
        }
        //if it's NOT valid
        else {
            eMail.addClass("error");//.attr("aria-describedby","eMailInfo");;
            eMailInfo.html("<img src='images/error.png' height='15' width='15' alt='Error' /><span>Please enter valid E-mail address</span>");
            eMailInfo.addClass("error");
			eMail.attr("aria-invalid","false");
            return false;
        }
    }

    function validateSubject() { //For Subject
        //if it's NOT valid
        if (subject.val().length < 1) {
            subject.addClass("error");//.attr("aria-describedby","subjectInfo");;
            subjectInfo.html("<img src='images/error.png' height='15' width='15' alt='Error' /><span>Please enter the subject</span>");
            subjectInfo.addClass("error");
			subject.attr("aria-invalid","true");
            return false;
        }
        //if it's valid
        else {
            subject.removeClass("error");//.removeAttr("aria-describedby");
            subjectInfo.html("");
            subjectInfo.removeClass("error");
			subject.attr("aria-invalid","false");
            return true;
        }
    }

    function validateMessage() { //For Message
        //if it's NOT valid
        if (message.val().length < 4) {
            message.addClass("error");//.attr("aria-describedby","messageInfo");;
            messageInfo.html("<img src='images/error.png' height='15' width='15' alt='Error' /><span>Please enter your Message</span>");
            messageInfo.addClass("error");
			message.attr("aria-invalid","true");
            return false;
        }
        //if it's valid
        else {
            message.removeClass("error");//.removeAttr("aria-describedby");
            messageInfo.html("");
            messageInfo.removeClass("error");
			message.attr("aria-invalid","false");
            return true;
        }
    }
   

});