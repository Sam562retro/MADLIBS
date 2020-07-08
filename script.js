       var libButton = document.getElementById('lib-button');
        var noun = document.getElementById('noun');
        var adjective = document.getElementById('adjective');
        var sname = document.getElementById('person');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            storyDiv.innerHTML = `Helllo, user. You know that you are ${person} and you have a ${adjective} ${noun} `;
        };
        libButton.addEventListener('click', libIt); 
