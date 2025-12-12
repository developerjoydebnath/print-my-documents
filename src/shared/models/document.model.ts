export interface Document {
  id: string;
  userId: string;
  name: string;
  type: "PDF" | "DOCX" | "PPT" | "JPG" | "PNG";
  size: number;
  url: string;
  pageCount?: number;
  uploadedAt: Date;
  isAnalyzed: boolean;
}
