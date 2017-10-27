import { Blog } from './blog.model';

export class BlogData {
    data: Blog[];
    metadata:MetaData;
}

export class MetaData {
    count: number;
    pages: number;
}