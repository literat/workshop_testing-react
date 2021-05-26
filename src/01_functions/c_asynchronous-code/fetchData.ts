export function fetchDataCallback(callback: any) {
  // ℹ️ This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
  setTimeout(() => callback('peanut butter'), 3000);
}

export function fetchDataPromiseResolve() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 300);
  });
}

export function fetchDataPromiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 300);
  });
}
