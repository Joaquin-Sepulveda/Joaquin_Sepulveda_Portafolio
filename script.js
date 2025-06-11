function mostrarContenido(seccion) {
  const contenido = document.getElementById('contenido');

  if (seccion === 'sobre-mi') {
    contenido.innerHTML = `
      <section>
        <h2>Sobre mí</h2>
        <p>Aquí va un poco de información sobre mi carrera como desarrollador web...</p>
        <p>Más detalles de mí...</p>
      </section>
    `;
  } else if (seccion === 'proyectos') {
    contenido.innerHTML = `
      <section>
        <h2>Mis Proyectos</h2>
      <div class="galeria">
        <!-- Proyecto 1 -->
        <div class="proyecto color-1">
          <img src="images/silly1.png" alt="Proyecto 1" />
          <h3>Nombre Proyecto 1</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
        <div class="proyecto color-2">
          <img src="images/silly2.png" alt="Proyecto 2" />
          <h3>Nombre Proyecto 2</h3>
        </div>
      </div>
      </section>
    `;
  } else if (seccion === 'contacto') {
    contenido.innerHTML = `
      <section>
        <h2>Contacto</h2>
        <p>Contáctame por email, LinkedIn, etc...</p>
      </section>
    `;
  }
}

window.onload = function() {
  mostrarContenido('proyectos');
}