<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- .bg-1
    .row
      .col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span.text-white 1
          h1 Organigrama

        p Indiscutiblemente, los organigramas están directamente relacionados con algunos conceptos que se tocarán a continuación:

        TabsC.color-primario.mb-5
          .py-1(titulo="Organización")
            .row.mb-3.d-flex.align-items-center
              .col.col-12.col-lg-5
                picture
                  img(src='@/assets/curso/tema1/img01.svg', alt='Organización', class='img-fluid')
              .col.col-12.col-lg-7.px-5.justify-content-center
                h3 Organización
                p Conjunto de personas que comparten una meta común, para ello desarrollan de manera coordinada una serie de actividades, utilizando recursos financieros, humanos, materiales, técnicos, y tecnológicos. Dentro del recurso humano se encuentran las personas quienes la administran, a través del proceso de planeación, organización, dirección y control.
                .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
                  p Para cumplir con el direccionamiento estratégico de la organización esta debe dividirse en actividades con el objeto de desarrollarlas de manera eficiente y eficaz. Cada actividad y tarea se estructura dentro de un cargo.

          .py-1(titulo="Direccionamiento estratégico")
            .row.mb-3.d-flex.align-items-center
              .col.col-12.col-lg-7.px-5.justify-content-center
                h3 Direccionamiento estratégico
                .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
                  p Es el marco que orienta los planes y acciones de la organización, lo integran la filosofía organizacional, la estrategia y el plan para alcanzar los objetivos, soporte de la cultura organizacional.
                p Debe ser compartido con todos en la organización y contribuir en el desarrollo de cada uno de los miembros que la conforman, el direccionamiento estratégico define la razón de ser de la organización a través de su misión, la proyección que tiene con la declaración de su visión y los comportamientos que todos en la organización deben exhibir, valores, para el cumplimiento de la estrategia organizacional.
              .col.col-12.col-lg-5
                picture
                  img(src='@/assets/curso/tema1/img02.svg', alt='Organización', class='img-fluid')
    .row
      .col-12
        .row.mb-5
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema1/img03.png', alt='', class='img-fluid')
          .col.col-12.col-lg-7
            br
            p El organigrama es la representación gráfica de la estructura organizacional, es una herramienta de gestión donde se muestran las funciones, áreas, orden jerárquico y dependencias internas. La estructura organizacional configura la forma en que se ordenan y se distribuyen los cargos, la comunicación entre ellos, como funciona los niveles de autoridad, en ella armonizan, tres elementos importantes, estos son:
            LineaTiempoD.color-primario
              .row(numero="1" titulo="La división del trabajo")
                .col-12.mb-4.mb-md-0
                  p.text-small Se refiere a las diferentes tareas que se deben realizar al interior de una empresa, ejecutadas por los trabajadores que la conforman.
            
              .row(numero="2" titulo="La especialización")
                .col-12.mb-4.mb-md-0
                  p.text-small Es la experticia que tiene un trabajador en varias de las tareas asignadas.

              .row(numero="3" titulo="La departamentalización")
                .col-12.mb-4.mb-md-0
                  p.text-small El conjunto de tareas se transforma en actividades, las cuales al agruparse de manera racional y lógica se convierten en departamentos o áreas de trabajo.

      .col-12
        p Cada departamento está conformado por un grupo de cargos, siendo los cargos las funciones que ejerce cada empleado dentro de la organización, especificada en lo que hace, es decir, son todas las actividades y deberes desempeñadas por una persona dentro de un área de trabajo, con una posición formal dentro del organigrama.


    .bg-slyder
      .row.justify-content-center
        .col.col-12
          .cajon.color-acento-contenido.bg-cajon-lila.p-4.mb-4
            p Para la construcción de la estructura organizacional, se estipula cuál será la distribución, configuración y el nivel de especialización del trabajo, y es a través de esta construcción que se identifican los niveles de autoridad, las áreas con las que funciona, la comunicación de interdependencia entre las áreas, enmarcada en la cultura organizacional. La estructura organizacional puede ser formal o informal.

        .col.col-10.col-lg-5.px-2
          SlyderF.mb-5(columnas="col-12")
            .tarjeta.tarjeta-slyde.p-4.border.border-1.shadow.m-auto
              .row.justify-content-center.mb-3
                img.img112(src='@/assets/curso/tema1/slyder01.svg' alt='AvatarTop')
                p.mb-0.mt-5.text-center Una estructura formal está oficialmente determinada por la organización, en la que se establecen las normas y pautas que rigen el comportamiento de cada uno de los miembros dentro de la organización, les otorga formalidad a las relaciones, y generan la opción de coordinar las actividades necesarias para el logro de los objetivos organizacionales.

            .tarjeta.tarjeta-slyde.p-4.border.border-1.shadow.m-auto
              .row.justify-content-center.mb-3
                img.img112(src='@/assets/curso/tema1/slyder02.svg' alt='AvatarTop')
                p.mb-0.mt-5.text-center La estructura organizacional facilita fijar tareas, responsabilidades y relaciones de autoridad.
          
            .tarjeta.tarjeta-slyde.p-4.border.border-1.shadow.m-auto
              .row.justify-content-center.mb-3
                img.img112(src='@/assets/curso/tema1/slyder03.svg' alt='AvatarTop')
                p.mb-0.mt-5.text-center La estructura informal la conforman las relaciones de cercanía y camaradería que se generan dentro de la organización, si la organización no cuenta con una estructura formal claramente constituida puede afectar las decisiones y deformar el direccionamiento que debe seguir la empresa.

            .tarjeta.tarjeta-slyde.p-4.border.border-1.shadow.m-auto
              .row.justify-content-center.mb-3
                img.img112(src='@/assets/curso/tema1/slyder04.svg' alt='AvatarTop')
                p.mb-0.mt-5.text-center De igual forma la estructura formal debe ser lo suficientemente flexible, para poder adaptarse rápidamente a la dinámica acelerada en que se encuentra el mundo en la actualidad.
          
        .col.col-12.col-lg-5
          picture
            img(src='@/assets/curso/tema1/img04.png', alt='Estructura organizacional', class='img-fluid')

    .row
      .col.col-12
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1	Tipos de organigramas

        .row.mb-5.position-relative.bg-gris
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema1/img05.svg', alt='Tipos de organigramas', class='img-fluid')
          .col.col-12.col-lg-7
            p Existen variedades de organigramas, pero todos tienen un mismo objetivo: proporcionar una estructura gráfica acorde a las necesidades de la empresa. El tipo de organigrama que la empresa utilice va a depender de su estructura organizacional.
            .row
              .col.position-relative
                .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4.mover-izquierda
                  p Para elaborar un organigrama es importante tener en cuenta el análisis previo que se haga de la empresa, en este deben estar claramente identificados los niveles organizacionales y las líneas de mando, a partir de esta identificación se organizan los cargos y se distribuyen las funciones.
            .row.tipos-organigrama 
              .col     
                p El organigrama puede ser:
              .col-12.d-flex.justify-content-center
                .tarjeta-tipo-organigrama.border.border-1.shadow.rounded-3.p-4.me-2
                  img.img70.m-auto(src='@/assets/curso/tema1/img06.svg', alt='Organigrama Vertical', class='img-fluid')
                .tarjeta-tipo-organigrama.border.border-1.shadow.rounded-3.p-4.me-2
                  img.img70.m-auto(src='@/assets/curso/tema1/img07.svg', alt='Organigrama Horizontal', class='img-fluid')
                .tarjeta-tipo-organigrama.border.border-1.shadow.rounded-3.p-4.me-2
                  img.img70.m-auto(src='@/assets/curso/tema1/img08.svg', alt='Organigrama Circular', class='img-fluid')
                .tarjeta-tipo-organigrama.border.border-1.shadow.rounded-3.p-4.me-2
                  img.img70.m-auto(src='@/assets/curso/tema1/img09.svg', alt='Organigrama Matricial', class='img-fluid')
      .col.col-12.mt-5
        br
        TabsB.color-acento-contenido.my-2.my-sm-5
          .py-4.py-md-5(titulo="Vertical" :icono="require('@/assets/curso/tema1/t01.svg')")
            .row.d-flex.justify-content-center  
              .col-12.mb-4.mb-md-0
                h4.texto-color-acento-contenido Vertical
                p Representa una estructura de arriba hacia abajo, iniciando en el nivel más alto de la organización. Representa una pirámide, generando percepción de rigidez y burocracia en las líneas de mando y toma de decisiones, estricta supervisión en la operación que se realiza.
              .col-10                
                img.m-auto(src='@/assets/curso/tema1/imgt01.svg', alt='Organigrama Vertical')
          .py-4.py-md-5(titulo="Horizontal" :icono="require('@/assets/curso/tema1/t02.svg')")
            .row.d-flex.justify-content-center
              .col-12.mb-4.mb-md-0
                h4.texto-color-acento-contenido Horizontal
                p Se representa de izquierda a derecha, es decir, muestra sus niveles jerárquicos en este sentido y las relaciones entre las áreas se representan por líneas, presenta a la organización con una estructura más plana, menos piramidal, lo que genera una percepción de mayor autonomía y sinergia organizacional, que puede ser indicativo de toma de decisiones más ágiles.
              .col-7
                img(src='@/assets/curso/tema1/imgt02.svg', alt='Organigrama Horizontal')
          .py-4.py-md-5(titulo="Circular" :icono="require('@/assets/curso/tema1/t03.svg')")
            .row
              .col-12.mb-4.mb-md-0
                h4.texto-color-acento-contenido Circular
                p Representan a la máxima autoridad en el centro y las áreas girando alrededor de ella.
                img.img450.m-auto(src='@/assets/curso/tema1/imgt03.svg', alt='Organigrama Circular')
          .py-4.py-md-5(titulo="Matricial" :icono="require('@/assets/curso/tema1/t04.svg')")
            .row.d-flex.justify-content-center  
              .col-12.mb-4.mb-md-0
                h4.texto-color-acento-contenido Matricial 
                p Representa los proyectos desarrollados al interior de la organización, sin restar importancia a las áreas funcionales reconocidas en la estructura organizacional, refleja una matriz donde se identifican, las áreas, los proyectos, sus responsables, en ella confluyen cargos dentro de un área que pueden estar asignados a un proyecto específico, de acuerdo con las competencias del trabajador. Pretende combinar las funciones y tareas con el proceso de realización (proyecto, producto o servicio). Pueden quedar dos responsables el funcional (área) y del proceso.
              .col-10
                img(src='@/assets/curso/tema1/imgt04.svg', alt='Organigrama Matricial')
          
        separador
    .bg-simbologia  
      .row
        .col.col-12
          #t_1_2.titulo-segundo.color-acento-contenido.mb-4
            h2 1.2 Simbología   
          
          .row.mb-5.d-flex.align-items-center
            .col.col-12.col-lg-7
              p Con el fin de ilustrar la estructura organizacional y entenderla sin leerla textualmente, se utilizan símbolos en formas geométricas para expresar la comunicación, los vínculos, los niveles organizacionales, las unidades de categoría especial como la línea staff, etc. Los cuales cuentan con un significado específico para que haya comprensión de lo que se pretende presentar.
              .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
                p La simbología más empleada por las organizaciones es:
            .col.col-12.col-lg-5
              picture
                img(src='@/assets/curso/tema1/img10.png', alt='Simbología', class='img-fluid')

        .col.col-12
          .row.mb-5.d-flex.align-items-center
            .col.col-12.col-lg-5
              img.img450.m-auto(src='@/assets/curso/tema1/img11.svg', alt='', class='img-fluid')
            .col.col-12.col-lg-7
              .row.d-flex.justify-content-center.position-relative
                .col-12
                  .simbologia.d-flex.justify-content-center
                    img.img180(src='@/assets/curso/tema1/img12.svg', alt='', class='img-fluid' @mouseover="btnIndice = 0"  @mouseleave="btnIndice = null")
                    img.img180(src='@/assets/curso/tema1/img13.svg', alt='', class='img-fluid' @mouseover="btnIndice = 1"  @mouseleave="btnIndice = null")
                    img.img180(src='@/assets/curso/tema1/img14.svg', alt='', class='img-fluid' @mouseover="btnIndice = 2"  @mouseleave="btnIndice = null")
                .col-10
                  .simbologia.d-flex.justify-content-center
                      img.img180(src='@/assets/curso/tema1/img15.svg', alt='', class='img-fluid' @mouseover="btnIndice = 3"  @mouseleave="btnIndice = null")
                      img.img180(src='@/assets/curso/tema1/img16.svg', alt='', class='img-fluid' @mouseover="btnIndice = 4"  @mouseleave="btnIndice = null")

                div.dialogo(
                    v-for="(boton, index) in botones" 
                    v-if="(index === btnIndice)" 
                    :style="{left:boton.left, top:boton.top}"
                    :class="{dialogo__azul: boton.color === 'azul', dialogo__gris: boton.color === 'gris'}")
                  div.position-relative
                    p.titulo_modal(:class="{titulo_modal_azul: boton.color === 'azul', titulo_modal_gris: boton.color === 'gris'}") {{ boton.numero }}
                  h5 {{ boton.titulo }}
                  p {{ boton.texto }}

        .col.col-12
          .row.mb-5.d-flex
            .col.col-2.d-flex.justify-content-end
              img.img112(src='@/assets/curso/tema1/img17.svg', alt='dots', class='img-fluid')
            .col.col-10: p.pt-3 Al construir un organigrama es relevante tener en cuenta alguna especificación que permita hacer una lectura rápida de lo que se pretende expresar, ver figura 1:


          .row.mb-5
            .col.col-12.col-lg-5
              img(src='@/assets/curso/tema1/img18.png', alt='Especificación organigrama', class='img-fluid')
            .col.col-12.col-lg-7
              .row
                .col-12
                  .tarjeta-avatar-b.mb-3
                    .tarjeta-avatar-b__img
                      img.img90(src='@/assets/curso/tema1/img19.svg' alt='AvatarTop')
                    .tarjeta.border.shadow.px-5.py-2.d-flex.align-items-center
                      p.my-4 Las unidades o departamentos deben estar claramente identificadas y descritas dentro del símbolo utilizado para ello.

              .row
                .col-12
                  .tarjeta-avatar-b.mb-3
                    .tarjeta-avatar-b__img
                      img.img90(src='@/assets/curso/tema1/img20.svg' alt='AvatarTop')
                    .tarjeta.border.shadow.ps-5.py-2.d-flex.align-items-center
                      p.my-4 Señalar de manera clara las relaciones existentes.

              .row
                .col-12
                  .tarjeta-avatar-b.mb-3
                    .tarjeta-avatar-b__img
                      img.img90(src='@/assets/curso/tema1/img21.svg' alt='AvatarTop')
                    .tarjeta.border.shadow.px-5.py-2.d-flex.align-items-center
                      p.my-4 Evitar que las líneas se crucen entre sí para que no haya confusión en la interpretación de la información.
    .row.d-flex.justify-content-center
      .col.col-7
        .titulo-sexto.color-acento-botones
          h5 Figura 1.
          span Simbología para organigramas
        img(src='@/assets/curso/tema1/img22.png', alt='Simbología para organigramas', class='img-fluid')
        br
        figcaption Nota. Yaemi, L (2013).
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    btnIndice: null,
    botones: [
      {
        numero: '01',
        color: 'azul',
        left: '50%',
        top: '45%',
        titulo: 'El cuadrado',
        texto:
          'Representa las unidades de subordinación, los que se encuentran en el nivel más bajo.',
      },
      {
        numero: '02',
        color: 'gris',
        left: '50%',
        top: '45%',
        titulo: 'El rectángulo',
        texto:
          'El cual representa los departamentos tales como de alta gerencia y gerencia intermedia.',
      },
      {
        numero: '03',
        color: 'azul',
        left: '50%',
        top: '45%',
        titulo: 'Líneas de mando',
        texto: 'Cumple con la comunicación de línea asesora de la estructura.',
      },
      {
        numero: '04',
        color: 'gris',
        left: '50%',
        top: '0%',
        titulo: 'Línea de relación indirecta',
        texto:
          'Cumple con la función de comunicar a un departamento con otro que no sea de línea.',
      },
      {
        numero: '05',
        color: 'azul',
        left: '50%',
        top: '-20%',
        titulo: 'Unidades o departamentos de asesoría',
        texto:
          'Brinda apoyo a las unidades de líneas. Siempre están dependiendo de la alta gerencia y por lo general su comunicación ingresa por la derecha o izquierda del rectángulo o cuadrado, y brindan asesoramiento a los demás departamentos o unidades. también llamada línea staff, se representa de manera punteada.',
      },
    ],
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
