declare var worker: {
  postMessage: (obj: any)=>void;
  onMessage: (res: any) => void;
};