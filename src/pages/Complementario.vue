<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Validación de sistemas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2024, 3 abril). Pruebas de rendimiento [Vídeo]. YouTube. ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=oNY2a2_yOps',
        },
        {
          tema: '2. Configuración final',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2022, 16 septiembre). Criterios de respaldo y recuperación [Vídeo]. YouTube. ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=3cYiy1n4hWc',
        },
        {
          tema: '1. Validación de sistemas',
          referencia:
            'O, M. L. S. S. R. (2023, 25 julio). Verificación y validación en las pruebas de software. IT tester - Základné informácie o testovaní softvéru.',
          tipo: 'Portal web',
          link:
            'https://ittester.sk/es/pruebas-manuales/verificacion-validacion/?gad_source=2&gclid=Cj0KCQiAire5BhCNARIsAM53K1j-MHmzvtnCKfO4P1ckx14xWk_dbz7HRZr4rQkfUJR9fgl0vZ-quHwaAu3NEALw_wcB',
        },
        {
          tema: '3. Protocolos de entrega',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023b, septiembre 7). Validación de requisitos [Vídeo]. YouTube. ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=HEl0GrMFq88',
        },
        {
          tema: '1. Validación de sistemas',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023a, febrero 1). Herramientas de hardware y software [Vídeo]. YouTube. ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=6fjWmQnrBpw',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
