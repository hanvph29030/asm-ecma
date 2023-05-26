const app = document.querySelector('#app');

//import "bootstrap/dist/css/bootstrap.min.css"
// /import "bootstrap/dist/js/bootstrap.js"

import Navigo from "navigo";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import NotFoundPage from "./pages/notFound";
import detailProduct from "./pages/detailProduct";

//Router
const router = new Navigo('/');
router.on('/', function (){
    //console.log("homePage");
    app.innerHTML = HomePage();
})

router.on('/detailProduct/:id', function (param){
    //console.log("DetailProduct Page");
    console.log("param", param);
    app.innerHTML = detailProduct(param);
})

router.notFound(function() {
    app.innerHTML = NotFoundPage();
})

router.resolve()