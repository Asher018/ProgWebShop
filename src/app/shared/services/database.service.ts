import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { lastValueFrom, Observable, startWith, Subject, switchMap } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private readonly update$ = new Subject<void>();
  private db$!: Observable<IDBDatabase>;
  public items$!: Observable<number[]>;

  constructor(private update: SwUpdate) {
    //this.checkUpdate();
    this.init();
    this.updatingItems();
   }

   public async addItem(id:number): Promise<void> {
    this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("items", "readwrite");
              transaction.objectStore("items").add({ key:id,value:id});
              transaction.oncomplete = () => {
                //transaction = null;
                this.update$.next();
                observer.complete();
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
  }

  public deleteItem(id:number) {
    if(id){
    this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("items", "readwrite");
              transaction.objectStore("items").delete(id);
              transaction.oncomplete = () => {
               // transaction = null;
                this.update$.next();
                observer.complete();
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
    }
  }

  public clearCats(): void {
    this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("items", "readwrite");
              transaction.objectStore("items").clear();

              transaction.oncomplete = () => {
                //transaction = null;
                this.update$.next();
                observer.complete();
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
  }

  private updatingItems(): void {
    this.items$ = this.update$.pipe(
      startWith(undefined),
      switchMap(() =>
        this.db$.pipe(
          switchMap(
            (db) =>
              new Observable<number[]>((observer) => {
                let transaction = db.transaction("items");
                const request = transaction.objectStore("items").getAll();
                transaction.oncomplete = () => {
                  //transaction = null;
                  observer.next(request.result as number[]);
                  observer.complete();
                };
              })
          )
        )
      )
    );
  }

  private init(): void {
    this.db$ = new Observable<IDBDatabase>((observer) => {
      const openRequest = indexedDB.open("Mismas");
      openRequest.onupgradeneeded = () => this.createDb(openRequest.result);
      openRequest.onsuccess = () => {
        observer.next(openRequest.result);
        observer.complete();
      };
    });
  }

  private createDb(db: IDBDatabase): void {
    db.createObjectStore("items", { keyPath: "key", autoIncrement:true });
    console.log("create", db);
  }

  private checkUpdate(){
    this.update.checkForUpdate().then(data =>{
      if(data){
        alert("new version available");
        window.location.reload();
      }
    })
  }
}
