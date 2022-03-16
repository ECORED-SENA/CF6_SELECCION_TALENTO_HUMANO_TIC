<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span.text-white 3
          h1 Diseño del cargo

        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-7
            p Diseñar un cargo se refiere a la forma en que se organiza el trabajo, identifica las tareas necesarias, que permiten el desempeño de un cargo. Para diseñar un cargo es necesario tener claro cuál es el flujo de trabajo existente en la empresa (procedimiento), el diseño de cargo es la base fundamental para la planeación del área de 
              span.texto-color-acento-contenido.fw-bold Talento Humano, 
              | este esquema se convierte en el punto de partida para los demás procesos del área y la asignación en la remuneración del cargo.
            .row
              .col.col-1
                img(src='@/assets/curso/tema3/dots-blanco-azul.svg', alt='dots', class='img-fluid')
              .col.col-11
                p.texto-azul.fw-bold El diseño de cargo detalla cada una de las tareas que tiene el cargo, es decir, específica de manera minuciosa el contenido del cargo, los métodos que son necesarios para la realización de la tarea y la relación que existe entre todos los cargos en la organización, por esta razón antes de diseñar el cargo es necesario tener clara la estructura organizacional y el organigrama de la empresa.
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img01.png', alt='Diseño del cargo', class='img-fluid')

        #t_3_1.titulo-segundo.color-secundario
          h2 3.1 Descripción y análisis de cargo

        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img02.png', alt='Descripción y análisis de cargo', class='img-fluid')
          .col.col-12.col-lg-7
            p Describir el cargo significa detallar qué hace la persona que ocupa el cargo, cómo lo hace, para qué lo hace, dónde lo hace, las responsabilidades que realiza dentro de la organización. Los actores principales para llevar a cabo la descripción del cargo es el empleado, 
              span.texto-azul.fw-bold (quien desempeña el cargo), 
              | el jefe inmediato y toda la información que se tenga de la estructura organizacional, así como de su direccionamiento estratégico y la cultura organizacional. Todas las organizaciones deben considerar efectuar una descripción de cada uno de los puestos de trabajo que se encuentran dentro de su estructura, ésta debe ser por escrito, de esta manera, asegura que las tareas queden consignadas y disminuyan el riesgo de repetirse. A través de la descripción del cargo 
              span.texto-azul.fw-bold el trabajador tiene claro que es lo que se espera de él en la organización.

            p Una descripción del cargo permitirá:

            ul.lista-ul--color.ms-5
              li
                i.fas.fa-genderless
                | Definir una compensación equitativa a los trabajadores.
              li
                i.fas.fa-genderless
                | Ubicar en los cargos de acuerdo al perfil del cargo.
              li
                i.fas.fa-genderless
                | Diseñar planes de carrera para los empleados y su respectiva planificación de la formación que requieren.
              li
                i.fas.fa-genderless
                | Propiciar las condiciones que contribuyan a mejorar el ambiente laboral y disminuir los riesgos de accidentes y enfermedad laboral.
              li
                i.fas.fa-genderless
                | Inicio de la planeación de los otros procesos del área de Talento Humano. (selección, inducción, evaluación de desempeño, escala salarial).

        p.texto-azul.text-decoration-underline.fw-bold.fs-4 Contenido de un cargo

        .row.d-flex.flex-wrap.justify-content-center
          .col.mb-4.px-1
            .tarjeta.tarjeta-azul.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon1.svg', alt='¿Qué hace?')
                  h3.text-center ¿Qué hace?
                  p.text-center.mb-0 Tarea
                  p.text-center Activiades

          .col.mb-4.px-1
            .tarjeta.tarjeta-gris.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon1.svg', alt='¿Qué hace?')
                  h3.text-center ¿Cuándo lo hace?
                  p.text-center.mb-0 Tiempo que requiere la tarea.

          .col.mb-4.px-1
            .tarjeta.tarjeta-azul.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon1.svg', alt='¿Qué hace?')
                  h3.text-center ¿Cómo lo hace?
                  p.text-center.mb-0 Recursos (Humanos, materiales, equipos) y métodos.

          .col.mb-4.px-1
            .tarjeta.tarjeta-gris.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon1.svg', alt='¿Qué hace?')
                  h3.text-center ¿Dónde lo hace?
                  p.text-center.mb-0 Lugar de trabajo.

          .col.mb-4.px-1
            .tarjeta.tarjeta-azul.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon1.svg', alt='¿Qué hace?')
                  h3.text-center ¿Por qué lo hace?
                  p.text-center.mb-0 Razón de ser de la existencia del cargo.

        .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
          p El análisis del cargo se refiere a los requisitos que debe exhibir quien desempeñará el cargo, es decir, los conocimientos, experiencia, habilidades, destrezas del trabajador. Una vez se conoce el contenido del cargo, se hace la descripción del mismo, se lleva a cabo el análisis de toda la información en términos de cuál es el saber, el hacer y las características personales que requiere el cargo, el análisis de las condiciones de trabajo permite identificar los riesgos a los que se ve expuesta el ocupante del cargo en su ejercicio.


        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-7
            p.texto-azul.text-decoration-underline.fw-bold.fs-4 Exigencias del cargo
            p El análisis permite la construcción del perfil del cargo, que se convierte en una fuente de información básica para los procesos de reclutamiento de personal. Un buen análisis del cargo permite la construcción del perfil del cargo, siendo así necesario destacar que, debe hacerse de manera objetiva, no evaluando a la persona que se encuentra ocupando el cargo al momento de hacer la descripción, si no teniendo de referente únicamente el cargo.
            ul.lista-ul--color.ms-5
              li
                i.fas.fa-genderless
                p.mb-0 
                  span.texto-color-acento-contenido.fw-bold Requisitos Intelectuales: 
                  | conocimientos del saber y del hacer.
              li
                i.fas.fa-genderless
                p.mb-0 
                  span.texto-color-acento-contenido.fw-bold Requisitos físicos: 
                  | esfuerzos, destrezas, habilidades físicas. Constitución física.
              li
                i.fas.fa-genderless
                p.mb-0 
                  span.texto-color-acento-contenido.fw-bold Responsabilidades: 
                  | supervisión de personas, equipos, dinero, contacto interno y externo.
              li
                i.fas.fa-genderless
                p.mb-0 
                  span.texto-color-acento-contenido.fw-bold Condiciones de trabajo: 
                  | ambiente físico de trabajo .Riesgos laborales.
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img03.png', alt='Exigencias del cargo', class='img-fluid')


        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img04.png', alt='Descripción del cargo', class='img-fluid')
          .col.col-12.col-lg-7
            p.texto-azul.text-decoration-underline.fw-bold.fs-4 Exigencias del cargo
            ul.lista-ul--color.ms-5
              li
                i.fas.fa-genderless
                | La aplicación de las fuentes o métodos utilizados para recolectar la información. 
              li
                i.fas.fa-genderless
                | Confirmación de la información con el jefe inmediato.
              li
                i.fas.fa-genderless
                | Resultado final, el descriptivo del cargo.

            p A continuación, se detallan las actividades generales para la identificación y descripción del cargo:

        p.texto-azul.text-decoration-underline.fw-bold.fs-4 Actividades generales para la identificación y descripción del cargo 

        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-7
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Denominación del cargo")
                .col-12.mb-4.mb-md-0
                  p.text-small Término o nombre con el que se conoce cada cargo en la organización.
            
              .row(numero="2" titulo="Reconocimiento")
                .col-12.mb-4.mb-md-0
                  p.text-small Nivel de la posición del cargo dentro de la estructura organizacional.

              .row(numero="3" titulo="Determinar el código del cargo")
                .col-12.mb-4.mb-md-0
                  p.text-small Formado por cuatro dígitos (los dígitos indican: área, nivel y ocupación).

              .row(numero="4" titulo="Identificar el área funcional del cargo")
                .col-12.mb-4.mb-md-0
                  p.text-small De acuerdo con la ubicación dentro de la estructura organizacional.

              .row(numero="5" titulo="Reconocimiento del cargo del jefe inmediato")
                .col-12.mb-4.mb-md-0
                  p.text-small Identificar dentro de la estructura organizacional.

              .row(numero="6" titulo="Delimitar el propósito del cargo")
                .col-12.mb-4.mb-md-0
                  p.text-small Objetivo, misión o razón de ser del cargo.

              .row(numero="7" titulo="Describir las funciones en términos de")
                .col-12.mb-4.mb-md-0
                  p.text-small Qué hace, cómo lo hace, cuándo lo hace y dónde lo hace.

              .row(numero="8" titulo="Determinar los requisitos del cargo")
                .col-12.mb-4.mb-md-0
                  p.text-small Intelectuales, físicos.

              .row(numero="9" titulo="Definir los conocimientos")
                .col-12.mb-4.mb-md-0
                  p.text-small Esenciales para ocupar el cargo. Saber y Hacer.
                  ul.lista-ul--color.ms-5
                    li
                      i.fas.fa-genderless.text-small
                      p.mb-0.text-small Fijar responsabilidades del cargo.
                    li
                      i.fas.fa-genderless.text-small
                      p.mb-0.text-small Especificar los riesgos asociados al cargo.

          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img05.png', alt='Actividades generales', class='img-fluid')

        .row.bg-cajon-celeste.d-flex.align-items-center.p-2
          .col.col-1
            img.imgdots(src='@/assets/curso/tema2/dots.svg', alt='dots', class='img-fluid')
          .col.col-11
            p.mb-0 Para ampliar información se puede visualizar el video Cultura organizacional, el cual se encuentra en el material complementario, donde se aborda el concepto y los elementos que conforman la cultura organizacional.
        br
        p La inducción, es el inicio de un tránsito que contribuye a la apropiación de la cultura organizacional y directrices claras de actuación en la forma de comportarse con sus jefes, compañeros, clientes, proveedores. Para la evaluación de desempeño, es el mapa a seguir en lo que respecta a qué evaluar en el trabajador, y cuáles serían los indicadores a valorar. En cuanto a la capacitación, determina el plan de formación, desarrollo y de carrera que debe seguir el trabajador, como guía clara para el enriquecimiento del cargo y posibles ascensos en la organización.

        separador

      .col.col-12
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        .titulo-segundo.color-secundario
          h2 3.1.1 Cargo  

        .row.mb-5.d-flex.align-items-center
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img06.png', alt='Cargo', class='img-fluid')
          .col.col-12.col-lg-7
            p Todo trabajador en una organización tiene un cargo, el cual delimita la función que ejerce el trabajador en la empresa, esta función se cumple a través de la asignación de tareas que la organización hace al trabajador para el cumplimento de los objetivos organizacionales. El cargo y su ubicación en la estructura organizacional determina el elemento motivacional en el trabajador, ya que el mismo, formaliza el rol que la persona tiene en la organización.
            .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
              p 
                span.texto-azul.fw-bold Según Chiavenato (2003), 
                | el cargo es la descripción de todas las actividades desempeñadas por una persona englobadas en un todo unificado.


</template>

<script>
export default {
  name: 'Tema3',
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
