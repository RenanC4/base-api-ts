export interface RestProvider<T> {
  get(url: string): Promise<T>
}