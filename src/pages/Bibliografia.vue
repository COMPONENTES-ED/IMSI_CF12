<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          '<em>American National Standards Institute</em>. (2019). ANSI/ISO/IEC 17025:2017 <em>General requirements for the competence of testing and calibration laboratories</em>.',
        link: '',
      },
      {
        referencia:
          'García, J. (2020). <em>Gestión de equipos de cómputo: Prácticas y protocolos</em>.',
        link: '',
      },
      {
        referencia:
          '<em>International Organization for Standardization</em>. (2018). ISO/IEC 27001:2013 <em>Information security management systems — Requirements</em>.',
        link: '',
      },
      {
        referencia:
          'López, R. (2022). <em>Gestión de equipos informáticos en entornos corporativos</em>.',
        link: '',
      },
      {
        referencia:
          'Martínez, L. (2019). <em>Documentación y trazabilidad en la entrega de equipos informáticos</em>.',
        link: '',
      },
      {
        referencia:
          'Microsoft. (2021). <em>Windows 10 deployment and management</em>.',
        link: '',
      },
      {
        referencia:
          '<em>National Institute of Standards and Technology</em>. (2018). NIST Special Publication 800-53 Revision 5: <em>Security and Privacy Controls for Information Systems and Organizations</em>.',
        link: '',
      },
      {
        referencia:
          'Pérez, M. (2018). <em>Capacitación en configuración de equipos de cómputo</em>.',
        link: '',
      },
      {
        referencia:
          'Pérez, J., & Sánchez, M. (2021). <em>Protocolos de entrega y pruebas de equipos de cómputo</em>.',
        link: '',
      },
      {
        referencia:
          'Vázquez, F. (2023). <em>Manual de configuración y mantenimiento de sistemas informáticos</em>.',
        link: '',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
