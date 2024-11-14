declare const _default: {
    url: typeof handlerAsText;
    img: typeof handlerAsBlob;
};
export default _default;
declare function handlerAsText(query: string): Promise<string>;
declare function handlerAsBlob(query: string): Promise<Blob>;
export declare function dataUriToBlob(uri: string): Blob;
