export const wrapWithPromise = (action: VoidFunction): Promise<void> =>
  new Promise((resolve) => {
    action()
    resolve()
  })

export const delay = (ms: number): { promise: Promise<void>; cancel: VoidFunction } => {
  let timeout = 0
  let rejectRef = () => {}

  return {
    promise: new Promise((resolve, reject) => {
      rejectRef = () => reject('canceled')
      timeout = setTimeout(resolve, ms)
    }),
    cancel: () => {
      rejectRef()
      clearTimeout(timeout)
    },
  }
}

export const throttle = (
  action: VoidFunction,
  ms: number,
): { promise: Promise<[void, void]>; clearDelay: VoidFunction } => {
  const { cancel, promise } = delay(ms)

  return {
    promise: Promise.all([promise, wrapWithPromise(action)]),
    clearDelay: cancel,
  }
}
