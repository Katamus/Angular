import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectorPageComponent } from "./pages/selector-page/selector-page.component";

const routers:Routes = [
    {
        path:'',
        children: [
            {
                path:"selector",
                component:SelectorPageComponent
            },{
                path:'**',
                redirectTo:'selector'
            }
        ]
    }
] ;

@NgModule({
    imports:[RouterModule.forChild(routers)],
    exports:[RouterModule]
})
export class CountryRoutingModule{

}