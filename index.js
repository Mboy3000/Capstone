import{Footer,Main,Nav}from"./components";
import* as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
const router= new Navigo("/");

function render(state=store.Home){
  document.querySelector("#root").innerHTML=`
  ${Nav(store.links)}
  ${Main(state)}
  ${footer()}`;
  router.updatePageLinks();
}
router
.on({
  "/":()=> render(),
  ":view": (params)=>{
    let view= capitalize(params.data.view);
    if (view in store){
      render(store[view]);
    }else{
      render(store.Viewnotfound);
      console.log(`View ${view} not defined`)
    }
  },
})
.resolve();
