import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit, OnDestroy {

  maskValue: string;
  currentMask: string = "(999) 999-9999";
  maskCompleteMessage: string;
  msgs: Message[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.messageObserver.subscribe((x: Message) => {
      this.msgs.push(x);
    });
  }

  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

  maskOnFocus() {

    this.maskCompleteMessage = "";
    this.maskValue = "";


  }
  maskComplete() {
    this.maskCompleteMessage = `Your previous message: ${this.maskValue}`;
    this.messageService.add({ severity: 'info', summary: 'Mask Message', detail: 'Via Message Service' });

  }

}
