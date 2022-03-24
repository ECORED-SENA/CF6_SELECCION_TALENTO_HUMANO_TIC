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

        .row.mb-5.position-relative.bg-gris-izquierdo
          .col.col-12.col-lg-7.pe-4
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

        .bg-img-celeste
          .row.mb-5.d-flex.align-items-center
            #t_3_1.titulo-segundo.color-acento-contenido
              h2 3.1 Descripción y análisis de cargo
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
                  | Ubicar en los cargos de acuerdo con el perfil del cargo.
                li
                  i.fas.fa-genderless
                  | Diseñar planes de carrera para los empleados y su respectiva planificación de la formación que requieren.
                li
                  i.fas.fa-genderless
                  | Propiciar las condiciones que contribuyan a mejorar el ambiente laboral y disminuir los riesgos de accidentes y enfermedad laboral.
                li
                  i.fas.fa-genderless
                  | Inicio de la planeación de los otros procesos del área de Talento Humano. (selección, inducción, evaluación de desempeño, escala salarial).
            
            .col-12.mt-5
              br
              p.texto-azul.text-decoration-underline.fw-bold.fs-5 Contenido de un cargo
              br
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
                    img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon2.svg', alt='¿Qué hace?')
                    h3.text-center ¿Cuándo lo hace?
                    p.text-center.mb-0 Tiempo que requiere la tarea.

            .col.mb-4.px-1
              .tarjeta.tarjeta-azul.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon3.svg', alt='¿Qué hace?')
                    h3.text-center ¿Cómo lo hace?
                    p.text-center.mb-0 Recursos (Humanos, materiales, equipos) y métodos.

            .col.mb-4.px-1
              .tarjeta.tarjeta-gris.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon4.svg', alt='¿Qué hace?')
                    h3.text-center ¿Dónde lo hace?
                    p.text-center.mb-0 Lugar de trabajo.

            .col.mb-4.px-1
              .tarjeta.tarjeta-azul.p-4
                .row.justify-content-center.mb-3
                  .col-12
                    img.img90.m-auto.mb-3(src='@/assets/curso/tema3/Icon5.svg', alt='¿Qué hace?')
                    h3.text-center ¿Por qué lo hace?
                    p.text-center.mb-0 Razón de ser de la existencia del cargo.

          .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4
            p El análisis del cargo se refiere a los requisitos que debe exhibir quien desempeñará el cargo, es decir, los conocimientos, experiencia, habilidades, destrezas del trabajador. Una vez se conoce el contenido del cargo, se hace la descripción del mismo, se lleva a cabo el análisis de toda la información en términos de cuál es el saber, el hacer y las características personales que requiere el cargo, el análisis de las condiciones de trabajo permite identificar los riesgos a los que se ve expuesta el ocupante del cargo en su ejercicio.
          
        br

        .row.mb-5.position-relative.bg-gris-izquierdo
          .col.col-12.col-lg-7
            p.texto-azul.text-decoration-underline.fw-bold.fs-5 Exigencias del cargo
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


        .row.mb-5
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img04.png', alt='Descripción del cargo', class='img-fluid')
          .col.col-12.col-lg-7
            p.texto-azul.text-decoration-underline.fw-bold.fs-5 La descripción del cargo incluye tres momentos
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

        .row.mb-5
          .col-12
            p.texto-azul.text-decoration-underline.fw-bold.fs-5 Actividades generales para la identificación y descripción del cargo 
            .bg-img-linea-tiempo
              .row.mb-5.d-flex.justify-content-center
                .col.col-12.col-lg-7
                  LineaTiempoD.color-primario
                    .row(numero="1" titulo="Denominación del cargo")
                      .col-12.mb-4.mb-md-0
                        p.text-small.mb-0 Término o nombre con el que se conoce cada cargo en la organización.
                  
                    .row(numero="2" titulo="Reconocimiento")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Nivel de la posición del cargo dentro de la estructura organizacional.

                    .row(numero="3" titulo="Determinar el código del cargo")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Formado por cuatro dígitos (los dígitos indican: área, nivel y ocupación).

                    .row(numero="4" titulo="Identificar el área funcional del cargo")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 De acuerdo con la ubicación dentro de la estructura organizacional.

                    .row(numero="5" titulo="Reconocimiento del cargo del jefe inmediato")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Identificar dentro de la estructura organizacional.

                    .row(numero="6" titulo="Delimitar el propósito del cargo")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Objetivo, misión o razón de ser del cargo.

                    .row(numero="7" titulo="Describir las funciones en términos de")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Qué hace, cómo lo hace, cuándo lo hace y dónde lo hace.

                    .row(numero="8" titulo="Determinar los requisitos del cargo")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Intelectuales, físicos.

                    .row(numero="9" titulo="Definir los conocimientos")
                      .col-12.mb-4.mb-md-0
                        p.text-smallmb-0 Esenciales para ocupar el cargo. Saber y Hacer.
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

                .col.col-11.mt-4
                  .row.bg-cajon-lila.d-flex.align-items-center.p-2.rounded-3
                    .col.col-1
                      img.imgdots(src='@/assets/curso/tema3/dots-lila.svg', alt='dots', class='img-fluid')
                    .col.col-11
                      p.mb-0 Un cargo bien estructurado es una puerta abierta al éxito para los otros procesos dentro del área de talento humano; en lo que respecta a selección permite atraer y escoger el candidato idóneo para el perfil de búsqueda.
          .col.col-12.mt-2
            p La inducción, es el inicio de un tránsito que contribuye a la apropiación de la cultura organizacional y directrices claras de actuación en la forma de comportarse con sus jefes, compañeros, clientes, proveedores. Para la evaluación de desempeño, es el mapa a seguir en lo que respecta a qué evaluar en el trabajador, y cuáles serían los indicadores a valorar. En cuanto a la capacitación, determina el plan de formación, desarrollo y de carrera que debe seguir el trabajador, como guía clara para el enriquecimiento del cargo y posibles ascensos en la organización.

        separador

      .col.col-12
        .titulo-segundo.color-acento-contenido
          h2 3.1.1 Cargo  

        .row.mb-5
          .col.col-12.col-lg-5
            picture
              img(src='@/assets/curso/tema3/img06.png', alt='Cargo', class='img-fluid')
          .col.col-12.col-lg-7.position-relative
            br
            br
            p Todo trabajador en una organización tiene un cargo, el cual delimita la función que ejerce el trabajador en la empresa, esta función se cumple a través de la asignación de tareas que la organización hace al trabajador para el cumplimento de los objetivos organizacionales. El cargo y su ubicación en la estructura organizacional determina el elemento motivacional en el trabajador, ya que el mismo, formaliza el rol que la persona tiene en la organización.
            .cajon.color-acento-botones.bg-cajon-amarillo.p-4.mb-4.mover-izquierda
              p 
                span.texto-azul.fw-bold Según Chiavenato (2003), 
                | el cargo es la descripción de todas las actividades desempeñadas por una persona englobadas en un todo unificado.
        p La globalización ha generado una dinámica acelerada en los productos y servicios, la tendencia hacia la era de la información ha llevado a que las empresas sean más flexibles en la realización de sus tareas y actividades, lo que hace que la estructura de los cargos sea variable y fácil de ajustar para responder con agilidad a los cambios, lo que depende directamente de una estructura organizacional flexible.

        .row.bg-cajon-celeste.d-flex.align-items-center.p-2
          .col.col-1
            img.imgdots(src='@/assets/curso/tema3/dots-blanco-azul.svg', alt='dots', class='img-fluid')
          .col.col-11
            p.mb-0 De acuerdo con el nivel organizacional en que se encuentre el cargo 
              span.texto-color-acento-contenido.fw-bold (Gerencial, táctico, Operativo) 
              | será la denominación que se le asigna al cargo.

        separador

      .bg-img-competencia   
        .row
          .col.col-12.mt-4
            .titulo-segundo.color-acento-contenido
              h2 3.1.2 Competencia y niveles de cualificación
            
            .row.d-flex.justify-content-center.position-relative
              .col.col-12
                img(src='@/assets/curso/tema3/img07.png', alt='Competencia y niveles de cualificación', class='img-fluid')
              .col.col-10.bg-gradiente-gris.px-4.py-3.rounded-3.position-absolute.bottom-0
                p.mb-0.text-small Las organizaciones propenden por garantizar un personal competente, que cumpla con los requerimientos del cargo, en el cumplimiento de los objetivos de la misma, esto quiere decir que el empleado coloca al servicio de la empresa un conjunto de competencias que muestran sus destrezas en la realización de las actividades asignadas.
            
    .row.mt-5.d-flex.justify-content-center
      .col.col-12.bg-img-slyder
        .tarjeta.tarjeta.p-4.mb-1
          SlyderA
            .row.d-flex.align-items-center
              .col-md-7.mb-4.mb-md-0.position-relative
                p.numero-slyder 01
                p.ms-4 Pero, ¿qué son las competencias? Las podemos definir como las características que una persona posee, se evidencian con los comportamientos expresados por el trabajador, significa que deben ser observables y medibles.
              .col-md-5
                figure
                  img.img350(src='@/assets/curso/tema3/slyder01.svg', alt='¿qué son las competencias?')

            .row.d-flex.align-items-center
              .col-md-6
                figure
                  img.img350(src='@/assets/curso/tema3/slyder02.svg', alt='destrezas y habilidades')
              .col-md-6.mb-4.mb-md-0.position-relative
                p.numero-slyder 02
                p El individuo muestra sus destrezas y habilidades al enfrentar diferentes situaciones, en el ámbito laboral, exhibe adicionalmente unas habilidades físicas o mentales 
                  span.texto-azul.fw-bold (capacidad real y demostrada), 
                  | que influyen de manera directa en el desempeño del trabajador.

            .row.d-flex.align-items-center
              .col-md-6.mb-4.mb-md-0.position-relative
                p.numero-slyder 03
                p Cuando hablamos de competencias es necesario diferenciar las competencias laborales de las comportamentales o conductuales. 
                  span.texto-azul.fw-bold La Organización Internacional del Trabajo (OIT) 
                  | promueve mundialmente programas que logren la Certificación en competencias laborales, 
                  span.texto-azul.fw-bold el SENA es el ente certificador en Colombia, 
                  |todas las competencias que componen los programas diseñados en el Sena para el sector productivo están soportados por las normas sectoriales de competencia laboral.
              .col-md-6
                figure
                  img.img350(src='@/assets/curso/tema3/slyder03.svg', alt='Competencias laborales y conductuales')

            .row.d-flex.align-items-center
              .col-md-6
                figure
                  img.img350(src='@/assets/curso/tema3/slyder04.svg', alt='destrezas y habilidades')
              .col-md-6.mb-4.mb-md-0.position-relative
                p.numero-slyder 04
                p A través de la certificación la persona se acredita como competente en determinada praxis. Son estándares reconocidos a nivel nacional. El Decreto 933 de 2003 en su artículo 19 establece: 
                  span.texto-azul.fw-bold “El Servicio Nacional de Aprendizaje–Sena, regulará, diseñará, normalizará y certifica las competencias laborales”. 
                  | (Acuerdo 6 de 2010).

            .row.d-flex.align-items-center
              .col-md-6.mb-4.mb-md-0.position-relative
                p.numero-slyder 05
                p De igual forma se conforman las mesas sectoriales, espacio natural de concertación con el sector productivo, gubernamental y académico para desarrollar la gestión del talento humano por competencias generando conocimiento transferible a la formación profesional.
              .col-md-6
                figure
                  img.img350(src='@/assets/curso/tema3/slyder05.svg', alt='Competencias laborales y conductuales')

      .row.mt-5
        .col.col-12
          .row.mb-5.position-relative.bg-gris
            .col.col-12.col-lg-5
              img(src='@/assets/curso/tema3/img08.png', alt='Competencias laborales', class='img-fluid')
            .col.col-12.col-lg-7.pt-sm-4
              p La mayoría de las definiciones de competencias laborales plantean la existencia de conocimientos y habilidades específicas para desempeñarse en un cargo, siendo así, las competencias laborales se aplican a oficios y profesiones, el objetivo es aumentar la empleabilidad, “la competencia laboral es la capacidad de una persona para desempeñar funciones productivas en contextos variables, con base en los estándares de calidad establecidos por el sector productivo” (2005, p.11); en esta concepción subyace la intencionalidad institucional de responder pertinentemente a las necesidades del sector productivo.
              .row
                .col.col-1
                  img(src='@/assets/curso/tema3/dots-gris-lila.svg', alt='', class='img-fluid')
                .col.col-11
                  p.texto-color-acento-contenido.fw-bold De manera breve se abordarán las competencias conductuales, estas fueron pensadas para implementar en las organizaciones el modelo de competencias, y están relacionadas con las características personales del individuo, interconectadas con la motivación, es decir la fuerza interna que motiva a una persona a la acción, y tiene que ver con el deseo de logro, poder y filiación. Este impulso mueve a las personas al saber y al hacer de manera natural manteniendo su interés permanente no solo por hacerlas, sino por hacerlas bien hechas y desarrollarlas.

              p Las competencias en general se dividen en tres elementos:

      .row
        .col.col-12
          ImagenInfografica.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img09.svg', alt='Texto que describa la imagen')
          
            .tarjeta-competencias(x='51%' y='11%' numero='')
              h5.lila.mb-2 Competencias del ser
              p.px-4 Tienen que ver con las actitudes, con la autoimagen, con los rasgos de carácter, con la personalidad, son las más difíciles de medir (competencias conductuales).
          
            .tarjeta-competencias(x='27%' y='60%' numero='')
              h5.celeste.mb-2 Competencias del saber
              p.px-4 Conocimiento que se utiliza para áreas concretas (competencias laborales).
          
            .tarjeta-competencias(x='73%' y='60%' numero='')
              h5.gris.mb-2 Competencias del saber hacer
              p.px-4 Capacidad o destreza, adquirida que se utiliza para hacer una cosa (competencias técnicas).

        .col.col-12
          p En cuanto a los niveles de cualificación, cabe puntualizar que unas competencias se pueden evidenciar a través de diferentes comportamientos de acuerdo al nivel del cargo que la contenga, por ejemplo, no es lo mismo el liderazgo que debe exhibir un gerente, al liderazgo que debe exhibir un supervisor. Los comportamientos o descriptores de cada competencia se dividen en niveles o grados de acuerdo con la estructura organizacional.

          p Las competencias también pueden ser:

          .row
            .col.col-12.col-lg-6.mt-4
              .tarjeta-competencias-morada
                .row
                  .col-4.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/img10.svg', alt='', class='img-fluid')
                  .col-8.d-flex.align-items-end.p-0
                    p.fw-bold.mb-0 Organizacionales
                  .col-12.d-flex.align-items-center.py-5
                    p.my-2 Hacen parte del direccionamiento estratégico de la organización e incluyen la cultura y los valores organizacionales, son homogéneas a todos en la organización, también son conocidas como competencias corporativas, generales o transversales.
                    
            .col.col-12.col-lg-6.mt-4
              .tarjeta-competencias-morada
                .row
                  .col-4.d-flex.justify-content-center
                    img.img90(src='@/assets/curso/tema3/img11.svg', alt='', class='img-fluid')
                  .col-8.d-flex.align-items-end.p-0
                    p.fw-bold.mb-0 Específicas
                  .col-12.d-flex.align-items-center.py-5
                    p.my-2 Tocan directamente al cargo, son todas aquellas que llevan a que una persona sea exitosa en lo que hace y se desempeña.

      .row.mt-5
        .col.col-12
          p Un grupo de expertos (directivos, empleados, jefes de áreas, talento humano, asesor externo), definen las competencias tanto generales como las específicas, indicando los comportamientos que serían indicadores de máximo desempeño, esta decisión permitirá que las competencias se dividan en niveles o grados, tal como se muestra en la tabla 1, ejemplo de una competencia con sus niveles o grados también llamados descriptores de conductas. Es importante tener en cuenta que el Grado D, indica que la competencia está desarrollada en un nivel mínimo.
          br
          .titulo-sexto.color-acento-botones
            h5 Tabla 1.
            span Competencia de un cargo

          table.competencia
            thead
              tr
                th Competencia: COLABORACIÓN
            tbody
              tr
                td 
                  p.m-3.lh-base Capacidad para brindar apoyo a los otros (pares, superiores y colaboradores), responder a sus necesidades y requerimientos, y solucionar sus problemas o dudas, aunque las mismas no hayan sido manifestadas expresamente. Implica actuar como facilitador para el logro de los objetivos a fin de crear relaciones basadas en la confianza.
                  .row.borde-redondeado.m-3
                    .col.letra-tabla.d-flex.align-items-center
                      p.m-auto A
                    .col.bg-parrafo-tabla.p-4
                      p.mb-0.lh-base Capacidad para brindar apoyo y ayuda a los otros, responder a sus necesidades y requerimientos, mediante iniciativas anticipadoras y espontáneas, a fin de facilitar la resolución de problemas o dudas, aunque las mismas no hayan sido manifestadas expresamente. Capacidad para apoyar decididamente a otras personas y para difundir formas de relación basadas en la confianza. Capacidad para promover el espíritu de colaboración en toda la organización y constituirse en un facilitador para el cobro de los objetivos planteados. Capacidad para implementar mecanismos organizacionales tendientes a fomentar la cooperación interdepartamental como instrumento para la consecución de los objetivos comunes.

                  .row.borde-redondeado.m-3
                    .col.letra-tabla.d-flex.align-items-center
                      p.m-auto B
                    .col.bg-parrafo-tabla.p-4
                      p.mb-0.lh-base Capacidad para brindar ayuda y colaboración a las personas de su área y de otros sectores de la organización relacionados, mostrar interés por sus necesidades, aunque las mismas no hayan sido manifestadas expresamente, y apoyarlas en el cumplimiento de sus objetivos. Capacidad para crear relaciones de confianza. Capacidad para utilizar los mecanismos organizacionales que promuevan la cooperación interdepartamental y para proponer mejoras respecto de ellos.

                  .row.borde-redondeado.m-3
                    .col.letra-tabla.d-flex.align-items-center
                      p.m-auto C
                    .col.bg-parrafo-tabla.p-4
                      p.mb-0.lh-base Capacidad para apoyar y colaborar activamente con los integrantes de su propia área mediante una clara disposición a ayudar a otros, incluso antes de que hayan manifestado expresamente la necesidad de colaboración. Capacidad  para escuchar los requerimientos de los demás y para ayudarlos en el cumplimiento de sus objetivos, sin descuidar los propios.

                  .row.borde-redondeado.m-3
                    .col.letra-tabla.d-flex.align-items-center
                      p.m-auto D
                    .col.bg-parrafo-tabla.p-4
                      p.mb-0.lh-base Capacidad para cooperar y brindar soporte a las personas de su entorno cuando se lo solicitan y tener en cuenta las necesidades de los demás.
          br
          figcaption Nota: Alles, M (2015).

          separador

      .row.mt-5
        .col.col-12
          #t_3_2.titulo-segundo.color-acento-contenido
            h2 3.2 Herramientas para estructuración de cargos

          .row.mb-5.d-flex.align-items-center.position-relative.bg-gris-herramientas
            .col.col-12.col-lg-4
              picture
                img(src='@/assets/curso/tema3/img06.png', alt='Herramientas para estructuración de cargos', class='img-fluid')
            .col.col-12.col-lg-8
              p.mb-5 Estructurar los cargos es una actividad que requiere evaluar todas las condiciones requeridas en diversos perfiles y a su vez existen métodos para ello, lo cual se detalla a continuación.
              .row.mt-5
                .col.col-6
                  a(href="#observatorio")
                    img(src='@/assets/curso/tema3/img19.svg', alt='', class='img-fluid')
                .col.col-6
                  a(href="#metodos")
                    img(src='@/assets/curso/tema3/img20.svg', alt='', class='img-fluid')
      .bg-laboratorio
        .row.mt-5.position-relative
          .col.col-3.mb-5
            #observatorio.titulo.bg-cajon-lila.d-flex.align-items-center.p-2 
              h2.m-0 Observatorio laboral
          .col-auto.position-absolute.top-0.end-0
            a(href="#t_3_2")
              img(src='@/assets/curso/tema3/back.svg', alt='', class='img-fluid')
          .col.col-12.position-relative.bg-gris-izquierdo
            .row.mb-2
              .col.col-12.col-lg-7
                p Con el objeto de organizar las ocupaciones a nivel nacional e internacional se ha creado el Observatorio laboral donde se encuentran clasificadas todas las ocupaciones de acuerdo a las necesidades del mercado laboral en relación a su talento humano y a la formación, es así, como a través del observatorio laboral se monitorea el comportamiento de las ocupaciones.
                .row
                  .col.col-1
                    img(src='@/assets/curso/tema3/dots-blanco-azul.svg', alt='dots', class='img-fluid')
                  .col.col-11
                    p.texto-azul.fw-bold En el laboratorio laboral se encuentra un diccionario de oficios ocupacionales identificados para todo el país, llamado Clasificación nacional de Ocupaciones CNO. Esta estructura facilita la agrupación de empleos y la descripción de las ocupaciones de una manera ordenada y uniforme, por lo que permite identificar las salidas ocupacionales de los programas de formación para el trabajo.
                p Esta clasificación tiene en cuenta dos criterios:
              .col.col-12.col-lg-5
                picture
                  img(src='@/assets/curso/tema3/img12.png', alt='Observatorio laboral', class='img-fluid')
          .col.col-12
            .row.mb-4
              .col.col-12.col-lg-6.mt-4
                .tarjeta-competencias-morada
                  .row
                    .col-4.d-flex.justify-content-center
                      img.img90(src='@/assets/curso/tema3/img13.svg', alt='', class='img-fluid')
                    .col-8.d-flex.align-items-end.p-0
                      p.fw-bold.mb-0 Área de desempeño
                    .col-12.d-flex.align-items-center.py-5
                      p.my-2 Campo de actividad definido por el tipo y naturaleza del trabajo que es desarrollado.
                      
              .col.col-12.col-lg-6.mt-4
                .tarjeta-competencias-morada
                  .row
                    .col-4.d-flex.justify-content-center
                      img.img90(src='@/assets/curso/tema3/img14.svg', alt='', class='img-fluid')
                    .col-8.d-flex.align-items-end.p-0
                      p.fw-bold.mb-0 Nivel de cualificación
                    .col-12.d-flex.align-items-center.py-5
                      p.my-2 Se refiere a la complejidad de las funciones, el nivel de autonomía y responsabilidad en el desempeño, la cantidad, tipo y nivel de educación, capacitación y experiencia requeridos para su desempeño.


            .row.mb-3.d-flex.align-items-center
              .col.col-12.col-lg-4
                picture
                  img(src='@/assets/curso/tema3/img15.png', alt='', class='img-fluid')
              .col.col-12.col-lg-8
                p Reconocer la organización sistemática de las ocupaciones existentes en el mercado laboral (denominaciones, funciones, habilidades, conocimientos), son base para la definición de perfiles de cargos.
                .tarjeta.bg-enlace-ocupaciones.p-3.mb-5
                  .row.justify-content-around.align-items-center
                    .col-2
                      img.img90(src="@/assets/curso/tema3/img16.svg")
                    .col
                      .row.justify-content-between.align-items-center
                        .col.mb-3.mb-sm-0
                          h3.mb-3.text-white Clasificación Nacional de Ocupaciones
                          p.text-small.text-white Para ampliar información consulte el siguiente enlace,  en este encontrará una descripción de qué es la Clasificación Nacional de Ocupaciones, y cómo se clasifican las ocupaciones en el país.
                        .col-sm-auto
                          a.boton.color-acento-botones(href="https://observatorio.sena.edu.co/Clasificacion/Cno" target="_blank")
                            span Abrir enlace
                            i.fas.fa-link

          hr              
      .row.mt-5.position-relative
        .col.col-6.mb-5
          #metodos.titulo.bg-cajon-lila.p-2 
            titulo     
              h2.mb-0 Métodos o fuentes de recolección de datos
        .col-auto.position-absolute.top-0.end-0
          a(href="#t_3_2")
            img(src='@/assets/curso/tema3/back.svg', alt='', class='img-fluid')
        .col.col-12.position-relative.bg-gris-izquierdo
          .row.mb-2
            .col.col-12.col-lg-7
              p Las fuentes de Información son todos aquellos instrumentos con los que se obtienen los datos requeridos, que luego se transforman en información para la toma de decisiones y obtención de conocimiento.
              p De acuerdo a su origen se clasifican en:
              ul.lista-ul--color.ms-5
                li
                  i.fas.fa-genderless
                  p 
                    span.texto-color-acento-contenido.fw-bold Fuentes primarias: 
                    | son los datos que se obtienen directamente del lugar donde se hace el estudio o de quien tiene los datos requeridos (población), es decir de primera mano.

                li
                  i.fas.fa-genderless
                  p 
                    span.texto-color-acento-contenido.fw-bold Fuentes secundarias: 
                    | se obtienen de datos ya elaborados, libros, internet, entre otros.

              .cajon.color-acento-botones.bg-cajon-amarillo.p-4
                p Para efectos del levantamiento de la información, en la construcción de la descripción de cargos, se utilizarán fuentes primarias. Dentro de estas tenemos:

            .col.col-12.col-lg-5
              picture
                img(src='@/assets/curso/tema3/img17.png', alt='Las fuentes de Información', class='img-fluid')


        .col.col-12
          .row.mb-5
            .col.col-12.col-lg-4
              picture
                img(src='@/assets/curso/tema3/img18.png', alt='Fuentes primarias', class='img-fluid')
            .col.col-12.col-lg-8
              .row.mb-5
                .col.col-12
                  LineaTiempoD.color-primario
                    .row(numero="1" titulo="Observación")
                      .col-12.mb-4.mb-md-0
                        p.text-small.mb-0 Es una fuente primaria directa, es decir se toman del lugar o de quien la genera. Los datos se obtienen en el puesto de trabajo del ocupante, no requiere de cuestionario ni de entrevista. Este método es recomendable especialmente en los cargos operativos y en aquellos donde se presentan actividades físicas observables.
                  
                    .row(numero="2" titulo="Entrevista")
                      .col-12.mb-4.mb-md-0
                        p.text-small.mb-3 Es una fuente primaria indirecta, es la técnica más utilizada, por poseer varias ventajas tales como:
                        ul.lista-ul--color.ms-4
                          li
                            i.fas.fa-genderless
                            p.text-small El analista puede observar la realización de la tarea mientras hace la entrevista. La entrevista se estructura previamente, como apoyo. 

                        .cajon.color-acento-contenido.bg-cajon-lila.p-3.mb-2
                          p.text-small Sin embargo, la entrevista también puede generar algunos inconvenientes si previamente no se le explica al trabajador el objetivo de la misma, esto es, que el ocupante del cargo puede hacer conjeturas o presentar expectativas erradas sobre los motivos de la entrevista, y distorsionar un poco la información al exagerar la realización de algunas actividades.

                    .row(numero="3" titulo="Cuestionario o encuesta")
                      .col-12.mb-4.mb-md-0
                        p.text-small.mb-3 Es una fuente primaria indirecta, esta fuente permite que haya mayor control en la información que se desea obtener, es importante que se diseñe teniendo en cuenta todos los elementos que hacen parte no solo del contenido del cargo sino de los requisitos del cargo. Se pueden registrar situaciones que pueden ser observadas, individual o de manera grupal, al responsable o responsables del cargo a analizar, es necesario que se construya un cuestionario estándar, aumentando la probabilidad de obtener información objetiva y medible.
                  
                        .cajon.color-acento-contenido.bg-cajon-lila.p-3.mb-2
                          p.text-small Finalmente, como parte de la preparación del cuestionario, se recomienda claridad en los objetivos de su aplicación, tanto para quienes la aplican, como para quienes suministran la información.
            .col.col-12
              .row.bg-cajon-celeste.d-flex.align-items-center.p-2.mt-5
                .col.col-1
                  img.imgdots(src='@/assets/curso/tema3/dots-blanco-azul.svg', alt='dots', class='img-fluid')
                .col.col-11
                  p.mb-0 Antes de tomar la decisión de los métodos de recolección a utilizar es necesario identificar el número de empleados a quienes se le aplicará y hacer un acercamiento con todos los que participaran en la recolección de los datos, significa hacer una sensibilización y explicación de la actividad.


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
