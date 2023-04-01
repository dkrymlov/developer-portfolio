export class Project{
  id_ : number
  title : string
  shortDesc : string
  fullText : string
  startDate : string
  endDate : string
  status : string
  image : string
  github : string
  btnName : string

  constructor(id : number,title: string, shortDesc: string, fullText: string, startDate: string, endDate: string, status: string, image: string, github : string, btnName : string) {
    this.id_ = id;
    this.title = title;
    this.shortDesc = shortDesc;
    this.fullText = fullText;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.image = image;
    this.github = github;
    this.btnName = btnName
  }
}
