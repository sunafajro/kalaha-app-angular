import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css'],
})
export class AudioPlayerComponent implements OnChanges {
  @Input() filePath: string;
  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;

  constructor() {}

  ngOnChanges() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.load();
    }
  }
}
