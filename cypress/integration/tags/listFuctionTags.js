export function login(cy,url,email,password) {
  cy.visit(url + "ghost/#/signin");
  cy.get(".email").type(email);
  cy.get(".password").type(password);
  cy.get(".login").click();
}
export function Tag(cy,url,title) {  
  cy.get('a[href="#/tags/"]').click({ force: true });
}

export function newTag(cy,url,title) {  
  cy.get('a[href="#/tags/new/"]').click({ force: true });
  
}

export function formTag(cy,title) {  
  cy.get('input[name=name]').click({ force: true });
  cy.get('input[name=name]').type(title);
  cy.get('input[name=slug]').click({ force: true });
  cy.get('input[name=slug]').type(title);
  //cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({ force: true });
}

export function saveTag(cy) {
  cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click({ force: true });
}

export function goPost(cy,post,title){
  cy.get('a[href="#/posts/"]').click({ force: true });
  cy.get("h3").contains(post).click({ force: true });
  
}

export function verifyTagEnableInPost(cy,post,title){
  cy.get('button[class="post-settings"]').click({ force: true })
  cy.get('div[id=tag-input]').click({ force: true });
  cy.get('li[class="ember-power-select-option"]').contains(title).click({force:true});  
}

export function NewPage(cy,url,page,title){
  //creamos una pagina
  cy.get('a[href="#/pages/"]').click({ force: true });
  cy.get('a[href="#/editor/page/"]').click({ force: true });
  cy.get('textarea[tabindex="1"]').type(title);
  cy.get('div[data-kg="editor"]').click();
}

export function verifyTagEnableInPage(cy,url,page,title){
  //cy.get('a[href="#/pages/"]').click({ force: true });
  //cy.get('div[class="f8 fw3 lh-copy tracked-2 ma0 pa0 h9 br b--lightgrey pl3 pr4 flex items-center br2 br--left bg-white"]').click({ force: true })
  cy.get("h3").contains(title).click({ force: true });
  cy.get('button[class="post-settings"]').click({ force: true })
  cy.get('div[id=tag-input]').click({ force: true });
  cy.get('li[class="ember-power-select-option"]').contains(title).click({force:true});
}

export function deletePage(cy){
  cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click({ force: true })
  wait()
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({ force: true })
}

export function selectTag(cy,title) {
  cy.get("h3").contains(title).click({ force: true });
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click({ force: true });
}

export function deleteTag(cy,title) {  
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({ force: true });
}

export function verifyTaginReaderWeb(cy,url,post,tag){
  cy.get('a[href="/tag/getting-started/"]').contains(tag).click({ force: true });
}

export function wait() { 
  cy.wait(1000);
}

export function irA(cy,url,subUrl){
  cy.visit(url + subUrl);
}

export function photo(cy,scenario,step){
  cy.screenshot(scenario + "/" + step);
}