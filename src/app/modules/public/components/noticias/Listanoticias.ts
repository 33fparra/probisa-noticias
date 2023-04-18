/* No repetir el valor del ID */

export let listaNoticias : Noticia[] = 
[
    {
        "id" : 1,
        "titulo" : "HOLA",
        "descripcion" : "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha" : "1234",
        "foto" : "ruta",
        "fotos" : ["ruta1", "ruta2", "ruta3"]
    },
    {
        "id" : 2,
        "titulo" : "HOLA2",
        "descripcion" : "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha" : "1234",
        "foto" : "ruta",
        "fotos" : ["ruta1", "ruta2", "ruta3"]
    },
    {
        "id" : 3,
        "titulo" : "HOLA3",
        "descripcion" : "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha" : "1234",
        "foto" : "ruta",
        "fotos" : ["ruta1", "ruta2", "ruta3"]
    },
    {
        "id" : 4,
        "titulo" : "HOLA4",
        "descripcion" : "A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image. A paragraph of placeholder text. We\n're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.",
        "fecha" : "1234",
        "foto" : "ruta",
        "fotos" : ["ruta1", "ruta2", "ruta3"]
    }
]


export class Noticia
{
    "id" : number = 0;
    "titulo" : string = "";
    "descripcion" : string = "";
    "fecha" : string = "";
    "foto" : string = "";
    "fotos" : string[] = [];

    constructor()
    {
        
    }
}