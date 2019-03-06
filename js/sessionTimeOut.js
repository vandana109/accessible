$(document).ready(function(){
	var timeoutHandle = null;
	function startTimer(timeoutCount) {
		if (timeoutCount == 0) {
			window.location.href = './ContactUs.html';
		} else if (timeoutCount < 3) {			
			$('#sessionTimer #timeMsg').html('You have ' + (timeoutCount * 3000)/1000 + 'seconds until timeout. Please click Ok button to extend your time limit') ;
			$('#myModal').modal('show').attr("tabindex","0");
		}
		timeoutHandle = setTimeout(function () { 
			startTimer(timeoutCount-1);
			}, '10000');
	}
	/* function refreshTimer() {
		killTimer(timeoutHandle);
		startTimer(3);
	} */
	$("#fName").on("focus",function(){
		startTimer(3);		
	});

});
