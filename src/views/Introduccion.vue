<template lang="pug">
.curso-main-container.introduccion.animated.fadeIn
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row
      .col-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span.text-white i
          h1 Introducción

        .row.mb-5
          .col.col-12.col-lg-5.p-0.m-0
            img(src='@/assets/curso/introduccion/img01.png', alt='Introducción', class='img-fluid')
          .col.col-12.col-lg-7.d-flex.align-items-center.m-0.p-0.position-relative.col-introduccion
            p.p-4.bg-color-sistema-h Las necesidades del mercado actual obligan a las organizaciones a tener un sistema de cargos bien definido, que le permita buscar personal con buenos comportamientos y conocimientos, donde la tecnología representa una oportunidad estratégica para gestionar y digitalizar el talento humano requerido. Para ello se debe tener conocimiento de ciertos factores de la organización y su entorno tales como estructura organizacional, cultura organizacional, normas y leyes, clasificación de ocupaciones, etc. Con el conocimiento detallado de estos factores, y haciendo uso de la tecnología, las organizaciones pueden realizar una serie de actividades para el levantamiento de perfiles, como herramienta base para la preselección de candidatos.
            img.img90.dots(src='@/assets/curso/introduccion/dots.svg', alt='dots', class='img-fluid')

        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
