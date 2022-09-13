export interface Strategy {
  authenticate(args: any[]): boolean;
}