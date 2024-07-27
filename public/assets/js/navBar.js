function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();

const sidebarClose = document.getElementById('sidebar-close');
const sidebarToggle = document.getElementById('sideToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggle.classList.add('hidden');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarToggle.classList.remove('hidden');
});
