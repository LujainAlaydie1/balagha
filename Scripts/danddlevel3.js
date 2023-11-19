 function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.textContent);
            ev.dataTransfer.setData("id", ev.target.id);
        }

        function allowDrop(ev) {
            ev.preventDefault();
        }
        var droppedCount = 0;

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var id = ev.dataTransfer.getData("id");
    var target = ev.target;

    if (target.classList.contains("meaning")) {
        var correctWord = target.getAttribute("data-correct");
        var spanId = target.querySelector('span').id;

        if (data === correctWord) {
            target.querySelector('span').textContent = data;
            document.getElementById(spanId).style.color = "#fff";
            document.getElementById(id).style.display = "none";
            droppedCount++;

            if (droppedCount === 4) {
                setTimeout(checkAllMatched, 100);
            }
        }
    }
}

// Add this to your existing JavaScript
function openModal() {
    location.href = "#myModal"; // Redirect to the modal's ID in the URL
}

function closeModal() {
    location.href = "index.html"; // Redirect to the main page to close the modal
}

function checkAllMatched() {
    var meanings = document.querySelectorAll('.meaning span');
    var allMatched = true;

    meanings.forEach(function (span) {
        if (span.textContent !== span.getAttribute("data-correct")) {
            allMatched = true;
        }
    });

    if (allMatched) {
        openModal();
    }
}

  