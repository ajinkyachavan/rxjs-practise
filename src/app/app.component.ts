import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap, tap } from 'rxjs/operators';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('startButton') startButton: ElementRef;
  stopWatchSubscription: Subscription;
  counterValue = 0;
  isStopped = false;
  stopWatchClicked$ = new Subject<boolean>();

  ngOnInit(): void {

    /** console statements */
    // console.error(new Error('Whoops, something bad happened'));
    // console.time('a');
    // const name = 'Will Robinson';
    // console.warn(`Danger ${name}! Danger!`);
    // console.log('hello world');
    // console.log('hello %d', 'world');
    // console.assert(String(2) == String(2), 'Whoops %s work', 'didn\'t');
    // let array = [3, 6];
    // let elements = [0, 1, 2];
    // array.reverse.apply(array);
    // console.log(Math.max.apply(null, array))
    // console.info(array)
    // console.timeEnd('a')

    /**
     * Observables
     */

    // fromEvent
    // Observable
    //   .fromEvent(this.button.nativeElement, 'click')
    //   .subscribe(
    //     (data) => { console.log(data); }
    // );

    // interval
    // Observable
    //   .interval(1000)
    //   .subscribe(
    //     (second) => { console.log(second); }
    //   );

  }

  // start stopwatch
  start() {
    Observable.fromEvent(this.startButton.nativeElement, 'click').pipe(
      switchMap(() => Observable.interval(1000).takeUntil(this.stopWatchClicked$).map(x => this.counterValue++))
    ).subscribe();
  }

  // stop stopwatch
  stop() {
    this.isStopped = !this.isStopped;
    this.stopWatchClicked$.next(!this.isStopped);
  }
}
