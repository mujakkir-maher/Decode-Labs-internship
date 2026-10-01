/* 
   FOCUSFLOW — APP.JS
   Structure:
     1. DOM references
     2. State
     3. Persistence (localStorage)
     4. Theme functions
     5. Render functions
     6. Task CRUD functions
     7. Event listeners
     8. Initialization
    */

/* 
   1. DOM REFERENCES
*/
const themeToggle = document.querySelector('.js-theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');

const taskForm = document.querySelector('.js-task-form');
const taskInput = document.querySelector('.js-task-input');
const taskList = document.querySelector('.js-task-list');
const taskMessage = document.querySelector('.js-task-message');

const totalCount = document.querySelector('.js-total-count');
const completedCount = document.querySelector('.js-completed-count');
const remainingCount = document.querySelector('.js-remaining-count');

const filterButtons = document.querySelectorAll('.js-filter');
const clearCompletedButton = document.querySelector('.js-clear-completed');

/*
   2. STATE
*/
let tasks = [];
let currentFilter = 'all';
let nextId = 1;

const STORAGE_KEYS = {
    theme: 'focusflow-theme',
    tasks: 'focusflow-tasks',
    nextId: 'focusflow-next-id'
};

/*
   3. PERSISTENCE (localStorage)
*/

function saveTasks() {
    try {
        localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
        localStorage.setItem(STORAGE_KEYS.nextId, String(nextId));
    } catch (err) {
        // localStorage full বা disabled হতে পারে
        console.warn('Could not save tasks:', err);
    }
}

function loadTasks() {
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.tasks);
        const rawId = localStorage.getItem(STORAGE_KEYS.nextId);

        tasks = raw ? JSON.parse(raw) : [];

        // Defensive: data array কিনা check
        if (!Array.isArray(tasks)) {
            tasks = [];
        }

        nextId = rawId ? Number(rawId) : 1;
        if (!Number.isFinite(nextId) || nextId < 1) {
            nextId = 1;
        }
    } catch (err) {
        console.warn('Could not load tasks:', err);
        tasks = [];
        nextId = 1;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(STORAGE_KEYS.theme, theme);
    } catch (err) {
        console.warn('Could not save theme:', err);
    }
}

function loadTheme() {
    let savedTheme = 'light';
    try {
        savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'light';
    } catch (err) {
        console.warn('Could not load theme:', err);
    }
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
}

/*
   4. THEME
*/

function applyTheme(theme) {
    const isDark = theme === 'dark';

    document.body.classList.toggle('dark-mode', isDark);

    themeIcon.textContent = isDark ? '☀' : '☾';
    themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';

    themeToggle.setAttribute(
        'aria-label',
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
}

/*
   5. RENDER
*/

function updateStats() {
    const completed = tasks.filter((task) => task.completed).length;
    const remaining = tasks.length - completed;

    totalCount.textContent = tasks.length;
    completedCount.textContent = completed;
    remainingCount.textContent = remaining;
}

function getFilteredTasks() {
    if (currentFilter === 'active') {
        return tasks.filter((task) => !task.completed);
    }
    if (currentFilter === 'completed') {
        return tasks.filter((task) => task.completed);
    }
    return tasks;
}

function getEmptyMessage() {
    const messages = {
        all: 'No tasks yet. Add your first task above!',
        active: 'All caught up! No active tasks.',
        completed: 'No completed tasks yet.'
    };
    return messages[currentFilter] || messages.all;
}

function renderTasks() {
    // পুরোনো task list clear
    taskList.innerHTML = '';

    const visibleTasks = getFilteredTasks();

    // Empty state
    if (visibleTasks.length === 0) {
        const emptyState = document.createElement('li');
        emptyState.className = 'empty-state';
        emptyState.textContent = getEmptyMessage();
        taskList.appendChild(emptyState);
        return;
    }

    // প্রতিটা task-এর জন্য <li> তৈরি
    visibleTasks.forEach((task) => {
        const item = document.createElement('li');
        item.className =
            'task-item' + (task.completed ? ' is-completed' : '');
        item.dataset.id = task.id;

        item.innerHTML = `
            <input
                class="task-check"
                type="checkbox"
                ${task.completed ? 'checked' : ''}
                aria-label="Mark task complete"
            >
            <span class="task-text"></span>
            <button
                class="delete-button"
                type="button"
                aria-label="Delete task"
            >
                Delete
            </button>
        `;

        // XSS-safe: user text কে textContent দিয়ে বসাচ্ছি
        item.querySelector('.task-text').textContent = task.text;

        taskList.appendChild(item);
    });
}

function render() {
    updateStats();
    renderTasks();
}

/*
   6. TASK CRUD
*/

function addTask(text) {
    tasks.push({
        id: nextId++,
        text,
        completed: false
    });

    saveTasks();
    render();
}

function toggleTask(taskId) {
    const task = tasks.find((item) => item.id === taskId);
    if (!task) return;

    task.completed = !task.completed;

    saveTasks();
    render();
}

function deleteTask(taskId) {
    tasks = tasks.filter((task) => task.id !== taskId);

    saveTasks();
    render();
}

function clearCompleted() {
    tasks = tasks.filter((task) => !task.completed);

    saveTasks();
    render();
}

/*
   7. EVENT LISTENERS
*/

/* --- Theme toggle --- */
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    const nextTheme = isDark ? 'light' : 'dark';

    applyTheme(nextTheme);
    saveTheme(nextTheme);
});

/* --- Add task form --- */
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (!text) {
        taskMessage.textContent = 'Please enter a task first.';
        taskInput.focus();
        return;
    }

    addTask(text);

    taskInput.value = '';
    taskMessage.textContent = 'Task added successfully.';
    taskInput.focus();
});

/* --- Filter buttons --- */
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach((b) => b.classList.remove('is-active'));
        button.classList.add('is-active');

        render();
    });
});

/* --- Checkbox toggle (event delegation) --- */
taskList.addEventListener('change', (event) => {
    if (!event.target.classList.contains('task-check')) return;

    const taskItem = event.target.closest('.task-item');
    if (!taskItem) return;

    const taskId = Number(taskItem.dataset.id);
    toggleTask(taskId);
});

/* --- Delete button (event delegation) --- */
taskList.addEventListener('click', (event) => {
    if (!event.target.classList.contains('delete-button')) return;

    const taskItem = event.target.closest('.task-item');
    if (!taskItem) return;

    const taskId = Number(taskItem.dataset.id);
    deleteTask(taskId);
});

/* --- Clear completed --- */
clearCompletedButton.addEventListener('click', () => {
    const hadCompleted = tasks.some((task) => task.completed);

    clearCompleted();

    taskMessage.textContent = hadCompleted
        ? 'Completed tasks cleared.'
        : 'No completed tasks to clear.';
});

/*
   8. INITIALIZE
*/
loadTheme();
loadTasks();
render();