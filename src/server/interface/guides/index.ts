export interface GuideInterface {
  id: string;
  title: string;
  published: boolean;
  createdAt: Date;
}

export interface CreateGuideInterface {
  id: string;
}

export interface CreateGuideInputInteface {
  title: string;
  content?: string;
}

export interface PatchGuideInterface {
  title: string;
  content?: string;
  published: boolean;
}