
let r = 80,
    arc = (x, y, s) => `A${r},${r},0,0,${s},${x},${y}`,
    path = (i, d) => `<path transform='rotate(${i / + 5 * 360})' ${d}></path>`;

function upd(val) {

    let step = Math.PI * (0.5 + 2 / + 5);
    let p1x = Math.cos(step) * r;
    let p1y = Math.sin(step) * r;
    let cos = Math.cos(-val);
    let sin = Math.sin(-val);
    let c1x = p1x - cos * p1x - sin * p1y;
    let c1y = p1y - cos * p1y + sin * p1x;
    let dx = - sin * r - c1x;
    let dy = r - cos * r - c1y;
    let dc = Math.sqrt(dx * dx + dy * dy);
    let a = Math.atan2(dy, dx) - Math.acos(dc / 2 / r);
    let x = c1x + Math.cos(a) * r;
    let y = c1y + Math.sin(a) * r;

    let edge = `M${p1x},${p1y}${arc(0, r, 0)}${arc(x, y, 1)}`;
    edges.innerHTML = bodies.innerHTML = '';
    for (let i = 0; i < +6; i++) {
        edges.innerHTML += path(i, `fill=none stroke-width="5" stroke=black d='${edge}'`);
        bodies.innerHTML += path(i, `fill=white d='${edge}${arc(p1x, p1y, 0)}'`);
    }
};

upd(1);
setTimeout(printDiafragma, 2400, 100, 20);
setTimeout(printDiafragma, 3250, 30, 75);

// addEventListener('mousemove', e => upd(e.y / innerHeight * 1.04));

function printDiafragma(from, to) {
    let current = from;

    if (from > to) {
        let timerId = setInterval(function () {
            console.log(current)
            if (current == to) {
                clearInterval(timerId);
            }
            upd(current / 100);
            current -= 1;
        }, 8);
    } else {
        let timerId = setInterval(function () {
            console.log(current)
            if (current == to) {
                clearInterval(timerId);
            }
            upd(current / 100);
            current += 1;
        }, 12);
    }
}
