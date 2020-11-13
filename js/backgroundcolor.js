//Sets the background color on all main goals
//More colors can be added

const colors = ['#35b729', '#b12093', '#0065b9', '#fac712', '#7733e6', '#ff0600',
    '#44444E', '#0F4B31', '#f85836', '#A50A45'
];

export function setBackgroundColor() {
    const goals = document.querySelectorAll('.main-goal');
    let number = 0;
    goals.forEach(function(goal) {
        let color = colors[number];
        goal.style.backgroundColor = color;
        number++;
        if (number === colors.length - 1) {
            number = 0;
        }
    });
}