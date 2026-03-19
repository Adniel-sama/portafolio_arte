  const navbarCollapse = document.getElementById('navbarNav');

  document.addEventListener('click', function (event) {
    const isClickInside = navbarCollapse.contains(event.target);

    // Si el menú está abierto y el click NO fue dentro del collapse, cerrarlo
    if (!isClickInside && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });