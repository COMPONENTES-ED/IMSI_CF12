<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Actualizaciones finales',
          significado:
            'Proceso de instalar la última versión de <em>software</em> y parches de seguridad en un equipo antes de su entrega para mejorar su rendimiento y protección.',
        },
        {
          termino: '<em>Backup</em>',
          significado:
            'Copia de seguridad de datos importantes para protegerlos y permitir su recuperación en caso de fallos.',
        },
        {
          termino: 'Capacitación básica',
          significado:
            'Proceso de enseñar al usuario final cómo utilizar y mantener el equipo de manera adecuada.',
        },
        {
          termino: 'Configuración final',
          significado:
            'Etapa que prepara el equipo para su uso inmediato por parte del usuario, incluyendo personalización, <em>backup</em> y actualizaciones finales.',
        },
        {
          termino: 'Documentación de entrega',
          significado:
            'Registro detallado del estado del equipo, las especificaciones técnicas y cualquier configuración realizada al momento de la entrega.',
        },
        {
          termino: 'Garantía',
          significado:
            'Acuerdo que establece las condiciones bajo las cuales el proveedor se compromete a reparar o reemplazar un equipo defectuoso.',
        },
        {
          termino: 'Gestión de incidencias',
          significado:
            'Proceso de identificar, registrar, clasificar y resolver problemas que afectan el funcionamiento del equipo.',
        },
        {
          termino: '<em>Hardware</em>',
          significado: 'Componentes físicos de un equipo de cómputo.',
        },
        {
          termino: 'Incidencias',
          significado:
            'Problemas o fallos que afectan el funcionamiento del equipo.',
        },
        {
          termino: 'Mantenimiento programado',
          significado:
            'Tareas rutinarias y preventivas que aseguran el funcionamiento óptimo del equipo durante su vida útil.',
        },
        {
          termino: 'Personalización de usuario',
          significado:
            'Proceso de configurar el equipo según las preferencias y necesidades específicas del usuario.',
        },
        {
          termino: 'Pruebas de <em>hardware</em>',
          significado:
            'Verificación de que todos los componentes físicos del equipo funcionen correctamente.',
        },
        {
          termino: '<em>Tests</em> de rendimiento',
          significado:
            'Evaluaciones que miden la capacidad del equipo para manejar cargas de trabajo específicas, asegurando que cumpla con las expectativas del usuario.',
        },
        {
          termino: 'Verificación de <em>software</em>',
          significado:
            'Proceso de asegurar que el sistema operativo y las aplicaciones estén instaladas y configuradas adecuadamente en un equipo de cómputo.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
