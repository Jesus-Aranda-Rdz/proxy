import { Component } from '@angular/core';
import { SongsService } from '../songs.service';
import { Song } from '../song';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {

  songs: Song[] = [];
  newSong: Song = {} as Song;
  editSong: Song = {} as Song;
  selectsong: Song = {} as Song;

  constructor(private songsService: SongsService) { 
    this.index();
  }

  

  async index(): Promise<void> {
    this.songsService.index().subscribe({
      next: (response) => {
        this.songs = response.data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  async create(song: Song): Promise<void> {
    this.songsService.create(song).subscribe({
      next: (response) => {
        this.index();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  async show(id: number): Promise<void> {
    this.songsService.show(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  async update(id: number, song: Song): Promise<void> {
    this.songsService.update(id, song).subscribe({
      next: (response) => {
        this.index();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  async delete(id: number): Promise<void> {
    this.songsService.delete(id).subscribe({
      next: (response) => {
        this.index();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }





}
