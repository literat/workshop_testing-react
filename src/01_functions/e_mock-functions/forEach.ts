export function forEach(items: Array, callback: any): void {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
