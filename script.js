 document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
         card.addEventListener('click', () => {
            document.querySelectorAll('.project-details').forEach((detail, i) => {
                detail.style.display = i === index ? (detail.style.display === 'block' ? 'none' : 'block') : 'none';
            });
        });
    });
 });
