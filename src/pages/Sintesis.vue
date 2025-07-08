<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-4 my-lg-0 my-3">
          <img
            class="img-a img-t"
            src="@/assets/curso/temas/sintesis/img1.png"
            alt=""
          />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="row justify-content-center align-items-center mb-5">
            <div class="col-lg-8">
              <p>
                El siguiente diagrama proporciona una visión general sintetizada
                de los principales temas abordados en este componente,
                permitiendo a los aprendices visualizar las relaciones entre
                diferentes conceptos, facilitando la comprensión y la retención
                de la información. Este mapa está diseñado para ayudar al lector
                a visualizar la interconexión entre los diversos elementos que
                conforman el módulo de configuración y entrega de equipos de
                cómputo: protocolos y pruebas.
              </p>
            </div>
            <div class="col-lg-4">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/sintesis/img2.svg"
                alt=""
              />
            </div>
          </div>
          <div class="row justify-content-center bg1 p-4 brad">
            <div class="col-lg-auto j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/sintesis/img3.svg"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                En el centro del diagrama se encuentra el concepto principal del
                cual se despliegan los subtemas con los cuales se pretende que
                los lectores comprendan cómo los diferentes procesos de
                configuración y entrega de equipos de cómputo se relacionan
                entre sí de la mano con los protocolos y pruebas necesarios,
                buscando desarrollar habilidades técnicas y de gestión al
                explorar las interrelaciones entre estos elementos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p>
        Este diagrama sirve como una guía visual para navegar por los conceptos
        presentados en el texto, permitiendo al lector comprender rápidamente el
        flujo y la interrelación de los procesos involucrados en la preparación
        y transformación de datos. Al revisar este mapa, el aprendiz podrá
        apreciar cómo los diferentes aspectos que se convierten en una síntesis
        contundente para la comprensión y el aprendizaje de los estudiantes,
        facilitando la visualización, organización y aplicación del conocimiento
        en la configuración y entrega de equipos de cómputo.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 mb-5">
          <figure>
            <img src="@/assets/curso/temas/sintesis.svg" alt="alt" />
          </figure>
        </div>
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
