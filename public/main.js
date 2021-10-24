window.onload = function() {
    var x = 0;
    var list = [
        "Aye you clicked it!",
        "You clicked it twice!",
        "Now thrice!",
        "Fourth..!",
        "Fifth...",
        "Six.....",
        "Uhhhhhhhh....",
	"Ummmmmmmm....",
        "Why are you still clicking it",
        "Go back to your assignments",
        "Are you bored?"
    ];
    title = document.getElementById("title");
    dev = document.getElementById("dev");
    button = document.getElementById("ok");
    number = document.getElementById("number");
    button.addEventListener("click", function() {
        number.innerHTML = x < list.length ? list[x] : (x < 50 ? `You clicked ${x} times...` : `YOU CLICKED ${x} TIMES STOPPP`);
        if (x > 99) {
            title.innerHTML = "I SAID WAIT";
        }
        if (x > 149) {
            dev.innerHTML = "Are you okay there???"
        }
        if (x > 199) {
            alert("GO AWAY YOU MONSTER AWJKEFOAWEJFIAWEJIFJ");
            window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
        x++;
    });
}
