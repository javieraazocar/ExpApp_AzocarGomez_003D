import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface User {
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

  constructor(private storage: Storage) { }

  crearUsuario(user: User): Promise<any> {
    return this.storage.get(USER_KEY).then((users: User[]) => {
      if (users) {
        users.push(user);
        return this.storage.set(USER_KEY, users);
      } else {
        return this.storage.set(USER_KEY, [user]);
      }
    })
  }

  obtenerUsuarios(): Promise<User[]> {
    return this.storage.get(USER_KEY);
  }
}
