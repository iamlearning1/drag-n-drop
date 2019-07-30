const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", function() {
	fill.classList.add("hold");
	setTimeout(() => {
		fill.classList.add("invisible");
	}, 0);
});

fill.addEventListener("dragend", function() {
	fill.classList.remove("invisible");
	fill.classList.remove("hold");
});

empties.forEach(empty => {
	empty.addEventListener("dragover", function(event) {
		event.preventDefault();
	});

	empty.addEventListener("dragenter", function(event) {
		event.preventDefault();
		empty.classList.add("hovered");
	});

	empty.addEventListener("dragleave", function() {
		empty.classList.remove("hovered");
	});

	empty.addEventListener("drop", function() {
		empty.append(fill);
	});
});
