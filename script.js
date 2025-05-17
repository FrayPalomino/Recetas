// Obtener los platos del localStorage
function obtenerPlatos() {
  return JSON.parse(localStorage.getItem("platosPeruanos")) || [];
}

// Cargar el tema guardado o usar el tema claro por defecto
function cargarTema() {
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("theme-toggle").innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Cambiar entre tema claro y oscuro
function cambiarTema() {
  const botonTema = document.getElementById("theme-toggle");

  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("tema", "light");
    botonTema.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.body.classList.add("dark-theme");
    localStorage.setItem("tema", "dark");
    botonTema.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Crear tarjetas de platos
function crearTarjetasPlatos(platos) {
  const contenedor = document.getElementById("dishes-container");
  contenedor.innerHTML = "";

  if (platos.length === 0) {
    contenedor.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron platos</h3>
                <p>Intenta con otra búsqueda o filtro</p>
            </div>
        `;
    return;
  }

  platos.forEach((plato) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "dish-card";
    tarjeta.dataset.id = plato.id;

    tarjeta.innerHTML = `
            <img src="${plato.imagen}" alt="${plato.nombre}" class="dish-image">
            <div class="dish-info">
                <h3 class="dish-title">${plato.nombre}</h3>
                <div class="dish-category" data-category="${plato.categoria}">${traducirCategoria(plato.categoria)}</div>
                <p class="dish-description">${plato.descripcion}</p>
            </div>
        `;

    tarjeta.addEventListener("click", () => abrirModal(plato));
    contenedor.appendChild(tarjeta);
  });
}

// Traducir categoría a texto más amigable
function traducirCategoria(categoria) {
  const traducciones = {
    entrada: "Entrada",
    caldo: "Caldo",
    principal: "Plato Fuerte",
    postre: "Postre",
    bebida: "Bebida",
  };

  return traducciones[categoria] || categoria;
}

// Filtrar platos por categoría
function filtrarPlatosPorCategoria(categoria) {
  const platos = obtenerPlatos();

  if (categoria === "all") {
    return platos;
  }

  return platos.filter((plato) => plato.categoria === categoria);
}

// Buscar platos por nombre
function buscarPlatos(termino) {
  const platos = obtenerPlatos();

  if (!termino.trim()) {
    return platos;
  }

  const terminoLower = termino.toLowerCase();

  return platos.filter(
    (plato) =>
      plato.nombre.toLowerCase().includes(terminoLower) ||
      plato.descripcion.toLowerCase().includes(terminoLower) ||
      plato.ingredientes.some((ingrediente) => ingrediente.toLowerCase().includes(terminoLower))
  );
}

// Variables para el control de audio
let speechSynthesis;
let speechUtterance;
let isPlaying = false;

// Abrir modal con detalles del plato
function abrirModal(plato) {
  const modal = document.getElementById("dish-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalCategory = document.querySelector(".modal-category");
  const modalDescription = document.querySelector(".modal-description");
  const modalIngredients = document.getElementById("modal-ingredients");
  const modalPreparation = document.getElementById("modal-preparation");
  const playButton = document.getElementById("play-button");

  modalTitle.textContent = plato.nombre;
  modalImage.src = plato.imagen;
  modalImage.alt = plato.nombre;
  modalCategory.textContent = traducirCategoria(plato.categoria);
  modalCategory.dataset.category = plato.categoria;
  modalDescription.textContent = plato.descripcion;

  // Limpiar listas anteriores
  modalIngredients.innerHTML = "";
  modalPreparation.innerHTML = "";

  // Agregar ingredientes
  plato.ingredientes.forEach((ingrediente) => {
    const li = document.createElement("li");
    li.textContent = ingrediente;
    modalIngredients.appendChild(li);
  });

  // Agregar pasos de preparación
  plato.preparacion.forEach((paso, index) => {
    const li = document.createElement("li");
    li.textContent = paso;
    modalPreparation.appendChild(li);
  });

  // Detener cualquier reproducción anterior
  detenerReproduccion();

  // Configurar el botón de reproducción
  playButton.innerHTML = '<i class="fas fa-play"></i>';
  playButton.classList.remove("playing");
  playButton.onclick = () => reproducirInformacionPlato(plato);

  // Mostrar modal con animación
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // Evitar scroll en el fondo
}

// Reproducir información del plato
function reproducirInformacionPlato(plato) {
  const playButton = document.getElementById("play-button");

  // Si ya está reproduciendo, detener
  if (isPlaying) {
    detenerReproduccion();
    return;
  }

  // Preparar el texto a reproducir
  let textoCompleto = `${plato.nombre}. ${plato.descripcion}. Ingredientes: `;

  // Agregar ingredientes
  plato.ingredientes.forEach((ingrediente, index) => {
    textoCompleto += `${ingrediente}. `;
  });

  // Agregar preparación
  textoCompleto += "Preparación: ";
  plato.preparacion.forEach((paso, index) => {
    textoCompleto += `Paso ${index + 1}: ${paso}. `;
  });

  // Configurar la síntesis de voz
  speechSynthesis = window.speechSynthesis;
  speechUtterance = new SpeechSynthesisUtterance(textoCompleto);

  // Configurar voz en español si está disponible
  const voces = speechSynthesis.getVoices();
  const vozEspanol = voces.find((voz) => voz.lang.includes("es"));
  if (vozEspanol) {
    speechUtterance.voice = vozEspanol;
  }

  // Configurar eventos
  speechUtterance.onstart = () => {
    isPlaying = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    playButton.classList.add("playing");
  };

  speechUtterance.onend = () => {
    isPlaying = false;
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    playButton.classList.remove("playing");
  };

  speechUtterance.onerror = () => {
    isPlaying = false;
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    playButton.classList.remove("playing");
    alert("Hubo un error al reproducir el audio.");
  };

  // Iniciar reproducción
  speechSynthesis.speak(speechUtterance);
}

// Detener reproducción
function detenerReproduccion() {
  if (speechSynthesis && isPlaying) {
    speechSynthesis.cancel();
    isPlaying = false;
    const playButton = document.getElementById("play-button");
    playButton.innerHTML = '<i class="fas fa-play"></i>';
    playButton.classList.remove("playing");
  }
}

// Cerrar modal
function cerrarModal() {
  const modal = document.getElementById("dish-modal");
  modal.classList.remove("show");
  document.body.style.overflow = ""; // Restaurar scroll

  // Detener cualquier reproducción en curso
  detenerReproduccion();
}

// Inicializar la aplicación
function inicializarApp() {
  const platos = obtenerPlatos();

  // Cargar tema
  cargarTema();

  // Crear tarjetas de platos
  crearTarjetasPlatos(platos);

  // Evento para cambiar tema
  document.getElementById("theme-toggle").addEventListener("click", cambiarTema);

  // Evento para cerrar modal
  document.querySelector(".close-modal").addEventListener("click", cerrarModal);

  // Evento para cerrar modal al hacer clic fuera del contenido
  document.getElementById("dish-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("dish-modal")) {
      cerrarModal();
    }
  });

  // Eventos para filtros de categoría
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remover clase active de todos los botones
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));

      // Agregar clase active al botón clickeado
      btn.classList.add("active");

      // Filtrar platos por categoría
      const categoria = btn.dataset.filter;
      const platosFiltrados = filtrarPlatosPorCategoria(categoria);

      // Actualizar tarjetas
      crearTarjetasPlatos(platosFiltrados);
    });
  });

  // Evento para búsqueda
  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");

  const realizarBusqueda = () => {
    const termino = searchInput.value;
    const platosBuscados = buscarPlatos(termino);

    // Resetear filtros activos
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add("active");

    // Actualizar tarjetas
    crearTarjetasPlatos(platosBuscados);
  };

  searchBtn.addEventListener("click", realizarBusqueda);

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      realizarBusqueda();
    }
  });

  // Cargar voces para síntesis de voz
  if ("speechSynthesis" in window) {
    // Algunas veces las voces no están disponibles inmediatamente
    speechSynthesis = window.speechSynthesis;

    // Firefox necesita este evento
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => {
        console.log("Voces cargadas:", speechSynthesis.getVoices().length);
      };
    }

    // Forzar la carga de voces
    speechSynthesis.getVoices();
  } else {
    console.warn("La síntesis de voz no está soportada en este navegador.");
  }

  // Asegurarse de detener la reproducción si se cierra la página
  window.addEventListener("beforeunload", detenerReproduccion);
}

// Iniciar la aplicación cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", inicializarApp);
  