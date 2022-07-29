export class Note {

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  title: string | undefined;
  content: string | undefined;
}
