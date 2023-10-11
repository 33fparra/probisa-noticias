//guia para las noticias
//paso 1 : No repetir el valor del ID ya que son unico
//paso 2 : las imagenes principal se encuentra
// en esta ruta : src\assets\noticias\principal
//paso 3 : las imagenes secundarias  se encuentra
// en esta ruta : src\assets\noticias\secundaria
const fotoPrincipal = "assets/noticias/principal/"
const fotoSecundaria = "assets/noticias/secundaria/"
export let listaNoticias: Noticia[] =
  [
    {
      "id": 1,
      "titulo": "Mejoramiento Terminal PROBISA Mejillones",
      "descripcion": "En un esfuerzo constante por cumplir y superar las expectativas de sus clientes, PROBISA concluyó de manera exitosa las obras de ampliación y mejoramiento de su terminal en Mejillones. Estas mejoras les permitirá ofrecer un servicio aún más eficiente y brindar asfalto modificado de alta calidad en la zona norte...",
      "noticia": "En un esfuerzo constante por cumplir y superar las expectativas de sus clientes, PROBISA concluyó de manera exitosa las obras de ampliación y mejoramiento de su terminal en Mejillones. Estas mejoras les permitirá ofrecer un servicio aún más eficiente y brindar asfalto modificado de alta calidad en la zona norte. \n Entre los proyectos destacados que se llevaron a cabo durante los últimos meses, destaca:\n Construcción y montaje de estanque con capacidad de 90 m3: se adquirió un nuevo estanque de almacenamiento y calentamiento de CA-24, con una capacidad de 90 m3. Esta mejora permite contar con mayores volúmenes de materia prima disponible, asegurando un suministro continuo y eficiente para las operaciones. \n Adquisición y montaje de caldera cumpliendo normativa medioambiental: \n Conscientes de la importancia de la sostenibilidad ambiental, se instaló una caldera de 2M KG/CAL en una sala insonorizada que cumple con las más estrictas normativas medioambientales. \n Modificación de estanques para producción de asfaltos modificados: Gracias a estas modificaciones, se ha logrado reducir el tiempo de producción de POLIBYT en un 50%, alcanzando una capacidad de producción diaria de 75 TON. \n Ampliación de la planta de emulsiones: Se incorporó un tercer reactor de agua ácida. Esta expansión ha mejorado considerablemente los tiempos de producción permitiendo satisfacer las necesidades de los clientes de manera más ágil y eficiente. \n Mejoramiento integral de instalaciones y áreas de trabajo: Como parte de su compromiso con la excelencia, se realizaron mejoras en todas las instalaciones, oficinas, estanques y áreas de circulación. \n Estas mejoras en el Terminal PROBISA Mejillones reflejan el compromiso continuo de PROBISA con la innovación, la calidad y la satisfacción del cliente, ofreciendo un servicio aún más eficiente y de alta calidad en la zona norte. \n Agradecemos a todo el equipo por su dedicación y esfuerzo durante este proceso de mejora.",
      "boton":true,
      "fecha": "2023-09-01",
      "foto": `${fotoPrincipal}1e.jpg`,
      "fotos": [`${fotoSecundaria}e/e1.jpg`, `${fotoSecundaria}e/e2.jpg`, `${fotoSecundaria}e/e3.jpg`]
    },
    {
      "id": 2,
      "titulo": "PROBISA comienza a reconvertirse desde el diésel al gas licuado de petróleo",
      "descripcion": "Las plantas de PROBISA Arica y Mejillones comenzaron a operar con gas licuado de petróleo (GLP) eliminando el diésel para su funcionamiento productivo, aprestándose así a completar el tránsito de este cambio energético que le aportará notablemente al compromiso de reducir la huella de carbono asumido por el Grupo VINCI..",
      "noticia": "Las plantas de PROBISA Arica y Mejillones comenzaron a operar con gas licuado de petróleo (GLP) eliminando el diésel para su funcionamiento productivo, aprestándose así a completar el tránsito de este cambio energético que le aportará notablemente al compromiso de reducir la huella de carbono asumido por el Grupo VINCI. \n  Es así como desde enero y febrero de este año, las plantas de Arica y Mejillones, respectivamente, empezaron a utilizar GLP para el uso de sus calderas. Para este segundo semestre, está contemplado el cambio a gas en la segunda caldera de Mejillones.  \n Además de ser amigable con el medioambiente pues apuesta por apoyar la sustentabilidad en la empresa, esta alternativa de generación energética ha sido muy beneficiosa sobre todo para el abastecimiento, ya es que de fácil programación semanal.",
      "boton":true,
      "fecha": "2023-09-01",
      "foto": `${fotoPrincipal}1f.jpg`,
      "fotos": [`${fotoSecundaria}f/f1.jpg`, `${fotoSecundaria}f/f2.jpg`, `${fotoSecundaria}f/f3.jpg`, `${fotoSecundaria}f/f4.jpg`, `${fotoSecundaria}f/f5.jpg`, `${fotoSecundaria}f/f6.jpg`]
    },
    {
      "id": 3,
      "titulo": "Evento Edifica 2022",
      "descripcion": "En octubre del 2022, se desarrolló Edifica 2022, evento masivo del área de la construcción, en cual Probisa participó con el lanzamiento de su nuevo producto Ecoasfalto, asfalto en frío ecológico  para bacheo. Esta experiencia fue recibida con mucho entusiasmo por parte de los visitantes, entre los cuales podemos nombrar, Municipalidad de Quillota, Municipalidad de Peñalolén, Municipalidad de Puchuncaví, Municipalidad de Viña del mar, Municipalidad de Curicó, Autopista del Maipo, Ejercito de Chile, clientes de Uruguay, Bolivia, Brasil y Perú.",
      "noticia": "En octubre del 2022, se desarrolló Edifica 2022, evento masivo del área de la construcción, en cual Probisa participó con el lanzamiento de su nuevo producto Ecoasfalto, asfalto en frío ecológico  para bacheo. Esta experiencia fue recibida con mucho entusiasmo por parte de los visitantes, entre los cuales podemos nombrar, Municipalidad de Quillota, Municipalidad de Peñalolén, Municipalidad de Puchuncaví, Municipalidad de Viña del mar, Municipalidad de Curicó, Autopista del Maipo, Ejercito de Chile, clientes de Uruguay, Bolivia, Brasil y Perú. También muchos profesionales del área de la construcción. Gracias a este evento se han realizado diversos negocios, algunos muy importantes que han significado que el producto se dé a conocer en todo Chile. Esta nueva mezcla de asfalto en frío ecológico ha cautivado la atención de universidades e institutos profesionales, los cuales han solicitado charlas técnicas. Este producto llegó para quedarse debido a los excelentes resultados obtenidos en solo cuatro meses.",
      "boton":true,
      "fecha": "2021-01-01",
      // "foto": `${fotoPrincipal}1.jpg`,
      "foto": `${fotoPrincipal}1a.jpg`,
      // "fotos": [`${fotoSecundaria}2.jpg`, `${fotoSecundaria}2.jpg`,`${fotoSecundaria}3.jpg`,`${fotoSecundaria}4.jpg`]
      "fotos": [`${fotoSecundaria}2a.jpg`, `${fotoSecundaria}3a.jpg`, `${fotoSecundaria}4a.jpg`, `${fotoSecundaria}5a.jpg`]
    },
    {
      "id": 4,
      "titulo": "Primer Congreso del Comité de Asfaltos de Chile",
      "descripcion": "Este mes PROBISA fue auspiciador oro del Primer Congreso del Comité de Asfaltos de Chile, realizado en en el Campus de San Joaquin de la Universidad Católica, bajo el concepto “Impulso de Técnicas Sustentables”, en sus dos días de duración, este encuentro busca reencontrar a toda la industria para contribuir de manera sustentable al desarrollo del país. PROBISA auspició la visita Profesor Peter E. Sebaaly ,Ingeniero Civil de la Universidad de Nueva York en Buffalo, USA. Doctor de la Universidad de Arizona, USA. Con especialidad en pavimentos y materiales de ingeniería. Profesor de Ingeniería Civil y director del Centro Regional Oeste (WRSC) del programa Superpave y del programa de Ingeniería y Ciencias de Pavimentos (PES) de la Universidad de Nevada, USA",
      "noticia": "Este mes PROBISA fue auspiciador oro del Primer Congreso del Comité de Asfaltos de Chile, bajo el concepto “Impulso de Técnicas Sustentables”, en sus dos días de duración, este encuentro busca reencontrar a toda la industria para contribuir de manera sustentable al desarrollo del país. PROBISA auspició la visita Profesor Peter E. Sebaaly ,Ingeniero Civil de la Universidad de Nueva York en Buffalo, USA. Doctor de la Universidad de Arizona, USA. Con especialidad en pavimentos y materiales de ingeniería. Profesor de Ingeniería Civil y director del Centro Regional Oeste (WRSC) del programa Superpave y del programa de Ingeniería y Ciencias de Pavimentos (PES) de la Universidad de Nevada, USA. El cual dio una charla magistral “Diseño de Pavimentos Asfalticos Duraderos y sustentables”, la que incluyó los más recientes avances en los métodos de análisis de pavimentos, especificaciones de materiales y diseño de mezclas que hacen posible incrementar la vida útil de los pavimentos de asfalto. El Congreso contó con la presencia de más de 300 asistentes,  representantes de toda la cadena del asfalto, autoridades como el subsecretario de Obras Públicas, José Andrés Herrera y el Gerente General de Productos Bituminosos S.A., Jaime Castillo Mullor.",
      "boton":true,
      "fecha": "2021-02-01",
      "foto": `${fotoPrincipal}1b.jpg`,
      "fotos": [`${fotoSecundaria}2b.jpg`, `${fotoSecundaria}3b.jpg`, `${fotoSecundaria}4b.jpg`, `${fotoSecundaria}5b.jpg`, `${fotoSecundaria}6b.jpg`, `${fotoSecundaria}7b.jpg`]
    },
    {
      "id": 5,
      "titulo": "Actividades de Ingeniería y al MOP-LNV",
      "descripcion": "Los días 28 y 29 de marzo PROBISA organizó una serie de charlas y actividades dirigidas a estudiantes de Ingeniería y al MOP-LNV, las que fueron realizadas por el Profesor Peter E. Sebaaly. El tema de las charlas fue “Diseño de Pavimentos Asfalticos Duraderos y sustentables”, las que incluyen los más recientes avances en los métodos de análisis de pavimentos, especificaciones de materiales y diseño de mezclas que hacen posible incrementar la vida útil de los pavimentos de asfalto.",
      "noticia": "Los días 28 y 29 de marzo PROBISA organizó una serie de charlas y actividades dirigidas a estudiantes de Ingeniería y al MOP-LNV, las que fueron realizadas por el Profesor Peter E. Sebaaly. El tema de las charlas fue “Diseño de Pavimentos Asfalticos Duraderos y sustentables”, las que incluyen los más recientes avances en los métodos de análisis de pavimentos, especificaciones de materiales y diseño de mezclas que hacen posible incrementar la vida útil de los pavimentos de asfalto.\n 1) 28 de marzo: Estudiantes ingeniería Civil de la Universidad de Santiago de Chile.\n 2) 29 de marzo: Estudiantes de ingeniería, curso ingeniería vial 5 año, Pontificia Universidad Católica de Chile.\n3) 29 de marzo: Estudiantes de ingeniería, curso materiales de Ingeniería 3 año, Pontificia Universidad Católica de Chile.\n29 de marzo: Estudiantes de Post grado presentan su proyecto, Pontificia Universidad Católica de Chile.\n3) 29 de Marzo: Visita y charla a MOP-LNV.",
      "boton":true,
      "fecha": "2021-03-01",
      "foto": `${fotoPrincipal}1c.jpg`,
      "fotos": [`${fotoSecundaria}2c.jpg`, `${fotoSecundaria}3c.jpg`, `${fotoSecundaria}4c.jpg`, `${fotoSecundaria}5c.jpg`, `${fotoSecundaria}6c.jpg`]
    },
    {
      "id": 6,
      "titulo": "ECOASFALTO",
      "descripcion": "Desde hace varios años, incluso desde hace décadas, el medio ambiente, así como su protección y cuidado ha calado muy hondo en las políticas de PROBISA, por lo que en el área de Investigación y desarrollo (I+D) surgió la necesidad de evaluar distintas opciones para remplazar los solventes comúnmente utilizados, por uno ecológico y amigable con el medio ambiente. Ecoasfalto es la nueva mezcla de asfalto en frío para bacheo, elaborada con materias primas ecológicas, áridos reciclados y solventes no contaminantes, con la intención de preservar el medio ambiente, destinada a la reparación de baches y deformaciones de pavimentos de asfalto y hormigón, para ser utilizado en calles...",
      "noticia": "Desde hace varios años, incluso desde hace décadas, el medio ambiente, así como su protección y cuidado ha calado muy hondo en las políticas de PROBISA, por lo que en el área de Investigación y desarrollo (I+D) surgió la necesidad de evaluar distintas opciones para remplazar los solventes comúnmente utilizados, por uno ecológico y amigable con el medio ambiente. Ecoasfalto es la nueva mezcla de asfalto en frío para bacheo, elaborada con materias primas ecológicas, áridos reciclados y solventes no contaminantes, con la intención de preservar el medio ambiente, destinada a la reparación de baches y deformaciones de pavimentos de asfalto y hormigón, para ser utilizado en calles, autopistas, aeropuertos, estacionamientos, etc. Permite su aplicación en diferentes climas, incluso en baches saturados de agua. De rápida aplicación y pronta apertura a tránsito. Producto ecológico de calidad premium.",
      "boton":true,
      "fecha": "2021-04-01",
      "foto": `${fotoPrincipal}1d.jpg`,
      "fotos": [`${fotoSecundaria}2d.jpg`, `${fotoSecundaria}3d.jpg`, `${fotoSecundaria}4d.jpg`, `${fotoSecundaria}5d.jpg`]
    },

    // {
    //   "id": 5,
    //   "titulo": "Mejoramiento Terminal PROBISA Mejillones",
    //   "descripcion": "En un esfuerzo constante por cumplir y superar las expectativas de sus clientes, PROBISA concluyó de manera exitosa las obras de ampliación y mejoramiento de su terminal en Mejillones. Estas mejoras les permitirá ofrecer un servicio aún más eficiente y brindar asfalto modificado de alta calidad en la zona norte.",
    //   "noticia": "En un esfuerzo constante por cumplir y superar las expectativas de sus clientes, PROBISA concluyó de manera exitosa las obras de ampliación y mejoramiento de su terminal en Mejillones. Estas mejoras les permitirá ofrecer un servicio aún más eficiente y brindar asfalto modificado de alta calidad en la zona norte. Entre los proyectos destacados que se llevaron a cabo durante los últimos meses, destaca: \n
    //   Construcción y montaje de estanque con capacidad de 90 m3: se adquirió un nuevo estanque de almacenamiento y calentamiento de CA-24, con una capacidad de 90m3. Esta mejora permite contar con mayores volúmenes de materia prima disponible, asegurando un suministro continuo y eficiente para las operaciones. \n
    //   Adquisición y montaje de caldera cumpliendo normativa medioambiental: Conscientes de la importancia de la sostenibilidad ambiental, se instaló una caldera de 2M KG/CAL en una sala insonorizada que cumple con las más estrictas normativas medioambientales. \n
    //   Modificación de estanques para producción de asfaltos modificados: Gracias a estas modificaciones, se ha logrado reducir el tiempo de producción de POLIBYT en un 50%, alcanzando una capacidad de producción diaria de 75 TON. \n
    //   Ampliación de la planta de emulsiones: \n Se incorporó un tercer reactor de agua ácida. Esta expansión ha mejorado considerablemente los tiempos de producción permitiendo satisfacer las necesidades de los clientes de manera más ágil y eficiente. \n Mejoramiento integral de instalaciones y áreas de trabajo: Como parte de su compromiso con la excelencia, se realizaron mejoras en todas las instalaciones, oficinas, estanques y áreas de circulación. \n
    //   Estas mejoras en el Terminal PROBISA Mejillones reflejan el compromiso continuo de PROBISA con la innovación, la calidad y la satisfacción del cliente, ofreciendo un servicio aún más eficiente y de alta calidad en la zona norte. \n Agradecemos a todo el equipo por su dedicación y esfuerzo durante este proceso de mejora.",
    //   "boton":true,
    //   "fecha": "2023-09-01",
    //   "foto": `${fotoPrincipal}1e.jpg`,
    //   "fotos": [`${fotoSecundaria}e/e1.jpg`, `${fotoSecundaria}e/e2.jpg`, `${fotoSecundaria}e/e3.jpg`]
    // }
  ]


export class Noticia {
  "id": number = 0;
  "titulo": string = "";
  "descripcion": string = "";
  "noticia": string = "";
  "boton": boolean = false;
  "fecha": string = "";
  "foto": string = "";
  "fotos": string[] = [];

  constructor() {

  }
}
