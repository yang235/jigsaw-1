import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TableBasicDemoComponent} from "./basic/basic";
import {TableRendererDemoComponent} from "./renderer/renderer";
import {RdkTableModule} from "../../../../component/table/table";

const tableDemoRoutes=[
    {
        path:'', redirectTo:'basic', pathMatch:'full'
    },
    {
        path:'basic', component: TableBasicDemoComponent
    },
    {
        path:'renderer', component: TableRendererDemoComponent
    },
    {
        path:'**', //fallback router must in the last
        component: TableBasicDemoComponent
    }
];

@NgModule({
    declarations: [
        TableBasicDemoComponent, TableRendererDemoComponent
    ],
    imports: [
        RouterModule.forChild(tableDemoRoutes), RdkTableModule
    ],
    exports: [
        TableBasicDemoComponent, TableRendererDemoComponent
    ],
    providers: []
})
export class TableDemoModule { }