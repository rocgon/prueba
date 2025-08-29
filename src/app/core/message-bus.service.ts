import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MessageBusService {
    private _messages = new BehaviorSubject<string>('');
    readonly messages$ = this._messages.asObservable();
    emit(message: string) { this._messages.next(message); }
}