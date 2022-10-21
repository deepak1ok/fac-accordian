const question = document.querySelectorAll('.question');
// const qstn = document.querySelectorAll('.slider_content');
for (let i = 1; i <= question.length; i++) {
    const qstn = document.querySelector(`.question-${i}`);

    qstn.addEventListener('click', () => {
        document.querySelector(`.ans-${i}`).classList.toggle('show');
        document.querySelector(`.arrow-${i}`).classList.toggle('animation');
        document.querySelector(`.question-${i}`).classList.toggle('font_theme');
    })
}

// for (let i = 1; i <= 5; i++) {
//     document.querySelector(`.question-${i}`).addEventListener('click', function() {
//         document.querySelector(`.ans-${i}`).classList.toggle('show');
//         console.log(i);
//     })
// }