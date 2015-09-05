import isPromise from './isPromise';

export default function promiseMiddleware() {
  return next => action => {
    if (!action.payload || !action.payload.promise) {
      return next(action);
    }

    const { type, meta } = action;
    const { promise, onSuccess, onError  } = action.payload;

    /**
     * Dispatch the first async handler. This tells the
     * reducer that an async action has been dispatched.
     */
    next({
      type: `${type}_PENDING`
    });

    /**
     * Return either the fulfilled action object or the rejected
     * action object.
     */
    return promise.then(
      payload => {
        if (onSuccess) onSuccess(payload);

        next({
          type: `${type}_FULFILLED`,
          payload
        })
      },
      payload => {
        if (payload.json) {
          return payload.json.then(data => {
            if (onError) onError(data);

            return next({
              payload: data,
              error: payload.error,
              type: `${type}_REJECTED`
            });
          });
        }

        if (onError) onError(payload);

        return next({
          payload: payload.error,
          error: true,
          type: `${type}_REJECTED`
        });
      }
    );
  };
}
