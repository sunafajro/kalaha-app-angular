export interface IFileParams {
  id: number,
  file: IFile,
  baseUrl: string,
}

export interface IPart {
  id: number;
  title: string;
  chapters: number[];
}

export interface IFile {
  name: string;
  type: string;
}

export interface IAudioText {
  cv: string,
  ru: string,
}

export interface IAudio {
  file: IFile,
  text: IAudioText,
}

export interface IChapter {
  id: number;
  title: string;
  pages: IFile[];
  audios: IAudio[];
}

export interface IBook {
  id: number;
  title: string;
  cover: IFile;
  back: IFile;
  parts: IPart;
  chapters: IChapter[];
}
