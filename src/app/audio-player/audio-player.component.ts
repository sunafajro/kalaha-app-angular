import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { IAudioText } from '../interfaces';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements OnChanges {
  showText: boolean = false;

  @Input() audioText: IAudioText; 
  @Input() audioTitle: string;
  @Input() filePath: string;  
  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;

  constructor() {}

  ngOnChanges() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.load();
    }
  }

  toggleText() {
    if (this.audioText) {
      this.showText = !this.showText;
    }
  }
}
