const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); 

function renderCalendar(year, month) {
    const daysContainer = document.getElementById('days');
    daysContainer.innerHTML = ''; 

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); 
    const daysInMonth = lastDay.getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.className = 'day';
        dayElement.dataset.date = `${day}-${month + 1}-${year}`;
        daysContainer.appendChild(dayElement);
    }
}

const events = {};

document.getElementById('days').addEventListener('click', (e) => {
    if (e.target.classList.contains('day')) {
        const selectedDate = e.target.dataset.date;
        const parts = selectedDate.split('/'); 
        const formattedDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`; 
        document.getElementById('event-date').value = formattedDate; 
        document.getElementById('form-title').textContent = 'Добавить событие';
    }
});

document.getElementById('save-event').addEventListener('click', (e) => {
    e.preventDefault();
    const dateInput = document.getElementById('event-date').value;
    const desc = document.getElementById('event-desc').value;

    const dateParts = dateInput.split('-');
    const date = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; 

    if (!events[date]) events[date] = [];
    events[date].push(desc);

    alert(`Событие добавлено на ${date}`);

    renderCalendar(year, month);
});

function renderCalendar(year, month) {
    const daysContainer = document.getElementById('days');
    daysContainer.innerHTML = ''; 

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${month + 1}-${day}`;
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.className = 'day';

        if (events[date]) {
            dayElement.classList.add('has-event');
        }

        daysContainer.appendChild(dayElement);
    }
}


