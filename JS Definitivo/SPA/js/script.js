
import {Router} from './router.js'

const router = new Router();

router.add('/home', '../pages/home.html')
router.add('/about','../pages/about.html')
router.add('/contact', "../pages/contact.html")
router.add(404, "../pages/404.html")


console.log(router)
router.handle();

window.onpopstate=()=>router.handle();

window.route = ()=> router.route();

