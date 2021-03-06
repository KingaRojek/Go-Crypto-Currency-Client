import { Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Key, Transactions } from "src/app/dto";
import { ApiService } from "src/app/services";
import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-account-balance",
  templateUrl: "account-balance.component.html",
  styleUrls: ["account-balance.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AccountBalanceComponent implements OnInit {
  public keys: Key[];
  public mineKey: string = "";
  public balance = undefined;
  public transactions: Transactions[];
  public publicKey: string;

  constructor(
    private router: Router,
    private _clipboardService: ClipboardService,
    private apiService: ApiService
  ) {}

  public ngOnInit(): void {
    this.apiService.getKeys().then((r) => {
      this.keys = r;
    });
  }

  public copyTekst(t: string): void {
    this._clipboardService.copyFromContent(t);
  }
  public setMineKey(k: Key): void {
    this.mineKey = k.nickname;
    this.publicKey = k.public_key;
    this.apiService
      .getBalance(this.mineKey)
      .then((r) => (this.balance = r.balance));
    this.apiService
      .getTransactions(this.mineKey)
      .then((t) => (this.transactions = t));
  }
}
