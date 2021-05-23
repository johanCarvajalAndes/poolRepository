/// <reference types="cypress" />
import { login,newTag,deleteTag,verifyTagEnableInPost,verifyTagEnableInPage,verifyTaginReaderWeb,wait,saveTag,irA,goPost,NewPage,selectTag,Tag,photo ,formTag,deletePage} from "./listFuctionTags.js";
import {Email, Password, Url,numberScenarios} from '../credencia'
context("Tags Escenarios", () => {
	//datos acceso
	let url = Url+"/";
	let email = Email;
	let password = Password;
	//variables
	let title;
	let slug;
	let post;
	let page;
	let tag;
	let datos = [];
  
	beforeEach(() => {
		//iniciar variables
		title= "Automatizacion";
		slug="Autom";
		post = "Welcome";
		page = "Hola";
		tag = "Getting Started";
		//
		cy.fixture("datos.json").as("gifts").then((x) => {
			cy.get(x).each(($els, index, $list)=>
			{
				datos.push($els.tag); 
			})
		})
		//iniciar session
		login(cy,url,email,password);
	});

  	for (let i = 0; i < numberScenarios; i++)
	{  
		console.log("tag="+datos[i]);
		it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso al listado d tags. " +
				"THEN: creo un nuevo tag.", () => {
				//tag
				Tag(cy);
				photo(cy,"escenario1","step1");
				//crear nuevo tag
				newTag(cy,url);
				wait();
				photo(cy,"escenario1","step2");
				wait();
				//Formulario tag
				formTag(cy,datos[i],slug);
				wait();
				photo(cy,"escenario1","step3");
				//guardar tag
				saveTag(cy);
				wait();
				photo(cy,"escenario1","step4");
				//redireccionar
				irA(cy,url,"ghost/#/tags");
				wait();
				photo(cy,"escenario1","step5");
		});
		
		it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso a un post. " +
				"THEN: se valida que el tag este habilitado.", () => {
				//ir a un Post
				goPost(cy,post,datos[i]);
				wait();
				photo(cy,"escenario2","step1");
				//espera
				wait();
				//Valida el tag habilitado en los post
				verifyTagEnableInPost(cy,post,datos[i]);
				wait();
				photo(cy,"escenario2","step2");
		});

		it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso a una Page. " +
				"THEN: se valida que el tag este habilitado.", () => {
				//nueva Page
				NewPage(cy,url,page,datos[i]);
				wait();
				photo(cy,"escenario3","step1");
				//espera
				wait();
				//redireccionar
				irA(cy,url,"ghost/#/pages");
				wait();
				photo(cy,"escenario3","step2");
				//Valida el tag habilitado en las pages
				verifyTagEnableInPage(cy,url,page,datos[i]);
				wait();
				photo(cy,"escenario3","step3");
				//borramos pagina creada
				deletePage(cy);
				photo(cy,"escenario3","step4");
		});

		it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso al listado de tags. " +
				"THEN: se selecciona el tag y se elimina.", () => {
				//tags
				Tag(cy);
				wait();
				photo(cy,"escenario4","step1");
				//seleccionar un tag
				selectTag(cy,datos[i]);
				wait();
				photo(cy,"escenario4","step2");
				//espera
				wait();
				//borrar el tag
				deleteTag(cy,datos[i]);
				photo(cy,"escenario4","step3");
		});

		it("Given: Se ingresa al web de lectura. WHEN: se busca el post con el tag asociado" +
				"THEN: verificado el tag se selecciona", () => {
				//redireccionar
				irA(cy,url,post);
				wait();
				photo(cy,"escenario5","step1");
				//espera
				wait();
				//validar tag en el post del sitio web
				verifyTaginReaderWeb(cy,url,post,tag);
				wait();
				photo(cy,"escenario5","step2");
		});
		
	}

});
