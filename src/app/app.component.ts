import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('input') button: ElementRef;

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
    Observable
      .fromEvent(this.button.nativeElement, 'click')
      .subscribe(
        (data) => { console.log('qwewq'); console.log(data); }
    );

    // interval

  }
}
