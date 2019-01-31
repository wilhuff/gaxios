
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
export class Cancel {
  message: string;
  __CANCEL__ = true;
  constructor(message: string) {
    this.message = message;
  }
  toString() {
    return `Cancel ${this.message ? ': ' + this.message : ''}`;
  }
}

/**
 * A `CancelToken` is an object that can be used to request cancellation of an
 * operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
export class CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  constructor(executor: (onCancel: (message: string) => void) => void) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise: (result: Cancel) => void;
    this.promise = new Promise<Cancel>(r => resolvePromise = r);

    executor(message => {
      if (this.reason) {
        // Cancellation has already been requested
        return;
      }
      this.reason = new Cancel(message);
      resolvePromise(this.reason);
    });
  }

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  throwIfRequestedthrowIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that,
   * when called, cancels the `CancelToken`.
   */
  source() {
    let cancel;
    const token = new CancelToken(c => cancel = c);
    return {token, cancel};
  }
}

export function isCancel(value: Cancel) {
  return !!(value && value.__CANCEL__);
}
