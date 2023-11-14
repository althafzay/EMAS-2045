// JavaScript for dukungan.html
let count = localStorage.getItem('supportCount') || 0;
updateCountMessage(count);

document.getElementById('supportButton').addEventListener('click', function() {
  count++;
  localStorage.setItem('supportCount', count);
  updateCountMessage(count);
  this.disabled = true;
});

function updateCountMessage(count) {
  const thankYouMessage = document.getElementById('thankYouMessage');
  thankYouMessage.classList.remove('hidden');
  
  const countMessage = thankYouMessage.querySelector('.count-message');
  countMessage.textContent = `Terima kasih! ${count} orang telah memberikan dukungan.`;
}
