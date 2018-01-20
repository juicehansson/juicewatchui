function onDocumentReady() {

    let circle = document.getElementById("watch");

    //circle.addEventListener('pointerup', onPointerUp);
    // circle.addEventListener('touchstart' && 'pointerdown', onPointerDown);
    circle.addEventListener('pointermove', onPointerMove);
    //  circle.addEventListener('touchcancel' && 'pointerleave', onPointerLeave);
}

function onPointerUp(evt) {
    let circle = getOrCreate(evt);
}

function onPointerDown(evt) {
    let circle = getOrCreate(evt);
    onPointerMove();
}

function onPointerLeave(evt) {
    let circle = getOrCreate(evt);
    document.body.removeChild(circle);
}

function onPointerMove(evt) {
    let circle = getOrCreate(evt);
    console.log(evt.pointerId);

    // Position the element from its middle
    let rect = circle.getBoundingClientRect();
    circle.style.left = (evt.clientX - rect.width / 2) + 'px';
    circle.style.top = (evt.clientY - rect.height / 2) + 'px';
}


// Returns an existing element for a pointer id, or makes a new one
function getOrCreate(evt) {
    const id = 'pointer-' + evt.pointerId;
    let circle = document.getElementById(id);
    //if (circle) return circle;
    circle = document.createElement('div');
    circle.classList.add('pointer');
    circle.id = id;
    document.body.appendChild(circle);
    return circle;
}

function movePointer(evt) {

}


if (document.readyState != 'loading') onDocumentReady();

else document.addEventListener('DOMContentLoaded', onDocumentReady);