 export class Router {

  routes = {}
  add(routeName, page){
    this.routes[routeName] = page;

  }

   route(event){
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    this.handle()
    }
    handle() {
      const { pathname } = window.location;
      const route = routes[pathname] || routes[404]
      // pegar o html e jogar no index. 
      fetch(route).then(data => data.text())
      .then(html => { document.querySelector('#app').innerHTML = html}
    
      )
    }

}
//export default new Router()







