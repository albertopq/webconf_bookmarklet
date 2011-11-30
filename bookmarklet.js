
	status = "<div style='padding:20px;position:fixed;top:0;width=100%;text-align:center;background-color:#33FF33' id='status'>CALLING</div>";
	$('body').append(status);
	var phono = $.phono({
        apiKey: "f23e2f3f90bb6606ec07870343d48717",
        onReady: function() {
          	phono.phone.dial("app:9996163283", {
				headers: [{
			           name:"x-url",
			           value:document.location
			         }],
	          onRing: function() {
				$("#status").html("RINGING");
	          },
	          onAnswer: function() {
				$("#status").html("JOINED");
	          },
	          onHangup: function() {

	          }});
        }
      });