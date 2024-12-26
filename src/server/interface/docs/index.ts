export interface DocInterface {
  id: string;
  title: string;
  published: boolean;
  createdAt: Date;
}

export interface CreateDocInterface {
  id: string;
}

export interface CreateDocInputInteface {
  title: string;
  content?: string;
}

export interface PatchDocInterface {
  title: string;
  content?: string;
  published: boolean;
}

export interface PublishDocInterface {
  published: boolean;
}
