import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface AuthState {
    isAuthenticated: boolean;
    user: { id: number; name: string; email: string } | null;
}


@Injectable({ providedIn: 'root' })
    export class AuthService {
    private _state = new BehaviorSubject<AuthState>({ isAuthenticated: false, user: null });
    state$ = this._state.asObservable();


    login(email: string, _password: string) {
        const user = { id: 1, name: 'Demo', email };
        this._state.next({ isAuthenticated: true, user });
    }


    logout() {
        this._state.next({ isAuthenticated: false, user: null });
    }


    get snapshot() { return this._state.value; }
}
