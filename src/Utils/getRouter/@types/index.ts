export namespace TRouter {
  export type Function<T> = (body: RouteParams.IBody) => Promise<T>;
}

declare namespace RouteParams {
  type IBody = any;
}