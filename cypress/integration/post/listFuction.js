import {Url} from '../credencia'

export function login(cy,email,password) {
  cy.visit(Url+"/ghost/#/signin");
  cy.get(".email").type(email);
  cy.get(".password").type(password);
  cy.get(".login").click();
}

export function newPostPage(cy, escenario) {
  cy.get('a[href="#/posts/"]').click({ force: true });
  
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  
  cy.get('a[href="#/editor/post/"]').click({ force: true });
  
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  
}

export function newPostTitle(cy, title,body, escenario) {
  cy.get('textarea[tabindex="1"]').type(title+'\n\n'+body);

  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get('div[data-kg="editor"]').click();
  if(escenario!=='NO'){
   cy.screenshot(escenario)
  }
}

export function newPostBody(cy, text,  escenario) {
  cy.get('div[data-kg="editor"]').type(text);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
}

export function returnPostList(cy, escenario) {
  cy.get('a[href="#/posts/"]').contains("Post").click({ force: true });
  cy.wait(3000);
  cy.visit(Url+'/ghost/#/posts/')
  if(escenario!=='NO'){
   cy.screenshot(escenario)
  }
}

export function verifyMessageToLong(cy,escenario){
  cy.wait(3000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get(".main-error").contains('The tilte is to Loog')
 
}

export function selectPost(cy, title, escenario) {
  cy.get('a[href="#/posts/"]').click({ force: true });

  cy.wait(3000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get(".gh-content-entry-title").contains(title).click({ force: true });
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
}

export function verifyPostTitle(cy, title, escenario) {
  cy.get(".gh-content-entry-title").contains(title);
}

export function publicPost(cy, escenario) {
  cy.get("span").contains("Publish").click({ force: true });
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get("button > span").contains("Publish").click({ force: true });
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
}

export function verifyPostTitleinWeb(cy, title, escenario) {
  cy.visit(Url+"/");
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get('.post-card-title').contains(title);
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
}

export function configPost(cy,escenario){
  cy.get('button[class="post-settings"]').click({ force: true })
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  
}

export function deletePost(cy, escenario){
  cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click({ force: true })
  cy.wait(3000);
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({ force: true });
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }

}

export function retuntToPost(cy,title, escenario){
  cy.get(".gh-content-entry-title").contains(title).click({ force: true });
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
}

export function verifySlug(cy, escenario){
  cy.get('.ghost-url-preview').invoke('text').then((text) => {
    cy.get('button[class="close settings-menu-header-action"]').click({ force: true })
  
   cy.visit(Url+"/"); 
   cy.visit(text)
});

cy.wait(3000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
}

export function  verifyPageOnePost(cy,title, escenario){
  cy.get('h1[class="post-full-title"]').contains(title)
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  
}
export function verifyUserListPost(cy, title, escenario){
  cy.get('h2[class="post-card-title"]').contains(title).click({force:true});
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get('h4[class="author-name"]').click({force:true});
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get('.post-full-title').contains(title);
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  
  
}

export function goToPostPublished(cy, title, escenario){
  cy.visit(Url+'/ghost/#/posts?type=published')
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }
  cy.get(".gh-content-entry-title").contains(title).click({ force: true });
  cy.wait(2000);
  if(escenario!=='NO'){
    cy.screenshot(escenario)
  }

}