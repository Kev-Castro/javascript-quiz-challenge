function gameOver() {
    main_el.innerHTML = '';

    var section2 = document.createElement('section');

    section2.classList.add('section_center');
    main_el.appendChild(section2);

    var gameOver = document.createElement('p');
    gameOver.id = 'gameOver';
    section2.appendChild(gameOver);
    gameOver.textContent = 'GAME OVER!';

    var allDone = document.createElement('h1');
    section2.appendChild(allDone);
    allDone.textContent = 'All done!';

    var finalScore = document.createElement('p');
    section2.appendChild(finalScore);
    finalScore.textContent = 'Your final Score is: ' + currentScore;

    var form = document.createElement('form');
    section2.appendChild(form);
    form.id = 'score-form';

    var label = document.createElement('label');
    form.appendChild(label);
    label.textContent = 'Enter your Initials: ';

    var input_box = document.createElement('input');
    input_box.type = 'text';
    input_box.id = 'inputName';
    form.appendChild(input_box);

    label.id = 'inputName';

    var submit_btn = document.createElement('button');
    var submit_btn = document.createElement('a');
    form.appendChild(submit_btn);

    submit_btn.textContent = 'Submit';
    submit_btn.id = 'submit_btn';
    submit_btn.href = 'highscore.html';

    var go_back = document.createElement('a');
    form.appendChild(go_back);
    go_back.textContent = 'Retake Quiz';

    go_back.id = 'go_back_btn';
    go_back.href = 'index.html';

    var scoreForm = document.querySelector('#score-form');
    scoreForm.addEventListener('submit', addScore);

    function getScores() {
        return JSON.parse(localStorage.getItem('scores')) || [];
    }

    function addScore(eventObj) {
        eventObj.preventDefault();

        var nameInput = document.querySelector('#inputName');

        var scoreObject = {
            initials: input_box.value,
            finalScore: currentScore
        };
        var scores = getScores();
        scores.push(scoreObject);
        localStorage.setItem('scores', JSON.stringify(scores));
        input_box.value = '';
    };

    function showScores() {
        mainEl = '';
        var section2 = document.createElement('section');

        section2.classList.add('section_center');
        main_el.appendChild(section2);

        var hsText = document.createElement('h1');
        hsText.textContent = 'Submitted Scores'
    }
};
