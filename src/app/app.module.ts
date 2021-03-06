import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  BlocksGridComponent,
  TransactionsGridComponent,
  NetworkNodesGridComponent,
  KeysGridComponent,
  TransactionFormComponent,
  AccountBalanceComponent,
} from "./components";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { ClipboardModule } from "ngx-clipboard";
import { NavbarComponent, SidenavComponent } from "./ui";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlocksGridComponent,
    SidenavComponent,
    TransactionsGridComponent,
    NetworkNodesGridComponent,
    KeysGridComponent,
    TransactionFormComponent,
    AccountBalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatSidenavModule,
    RouterModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
