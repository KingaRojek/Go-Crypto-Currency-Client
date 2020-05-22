import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import {
  BlocksGridComponent,
  TransactionsGridComponent,
  NetworkNodesGridComponent,
} from "./components";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "blocks",
    component: BlocksGridComponent,
  },
  {
    path: "blocks/:id",
    component: TransactionsGridComponent,
  },
  {
    path: "transations",
    component: TransactionsGridComponent,
  },
  {
    path: "network",
    component: NetworkNodesGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}