export interface Post {
    id: number;
    userId: number;
    title: string;
    doby: string;
}
//DTO:Data Transefer Object
export class PostDTO {
    constructor(
        public title: string = "",
        public userId: number = 0,
        public body: string = ""
    ) {

    }
}
