export interface Handler {
  
  // Used to register handler (middleware)
  use(h: Handler): Handler;
  
  // Register a get request handler
  get(url: string, callback: (data: any) => void): void;
}