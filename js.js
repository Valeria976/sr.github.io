
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const url = card.getAttribute('url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  });
  