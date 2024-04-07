// Adiciona funcionalidades aos botões de "Curtir" e "Seguir"
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('liked');
      if (this.classList.contains('liked')) {
        this.textContent = 'Descurtir';
      } else {
        this.textContent = 'Curtir';
      }
    });
  });
  
  document.querySelectorAll('.follow-button').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('following');
      if (this.classList.contains('following')) {
        this.textContent = 'Seguindo';
      } else {
        this.textContent = 'Seguir';
      }
    });
  });