<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Validación de sistemas</h1>
      </div>
      <div class="row justify-content-center align-items-center bg1">
        <div class="col-lg-auto pt-lg-0 pt-md-4">
          <img
            class="img-a img-t"
            src="@/assets/curso/temas/t01/t_01.png"
            alt=""
          />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            Las validaciones de sistemas son procesos y pruebas diseñados para
            asegurar que un sistema de cómputo funcione correctamente y cumpla
            con los requisitos y expectativas establecidas. Estas validaciones
            son necesarias para garantizar la calidad, seguridad y rendimiento
            del sistema antes de su implementación o entrega al usuario final.
            Las validaciones de sistemas pueden incluir varias etapas y tipos de
            pruebas, cada una enfocada en diferentes aspectos del sistema. A
            continuación, se presentan los componentes de las validaciones de
            sistemas.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_1" class="titulo-segundo color-acento-contenido">
        <h2>1.1 Pruebas de <i>hardware</i></h2>
      </div>
      <p class="mb-4">
        Las pruebas de <i>hardware</i> se usan para garantizar que los
        componentes físicos del equipo de cómputo funcionen correctamente y
        cumplan con los requisitos de rendimiento. Estas pruebas se realizan
        para identificar posibles fallos, asegurar la compatibilidad y evaluar
        el rendimiento del sistema bajo diferentes condiciones. Estos son los
        componentes que se deben tener en cuenta a la hora de realizar un
        diagnóstico adecuado en varios componentes.
      </p>
      <div class="row bg5 align-items-center mb-5">
        <div class="px-lg-5 px-4">
          <div class="bgw brad p-5 my-5">
            <CarouselRED tipo="b">
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Diagnóstico de componentes:</h5>
                  <p>
                    El diagnóstico de componentes implica la evaluación
                    detallada de cada uno de los componentes críticos del equipo
                    de cómputo.
                  </p>
                  <ul class="lista-ul fa-ul ps-4">
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>CPU (Unidad Central de Procesamiento):</b>
                        verificación de la funcionalidad y rendimiento de la CPU
                        mediante pruebas de <i>benchmarking</i> y diagnósticos
                        específicos.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Memoria RAM:</b> pruebas de memoria para detectar
                        errores y asegurar que la RAM esté funcionando
                        correctamente.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Disco duro:</b> evaluación del estado del disco
                        duro, incluyendo pruebas de lectura y escritura, y
                        verificación de sectores defectuosos.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Tarjeta gráfica: </b>pruebas de rendimiento gráfico
                        para asegurar que la tarjeta gráfica pueda manejar las
                        tareas requeridas sin problemas.</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/t01/t_02.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Pruebas de estrés</h5>
                  <p>
                    Las pruebas de estrés evalúan el rendimiento del
                    <i>hardware</i> bajo condiciones extremas para identificar
                    posibles fallos o limitaciones. Estas pruebas incluyen:
                  </p>
                  <ul class="lista-ul fa-ul ps-4">
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Carga de trabajo intensiva:</b> simulación de cargas
                        de trabajo intensivas para evaluar cómo responde el
                        <i>hardware</i> bajo presión.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Temperatura y voltaje:</b> monitoreo de la
                        temperatura y el voltaje de los componentes bajo carga
                        para asegurar que no se sobrecalienten o fallen.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Estabilidad a largo plazo:</b> pruebas de
                        estabilidad durante períodos prolongados para
                        identificar posibles fallos que no sean evidentes en
                        pruebas cortas.</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/t01/t_03.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-6 my-2">
                  <h5 class="mb-4">Pruebas de compatibilidad</h5>
                  <p>
                    Las pruebas de compatibilidad aseguran que todos los
                    componentes del <i>hardware</i> sean compatibles entre sí y
                    con el sistema operativo.
                  </p>
                  <ul class="lista-ul fa-ul ps-4">
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Verificación de controladores:</b> asegurarse de que
                        los controladores de todos los componentes estén
                        instalados y funcionen correctamente.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Compatibilidad de <i>hardware</i>:</b> verificación
                        de que todos los componentes sean compatibles entre sí y
                        con el sistema operativo.</span
                      >
                    </li>
                    <li>
                      <i class="fas fa-check-circle color1"></i
                      ><span
                        ><b>Pruebas de integración:</b> evaluación de cómo los
                        diferentes componentes interactúan entre sí y con el
                        <i>software</i> instalado.</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 my-2">
                  <img
                    class="img-a img-t"
                    src="@/assets/curso/temas/t01/t_04.png"
                    alt=""
                  />
                </div>
              </div>
            </CarouselRED>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_2" class="titulo-segundo color-acento-contenido">
        <h2>1.2 Verificación de <i>software</i></h2>
      </div>
      <p class="mb-3">
        La verificación de <i>software</i> implica asegurarse de que todos los
        programas y aplicaciones instalados funcionen correctamente y cumplan
        con los requisitos del usuario. Para garantizar esto, se debe tener en
        cuenta:
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img
            class="img-a img-t"
            src="@/assets/curso/temas/t01/5.png"
            alt=""
          />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg3">
            <div titulo="Instalación de #[i software] ">
              <p>
                Asegurarse de que todos los programas necesarios estén
                instalados y configurados adecuadamente, atendiendo a la
                instalación de sistemas operativos, las aplicaciones necesarias
                teniendo en cuenta que estén configuradas adecuadamente. Así
                mismo, se hace necesarios que, dentro de la configuración de
                permisos, se garantice que todas las configuraciones de
                seguridad junto a los permisos del usuario estén debidamente
                establecidas.
              </p>
            </div>
            <div titulo="Pruebas de funcionalidad">
              <p>
                Verificar que todas las aplicaciones funcionen según lo esperado
                y que no haya conflictos entre ellas.
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Pruebas de funcionalidad básica:</b> verificación de que
                    todas las funciones básicas de las aplicaciones funcionen
                    correctamente.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Pruebas de integración:</b> asegurarse de que las
                    aplicaciones interactúen correctamente entre sí y con el
                    sistema operativo.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Pruebas de usabilidad:</b> evaluación de la facilidad de
                    uso de las aplicaciones y la interfaz de usuario.</span
                  >
                </li>
              </ul>
            </div>
            <div titulo="Actualizaciones de #[i software]">
              <p>
                Comprobar de que todos los programas estén actualizados a sus
                últimas versiones Las actualizaciones de <i>software</i> no solo
                corrigen errores y mejoran la funcionalidad, sino que también
                protegen el sistema contra vulnerabilidades conocidas así
                garantizan la seguridad y el rendimiento óptimo.
              </p>
            </div>
            <div titulo="Actualizaciones de seguridad">
              <p>
                Las actualizaciones del sistema operativo a menudo incluyen
                parches de seguridad que corrigen vulnerabilidades conocidas.
                Estos parches son adecuados para proteger el sistema contra
                ataques cibernéticos.
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Mejoras de rendimiento:</b> las actualizaciones del
                    sistema operativo pueden incluir mejoras de rendimiento que
                    optimizan el uso de recursos y mejoran la eficiencia del
                    sistema.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Nuevas funcionalidades:</b> las actualizaciones del
                    sistema operativo a menudo introducen nuevas funcionalidades
                    y características que pueden mejorar la experiencia del
                    usuario y la productividad.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b
                      >Compatibilidad con <i>hardware</i> y <i>software</i>:</b
                    >
                    las actualizaciones del sistema operativo pueden mejorar la
                    compatibilidad con <i>hardware</i> y <i>software</i> más
                    recientes, asegurando que el sistema pueda aprovechar al
                    máximo las nuevas tecnologías.</span
                  >
                </li>
              </ul>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg3">
            <div titulo="Actualizaciones de aplicaciones ">
              <p>
                Asegurarse de que todas las aplicaciones estén actualizadas a
                sus últimas versiones es igualmente importante para mantener la
                seguridad y el rendimiento del sistema.
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Corrección de errores:</b> las actualizaciones de
                    aplicaciones a menudo corrigen errores y problemas
                    conocidos, mejorando la estabilidad y el rendimiento de las
                    aplicaciones.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Mejoras de seguridad:</b> las actualizaciones de
                    aplicaciones pueden incluir parches de seguridad que
                    corrigen vulnerabilidades conocidas, protegiendo el sistema
                    contra ataques cibernéticos.
                  </span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Nuevas funcionalidades:</b> las actualizaciones de
                    aplicaciones a menudo introducen nuevas funcionalidades y
                    características que pueden mejorar la experiencia del
                    usuario y la productividad.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Compatibilidad con el sistema operativo:</b> las
                    actualizaciones de aplicaciones pueden mejorar la
                    compatibilidad con el sistema operativo, asegurando que las
                    aplicaciones funcionen correctamente y sin problemas.</span
                  >
                </li>
              </ul>
            </div>
            <div titulo="Parches de seguridad ">
              <p>
                La instalación de parches de seguridad es imperdible para
                proteger el sistema de vulnerabilidades conocidas.
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Corrección de vulnerabilidades:</b> los parches de
                    seguridad corrigen vulnerabilidades conocidas en el sistema
                    operativo y las aplicaciones, protegiendo el sistema contra
                    ataques cibernéticos</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Protección contra <i>malware</i></b
                    >: los parches de seguridad pueden incluir mejoras en la
                    protección contra malware, asegurando que el sistema esté
                    protegido contra amenazas conocidas</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Actualizaciones de <i>firmware</i>:</b> los parches de
                    seguridad pueden incluir actualizaciones de firmware para
                    componentes de <i>hardware</i>, mejorando la seguridad y el
                    rendimiento del <i>hardware</i></span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Cumplimiento normativo:</b> la instalación de parches de
                    seguridad puede ser necesaria para cumplir con regulaciones
                    y normativas de seguridad, asegurando que el sistema esté en
                    conformidad con los estándares de seguridad.</span
                  >
                </li>
              </ul>
            </div>
            <div titulo="Importancia de las actualizaciones de #[i software] ">
              <p>
                Las actualizaciones de <i>software</i> se deben hacer por varias
                razones ya que protegen aspectos como son la seguridad,
                rendimiento, compatibilidad y funcionalidad
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Seguridad</b>
                    <p>
                      <b>Protección contra amenazas:</b> las actualizaciones de
                      software incluyen parches de seguridad que protegen el
                      sistema contra amenazas conocidas, como virus, malware y
                      ataques cibernéticos.
                    </p>
                    <p>
                      <b>Corrección de vulnerabilidades:</b> las actualizaciones
                      de software corrigen vulnerabilidades conocidas en el
                      sistema operativo y las aplicaciones, reduciendo el riesgo
                      de ataques cibernéticos.
                    </p></span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Rendimiento</b>
                    <p>
                      <b>Optimización de recursos:</b> las actualizaciones de
                      <i>software</i> pueden incluir mejoras de rendimiento que
                      optimizan el uso de recursos y mejoran la eficiencia del
                      sistema.
                    </p>
                    <p>
                      <b>Corrección de errores:</b> las actualizaciones de
                      <i>software</i> corrigen errores y problemas conocidos,
                      mejorando la estabilidad y el rendimiento del sistema.
                    </p></span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Compatibilidad</b>
                    <p>
                      <b
                        >Compatibilidad con <i>hardware</i> y
                        <i>software</i>:</b
                      >
                      las actualizaciones de <i>software</i> pueden mejorar la
                      compatibilidad con <i>hardware</i> y <i>software</i> más
                      recientes, asegurando que el sistema pueda aprovechar al
                      máximo las nuevas tecnologías.
                    </p>
                    <p>
                      <b>Compatibilidad con otros sistemas:</b> las
                      actualizaciones de <i>software</i> pueden mejorar la
                      compatibilidad con otros sistemas y aplicaciones,
                      asegurando que el sistema funcione correctamente en un
                      entorno de TI más amplio.
                    </p></span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    ><b>Funcionalidad</b>
                    <p>
                      <b>Nuevas funcionalidades:</b> las actualizaciones de
                      <i>software</i> a menudo introducen nuevas funcionalidades
                      y características que pueden mejorar la experiencia del
                      usuario y la productividad.
                    </p>
                    <p>
                      <b>Mejoras en la interfaz de usuario:</b> las
                      actualizaciones de <i>software</i> pueden incluir mejoras
                      en la interfaz de usuario, haciendo que el sistema sea más
                      fácil de usar y más intuitivo.
                    </p></span
                  >
                </li>
              </ul>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img
            class="img-a img-t"
            src="@/assets/curso/temas/t01/6.png"
            alt=""
          />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_1_3" class="titulo-segundo color-acento-contenido">
        <h2>1.3 <i>Test</i> de rendimiento</h2>
      </div>
      <TabsC class="color-acento-contenido mb-5">
        <div class="p-4 bg3 py-md-5" titulo="&lt;em&gt;Benchmarking&lt;/em&gt;">
          <div class="row justify-content-center p-4 brad">
            <div class="col-lg-5">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/t01/7.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 mb-4 mb-md-0 p-4">
              <p class="mb-3">
                Utilización de herramientas de <i>benchmarking</i> para medir el
                rendimiento del equipo en diferentes tareas, atendiendo a las
                siguientes pruebas:
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de rendimiento de CPU: evaluación del rendimiento
                    de la CPU en tareas específicas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de rendimiento de GPU: evaluación del rendimiento
                    de la tarjeta gráfica en tareas gráficas intensivas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de rendimiento de almacenamiento: evaluación del
                    rendimiento del disco duro o SSD en tareas de lectura y
                    escritura.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-4 bg3 py-md-5" titulo="Pruebas de carga">
          <div class="row justify-content-center p-4 brad">
            <div class="col-lg-5">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/t01/8.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 mb-4 mb-md-0 p-4">
              <p class="mb-3">
                Evaluación del rendimiento del equipo bajo diferentes niveles de
                carga para identificar posibles cuellos de botella, son:
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de carga de red: evaluación del rendimiento del
                    equipo bajo diferentes niveles de tráfico de red.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de carga de aplicaciones: evaluación del
                    rendimiento del equipo bajo diferentes niveles de uso de
                    aplicaciones.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de carga de usuarios: evaluación del rendimiento
                    del equipo bajo diferentes niveles de usuarios
                    concurrentes.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-4 bg3 py-md-5" titulo="Pruebas de estabilidad">
          <div class="row justify-content-center p-4 brad">
            <div class="col-lg-5">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/t01/9.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 mb-4 mb-md-0 p-4">
              <p class="mb-3">
                Asegurarse de que el equipo pueda funcionar de manera estable
                durante períodos prolongados sin fallos.
              </p>
              <ul class="lista-ul fa-ul ps-4">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de estabilidad a largo plazo: evaluación del
                    rendimiento del equipo durante períodos prolongados de uso
                    continuo.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de estabilidad bajo carga: evaluación del
                    rendimiento del equipo bajo carga continua durante períodos
                    prolongados.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Pruebas de estabilidad de <i>software</i>: evaluación de la
                    estabilidad del <i>software</i> instalado durante períodos
                    prolongados de uso.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="p-4 bg3 py-md-5"
          titulo="Importancia de las validaciones de sistemas"
        >
          <div class="row justify-content-center p-4 brad">
            <div class="col-lg-5">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/t01/10.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 mb-4 mb-md-0 p-4">
              <p class="mb-3">
                <b>Importancia de las validaciones de sistemas</b>
              </p>
              <p>
                Las validaciones de sistemas se necesitan ya que garantizan la
                funcionalidad, seguridad, calidad y rendimiento de manera
                eficiente. según las normativas y regulaciones aplicables. Es de
                gran importancia, comprender que el sistema debe cumplir con los
                estándares de calidad establecidos y que para poder validar
                siempre el funcionamiento se sugiere realizar auditorías
                periódicas; esto no solamente permitirá garantizar la eficacia
                del sistema si no que traerá una gran satisfacción a los
                usuarios.
              </p>
            </div>
          </div>
        </div>
      </TabsC>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
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
