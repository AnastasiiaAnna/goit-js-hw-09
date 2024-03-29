const feedbackForm = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        feedbackForm.elements.email.value = email || '';
        feedbackForm.elements.message.value = message || '';
    }
});

feedbackForm.addEventListener('input', e => {
    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

    if (!email || !message) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    console.log({ email, message });

    feedbackForm.reset();
    localStorage.removeItem('feedback-form-state');
});