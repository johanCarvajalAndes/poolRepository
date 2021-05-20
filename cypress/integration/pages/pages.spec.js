import { login,verifyAuthor,linkVerification,datePages,newPage,newPageTitle,verifyPageTitle,returnPageList, configurationPage,selectPage,deletePage,publishPage,verifyPageCreation,returnToPage, visitPages} from "./listFuction.js";
import {Email, Password, User} from '../credencia'
context("Page Escenarios", () => {
  let title;
 
  let author=User;   //aca se debe indicar el nombre de usuario del perfil de ghost
  let email = Email;
    let password = Password;

  
  beforeEach(() => {
    //iniciar sesion


    title= "Este es un test de crear una page"
    login(cy,email,password);
  });
  it("Given: Estando loggeado exitosamente en la aplicacion. WHEN: proceso a la seccion de pages. " +
        "THEN: creo una nueva Page borrador.", () => {
     
    //ir a la pagina de crear una nueva pagina
    newPage(cy);
    //escribir el titulo de la pagina correspondiente
    newPageTitle(cy,title);
    //Regresar al home de paginas
    returnPageList(cy);
    //verificación de que quedara el borrador de la pagina
    verifyPageTitle(cy,title);
    
  });
  it("Given: Estando loggeado exitosamente en la aplicacion. WHEN: proceso a la seccion de pages. " +
        "THEN: selecciono la page"+
        "THEN: se elimina por configuracion", () => {
     
    //seleccionar el post
    selectPage(cy,title);
    //ir a configuraciones del post
    configurationPage(cy);
   //eliminar el post
    deletePage(cy)
    
  });
  it("Given: Estando loggeado exitosamente en la aplicacion. WHEN: proceso a la seccion de pages. " +
        "THEN: selecciono la page"+
        "THEN: se publica la page"+
        "THEN: se verifica la creacion", () => {
    //ir a la pagina de crear new Post
   newPage(cy);
   //escribir el titulo
   newPageTitle(cy,title);
   //volver a lista de paginas
   returnPageList(cy);
   //Ingresar a la pagina creada
   returnToPage(cy,title);
   //publicar pagina
   publishPage(cy);
   //retornar a la lista de paginas
   returnPageList(cy);
   //Ingresar a la pagina creada
   returnToPage(cy,title);
   //Valdar la publicación de la pagina
   verifyPageCreation(cy, title)
 });
 
 it("Given: Estando loggeado exitosamente en la aplicacion. WHEN: proceso a la seccion de pages. " +
        "THEN: selecciono la page"+
        "THEN: se ingresa a configuracion"+
        "THEN: se verifica el autor", () => {
  //ir a la pagina de crear new Post
  visitPages(cy);
  //ingresar a la pagina en cuestión
  returnToPage(cy,title);
  //acceder a la configuración
  configurationPage(cy);
  //verificar el creador de la pagina
  verifyAuthor(cy, author);
 
});
it("Given: Estando loggeado exitosamente en la aplicacion. WHEN: proceso a la seccion de pages. " +
        "THEN: selecciono la page"+
        "THEN: se ingresa a configuracion"+
        "THEN: se verifica el link de acceso", () => {
  //ir a la pagina de crear new Post
  visitPages(cy);
  //ingresar a la pagina en cuestión
  returnToPage(cy,title);
  //acceder a la configuración
  configurationPage(cy);
  //ingresar al link de la pagina
  linkVerification(cy,title);
});

})