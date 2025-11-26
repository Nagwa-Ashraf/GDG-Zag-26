const buttons = document.querySelectorAll('.tab-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.getAttribute('data-target');
    document.querySelectorAll('.menu-items').forEach(section => {
      section.style.display = (section.id === target ? 'block' : 'none');
    });
  });
});