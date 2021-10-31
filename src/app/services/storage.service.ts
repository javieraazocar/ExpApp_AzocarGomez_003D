import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Users {
  id: number;
  nombre: string;
  apellido: string;
  metapasos: number;
  email: string;
  password: string;
  fechanacimiento: number;
  modified: number;
}

const USER_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  crearUsuario(user: Users): Promise<any> {
    return this.storage.get(USER_KEY).then((users: Users[]) => {
      if (users) {
        users.push(user);
        return this.storage.set(USER_KEY, users);
      } else {
        return this.storage.set(USER_KEY, [user]);
      }
    });
  }

  obtenerUsuarios(): Promise<Users[]> {
    return this.storage.get(USER_KEY);
  }
}
