const circles = document.querySelectorAll('.circle');
        const startButtonSound = document.getElementById('startButtonSound');
        const BubblesSound = document.getElementById('BubblesSound');
        const gameOverSound = document.getElementById('gameOverSound');

                const nightModeButton = document.getElementById('nightModeButton');
            let isNightMode = false;


        function toggleNightMode() {
            isNightMode = !isNightMode;
            document.body.classList.toggle('night', isNightMode);
           nightModeButton.textContent = isNightMode ? 'Day Mode' : 'Night Mode';

        }

        nightModeButton.addEventListener('click', () => {
            toggleNightMode();
            startButtonSound.play();
        });



        startButton.addEventListener('click', () => {
            startButtonSound.play(); 
            });



        const scoreDisplay = document.getElementById('score');
        const timerDisplay = document.getElementById('timer');
        const gameOverDisplay = document.getElementById('gameOver');
        let score = 0;
        let time = 59;
        let timerInterval;

        function startGame() {
            startButton.disabled = true;
            score = 0;
            time = 59;
            scoreDisplay.textContent = `Score: ${score}`;
            timerDisplay.textContent = `Time: ${time}`;
            scoreDisplay.style.display = 'block';
            timerDisplay.style.display = 'block';
            timerInterval = setInterval(() => {
                time--;
                if (time >= 0) {
                    timerDisplay.textContent = `Time: ${time}`;
                } else {
                    clearInterval(timerInterval);
                    gameOver();
                }
            }, 1000);

            const blackCircles = document.querySelectorAll('.circle:not(.red)');
            const randomIndex = Math.floor(Math.random() * blackCircles.length);
            const randomCircle = blackCircles[randomIndex];
            randomCircle.classList.add('red');
        }

        function gameOver() {
            gameOverDisplay.textContent = `Game Over! Final Score: ${score}`;
            gameOverDisplay.style.display = 'block';
            gameOverSound.play();
        

            setTimeout(() => {
                gameOverDisplay.style.display = 'none';
                startButton.disabled = false;
            }, 10000);

            circles.forEach(circle => {
                circle.classList.remove('red');
            });
        }

        startButton.addEventListener('click', startGame);

        document.addEventListener('click', (event) => {
            const clickedCircle = event.target;
            if (clickedCircle.classList.contains('red')) {
                clickedCircle.classList.remove('red');
                const blackCircles = document.querySelectorAll('.circle:not(.red):not(:hover)');
                const randomIndex = Math.floor(Math.random() * blackCircles.length);
                const randomCircle = blackCircles[randomIndex];
                randomCircle.classList.add('red');
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
                
            }
        });


        function playSound() {
            var audio = document.getElementById("BubblesSound");
            audio.play();
        }