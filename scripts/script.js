document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

// Create the cursor and cursor-shadow elements
const cursor = document.createElement('div');
const cursorShadow = document.createElement('div');
cursor.classList.add('cursor');
cursorShadow.classList.add('cursor-shadow');
document.body.appendChild(cursor);
document.body.appendChild(cursorShadow);

// Update the cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Move the main cursor
    cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;

    // Move the shadow cursor with a delay (to give the 'follow' effect)
    cursorShadow.style.left = `${mouseX - cursorShadow.offsetWidth / 2}px`;
    cursorShadow.style.top = `${mouseY - cursorShadow.offsetHeight / 2}px`;
});
