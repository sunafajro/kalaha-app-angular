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

export interface IChapter {
  id: number;
  title: string;
  pages: IFile[];
  audios: IFile[];
}

export interface IBook {
  id: number;
  title: string;
  cover: IFile;
  back: IFile;
  parts: IPart;
  chapters: IChapter[];
}
