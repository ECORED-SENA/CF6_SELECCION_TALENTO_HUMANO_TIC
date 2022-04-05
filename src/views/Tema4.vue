<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span.text-white 4
          h1 Riesgos laborales

        .row.mb-5.position-relative.bg-gris
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema4/img01.png', alt='Riesgos laborales', class='img-fluid')
          .col.col-12.col-lg-7.position-relative
            p Como parte de la información del contenido del cargo, se encuentra descrito el lugar donde el trabajador debe ejecutar las tareas propias de su cargo, incluyendo los factores ambientales a los que se ve expuesto y toda la información tecnológica estimada, con el fin de especificar las condiciones que demanda la realización diaria de su labor. Todo lo anterior incluye también, la forma en que el dueño del cargo organiza su trabajo, la duración de su jornada laboral, incluso, las condiciones de capacitación y entrenamiento.

            .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4.mover-izquierda
              p A partir del análisis de esta información se delimitan los peligros y riesgos a los cuales está expuesto el trabajador en el ejercicio de sus funciones. Por tanto, es imprescindible aclarar la diferencia entre peligro y riesgo.

    .row.mb-4.d-flex.justify-content-center
      .col.col-12.col-lg-6.mt-2
        .tarjeta-competencias-morada
          .row
            .col-4.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema4/img02.svg', alt='', class='img-fluid')
            .col-8.d-flex.align-items-end.p-0
              p.fw-bold.mb-0 Peligro
            .col-12.d-flex.align-items-center.py-5
              p.my-2 Se define como la fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas o una combinación de estos. (OHSAS 18001:2007).
              
      .col.col-12.col-lg-6.mt-2
        .tarjeta-competencias-morada
          .row
            .col-4.d-flex.justify-content-center
              img.img90(src='@/assets/curso/tema4/img03.svg', alt='', class='img-fluid')
            .col-8.d-flex.align-items-end.p-0
              p.fw-bold.mb-0 Riesgo
            .col-12.d-flex.align-items-center.py-5
              p.my-2 Es la combinación de la probabilidad, de que ocurra un evento o exposición peligrosa, y la severidad de la lesión o enfermedad que puede ser causada por el evento o exposición. (OHSAS 18001:2007). Es la probabilidad de ocurrencia de un accidente.

      .col.col-11
        .row.bg-cajon-celeste.d-flex.align-items-center.p-2.mt-5
          .col.col-1
            img.imgdots(src='@/assets/curso/tema3/dots-blanco-azul.svg', alt='dots', class='img-fluid')
          .col.col-11
            p.mb-0 La empresa está obligada a cumplir con lo que establece la ley NTC 45 de 2012, a condición de que se disminuyan los riesgos revelados en la descripción del cargo.
        br
        br
      .col.col-12
        p A continuación, se presenta la tabla 2 de peligros especificada en la norma.
        br
        .titulo-sexto.color-acento-botones
          h5 Tabla 2.
          span Peligros según la norma

      .col.col-12
        table.titulo
          thead
            tr
              th(colspan=7) TABLA DE PELIGROS (NTC 45)
            tr
              th(colspan=7) Clasificación 
        
        table.peligros
          tbody
            tr.thead
              td.descripcion(rowspan=9) DESCRIPCIÓN
              th Biológico
              th Físico
              th Químico
              th.w-25 Psicosocial
              th Biomecánico
              th Condiciones de seguridad
              th Fenómenos naturales
            tr
              td Virus
              td Ruido (impacto intermitente y continuo)
              td Polvos orgánicos e inorgánicos
              td Gestión organizacional (estilo de mando, pago, contratación, participación, inducción y capacitación, bienestar social, evaluación de desempeño)
              td Posturas (prolongadas, mantenidas, forzadas, anti gravitacional)
              td Mecánico: (elemento de maquinarias, herramientas, piezas a trabajar, materiales proyectados sólidos o fluidos)
              td Sismo
            tr
              td Bacterias
              td Iluminación (luz visible por exceso o deficiencia)
              td Fibras
              td Características de la organización del trabajo (comunicación, tecnología, demandas cualitativas y cualitativas de la labor)
              td Esfuerzo
              td Eléctrico: (alta y baja tensión, estática)
              td Terremoto
            tr
              td Hongos
              td Vibración (cuerpo entero, segmentario)
              td Líquidos (niebla, rocíos)
              td Características del grupo social del trabajo (relaciones, cohesión, calidad en la interacción, trabajo en equipo)
              td Movimiento repetitivo
              td Locativo: (almacenamiento, superficies de trabajo (irregularidades, deslizantes, con diferencia de nivel), condiciones de orden y aseo, caída de objetos)
              td Vendaval
            tr
              td Ricketsias
              td Temperaturas extremas
              td Gases y vapores
              td Condiciones de la tarea (carga mental, contenido de la tarea, demandas emocionales, sistemas de control, definición de roles, monotonía en la tarea, etc.)
              td Manipulación manual de carga
              td Tecnológico (explosión, fuga, derrame, incendio)
              td Inundación
            tr
              td Parásitos
              td Presión atmosférica
              td Humos metálicos y no metálicos
              td Relación persona-tarea (conocimiento, habilidades con relación a la demanda de la tarea, iniciativa, autonomía y reconocimiento, identificación de la persona con la tarea y la organización)
              td 
              td Accidente de transito
              td Derrumbe
            tr
              td Picaduras
              td Radiaciones ionizantes (rayos x, gama, beta y alfa)
              td Material particulado
              td Jornada de trabajo (pausas, trabajo nocturno, rotación, horas extras)
              td 
              td Públicos (robos, atracos, asaltos, atentados, desorden público, etc.)
              td Precipitaciones (lluvias, granizadas, heladas)
            tr
              td Mordeduras
              td Radiaciones ionizantes (rayos x, gama, beta y alfa)
              td 
              td Jornada de trabajo (pausas, trabajo nocturno, rotación, horas extras, descansos)
              td 
              td Trabajo en altura
              td 
            tr
              td Fluidos o excrementos
              td 
              td 
              td 
              td 
              td Espacios confinados
              td 
        br
        figcaption Nota. Norma NTC 45 2012. 

</template>

<script>
export default {
  name: 'Tema4',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.nextTick(() => {
      this.aosRefresh()
    })
  },
  updated() {
    this.aosRefresh()
  },
}
</script>

<style lang="sass"></style>
