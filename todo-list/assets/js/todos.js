//Put a line through the todo that you've done
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//Delete the todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Store value from input and add value/string to list
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "<li>");
	}
});

// Click the box to create a todo
$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle()
});
