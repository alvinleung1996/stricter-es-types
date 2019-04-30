/**
 * @license
 *
 * Copyright (c) 2019 Leung Ho Pan Alvin. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


interface ObjectConstructor {
    keys<T extends (keyof T extends string ? any : never)>(o: T): Array<keyof T>;

    entries<T>(o: ArrayLike<T>): Array<[number, T]>;
    entries<T extends {}>(o: T): Array<{ [K in keyof Required<T>]: [K, Required<T>[K]] }[keyof T]>;
}

type Drop<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Writable<T> = { -readonly [K in keyof T]: T[K]; };
