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
      "titulo": "Noticia1",
      "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
      "fecha": "2021-01-01",
      // "foto": `${fotoPrincipal}1.jpg`,
      "foto": `${fotoPrincipal}1.jpg`,
      // "fotos": [`${fotoSecundaria}2.jpg`, `${fotoSecundaria}2.jpg`,`${fotoSecundaria}3.jpg`,`${fotoSecundaria}4.jpg`]
      "fotos": [`${fotoSecundaria}2.jpg`, `${fotoSecundaria}3.jpg`,`${fotoSecundaria}4.jpg`,`${fotoSecundaria}5.jpg`,`${fotoSecundaria}1.jpg`]
    },
    {
      "id": 2,
      "titulo": "Noticia2",
      "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
      "fecha": "2021-02-01",
      "foto": `${fotoPrincipal}2.jpeg`,
      "fotos": [`${fotoSecundaria}11.jpg`, `${fotoSecundaria}22.jpg`,`${fotoSecundaria}33.jpg`,`${fotoSecundaria}44.jpg`]
    },
    {
      "id": 3,
      "titulo": "Noticia3",
      "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
      "fecha": "2021-03-01",
      "foto": `${fotoPrincipal}home-7.jpg`,
      "fotos": [`${fotoSecundaria}home-5.jpg`, `${fotoSecundaria}home-6.jpg`]
    },
    {
      "id": 4,
      "titulo": "HOLA4",
      "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
      "fecha": "2021-04-01",
      "foto": `${fotoPrincipal}home-8.jpg`,
      "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
    },
    {
        "id": 5,
        "titulo": "HOLA5",
        "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha": "2021-04-01",
        "foto": `${fotoPrincipal}home-8.jpg`,
        "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
      },
      {
        "id": 6,
        "titulo": "HOLA6",
        "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha": "2021-04-01",
        "foto": `${fotoPrincipal}home-8.jpg`,
        "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
      },
      {
        "id": 7,
        "titulo": "HOLA7",
        "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha": "2021-04-01",
        "foto": `${fotoPrincipal}home-8.jpg`,
        "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
      },
      {
        "id": 8,
        "titulo": "HOLA8",
        "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha": "2021-04-01",
        "foto": `${fotoPrincipal}home-8.jpg`,
        "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
      },

      {
        "id": 9,
        "titulo": "HOLA9",
        "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha": "2021-04-01",
        "foto": `${fotoPrincipal}home-8.jpg`,
        "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
      },
      {
        "id": 10,
        "titulo": "HOLA10",
        "descripcion": "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha": "2021-04-01",
        "foto": `${fotoPrincipal}home-8.jpg`,
        "fotos": [`${fotoSecundaria}home-7.jpg`, `${fotoSecundaria}home-8.jpg`]
      },
  ]


export class Noticia {
  "id": number = 0;
  "titulo": string = "";
  "descripcion": string = "";
  "fecha": string = "";
  "foto": string = "";
  "fotos": string[] = [];

  constructor() {

  }
}
