export class Doc {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public author: string,
        public extension: string,
        public fileName: string,
        public filesize: string,
        public path: string,
        public date : string,
    ){}
}