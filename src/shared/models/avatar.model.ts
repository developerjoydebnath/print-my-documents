export class Avatar {
  #id: number;
  #originalName: string;
  #mimeType: string;
  #fileSize: number;
  #width: number;
  #height: number;
  #hash: string;
  #url: string;
  #path: string;
  #extension: string;
  #createdAt: string;
  #updatedAt: string;
  #uploadedBy: any;

  #originalData: any;

  constructor(data: any = {}) {
    this.#id = data?.id ?? null;
    this.#originalName = data?.originalName ?? "";
    this.#mimeType = data?.mimeType ?? "";
    this.#fileSize = data?.fileSize ?? 0;
    this.#width = data?.width ?? 0;
    this.#height = data?.height ?? 0;
    this.#hash = data?.hash ?? "";
    this.#url = data?.url ?? "";
    this.#path = data?.path ?? "";
    this.#extension = data?.extension ?? "";
    this.#createdAt = data?.createdAt ?? "";
    this.#updatedAt = data?.updatedAt ?? "";
    this.#uploadedBy = data?.uploadedBy ?? null;

    this.#originalData = data;
  }

  get id() {
    return this.#id;
  }
  get originalName() {
    return this.#originalName;
  }
  get mimeType() {
    return this.#mimeType;
  }
  get fileSize() {
    return this.#fileSize;
  }
  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }
  get hash() {
    return this.#hash;
  }
  get url() {
    return this.#url;
  }
  get path() {
    return this.#path;
  }
  get extension() {
    return this.#extension;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get updatedAt() {
    return this.#updatedAt;
  }
  get uploadedBy() {
    return this.#uploadedBy;
  }

  get originalData() {
    return this.#originalData;
  }
}
