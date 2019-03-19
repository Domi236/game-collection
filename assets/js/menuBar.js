var list = document.querySelectorAll('.toggle-me');

list.forEach(function(el) {
  el.onclick = function() {
    list.forEach(function(el) {
      el.classList.remove('active');
    });
    el.classList.add('active');
  }
});
