import * as _qrcode from "qrcode";

export type ErrorCorrectionLevel = "H" | "Q" | "M" | "L";

export interface Option {
  errorCorrectionLevel?: ErrorCorrectionLevel;
  version?: 2 | any;
}

export type Mode = "alphanumeric" | "numeric" | "byte";
export type Data = string | Array<{ data: string, mode: Mode }>;

export interface QRCode {
  create(data, options);

  toCanvas(canvas: HTMLCanvasElement, data: string, callback: (error: any) => void);

  toDataURL(data: Data, callback: (error, url: string) => void);

  toDataURL(data: Data, option: Option, callback: (error, url: string) => void);

  toString();

  qrcodedraw();
}

export const QRCode: QRCode = _qrcode;
export default QRCode;
