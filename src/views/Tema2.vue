<template lang="pug">
.curso-main-container.pb-3.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col.col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span.text-white 2
          h1 Cultura organizacional
        .bg-t2
          .row.mb-5
            .col.col-12.col-lg-5
              picture
                img.img450(src='@/assets/curso/tema2/img01.png', alt='Cultura organizacional', class='img-fluid')
            .col.col-12.col-lg-7
              .row.mt-5
                .col.col-1.mt-4
                  img(src='@/assets/curso/tema2/dots.svg', alt='dots', class='img-fluid')
                .col.col-11.mt-4  
                  p Todas las personas hacen parte de un sistema de cultura, si se refiere al término de manera genérica se puede afirmar que es un conjunto de costumbres, creencias, características específicas de comportamiento que comparte un grupo de individuos.
              br
              p Referido a las organizaciones, se puede decir que la cultura es la forma característica en que se relacionan los trabajadores en la organización, 
                span.texto-azul (estilos de dirección, trabajo en equipo)
                |, la manera en que se resuelven las situaciones propias de la organización, el pensamiento y sentimiento en el hacer y el ser organizacional, son el reflejo de los valores, actitudes, expectativas compartidas, exhiben un  comportamiento  particular que los  identifica y diferencia con otra organización, genera así un sello diferenciador.

              .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
                p La cultura organizacional soporta las buenas o malas prácticas organizacionales, es decir institucionaliza las acciones con respecto a los clientes, tanto internos como externos, la relación y negociación con los proveedores, determina, además, el clima o ambiente organizacional.

          .row.mb-2
            .col.col-12.col-lg-7
              br
              .cajon.color-secundario.bg-cajon-lila.p-4.mb-4.w-110
                p.ps-4 La cultura refleja cómo piensa, siente, actúa la organización, esta afirmación ilustra el hecho de que se identifique a algunas organizaciones por su cultura de servicio o cultura de seguridad.
              
              p El direccionamiento estratégico que elija una organizacional, genera una imagen de la empresa fuera de ella, respecto a lo que se espera que ella ofrezca a los clientes, a los proveedores, a los trabajadores, siendo la cultura el eje en que se mueven todas estas relaciones, la descripción y perfil del cargo no son ajenos a este engranaje de percepción de un ambiente organizacional importante para el desempeño laboral, la descripción que se haga del contenido del cargo, las condiciones y su análisis deben ser un reflejo de esta cultura.
            .col.col-12.col-lg-5
              picture
                img(src='@/assets/curso/tema2/img02.png', alt='Cultura organizacional', class='img-fluid')
    .row.bg-cajon-celeste.d-flex.align-items-center.p-2
      .col.col-1
        img.imgdots(src='@/assets/curso/tema2/dots.svg', alt='dots', class='img-fluid')
      .col.col-11
        p.mb-0 Para ampliar información se puede visualizar el video 
          span.fw-bold Cultura organizacional, 
          | el cual se encuentra en el material complementario, donde se aborda el concepto y los elementos que conforman la cultura organizacional.


</template>

<script>
export default {
  name: 'Tema2',
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
