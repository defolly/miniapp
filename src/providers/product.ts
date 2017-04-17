import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Item } from '../models/item';
import {SQLite} from "ionic-native";

/*
  Generated class for the Product provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Product {

    public database: SQLite;
    public people: Array<Object>;

  products: Item[]=[];

  constructor(public http: Http) {
      this.database = new SQLite();
            this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
  }
 public add() {
        this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }
 
    public refresh() {
        this.database.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }


}
