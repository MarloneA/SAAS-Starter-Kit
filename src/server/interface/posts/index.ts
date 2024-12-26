export interface PostInterface {
  id: string;
  title: string;
  published: boolean;
  createdAt: Date;
}

export interface CreatePostInterface {
  id: string;
}

export interface CreatePostInputInteface {
  title: string;
  content?: string;
}

export interface PatchPostInterface {
  title: string;
  content?: string;
  published: boolean;
}

export interface PublishPostInterface {
  published: boolean;
}
