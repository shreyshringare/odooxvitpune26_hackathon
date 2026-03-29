
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ApprovalRule
 * 
 */
export type ApprovalRule = $Result.DefaultSelection<Prisma.$ApprovalRulePayload>
/**
 * Model ApprovalRuleApprover
 * 
 */
export type ApprovalRuleApprover = $Result.DefaultSelection<Prisma.$ApprovalRuleApproverPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model ApprovalStep
 * 
 */
export type ApprovalStep = $Result.DefaultSelection<Prisma.$ApprovalStepPayload>
/**
 * Model ExchangeRateCache
 * 
 */
export type ExchangeRateCache = $Result.DefaultSelection<Prisma.$ExchangeRateCachePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RuleType: {
  SEQUENTIAL: 'SEQUENTIAL',
  PERCENTAGE: 'PERCENTAGE',
  SPECIFIC: 'SPECIFIC',
  HYBRID: 'HYBRID'
};

export type RuleType = (typeof RuleType)[keyof typeof RuleType]


export const ExpenseStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  WAITING_APPROVAL: 'WAITING_APPROVAL',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type ExpenseStatus = (typeof ExpenseStatus)[keyof typeof ExpenseStatus]


export const StepStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RuleType = $Enums.RuleType

export const RuleType: typeof $Enums.RuleType

export type ExpenseStatus = $Enums.ExpenseStatus

export const ExpenseStatus: typeof $Enums.ExpenseStatus

export type StepStatus = $Enums.StepStatus

export const StepStatus: typeof $Enums.StepStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalRule`: Exposes CRUD operations for the **ApprovalRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalRules
    * const approvalRules = await prisma.approvalRule.findMany()
    * ```
    */
  get approvalRule(): Prisma.ApprovalRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalRuleApprover`: Exposes CRUD operations for the **ApprovalRuleApprover** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalRuleApprovers
    * const approvalRuleApprovers = await prisma.approvalRuleApprover.findMany()
    * ```
    */
  get approvalRuleApprover(): Prisma.ApprovalRuleApproverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalStep`: Exposes CRUD operations for the **ApprovalStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalSteps
    * const approvalSteps = await prisma.approvalStep.findMany()
    * ```
    */
  get approvalStep(): Prisma.ApprovalStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeRateCache`: Exposes CRUD operations for the **ExchangeRateCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeRateCaches
    * const exchangeRateCaches = await prisma.exchangeRateCache.findMany()
    * ```
    */
  get exchangeRateCache(): Prisma.ExchangeRateCacheDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    User: 'User',
    ApprovalRule: 'ApprovalRule',
    ApprovalRuleApprover: 'ApprovalRuleApprover',
    Expense: 'Expense',
    ApprovalStep: 'ApprovalStep',
    ExchangeRateCache: 'ExchangeRateCache'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "user" | "approvalRule" | "approvalRuleApprover" | "expense" | "approvalStep" | "exchangeRateCache"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ApprovalRule: {
        payload: Prisma.$ApprovalRulePayload<ExtArgs>
        fields: Prisma.ApprovalRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          findFirst: {
            args: Prisma.ApprovalRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          findMany: {
            args: Prisma.ApprovalRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>[]
          }
          create: {
            args: Prisma.ApprovalRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          createMany: {
            args: Prisma.ApprovalRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>[]
          }
          delete: {
            args: Prisma.ApprovalRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          update: {
            args: Prisma.ApprovalRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          deleteMany: {
            args: Prisma.ApprovalRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>[]
          }
          upsert: {
            args: Prisma.ApprovalRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRulePayload>
          }
          aggregate: {
            args: Prisma.ApprovalRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalRule>
          }
          groupBy: {
            args: Prisma.ApprovalRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRuleCountAggregateOutputType> | number
          }
        }
      }
      ApprovalRuleApprover: {
        payload: Prisma.$ApprovalRuleApproverPayload<ExtArgs>
        fields: Prisma.ApprovalRuleApproverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalRuleApproverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalRuleApproverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>
          }
          findFirst: {
            args: Prisma.ApprovalRuleApproverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalRuleApproverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>
          }
          findMany: {
            args: Prisma.ApprovalRuleApproverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>[]
          }
          create: {
            args: Prisma.ApprovalRuleApproverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>
          }
          createMany: {
            args: Prisma.ApprovalRuleApproverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalRuleApproverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>[]
          }
          delete: {
            args: Prisma.ApprovalRuleApproverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>
          }
          update: {
            args: Prisma.ApprovalRuleApproverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalRuleApproverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalRuleApproverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalRuleApproverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalRuleApproverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRuleApproverPayload>
          }
          aggregate: {
            args: Prisma.ApprovalRuleApproverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalRuleApprover>
          }
          groupBy: {
            args: Prisma.ApprovalRuleApproverGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRuleApproverGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalRuleApproverCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRuleApproverCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      ApprovalStep: {
        payload: Prisma.$ApprovalStepPayload<ExtArgs>
        fields: Prisma.ApprovalStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          findFirst: {
            args: Prisma.ApprovalStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          findMany: {
            args: Prisma.ApprovalStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>[]
          }
          create: {
            args: Prisma.ApprovalStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          createMany: {
            args: Prisma.ApprovalStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>[]
          }
          delete: {
            args: Prisma.ApprovalStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          update: {
            args: Prisma.ApprovalStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalStepPayload>
          }
          aggregate: {
            args: Prisma.ApprovalStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalStep>
          }
          groupBy: {
            args: Prisma.ApprovalStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalStepCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalStepCountAggregateOutputType> | number
          }
        }
      }
      ExchangeRateCache: {
        payload: Prisma.$ExchangeRateCachePayload<ExtArgs>
        fields: Prisma.ExchangeRateCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeRateCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeRateCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>
          }
          findFirst: {
            args: Prisma.ExchangeRateCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeRateCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>
          }
          findMany: {
            args: Prisma.ExchangeRateCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>[]
          }
          create: {
            args: Prisma.ExchangeRateCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>
          }
          createMany: {
            args: Prisma.ExchangeRateCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeRateCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>[]
          }
          delete: {
            args: Prisma.ExchangeRateCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>
          }
          update: {
            args: Prisma.ExchangeRateCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>
          }
          deleteMany: {
            args: Prisma.ExchangeRateCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeRateCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeRateCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>[]
          }
          upsert: {
            args: Prisma.ExchangeRateCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeRateCachePayload>
          }
          aggregate: {
            args: Prisma.ExchangeRateCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeRateCache>
          }
          groupBy: {
            args: Prisma.ExchangeRateCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeRateCacheCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeRateCacheCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    user?: UserOmit
    approvalRule?: ApprovalRuleOmit
    approvalRuleApprover?: ApprovalRuleApproverOmit
    expense?: ExpenseOmit
    approvalStep?: ApprovalStepOmit
    exchangeRateCache?: ExchangeRateCacheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    rules: number
    expenses: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    rules?: boolean | CompanyCountOutputTypeCountRulesArgs
    expenses?: boolean | CompanyCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subordinates: number
    expenses: number
    rule_approvers: number
    approval_steps: number
    specific_rules: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    rule_approvers?: boolean | UserCountOutputTypeCountRule_approversArgs
    approval_steps?: boolean | UserCountOutputTypeCountApproval_stepsArgs
    specific_rules?: boolean | UserCountOutputTypeCountSpecific_rulesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRule_approversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleApproverWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApproval_stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalStepWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpecific_rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleWhereInput
  }


  /**
   * Count Type ApprovalRuleCountOutputType
   */

  export type ApprovalRuleCountOutputType = {
    approvers: number
    expenses: number
  }

  export type ApprovalRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvers?: boolean | ApprovalRuleCountOutputTypeCountApproversArgs
    expenses?: boolean | ApprovalRuleCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * ApprovalRuleCountOutputType without action
   */
  export type ApprovalRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleCountOutputType
     */
    select?: ApprovalRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApprovalRuleCountOutputType without action
   */
  export type ApprovalRuleCountOutputTypeCountApproversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleApproverWhereInput
  }

  /**
   * ApprovalRuleCountOutputType without action
   */
  export type ApprovalRuleCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type ExpenseCountOutputType
   */

  export type ExpenseCountOutputType = {
    approval_steps: number
  }

  export type ExpenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approval_steps?: boolean | ExpenseCountOutputTypeCountApproval_stepsArgs
  }

  // Custom InputTypes
  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseCountOutputType
     */
    select?: ExpenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpenseCountOutputType without action
   */
  export type ExpenseCountOutputTypeCountApproval_stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalStepWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    base_currency: string | null
    created_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    base_currency: string | null
    created_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    country: number
    base_currency: number
    created_at: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    base_currency?: true
    created_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    base_currency?: true
    created_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    base_currency?: true
    created_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    country: string
    base_currency: string
    created_at: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    base_currency?: boolean
    created_at?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    rules?: boolean | Company$rulesArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    base_currency?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    base_currency?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    base_currency?: boolean
    created_at?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "base_currency" | "created_at", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    rules?: boolean | Company$rulesArgs<ExtArgs>
    expenses?: boolean | Company$expensesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      rules: Prisma.$ApprovalRulePayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string
      base_currency: string
      created_at: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends Company$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Company$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Company$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Company$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly country: FieldRef<"Company", 'String'>
    readonly base_currency: FieldRef<"Company", 'String'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.rules
   */
  export type Company$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    where?: ApprovalRuleWhereInput
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    cursor?: ApprovalRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * Company.expenses
   */
  export type Company$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    manager_id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    created_at: Date | null
    active: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    manager_id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    created_at: Date | null
    active: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    company_id: number
    manager_id: number
    name: number
    email: number
    password_hash: number
    role: number
    created_at: number
    active: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    company_id?: true
    manager_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    active?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    company_id?: true
    manager_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    active?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    company_id?: true
    manager_id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    created_at?: true
    active?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    company_id: string
    manager_id: string | null
    name: string
    email: string
    password_hash: string | null
    role: $Enums.Role
    created_at: Date
    active: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    manager_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    active?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    rule_approvers?: boolean | User$rule_approversArgs<ExtArgs>
    approval_steps?: boolean | User$approval_stepsArgs<ExtArgs>
    specific_rules?: boolean | User$specific_rulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    manager_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    active?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    manager_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    active?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    company_id?: boolean
    manager_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    active?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "manager_id" | "name" | "email" | "password_hash" | "role" | "created_at" | "active", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    rule_approvers?: boolean | User$rule_approversArgs<ExtArgs>
    approval_steps?: boolean | User$approval_stepsArgs<ExtArgs>
    specific_rules?: boolean | User$specific_rulesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      manager: Prisma.$UserPayload<ExtArgs> | null
      subordinates: Prisma.$UserPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      rule_approvers: Prisma.$ApprovalRuleApproverPayload<ExtArgs>[]
      approval_steps: Prisma.$ApprovalStepPayload<ExtArgs>[]
      specific_rules: Prisma.$ApprovalRulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      manager_id: string | null
      name: string
      email: string
      password_hash: string | null
      role: $Enums.Role
      created_at: Date
      active: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subordinates<T extends User$subordinatesArgs<ExtArgs> = {}>(args?: Subset<T, User$subordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rule_approvers<T extends User$rule_approversArgs<ExtArgs> = {}>(args?: Subset<T, User$rule_approversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approval_steps<T extends User$approval_stepsArgs<ExtArgs> = {}>(args?: Subset<T, User$approval_stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specific_rules<T extends User$specific_rulesArgs<ExtArgs> = {}>(args?: Subset<T, User$specific_rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly company_id: FieldRef<"User", 'String'>
    readonly manager_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly active: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.subordinates
   */
  export type User$subordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.rule_approvers
   */
  export type User$rule_approversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    where?: ApprovalRuleApproverWhereInput
    orderBy?: ApprovalRuleApproverOrderByWithRelationInput | ApprovalRuleApproverOrderByWithRelationInput[]
    cursor?: ApprovalRuleApproverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRuleApproverScalarFieldEnum | ApprovalRuleApproverScalarFieldEnum[]
  }

  /**
   * User.approval_steps
   */
  export type User$approval_stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    where?: ApprovalStepWhereInput
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    cursor?: ApprovalStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * User.specific_rules
   */
  export type User$specific_rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    where?: ApprovalRuleWhereInput
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    cursor?: ApprovalRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalRule
   */

  export type AggregateApprovalRule = {
    _count: ApprovalRuleCountAggregateOutputType | null
    _avg: ApprovalRuleAvgAggregateOutputType | null
    _sum: ApprovalRuleSumAggregateOutputType | null
    _min: ApprovalRuleMinAggregateOutputType | null
    _max: ApprovalRuleMaxAggregateOutputType | null
  }

  export type ApprovalRuleAvgAggregateOutputType = {
    approval_percentage: number | null
  }

  export type ApprovalRuleSumAggregateOutputType = {
    approval_percentage: number | null
  }

  export type ApprovalRuleMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    description: string | null
    is_manager_approver: boolean | null
    is_sequential: boolean | null
    approval_percentage: number | null
    specific_approver_id: string | null
    rule_type: $Enums.RuleType | null
    active: boolean | null
    created_at: Date | null
  }

  export type ApprovalRuleMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    description: string | null
    is_manager_approver: boolean | null
    is_sequential: boolean | null
    approval_percentage: number | null
    specific_approver_id: string | null
    rule_type: $Enums.RuleType | null
    active: boolean | null
    created_at: Date | null
  }

  export type ApprovalRuleCountAggregateOutputType = {
    id: number
    company_id: number
    description: number
    is_manager_approver: number
    is_sequential: number
    approval_percentage: number
    specific_approver_id: number
    rule_type: number
    active: number
    created_at: number
    _all: number
  }


  export type ApprovalRuleAvgAggregateInputType = {
    approval_percentage?: true
  }

  export type ApprovalRuleSumAggregateInputType = {
    approval_percentage?: true
  }

  export type ApprovalRuleMinAggregateInputType = {
    id?: true
    company_id?: true
    description?: true
    is_manager_approver?: true
    is_sequential?: true
    approval_percentage?: true
    specific_approver_id?: true
    rule_type?: true
    active?: true
    created_at?: true
  }

  export type ApprovalRuleMaxAggregateInputType = {
    id?: true
    company_id?: true
    description?: true
    is_manager_approver?: true
    is_sequential?: true
    approval_percentage?: true
    specific_approver_id?: true
    rule_type?: true
    active?: true
    created_at?: true
  }

  export type ApprovalRuleCountAggregateInputType = {
    id?: true
    company_id?: true
    description?: true
    is_manager_approver?: true
    is_sequential?: true
    approval_percentage?: true
    specific_approver_id?: true
    rule_type?: true
    active?: true
    created_at?: true
    _all?: true
  }

  export type ApprovalRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRule to aggregate.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalRules
    **/
    _count?: true | ApprovalRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalRuleMaxAggregateInputType
  }

  export type GetApprovalRuleAggregateType<T extends ApprovalRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalRule[P]>
      : GetScalarType<T[P], AggregateApprovalRule[P]>
  }




  export type ApprovalRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleWhereInput
    orderBy?: ApprovalRuleOrderByWithAggregationInput | ApprovalRuleOrderByWithAggregationInput[]
    by: ApprovalRuleScalarFieldEnum[] | ApprovalRuleScalarFieldEnum
    having?: ApprovalRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalRuleCountAggregateInputType | true
    _avg?: ApprovalRuleAvgAggregateInputType
    _sum?: ApprovalRuleSumAggregateInputType
    _min?: ApprovalRuleMinAggregateInputType
    _max?: ApprovalRuleMaxAggregateInputType
  }

  export type ApprovalRuleGroupByOutputType = {
    id: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage: number | null
    specific_approver_id: string | null
    rule_type: $Enums.RuleType
    active: boolean
    created_at: Date
    _count: ApprovalRuleCountAggregateOutputType | null
    _avg: ApprovalRuleAvgAggregateOutputType | null
    _sum: ApprovalRuleSumAggregateOutputType | null
    _min: ApprovalRuleMinAggregateOutputType | null
    _max: ApprovalRuleMaxAggregateOutputType | null
  }

  type GetApprovalRuleGroupByPayload<T extends ApprovalRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalRuleGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    description?: boolean
    is_manager_approver?: boolean
    is_sequential?: boolean
    approval_percentage?: boolean
    specific_approver_id?: boolean
    rule_type?: boolean
    active?: boolean
    created_at?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    specific_approver?: boolean | ApprovalRule$specific_approverArgs<ExtArgs>
    approvers?: boolean | ApprovalRule$approversArgs<ExtArgs>
    expenses?: boolean | ApprovalRule$expensesArgs<ExtArgs>
    _count?: boolean | ApprovalRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRule"]>

  export type ApprovalRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    description?: boolean
    is_manager_approver?: boolean
    is_sequential?: boolean
    approval_percentage?: boolean
    specific_approver_id?: boolean
    rule_type?: boolean
    active?: boolean
    created_at?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    specific_approver?: boolean | ApprovalRule$specific_approverArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRule"]>

  export type ApprovalRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    description?: boolean
    is_manager_approver?: boolean
    is_sequential?: boolean
    approval_percentage?: boolean
    specific_approver_id?: boolean
    rule_type?: boolean
    active?: boolean
    created_at?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    specific_approver?: boolean | ApprovalRule$specific_approverArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRule"]>

  export type ApprovalRuleSelectScalar = {
    id?: boolean
    company_id?: boolean
    description?: boolean
    is_manager_approver?: boolean
    is_sequential?: boolean
    approval_percentage?: boolean
    specific_approver_id?: boolean
    rule_type?: boolean
    active?: boolean
    created_at?: boolean
  }

  export type ApprovalRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "description" | "is_manager_approver" | "is_sequential" | "approval_percentage" | "specific_approver_id" | "rule_type" | "active" | "created_at", ExtArgs["result"]["approvalRule"]>
  export type ApprovalRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    specific_approver?: boolean | ApprovalRule$specific_approverArgs<ExtArgs>
    approvers?: boolean | ApprovalRule$approversArgs<ExtArgs>
    expenses?: boolean | ApprovalRule$expensesArgs<ExtArgs>
    _count?: boolean | ApprovalRuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApprovalRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    specific_approver?: boolean | ApprovalRule$specific_approverArgs<ExtArgs>
  }
  export type ApprovalRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    specific_approver?: boolean | ApprovalRule$specific_approverArgs<ExtArgs>
  }

  export type $ApprovalRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalRule"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      specific_approver: Prisma.$UserPayload<ExtArgs> | null
      approvers: Prisma.$ApprovalRuleApproverPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string
      description: string
      is_manager_approver: boolean
      is_sequential: boolean
      approval_percentage: number | null
      specific_approver_id: string | null
      rule_type: $Enums.RuleType
      active: boolean
      created_at: Date
    }, ExtArgs["result"]["approvalRule"]>
    composites: {}
  }

  type ApprovalRuleGetPayload<S extends boolean | null | undefined | ApprovalRuleDefaultArgs> = $Result.GetResult<Prisma.$ApprovalRulePayload, S>

  type ApprovalRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalRuleCountAggregateInputType | true
    }

  export interface ApprovalRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRule'], meta: { name: 'ApprovalRule' } }
    /**
     * Find zero or one ApprovalRule that matches the filter.
     * @param {ApprovalRuleFindUniqueArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalRuleFindUniqueArgs>(args: SelectSubset<T, ApprovalRuleFindUniqueArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalRuleFindUniqueOrThrowArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleFindFirstArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalRuleFindFirstArgs>(args?: SelectSubset<T, ApprovalRuleFindFirstArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleFindFirstOrThrowArgs} args - Arguments to find a ApprovalRule
     * @example
     * // Get one ApprovalRule
     * const approvalRule = await prisma.approvalRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalRules
     * const approvalRules = await prisma.approvalRule.findMany()
     * 
     * // Get first 10 ApprovalRules
     * const approvalRules = await prisma.approvalRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalRuleWithIdOnly = await prisma.approvalRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalRuleFindManyArgs>(args?: SelectSubset<T, ApprovalRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalRule.
     * @param {ApprovalRuleCreateArgs} args - Arguments to create a ApprovalRule.
     * @example
     * // Create one ApprovalRule
     * const ApprovalRule = await prisma.approvalRule.create({
     *   data: {
     *     // ... data to create a ApprovalRule
     *   }
     * })
     * 
     */
    create<T extends ApprovalRuleCreateArgs>(args: SelectSubset<T, ApprovalRuleCreateArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalRules.
     * @param {ApprovalRuleCreateManyArgs} args - Arguments to create many ApprovalRules.
     * @example
     * // Create many ApprovalRules
     * const approvalRule = await prisma.approvalRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalRuleCreateManyArgs>(args?: SelectSubset<T, ApprovalRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalRules and returns the data saved in the database.
     * @param {ApprovalRuleCreateManyAndReturnArgs} args - Arguments to create many ApprovalRules.
     * @example
     * // Create many ApprovalRules
     * const approvalRule = await prisma.approvalRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalRules and only return the `id`
     * const approvalRuleWithIdOnly = await prisma.approvalRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalRule.
     * @param {ApprovalRuleDeleteArgs} args - Arguments to delete one ApprovalRule.
     * @example
     * // Delete one ApprovalRule
     * const ApprovalRule = await prisma.approvalRule.delete({
     *   where: {
     *     // ... filter to delete one ApprovalRule
     *   }
     * })
     * 
     */
    delete<T extends ApprovalRuleDeleteArgs>(args: SelectSubset<T, ApprovalRuleDeleteArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalRule.
     * @param {ApprovalRuleUpdateArgs} args - Arguments to update one ApprovalRule.
     * @example
     * // Update one ApprovalRule
     * const approvalRule = await prisma.approvalRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalRuleUpdateArgs>(args: SelectSubset<T, ApprovalRuleUpdateArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalRules.
     * @param {ApprovalRuleDeleteManyArgs} args - Arguments to filter ApprovalRules to delete.
     * @example
     * // Delete a few ApprovalRules
     * const { count } = await prisma.approvalRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalRuleDeleteManyArgs>(args?: SelectSubset<T, ApprovalRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalRules
     * const approvalRule = await prisma.approvalRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalRuleUpdateManyArgs>(args: SelectSubset<T, ApprovalRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRules and returns the data updated in the database.
     * @param {ApprovalRuleUpdateManyAndReturnArgs} args - Arguments to update many ApprovalRules.
     * @example
     * // Update many ApprovalRules
     * const approvalRule = await prisma.approvalRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalRules and only return the `id`
     * const approvalRuleWithIdOnly = await prisma.approvalRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalRule.
     * @param {ApprovalRuleUpsertArgs} args - Arguments to update or create a ApprovalRule.
     * @example
     * // Update or create a ApprovalRule
     * const approvalRule = await prisma.approvalRule.upsert({
     *   create: {
     *     // ... data to create a ApprovalRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalRule we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalRuleUpsertArgs>(args: SelectSubset<T, ApprovalRuleUpsertArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleCountArgs} args - Arguments to filter ApprovalRules to count.
     * @example
     * // Count the number of ApprovalRules
     * const count = await prisma.approvalRule.count({
     *   where: {
     *     // ... the filter for the ApprovalRules we want to count
     *   }
     * })
    **/
    count<T extends ApprovalRuleCountArgs>(
      args?: Subset<T, ApprovalRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalRuleAggregateArgs>(args: Subset<T, ApprovalRuleAggregateArgs>): Prisma.PrismaPromise<GetApprovalRuleAggregateType<T>>

    /**
     * Group by ApprovalRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalRuleGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalRule model
   */
  readonly fields: ApprovalRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specific_approver<T extends ApprovalRule$specific_approverArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRule$specific_approverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvers<T extends ApprovalRule$approversArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRule$approversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends ApprovalRule$expensesArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRule$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovalRule model
   */
  interface ApprovalRuleFieldRefs {
    readonly id: FieldRef<"ApprovalRule", 'String'>
    readonly company_id: FieldRef<"ApprovalRule", 'String'>
    readonly description: FieldRef<"ApprovalRule", 'String'>
    readonly is_manager_approver: FieldRef<"ApprovalRule", 'Boolean'>
    readonly is_sequential: FieldRef<"ApprovalRule", 'Boolean'>
    readonly approval_percentage: FieldRef<"ApprovalRule", 'Int'>
    readonly specific_approver_id: FieldRef<"ApprovalRule", 'String'>
    readonly rule_type: FieldRef<"ApprovalRule", 'RuleType'>
    readonly active: FieldRef<"ApprovalRule", 'Boolean'>
    readonly created_at: FieldRef<"ApprovalRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalRule findUnique
   */
  export type ApprovalRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule findUniqueOrThrow
   */
  export type ApprovalRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule findFirst
   */
  export type ApprovalRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRules.
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRules.
     */
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * ApprovalRule findFirstOrThrow
   */
  export type ApprovalRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRule to fetch.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRules.
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRules.
     */
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * ApprovalRule findMany
   */
  export type ApprovalRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRules to fetch.
     */
    where?: ApprovalRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRules to fetch.
     */
    orderBy?: ApprovalRuleOrderByWithRelationInput | ApprovalRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalRules.
     */
    cursor?: ApprovalRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRules.
     */
    distinct?: ApprovalRuleScalarFieldEnum | ApprovalRuleScalarFieldEnum[]
  }

  /**
   * ApprovalRule create
   */
  export type ApprovalRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalRule.
     */
    data: XOR<ApprovalRuleCreateInput, ApprovalRuleUncheckedCreateInput>
  }

  /**
   * ApprovalRule createMany
   */
  export type ApprovalRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalRules.
     */
    data: ApprovalRuleCreateManyInput | ApprovalRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalRule createManyAndReturn
   */
  export type ApprovalRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalRules.
     */
    data: ApprovalRuleCreateManyInput | ApprovalRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRule update
   */
  export type ApprovalRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalRule.
     */
    data: XOR<ApprovalRuleUpdateInput, ApprovalRuleUncheckedUpdateInput>
    /**
     * Choose, which ApprovalRule to update.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule updateMany
   */
  export type ApprovalRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalRules.
     */
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRules to update
     */
    where?: ApprovalRuleWhereInput
    /**
     * Limit how many ApprovalRules to update.
     */
    limit?: number
  }

  /**
   * ApprovalRule updateManyAndReturn
   */
  export type ApprovalRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalRules.
     */
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRules to update
     */
    where?: ApprovalRuleWhereInput
    /**
     * Limit how many ApprovalRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRule upsert
   */
  export type ApprovalRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalRule to update in case it exists.
     */
    where: ApprovalRuleWhereUniqueInput
    /**
     * In case the ApprovalRule found by the `where` argument doesn't exist, create a new ApprovalRule with this data.
     */
    create: XOR<ApprovalRuleCreateInput, ApprovalRuleUncheckedCreateInput>
    /**
     * In case the ApprovalRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalRuleUpdateInput, ApprovalRuleUncheckedUpdateInput>
  }

  /**
   * ApprovalRule delete
   */
  export type ApprovalRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
    /**
     * Filter which ApprovalRule to delete.
     */
    where: ApprovalRuleWhereUniqueInput
  }

  /**
   * ApprovalRule deleteMany
   */
  export type ApprovalRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRules to delete
     */
    where?: ApprovalRuleWhereInput
    /**
     * Limit how many ApprovalRules to delete.
     */
    limit?: number
  }

  /**
   * ApprovalRule.specific_approver
   */
  export type ApprovalRule$specific_approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ApprovalRule.approvers
   */
  export type ApprovalRule$approversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    where?: ApprovalRuleApproverWhereInput
    orderBy?: ApprovalRuleApproverOrderByWithRelationInput | ApprovalRuleApproverOrderByWithRelationInput[]
    cursor?: ApprovalRuleApproverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRuleApproverScalarFieldEnum | ApprovalRuleApproverScalarFieldEnum[]
  }

  /**
   * ApprovalRule.expenses
   */
  export type ApprovalRule$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * ApprovalRule without action
   */
  export type ApprovalRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRule
     */
    select?: ApprovalRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRule
     */
    omit?: ApprovalRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalRuleApprover
   */

  export type AggregateApprovalRuleApprover = {
    _count: ApprovalRuleApproverCountAggregateOutputType | null
    _avg: ApprovalRuleApproverAvgAggregateOutputType | null
    _sum: ApprovalRuleApproverSumAggregateOutputType | null
    _min: ApprovalRuleApproverMinAggregateOutputType | null
    _max: ApprovalRuleApproverMaxAggregateOutputType | null
  }

  export type ApprovalRuleApproverAvgAggregateOutputType = {
    step_order: number | null
  }

  export type ApprovalRuleApproverSumAggregateOutputType = {
    step_order: number | null
  }

  export type ApprovalRuleApproverMinAggregateOutputType = {
    id: string | null
    approval_rule_id: string | null
    user_id: string | null
    step_order: number | null
    is_required: boolean | null
  }

  export type ApprovalRuleApproverMaxAggregateOutputType = {
    id: string | null
    approval_rule_id: string | null
    user_id: string | null
    step_order: number | null
    is_required: boolean | null
  }

  export type ApprovalRuleApproverCountAggregateOutputType = {
    id: number
    approval_rule_id: number
    user_id: number
    step_order: number
    is_required: number
    _all: number
  }


  export type ApprovalRuleApproverAvgAggregateInputType = {
    step_order?: true
  }

  export type ApprovalRuleApproverSumAggregateInputType = {
    step_order?: true
  }

  export type ApprovalRuleApproverMinAggregateInputType = {
    id?: true
    approval_rule_id?: true
    user_id?: true
    step_order?: true
    is_required?: true
  }

  export type ApprovalRuleApproverMaxAggregateInputType = {
    id?: true
    approval_rule_id?: true
    user_id?: true
    step_order?: true
    is_required?: true
  }

  export type ApprovalRuleApproverCountAggregateInputType = {
    id?: true
    approval_rule_id?: true
    user_id?: true
    step_order?: true
    is_required?: true
    _all?: true
  }

  export type ApprovalRuleApproverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRuleApprover to aggregate.
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRuleApprovers to fetch.
     */
    orderBy?: ApprovalRuleApproverOrderByWithRelationInput | ApprovalRuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalRuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalRuleApprovers
    **/
    _count?: true | ApprovalRuleApproverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalRuleApproverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalRuleApproverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalRuleApproverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalRuleApproverMaxAggregateInputType
  }

  export type GetApprovalRuleApproverAggregateType<T extends ApprovalRuleApproverAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalRuleApprover]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalRuleApprover[P]>
      : GetScalarType<T[P], AggregateApprovalRuleApprover[P]>
  }




  export type ApprovalRuleApproverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRuleApproverWhereInput
    orderBy?: ApprovalRuleApproverOrderByWithAggregationInput | ApprovalRuleApproverOrderByWithAggregationInput[]
    by: ApprovalRuleApproverScalarFieldEnum[] | ApprovalRuleApproverScalarFieldEnum
    having?: ApprovalRuleApproverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalRuleApproverCountAggregateInputType | true
    _avg?: ApprovalRuleApproverAvgAggregateInputType
    _sum?: ApprovalRuleApproverSumAggregateInputType
    _min?: ApprovalRuleApproverMinAggregateInputType
    _max?: ApprovalRuleApproverMaxAggregateInputType
  }

  export type ApprovalRuleApproverGroupByOutputType = {
    id: string
    approval_rule_id: string
    user_id: string
    step_order: number
    is_required: boolean
    _count: ApprovalRuleApproverCountAggregateOutputType | null
    _avg: ApprovalRuleApproverAvgAggregateOutputType | null
    _sum: ApprovalRuleApproverSumAggregateOutputType | null
    _min: ApprovalRuleApproverMinAggregateOutputType | null
    _max: ApprovalRuleApproverMaxAggregateOutputType | null
  }

  type GetApprovalRuleApproverGroupByPayload<T extends ApprovalRuleApproverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalRuleApproverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalRuleApproverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalRuleApproverGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalRuleApproverGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalRuleApproverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approval_rule_id?: boolean
    user_id?: boolean
    step_order?: boolean
    is_required?: boolean
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRuleApprover"]>

  export type ApprovalRuleApproverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approval_rule_id?: boolean
    user_id?: boolean
    step_order?: boolean
    is_required?: boolean
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRuleApprover"]>

  export type ApprovalRuleApproverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    approval_rule_id?: boolean
    user_id?: boolean
    step_order?: boolean
    is_required?: boolean
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRuleApprover"]>

  export type ApprovalRuleApproverSelectScalar = {
    id?: boolean
    approval_rule_id?: boolean
    user_id?: boolean
    step_order?: boolean
    is_required?: boolean
  }

  export type ApprovalRuleApproverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "approval_rule_id" | "user_id" | "step_order" | "is_required", ExtArgs["result"]["approvalRuleApprover"]>
  export type ApprovalRuleApproverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalRuleApproverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalRuleApproverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalRuleApproverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalRuleApprover"
    objects: {
      approval_rule: Prisma.$ApprovalRulePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      approval_rule_id: string
      user_id: string
      step_order: number
      is_required: boolean
    }, ExtArgs["result"]["approvalRuleApprover"]>
    composites: {}
  }

  type ApprovalRuleApproverGetPayload<S extends boolean | null | undefined | ApprovalRuleApproverDefaultArgs> = $Result.GetResult<Prisma.$ApprovalRuleApproverPayload, S>

  type ApprovalRuleApproverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalRuleApproverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalRuleApproverCountAggregateInputType | true
    }

  export interface ApprovalRuleApproverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRuleApprover'], meta: { name: 'ApprovalRuleApprover' } }
    /**
     * Find zero or one ApprovalRuleApprover that matches the filter.
     * @param {ApprovalRuleApproverFindUniqueArgs} args - Arguments to find a ApprovalRuleApprover
     * @example
     * // Get one ApprovalRuleApprover
     * const approvalRuleApprover = await prisma.approvalRuleApprover.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalRuleApproverFindUniqueArgs>(args: SelectSubset<T, ApprovalRuleApproverFindUniqueArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalRuleApprover that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalRuleApproverFindUniqueOrThrowArgs} args - Arguments to find a ApprovalRuleApprover
     * @example
     * // Get one ApprovalRuleApprover
     * const approvalRuleApprover = await prisma.approvalRuleApprover.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalRuleApproverFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalRuleApproverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRuleApprover that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverFindFirstArgs} args - Arguments to find a ApprovalRuleApprover
     * @example
     * // Get one ApprovalRuleApprover
     * const approvalRuleApprover = await prisma.approvalRuleApprover.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalRuleApproverFindFirstArgs>(args?: SelectSubset<T, ApprovalRuleApproverFindFirstArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRuleApprover that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverFindFirstOrThrowArgs} args - Arguments to find a ApprovalRuleApprover
     * @example
     * // Get one ApprovalRuleApprover
     * const approvalRuleApprover = await prisma.approvalRuleApprover.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalRuleApproverFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalRuleApproverFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalRuleApprovers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalRuleApprovers
     * const approvalRuleApprovers = await prisma.approvalRuleApprover.findMany()
     * 
     * // Get first 10 ApprovalRuleApprovers
     * const approvalRuleApprovers = await prisma.approvalRuleApprover.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalRuleApproverWithIdOnly = await prisma.approvalRuleApprover.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalRuleApproverFindManyArgs>(args?: SelectSubset<T, ApprovalRuleApproverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalRuleApprover.
     * @param {ApprovalRuleApproverCreateArgs} args - Arguments to create a ApprovalRuleApprover.
     * @example
     * // Create one ApprovalRuleApprover
     * const ApprovalRuleApprover = await prisma.approvalRuleApprover.create({
     *   data: {
     *     // ... data to create a ApprovalRuleApprover
     *   }
     * })
     * 
     */
    create<T extends ApprovalRuleApproverCreateArgs>(args: SelectSubset<T, ApprovalRuleApproverCreateArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalRuleApprovers.
     * @param {ApprovalRuleApproverCreateManyArgs} args - Arguments to create many ApprovalRuleApprovers.
     * @example
     * // Create many ApprovalRuleApprovers
     * const approvalRuleApprover = await prisma.approvalRuleApprover.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalRuleApproverCreateManyArgs>(args?: SelectSubset<T, ApprovalRuleApproverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalRuleApprovers and returns the data saved in the database.
     * @param {ApprovalRuleApproverCreateManyAndReturnArgs} args - Arguments to create many ApprovalRuleApprovers.
     * @example
     * // Create many ApprovalRuleApprovers
     * const approvalRuleApprover = await prisma.approvalRuleApprover.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalRuleApprovers and only return the `id`
     * const approvalRuleApproverWithIdOnly = await prisma.approvalRuleApprover.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalRuleApproverCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalRuleApproverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalRuleApprover.
     * @param {ApprovalRuleApproverDeleteArgs} args - Arguments to delete one ApprovalRuleApprover.
     * @example
     * // Delete one ApprovalRuleApprover
     * const ApprovalRuleApprover = await prisma.approvalRuleApprover.delete({
     *   where: {
     *     // ... filter to delete one ApprovalRuleApprover
     *   }
     * })
     * 
     */
    delete<T extends ApprovalRuleApproverDeleteArgs>(args: SelectSubset<T, ApprovalRuleApproverDeleteArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalRuleApprover.
     * @param {ApprovalRuleApproverUpdateArgs} args - Arguments to update one ApprovalRuleApprover.
     * @example
     * // Update one ApprovalRuleApprover
     * const approvalRuleApprover = await prisma.approvalRuleApprover.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalRuleApproverUpdateArgs>(args: SelectSubset<T, ApprovalRuleApproverUpdateArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalRuleApprovers.
     * @param {ApprovalRuleApproverDeleteManyArgs} args - Arguments to filter ApprovalRuleApprovers to delete.
     * @example
     * // Delete a few ApprovalRuleApprovers
     * const { count } = await prisma.approvalRuleApprover.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalRuleApproverDeleteManyArgs>(args?: SelectSubset<T, ApprovalRuleApproverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRuleApprovers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalRuleApprovers
     * const approvalRuleApprover = await prisma.approvalRuleApprover.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalRuleApproverUpdateManyArgs>(args: SelectSubset<T, ApprovalRuleApproverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRuleApprovers and returns the data updated in the database.
     * @param {ApprovalRuleApproverUpdateManyAndReturnArgs} args - Arguments to update many ApprovalRuleApprovers.
     * @example
     * // Update many ApprovalRuleApprovers
     * const approvalRuleApprover = await prisma.approvalRuleApprover.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalRuleApprovers and only return the `id`
     * const approvalRuleApproverWithIdOnly = await prisma.approvalRuleApprover.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalRuleApproverUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalRuleApproverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalRuleApprover.
     * @param {ApprovalRuleApproverUpsertArgs} args - Arguments to update or create a ApprovalRuleApprover.
     * @example
     * // Update or create a ApprovalRuleApprover
     * const approvalRuleApprover = await prisma.approvalRuleApprover.upsert({
     *   create: {
     *     // ... data to create a ApprovalRuleApprover
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalRuleApprover we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalRuleApproverUpsertArgs>(args: SelectSubset<T, ApprovalRuleApproverUpsertArgs<ExtArgs>>): Prisma__ApprovalRuleApproverClient<$Result.GetResult<Prisma.$ApprovalRuleApproverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalRuleApprovers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverCountArgs} args - Arguments to filter ApprovalRuleApprovers to count.
     * @example
     * // Count the number of ApprovalRuleApprovers
     * const count = await prisma.approvalRuleApprover.count({
     *   where: {
     *     // ... the filter for the ApprovalRuleApprovers we want to count
     *   }
     * })
    **/
    count<T extends ApprovalRuleApproverCountArgs>(
      args?: Subset<T, ApprovalRuleApproverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalRuleApproverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalRuleApprover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalRuleApproverAggregateArgs>(args: Subset<T, ApprovalRuleApproverAggregateArgs>): Prisma.PrismaPromise<GetApprovalRuleApproverAggregateType<T>>

    /**
     * Group by ApprovalRuleApprover.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRuleApproverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalRuleApproverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalRuleApproverGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalRuleApproverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalRuleApproverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRuleApproverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalRuleApprover model
   */
  readonly fields: ApprovalRuleApproverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalRuleApprover.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalRuleApproverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approval_rule<T extends ApprovalRuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRuleDefaultArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovalRuleApprover model
   */
  interface ApprovalRuleApproverFieldRefs {
    readonly id: FieldRef<"ApprovalRuleApprover", 'String'>
    readonly approval_rule_id: FieldRef<"ApprovalRuleApprover", 'String'>
    readonly user_id: FieldRef<"ApprovalRuleApprover", 'String'>
    readonly step_order: FieldRef<"ApprovalRuleApprover", 'Int'>
    readonly is_required: FieldRef<"ApprovalRuleApprover", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalRuleApprover findUnique
   */
  export type ApprovalRuleApproverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRuleApprover to fetch.
     */
    where: ApprovalRuleApproverWhereUniqueInput
  }

  /**
   * ApprovalRuleApprover findUniqueOrThrow
   */
  export type ApprovalRuleApproverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRuleApprover to fetch.
     */
    where: ApprovalRuleApproverWhereUniqueInput
  }

  /**
   * ApprovalRuleApprover findFirst
   */
  export type ApprovalRuleApproverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRuleApprover to fetch.
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRuleApprovers to fetch.
     */
    orderBy?: ApprovalRuleApproverOrderByWithRelationInput | ApprovalRuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRuleApprovers.
     */
    cursor?: ApprovalRuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRuleApprovers.
     */
    distinct?: ApprovalRuleApproverScalarFieldEnum | ApprovalRuleApproverScalarFieldEnum[]
  }

  /**
   * ApprovalRuleApprover findFirstOrThrow
   */
  export type ApprovalRuleApproverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRuleApprover to fetch.
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRuleApprovers to fetch.
     */
    orderBy?: ApprovalRuleApproverOrderByWithRelationInput | ApprovalRuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRuleApprovers.
     */
    cursor?: ApprovalRuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRuleApprovers.
     */
    distinct?: ApprovalRuleApproverScalarFieldEnum | ApprovalRuleApproverScalarFieldEnum[]
  }

  /**
   * ApprovalRuleApprover findMany
   */
  export type ApprovalRuleApproverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRuleApprovers to fetch.
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRuleApprovers to fetch.
     */
    orderBy?: ApprovalRuleApproverOrderByWithRelationInput | ApprovalRuleApproverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalRuleApprovers.
     */
    cursor?: ApprovalRuleApproverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRuleApprovers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRuleApprovers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRuleApprovers.
     */
    distinct?: ApprovalRuleApproverScalarFieldEnum | ApprovalRuleApproverScalarFieldEnum[]
  }

  /**
   * ApprovalRuleApprover create
   */
  export type ApprovalRuleApproverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalRuleApprover.
     */
    data: XOR<ApprovalRuleApproverCreateInput, ApprovalRuleApproverUncheckedCreateInput>
  }

  /**
   * ApprovalRuleApprover createMany
   */
  export type ApprovalRuleApproverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalRuleApprovers.
     */
    data: ApprovalRuleApproverCreateManyInput | ApprovalRuleApproverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalRuleApprover createManyAndReturn
   */
  export type ApprovalRuleApproverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalRuleApprovers.
     */
    data: ApprovalRuleApproverCreateManyInput | ApprovalRuleApproverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRuleApprover update
   */
  export type ApprovalRuleApproverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalRuleApprover.
     */
    data: XOR<ApprovalRuleApproverUpdateInput, ApprovalRuleApproverUncheckedUpdateInput>
    /**
     * Choose, which ApprovalRuleApprover to update.
     */
    where: ApprovalRuleApproverWhereUniqueInput
  }

  /**
   * ApprovalRuleApprover updateMany
   */
  export type ApprovalRuleApproverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalRuleApprovers.
     */
    data: XOR<ApprovalRuleApproverUpdateManyMutationInput, ApprovalRuleApproverUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRuleApprovers to update
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * Limit how many ApprovalRuleApprovers to update.
     */
    limit?: number
  }

  /**
   * ApprovalRuleApprover updateManyAndReturn
   */
  export type ApprovalRuleApproverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalRuleApprovers.
     */
    data: XOR<ApprovalRuleApproverUpdateManyMutationInput, ApprovalRuleApproverUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRuleApprovers to update
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * Limit how many ApprovalRuleApprovers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRuleApprover upsert
   */
  export type ApprovalRuleApproverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalRuleApprover to update in case it exists.
     */
    where: ApprovalRuleApproverWhereUniqueInput
    /**
     * In case the ApprovalRuleApprover found by the `where` argument doesn't exist, create a new ApprovalRuleApprover with this data.
     */
    create: XOR<ApprovalRuleApproverCreateInput, ApprovalRuleApproverUncheckedCreateInput>
    /**
     * In case the ApprovalRuleApprover was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalRuleApproverUpdateInput, ApprovalRuleApproverUncheckedUpdateInput>
  }

  /**
   * ApprovalRuleApprover delete
   */
  export type ApprovalRuleApproverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
    /**
     * Filter which ApprovalRuleApprover to delete.
     */
    where: ApprovalRuleApproverWhereUniqueInput
  }

  /**
   * ApprovalRuleApprover deleteMany
   */
  export type ApprovalRuleApproverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRuleApprovers to delete
     */
    where?: ApprovalRuleApproverWhereInput
    /**
     * Limit how many ApprovalRuleApprovers to delete.
     */
    limit?: number
  }

  /**
   * ApprovalRuleApprover without action
   */
  export type ApprovalRuleApproverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRuleApprover
     */
    select?: ApprovalRuleApproverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRuleApprover
     */
    omit?: ApprovalRuleApproverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRuleApproverInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    original_amount: Decimal | null
    base_amount: Decimal | null
    exchange_rate_at_submission: Decimal | null
    current_approval_step: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    original_amount: Decimal | null
    base_amount: Decimal | null
    exchange_rate_at_submission: Decimal | null
    current_approval_step: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    submitted_by: string | null
    company_id: string | null
    approval_rule_id: string | null
    original_amount: Decimal | null
    original_currency: string | null
    base_amount: Decimal | null
    exchange_rate_at_submission: Decimal | null
    category: string | null
    description: string | null
    expense_date: Date | null
    paid_by: string | null
    receipt_url: string | null
    remarks: string | null
    status: $Enums.ExpenseStatus | null
    current_approval_step: number | null
    created_at: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    submitted_by: string | null
    company_id: string | null
    approval_rule_id: string | null
    original_amount: Decimal | null
    original_currency: string | null
    base_amount: Decimal | null
    exchange_rate_at_submission: Decimal | null
    category: string | null
    description: string | null
    expense_date: Date | null
    paid_by: string | null
    receipt_url: string | null
    remarks: string | null
    status: $Enums.ExpenseStatus | null
    current_approval_step: number | null
    created_at: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    submitted_by: number
    company_id: number
    approval_rule_id: number
    original_amount: number
    original_currency: number
    base_amount: number
    exchange_rate_at_submission: number
    category: number
    description: number
    expense_date: number
    paid_by: number
    receipt_url: number
    remarks: number
    status: number
    current_approval_step: number
    created_at: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    original_amount?: true
    base_amount?: true
    exchange_rate_at_submission?: true
    current_approval_step?: true
  }

  export type ExpenseSumAggregateInputType = {
    original_amount?: true
    base_amount?: true
    exchange_rate_at_submission?: true
    current_approval_step?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    submitted_by?: true
    company_id?: true
    approval_rule_id?: true
    original_amount?: true
    original_currency?: true
    base_amount?: true
    exchange_rate_at_submission?: true
    category?: true
    description?: true
    expense_date?: true
    paid_by?: true
    receipt_url?: true
    remarks?: true
    status?: true
    current_approval_step?: true
    created_at?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    submitted_by?: true
    company_id?: true
    approval_rule_id?: true
    original_amount?: true
    original_currency?: true
    base_amount?: true
    exchange_rate_at_submission?: true
    category?: true
    description?: true
    expense_date?: true
    paid_by?: true
    receipt_url?: true
    remarks?: true
    status?: true
    current_approval_step?: true
    created_at?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    submitted_by?: true
    company_id?: true
    approval_rule_id?: true
    original_amount?: true
    original_currency?: true
    base_amount?: true
    exchange_rate_at_submission?: true
    category?: true
    description?: true
    expense_date?: true
    paid_by?: true
    receipt_url?: true
    remarks?: true
    status?: true
    current_approval_step?: true
    created_at?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    submitted_by: string
    company_id: string
    approval_rule_id: string
    original_amount: Decimal
    original_currency: string
    base_amount: Decimal
    exchange_rate_at_submission: Decimal
    category: string
    description: string
    expense_date: Date
    paid_by: string
    receipt_url: string | null
    remarks: string | null
    status: $Enums.ExpenseStatus
    current_approval_step: number
    created_at: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submitted_by?: boolean
    company_id?: boolean
    approval_rule_id?: boolean
    original_amount?: boolean
    original_currency?: boolean
    base_amount?: boolean
    exchange_rate_at_submission?: boolean
    category?: boolean
    description?: boolean
    expense_date?: boolean
    paid_by?: boolean
    receipt_url?: boolean
    remarks?: boolean
    status?: boolean
    current_approval_step?: boolean
    created_at?: boolean
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approval_steps?: boolean | Expense$approval_stepsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submitted_by?: boolean
    company_id?: boolean
    approval_rule_id?: boolean
    original_amount?: boolean
    original_currency?: boolean
    base_amount?: boolean
    exchange_rate_at_submission?: boolean
    category?: boolean
    description?: boolean
    expense_date?: boolean
    paid_by?: boolean
    receipt_url?: boolean
    remarks?: boolean
    status?: boolean
    current_approval_step?: boolean
    created_at?: boolean
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submitted_by?: boolean
    company_id?: boolean
    approval_rule_id?: boolean
    original_amount?: boolean
    original_currency?: boolean
    base_amount?: boolean
    exchange_rate_at_submission?: boolean
    category?: boolean
    description?: boolean
    expense_date?: boolean
    paid_by?: boolean
    receipt_url?: boolean
    remarks?: boolean
    status?: boolean
    current_approval_step?: boolean
    created_at?: boolean
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    submitted_by?: boolean
    company_id?: boolean
    approval_rule_id?: boolean
    original_amount?: boolean
    original_currency?: boolean
    base_amount?: boolean
    exchange_rate_at_submission?: boolean
    category?: boolean
    description?: boolean
    expense_date?: boolean
    paid_by?: boolean
    receipt_url?: boolean
    remarks?: boolean
    status?: boolean
    current_approval_step?: boolean
    created_at?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submitted_by" | "company_id" | "approval_rule_id" | "original_amount" | "original_currency" | "base_amount" | "exchange_rate_at_submission" | "category" | "description" | "expense_date" | "paid_by" | "receipt_url" | "remarks" | "status" | "current_approval_step" | "created_at", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
    approval_steps?: boolean | Expense$approval_stepsArgs<ExtArgs>
    _count?: boolean | ExpenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submitter?: boolean | UserDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    approval_rule?: boolean | ApprovalRuleDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      submitter: Prisma.$UserPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      approval_rule: Prisma.$ApprovalRulePayload<ExtArgs>
      approval_steps: Prisma.$ApprovalStepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submitted_by: string
      company_id: string
      approval_rule_id: string
      original_amount: Prisma.Decimal
      original_currency: string
      base_amount: Prisma.Decimal
      exchange_rate_at_submission: Prisma.Decimal
      category: string
      description: string
      expense_date: Date
      paid_by: string
      receipt_url: string | null
      remarks: string | null
      status: $Enums.ExpenseStatus
      current_approval_step: number
      created_at: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submitter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approval_rule<T extends ApprovalRuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApprovalRuleDefaultArgs<ExtArgs>>): Prisma__ApprovalRuleClient<$Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approval_steps<T extends Expense$approval_stepsArgs<ExtArgs> = {}>(args?: Subset<T, Expense$approval_stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly submitted_by: FieldRef<"Expense", 'String'>
    readonly company_id: FieldRef<"Expense", 'String'>
    readonly approval_rule_id: FieldRef<"Expense", 'String'>
    readonly original_amount: FieldRef<"Expense", 'Decimal'>
    readonly original_currency: FieldRef<"Expense", 'String'>
    readonly base_amount: FieldRef<"Expense", 'Decimal'>
    readonly exchange_rate_at_submission: FieldRef<"Expense", 'Decimal'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly expense_date: FieldRef<"Expense", 'DateTime'>
    readonly paid_by: FieldRef<"Expense", 'String'>
    readonly receipt_url: FieldRef<"Expense", 'String'>
    readonly remarks: FieldRef<"Expense", 'String'>
    readonly status: FieldRef<"Expense", 'ExpenseStatus'>
    readonly current_approval_step: FieldRef<"Expense", 'Int'>
    readonly created_at: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.approval_steps
   */
  export type Expense$approval_stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    where?: ApprovalStepWhereInput
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    cursor?: ApprovalStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalStep
   */

  export type AggregateApprovalStep = {
    _count: ApprovalStepCountAggregateOutputType | null
    _avg: ApprovalStepAvgAggregateOutputType | null
    _sum: ApprovalStepSumAggregateOutputType | null
    _min: ApprovalStepMinAggregateOutputType | null
    _max: ApprovalStepMaxAggregateOutputType | null
  }

  export type ApprovalStepAvgAggregateOutputType = {
    step_order: number | null
  }

  export type ApprovalStepSumAggregateOutputType = {
    step_order: number | null
  }

  export type ApprovalStepMinAggregateOutputType = {
    id: string | null
    expense_id: string | null
    approver_id: string | null
    step_order: number | null
    status: $Enums.StepStatus | null
    comments: string | null
    decided_at: Date | null
  }

  export type ApprovalStepMaxAggregateOutputType = {
    id: string | null
    expense_id: string | null
    approver_id: string | null
    step_order: number | null
    status: $Enums.StepStatus | null
    comments: string | null
    decided_at: Date | null
  }

  export type ApprovalStepCountAggregateOutputType = {
    id: number
    expense_id: number
    approver_id: number
    step_order: number
    status: number
    comments: number
    decided_at: number
    _all: number
  }


  export type ApprovalStepAvgAggregateInputType = {
    step_order?: true
  }

  export type ApprovalStepSumAggregateInputType = {
    step_order?: true
  }

  export type ApprovalStepMinAggregateInputType = {
    id?: true
    expense_id?: true
    approver_id?: true
    step_order?: true
    status?: true
    comments?: true
    decided_at?: true
  }

  export type ApprovalStepMaxAggregateInputType = {
    id?: true
    expense_id?: true
    approver_id?: true
    step_order?: true
    status?: true
    comments?: true
    decided_at?: true
  }

  export type ApprovalStepCountAggregateInputType = {
    id?: true
    expense_id?: true
    approver_id?: true
    step_order?: true
    status?: true
    comments?: true
    decided_at?: true
    _all?: true
  }

  export type ApprovalStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalStep to aggregate.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalSteps
    **/
    _count?: true | ApprovalStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalStepMaxAggregateInputType
  }

  export type GetApprovalStepAggregateType<T extends ApprovalStepAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalStep[P]>
      : GetScalarType<T[P], AggregateApprovalStep[P]>
  }




  export type ApprovalStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalStepWhereInput
    orderBy?: ApprovalStepOrderByWithAggregationInput | ApprovalStepOrderByWithAggregationInput[]
    by: ApprovalStepScalarFieldEnum[] | ApprovalStepScalarFieldEnum
    having?: ApprovalStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalStepCountAggregateInputType | true
    _avg?: ApprovalStepAvgAggregateInputType
    _sum?: ApprovalStepSumAggregateInputType
    _min?: ApprovalStepMinAggregateInputType
    _max?: ApprovalStepMaxAggregateInputType
  }

  export type ApprovalStepGroupByOutputType = {
    id: string
    expense_id: string
    approver_id: string
    step_order: number
    status: $Enums.StepStatus
    comments: string | null
    decided_at: Date | null
    _count: ApprovalStepCountAggregateOutputType | null
    _avg: ApprovalStepAvgAggregateOutputType | null
    _sum: ApprovalStepSumAggregateOutputType | null
    _min: ApprovalStepMinAggregateOutputType | null
    _max: ApprovalStepMaxAggregateOutputType | null
  }

  type GetApprovalStepGroupByPayload<T extends ApprovalStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalStepGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalStepGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expense_id?: boolean
    approver_id?: boolean
    step_order?: boolean
    status?: boolean
    comments?: boolean
    decided_at?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalStep"]>

  export type ApprovalStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expense_id?: boolean
    approver_id?: boolean
    step_order?: boolean
    status?: boolean
    comments?: boolean
    decided_at?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalStep"]>

  export type ApprovalStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expense_id?: boolean
    approver_id?: boolean
    step_order?: boolean
    status?: boolean
    comments?: boolean
    decided_at?: boolean
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalStep"]>

  export type ApprovalStepSelectScalar = {
    id?: boolean
    expense_id?: boolean
    approver_id?: boolean
    step_order?: boolean
    status?: boolean
    comments?: boolean
    decided_at?: boolean
  }

  export type ApprovalStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expense_id" | "approver_id" | "step_order" | "status" | "comments" | "decided_at", ExtArgs["result"]["approvalStep"]>
  export type ApprovalStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApprovalStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expense?: boolean | ExpenseDefaultArgs<ExtArgs>
    approver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApprovalStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalStep"
    objects: {
      expense: Prisma.$ExpensePayload<ExtArgs>
      approver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expense_id: string
      approver_id: string
      step_order: number
      status: $Enums.StepStatus
      comments: string | null
      decided_at: Date | null
    }, ExtArgs["result"]["approvalStep"]>
    composites: {}
  }

  type ApprovalStepGetPayload<S extends boolean | null | undefined | ApprovalStepDefaultArgs> = $Result.GetResult<Prisma.$ApprovalStepPayload, S>

  type ApprovalStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalStepCountAggregateInputType | true
    }

  export interface ApprovalStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalStep'], meta: { name: 'ApprovalStep' } }
    /**
     * Find zero or one ApprovalStep that matches the filter.
     * @param {ApprovalStepFindUniqueArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalStepFindUniqueArgs>(args: SelectSubset<T, ApprovalStepFindUniqueArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalStepFindUniqueOrThrowArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalStepFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepFindFirstArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalStepFindFirstArgs>(args?: SelectSubset<T, ApprovalStepFindFirstArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepFindFirstOrThrowArgs} args - Arguments to find a ApprovalStep
     * @example
     * // Get one ApprovalStep
     * const approvalStep = await prisma.approvalStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalStepFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalSteps
     * const approvalSteps = await prisma.approvalStep.findMany()
     * 
     * // Get first 10 ApprovalSteps
     * const approvalSteps = await prisma.approvalStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalStepWithIdOnly = await prisma.approvalStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalStepFindManyArgs>(args?: SelectSubset<T, ApprovalStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalStep.
     * @param {ApprovalStepCreateArgs} args - Arguments to create a ApprovalStep.
     * @example
     * // Create one ApprovalStep
     * const ApprovalStep = await prisma.approvalStep.create({
     *   data: {
     *     // ... data to create a ApprovalStep
     *   }
     * })
     * 
     */
    create<T extends ApprovalStepCreateArgs>(args: SelectSubset<T, ApprovalStepCreateArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalSteps.
     * @param {ApprovalStepCreateManyArgs} args - Arguments to create many ApprovalSteps.
     * @example
     * // Create many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalStepCreateManyArgs>(args?: SelectSubset<T, ApprovalStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalSteps and returns the data saved in the database.
     * @param {ApprovalStepCreateManyAndReturnArgs} args - Arguments to create many ApprovalSteps.
     * @example
     * // Create many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalSteps and only return the `id`
     * const approvalStepWithIdOnly = await prisma.approvalStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalStepCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalStep.
     * @param {ApprovalStepDeleteArgs} args - Arguments to delete one ApprovalStep.
     * @example
     * // Delete one ApprovalStep
     * const ApprovalStep = await prisma.approvalStep.delete({
     *   where: {
     *     // ... filter to delete one ApprovalStep
     *   }
     * })
     * 
     */
    delete<T extends ApprovalStepDeleteArgs>(args: SelectSubset<T, ApprovalStepDeleteArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalStep.
     * @param {ApprovalStepUpdateArgs} args - Arguments to update one ApprovalStep.
     * @example
     * // Update one ApprovalStep
     * const approvalStep = await prisma.approvalStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalStepUpdateArgs>(args: SelectSubset<T, ApprovalStepUpdateArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalSteps.
     * @param {ApprovalStepDeleteManyArgs} args - Arguments to filter ApprovalSteps to delete.
     * @example
     * // Delete a few ApprovalSteps
     * const { count } = await prisma.approvalStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalStepDeleteManyArgs>(args?: SelectSubset<T, ApprovalStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalStepUpdateManyArgs>(args: SelectSubset<T, ApprovalStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalSteps and returns the data updated in the database.
     * @param {ApprovalStepUpdateManyAndReturnArgs} args - Arguments to update many ApprovalSteps.
     * @example
     * // Update many ApprovalSteps
     * const approvalStep = await prisma.approvalStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalSteps and only return the `id`
     * const approvalStepWithIdOnly = await prisma.approvalStep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalStepUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalStep.
     * @param {ApprovalStepUpsertArgs} args - Arguments to update or create a ApprovalStep.
     * @example
     * // Update or create a ApprovalStep
     * const approvalStep = await prisma.approvalStep.upsert({
     *   create: {
     *     // ... data to create a ApprovalStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalStep we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalStepUpsertArgs>(args: SelectSubset<T, ApprovalStepUpsertArgs<ExtArgs>>): Prisma__ApprovalStepClient<$Result.GetResult<Prisma.$ApprovalStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepCountArgs} args - Arguments to filter ApprovalSteps to count.
     * @example
     * // Count the number of ApprovalSteps
     * const count = await prisma.approvalStep.count({
     *   where: {
     *     // ... the filter for the ApprovalSteps we want to count
     *   }
     * })
    **/
    count<T extends ApprovalStepCountArgs>(
      args?: Subset<T, ApprovalStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalStepAggregateArgs>(args: Subset<T, ApprovalStepAggregateArgs>): Prisma.PrismaPromise<GetApprovalStepAggregateType<T>>

    /**
     * Group by ApprovalStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalStepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalStepGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalStepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalStep model
   */
  readonly fields: ApprovalStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expense<T extends ExpenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpenseDefaultArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovalStep model
   */
  interface ApprovalStepFieldRefs {
    readonly id: FieldRef<"ApprovalStep", 'String'>
    readonly expense_id: FieldRef<"ApprovalStep", 'String'>
    readonly approver_id: FieldRef<"ApprovalStep", 'String'>
    readonly step_order: FieldRef<"ApprovalStep", 'Int'>
    readonly status: FieldRef<"ApprovalStep", 'StepStatus'>
    readonly comments: FieldRef<"ApprovalStep", 'String'>
    readonly decided_at: FieldRef<"ApprovalStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalStep findUnique
   */
  export type ApprovalStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep findUniqueOrThrow
   */
  export type ApprovalStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep findFirst
   */
  export type ApprovalStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalSteps.
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalSteps.
     */
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalStep findFirstOrThrow
   */
  export type ApprovalStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalStep to fetch.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalSteps.
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalSteps.
     */
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalStep findMany
   */
  export type ApprovalStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalSteps to fetch.
     */
    where?: ApprovalStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalSteps to fetch.
     */
    orderBy?: ApprovalStepOrderByWithRelationInput | ApprovalStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalSteps.
     */
    cursor?: ApprovalStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalSteps.
     */
    distinct?: ApprovalStepScalarFieldEnum | ApprovalStepScalarFieldEnum[]
  }

  /**
   * ApprovalStep create
   */
  export type ApprovalStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalStep.
     */
    data: XOR<ApprovalStepCreateInput, ApprovalStepUncheckedCreateInput>
  }

  /**
   * ApprovalStep createMany
   */
  export type ApprovalStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalSteps.
     */
    data: ApprovalStepCreateManyInput | ApprovalStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalStep createManyAndReturn
   */
  export type ApprovalStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalSteps.
     */
    data: ApprovalStepCreateManyInput | ApprovalStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalStep update
   */
  export type ApprovalStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalStep.
     */
    data: XOR<ApprovalStepUpdateInput, ApprovalStepUncheckedUpdateInput>
    /**
     * Choose, which ApprovalStep to update.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep updateMany
   */
  export type ApprovalStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalSteps.
     */
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalSteps to update
     */
    where?: ApprovalStepWhereInput
    /**
     * Limit how many ApprovalSteps to update.
     */
    limit?: number
  }

  /**
   * ApprovalStep updateManyAndReturn
   */
  export type ApprovalStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalSteps.
     */
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalSteps to update
     */
    where?: ApprovalStepWhereInput
    /**
     * Limit how many ApprovalSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalStep upsert
   */
  export type ApprovalStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalStep to update in case it exists.
     */
    where: ApprovalStepWhereUniqueInput
    /**
     * In case the ApprovalStep found by the `where` argument doesn't exist, create a new ApprovalStep with this data.
     */
    create: XOR<ApprovalStepCreateInput, ApprovalStepUncheckedCreateInput>
    /**
     * In case the ApprovalStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalStepUpdateInput, ApprovalStepUncheckedUpdateInput>
  }

  /**
   * ApprovalStep delete
   */
  export type ApprovalStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
    /**
     * Filter which ApprovalStep to delete.
     */
    where: ApprovalStepWhereUniqueInput
  }

  /**
   * ApprovalStep deleteMany
   */
  export type ApprovalStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalSteps to delete
     */
    where?: ApprovalStepWhereInput
    /**
     * Limit how many ApprovalSteps to delete.
     */
    limit?: number
  }

  /**
   * ApprovalStep without action
   */
  export type ApprovalStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalStep
     */
    select?: ApprovalStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalStep
     */
    omit?: ApprovalStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalStepInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeRateCache
   */

  export type AggregateExchangeRateCache = {
    _count: ExchangeRateCacheCountAggregateOutputType | null
    _min: ExchangeRateCacheMinAggregateOutputType | null
    _max: ExchangeRateCacheMaxAggregateOutputType | null
  }

  export type ExchangeRateCacheMinAggregateOutputType = {
    id: string | null
    base_currency: string | null
    fetched_at: Date | null
  }

  export type ExchangeRateCacheMaxAggregateOutputType = {
    id: string | null
    base_currency: string | null
    fetched_at: Date | null
  }

  export type ExchangeRateCacheCountAggregateOutputType = {
    id: number
    base_currency: number
    rates: number
    fetched_at: number
    _all: number
  }


  export type ExchangeRateCacheMinAggregateInputType = {
    id?: true
    base_currency?: true
    fetched_at?: true
  }

  export type ExchangeRateCacheMaxAggregateInputType = {
    id?: true
    base_currency?: true
    fetched_at?: true
  }

  export type ExchangeRateCacheCountAggregateInputType = {
    id?: true
    base_currency?: true
    rates?: true
    fetched_at?: true
    _all?: true
  }

  export type ExchangeRateCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRateCache to aggregate.
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRateCaches to fetch.
     */
    orderBy?: ExchangeRateCacheOrderByWithRelationInput | ExchangeRateCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeRateCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRateCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRateCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeRateCaches
    **/
    _count?: true | ExchangeRateCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeRateCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeRateCacheMaxAggregateInputType
  }

  export type GetExchangeRateCacheAggregateType<T extends ExchangeRateCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeRateCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeRateCache[P]>
      : GetScalarType<T[P], AggregateExchangeRateCache[P]>
  }




  export type ExchangeRateCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeRateCacheWhereInput
    orderBy?: ExchangeRateCacheOrderByWithAggregationInput | ExchangeRateCacheOrderByWithAggregationInput[]
    by: ExchangeRateCacheScalarFieldEnum[] | ExchangeRateCacheScalarFieldEnum
    having?: ExchangeRateCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeRateCacheCountAggregateInputType | true
    _min?: ExchangeRateCacheMinAggregateInputType
    _max?: ExchangeRateCacheMaxAggregateInputType
  }

  export type ExchangeRateCacheGroupByOutputType = {
    id: string
    base_currency: string
    rates: JsonValue
    fetched_at: Date
    _count: ExchangeRateCacheCountAggregateOutputType | null
    _min: ExchangeRateCacheMinAggregateOutputType | null
    _max: ExchangeRateCacheMaxAggregateOutputType | null
  }

  type GetExchangeRateCacheGroupByPayload<T extends ExchangeRateCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeRateCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeRateCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeRateCacheGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeRateCacheGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeRateCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base_currency?: boolean
    rates?: boolean
    fetched_at?: boolean
  }, ExtArgs["result"]["exchangeRateCache"]>

  export type ExchangeRateCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base_currency?: boolean
    rates?: boolean
    fetched_at?: boolean
  }, ExtArgs["result"]["exchangeRateCache"]>

  export type ExchangeRateCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base_currency?: boolean
    rates?: boolean
    fetched_at?: boolean
  }, ExtArgs["result"]["exchangeRateCache"]>

  export type ExchangeRateCacheSelectScalar = {
    id?: boolean
    base_currency?: boolean
    rates?: boolean
    fetched_at?: boolean
  }

  export type ExchangeRateCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "base_currency" | "rates" | "fetched_at", ExtArgs["result"]["exchangeRateCache"]>

  export type $ExchangeRateCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeRateCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      base_currency: string
      rates: Prisma.JsonValue
      fetched_at: Date
    }, ExtArgs["result"]["exchangeRateCache"]>
    composites: {}
  }

  type ExchangeRateCacheGetPayload<S extends boolean | null | undefined | ExchangeRateCacheDefaultArgs> = $Result.GetResult<Prisma.$ExchangeRateCachePayload, S>

  type ExchangeRateCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeRateCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeRateCacheCountAggregateInputType | true
    }

  export interface ExchangeRateCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeRateCache'], meta: { name: 'ExchangeRateCache' } }
    /**
     * Find zero or one ExchangeRateCache that matches the filter.
     * @param {ExchangeRateCacheFindUniqueArgs} args - Arguments to find a ExchangeRateCache
     * @example
     * // Get one ExchangeRateCache
     * const exchangeRateCache = await prisma.exchangeRateCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeRateCacheFindUniqueArgs>(args: SelectSubset<T, ExchangeRateCacheFindUniqueArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeRateCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeRateCacheFindUniqueOrThrowArgs} args - Arguments to find a ExchangeRateCache
     * @example
     * // Get one ExchangeRateCache
     * const exchangeRateCache = await prisma.exchangeRateCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeRateCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeRateCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRateCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheFindFirstArgs} args - Arguments to find a ExchangeRateCache
     * @example
     * // Get one ExchangeRateCache
     * const exchangeRateCache = await prisma.exchangeRateCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeRateCacheFindFirstArgs>(args?: SelectSubset<T, ExchangeRateCacheFindFirstArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeRateCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheFindFirstOrThrowArgs} args - Arguments to find a ExchangeRateCache
     * @example
     * // Get one ExchangeRateCache
     * const exchangeRateCache = await prisma.exchangeRateCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeRateCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeRateCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeRateCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeRateCaches
     * const exchangeRateCaches = await prisma.exchangeRateCache.findMany()
     * 
     * // Get first 10 ExchangeRateCaches
     * const exchangeRateCaches = await prisma.exchangeRateCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeRateCacheWithIdOnly = await prisma.exchangeRateCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeRateCacheFindManyArgs>(args?: SelectSubset<T, ExchangeRateCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeRateCache.
     * @param {ExchangeRateCacheCreateArgs} args - Arguments to create a ExchangeRateCache.
     * @example
     * // Create one ExchangeRateCache
     * const ExchangeRateCache = await prisma.exchangeRateCache.create({
     *   data: {
     *     // ... data to create a ExchangeRateCache
     *   }
     * })
     * 
     */
    create<T extends ExchangeRateCacheCreateArgs>(args: SelectSubset<T, ExchangeRateCacheCreateArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeRateCaches.
     * @param {ExchangeRateCacheCreateManyArgs} args - Arguments to create many ExchangeRateCaches.
     * @example
     * // Create many ExchangeRateCaches
     * const exchangeRateCache = await prisma.exchangeRateCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeRateCacheCreateManyArgs>(args?: SelectSubset<T, ExchangeRateCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeRateCaches and returns the data saved in the database.
     * @param {ExchangeRateCacheCreateManyAndReturnArgs} args - Arguments to create many ExchangeRateCaches.
     * @example
     * // Create many ExchangeRateCaches
     * const exchangeRateCache = await prisma.exchangeRateCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeRateCaches and only return the `id`
     * const exchangeRateCacheWithIdOnly = await prisma.exchangeRateCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeRateCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeRateCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeRateCache.
     * @param {ExchangeRateCacheDeleteArgs} args - Arguments to delete one ExchangeRateCache.
     * @example
     * // Delete one ExchangeRateCache
     * const ExchangeRateCache = await prisma.exchangeRateCache.delete({
     *   where: {
     *     // ... filter to delete one ExchangeRateCache
     *   }
     * })
     * 
     */
    delete<T extends ExchangeRateCacheDeleteArgs>(args: SelectSubset<T, ExchangeRateCacheDeleteArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeRateCache.
     * @param {ExchangeRateCacheUpdateArgs} args - Arguments to update one ExchangeRateCache.
     * @example
     * // Update one ExchangeRateCache
     * const exchangeRateCache = await prisma.exchangeRateCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeRateCacheUpdateArgs>(args: SelectSubset<T, ExchangeRateCacheUpdateArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeRateCaches.
     * @param {ExchangeRateCacheDeleteManyArgs} args - Arguments to filter ExchangeRateCaches to delete.
     * @example
     * // Delete a few ExchangeRateCaches
     * const { count } = await prisma.exchangeRateCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeRateCacheDeleteManyArgs>(args?: SelectSubset<T, ExchangeRateCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRateCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeRateCaches
     * const exchangeRateCache = await prisma.exchangeRateCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeRateCacheUpdateManyArgs>(args: SelectSubset<T, ExchangeRateCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeRateCaches and returns the data updated in the database.
     * @param {ExchangeRateCacheUpdateManyAndReturnArgs} args - Arguments to update many ExchangeRateCaches.
     * @example
     * // Update many ExchangeRateCaches
     * const exchangeRateCache = await prisma.exchangeRateCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeRateCaches and only return the `id`
     * const exchangeRateCacheWithIdOnly = await prisma.exchangeRateCache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExchangeRateCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeRateCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeRateCache.
     * @param {ExchangeRateCacheUpsertArgs} args - Arguments to update or create a ExchangeRateCache.
     * @example
     * // Update or create a ExchangeRateCache
     * const exchangeRateCache = await prisma.exchangeRateCache.upsert({
     *   create: {
     *     // ... data to create a ExchangeRateCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeRateCache we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeRateCacheUpsertArgs>(args: SelectSubset<T, ExchangeRateCacheUpsertArgs<ExtArgs>>): Prisma__ExchangeRateCacheClient<$Result.GetResult<Prisma.$ExchangeRateCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeRateCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheCountArgs} args - Arguments to filter ExchangeRateCaches to count.
     * @example
     * // Count the number of ExchangeRateCaches
     * const count = await prisma.exchangeRateCache.count({
     *   where: {
     *     // ... the filter for the ExchangeRateCaches we want to count
     *   }
     * })
    **/
    count<T extends ExchangeRateCacheCountArgs>(
      args?: Subset<T, ExchangeRateCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeRateCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeRateCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeRateCacheAggregateArgs>(args: Subset<T, ExchangeRateCacheAggregateArgs>): Prisma.PrismaPromise<GetExchangeRateCacheAggregateType<T>>

    /**
     * Group by ExchangeRateCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeRateCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExchangeRateCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeRateCacheGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeRateCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExchangeRateCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeRateCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeRateCache model
   */
  readonly fields: ExchangeRateCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeRateCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeRateCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExchangeRateCache model
   */
  interface ExchangeRateCacheFieldRefs {
    readonly id: FieldRef<"ExchangeRateCache", 'String'>
    readonly base_currency: FieldRef<"ExchangeRateCache", 'String'>
    readonly rates: FieldRef<"ExchangeRateCache", 'Json'>
    readonly fetched_at: FieldRef<"ExchangeRateCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeRateCache findUnique
   */
  export type ExchangeRateCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRateCache to fetch.
     */
    where: ExchangeRateCacheWhereUniqueInput
  }

  /**
   * ExchangeRateCache findUniqueOrThrow
   */
  export type ExchangeRateCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRateCache to fetch.
     */
    where: ExchangeRateCacheWhereUniqueInput
  }

  /**
   * ExchangeRateCache findFirst
   */
  export type ExchangeRateCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRateCache to fetch.
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRateCaches to fetch.
     */
    orderBy?: ExchangeRateCacheOrderByWithRelationInput | ExchangeRateCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRateCaches.
     */
    cursor?: ExchangeRateCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRateCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRateCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRateCaches.
     */
    distinct?: ExchangeRateCacheScalarFieldEnum | ExchangeRateCacheScalarFieldEnum[]
  }

  /**
   * ExchangeRateCache findFirstOrThrow
   */
  export type ExchangeRateCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRateCache to fetch.
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRateCaches to fetch.
     */
    orderBy?: ExchangeRateCacheOrderByWithRelationInput | ExchangeRateCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeRateCaches.
     */
    cursor?: ExchangeRateCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRateCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRateCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRateCaches.
     */
    distinct?: ExchangeRateCacheScalarFieldEnum | ExchangeRateCacheScalarFieldEnum[]
  }

  /**
   * ExchangeRateCache findMany
   */
  export type ExchangeRateCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * Filter, which ExchangeRateCaches to fetch.
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeRateCaches to fetch.
     */
    orderBy?: ExchangeRateCacheOrderByWithRelationInput | ExchangeRateCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeRateCaches.
     */
    cursor?: ExchangeRateCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeRateCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeRateCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeRateCaches.
     */
    distinct?: ExchangeRateCacheScalarFieldEnum | ExchangeRateCacheScalarFieldEnum[]
  }

  /**
   * ExchangeRateCache create
   */
  export type ExchangeRateCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a ExchangeRateCache.
     */
    data: XOR<ExchangeRateCacheCreateInput, ExchangeRateCacheUncheckedCreateInput>
  }

  /**
   * ExchangeRateCache createMany
   */
  export type ExchangeRateCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeRateCaches.
     */
    data: ExchangeRateCacheCreateManyInput | ExchangeRateCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRateCache createManyAndReturn
   */
  export type ExchangeRateCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeRateCaches.
     */
    data: ExchangeRateCacheCreateManyInput | ExchangeRateCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeRateCache update
   */
  export type ExchangeRateCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a ExchangeRateCache.
     */
    data: XOR<ExchangeRateCacheUpdateInput, ExchangeRateCacheUncheckedUpdateInput>
    /**
     * Choose, which ExchangeRateCache to update.
     */
    where: ExchangeRateCacheWhereUniqueInput
  }

  /**
   * ExchangeRateCache updateMany
   */
  export type ExchangeRateCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeRateCaches.
     */
    data: XOR<ExchangeRateCacheUpdateManyMutationInput, ExchangeRateCacheUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRateCaches to update
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * Limit how many ExchangeRateCaches to update.
     */
    limit?: number
  }

  /**
   * ExchangeRateCache updateManyAndReturn
   */
  export type ExchangeRateCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeRateCaches.
     */
    data: XOR<ExchangeRateCacheUpdateManyMutationInput, ExchangeRateCacheUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeRateCaches to update
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * Limit how many ExchangeRateCaches to update.
     */
    limit?: number
  }

  /**
   * ExchangeRateCache upsert
   */
  export type ExchangeRateCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the ExchangeRateCache to update in case it exists.
     */
    where: ExchangeRateCacheWhereUniqueInput
    /**
     * In case the ExchangeRateCache found by the `where` argument doesn't exist, create a new ExchangeRateCache with this data.
     */
    create: XOR<ExchangeRateCacheCreateInput, ExchangeRateCacheUncheckedCreateInput>
    /**
     * In case the ExchangeRateCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeRateCacheUpdateInput, ExchangeRateCacheUncheckedUpdateInput>
  }

  /**
   * ExchangeRateCache delete
   */
  export type ExchangeRateCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
    /**
     * Filter which ExchangeRateCache to delete.
     */
    where: ExchangeRateCacheWhereUniqueInput
  }

  /**
   * ExchangeRateCache deleteMany
   */
  export type ExchangeRateCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeRateCaches to delete
     */
    where?: ExchangeRateCacheWhereInput
    /**
     * Limit how many ExchangeRateCaches to delete.
     */
    limit?: number
  }

  /**
   * ExchangeRateCache without action
   */
  export type ExchangeRateCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeRateCache
     */
    select?: ExchangeRateCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeRateCache
     */
    omit?: ExchangeRateCacheOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    base_currency: 'base_currency',
    created_at: 'created_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    manager_id: 'manager_id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at',
    active: 'active'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ApprovalRuleScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    description: 'description',
    is_manager_approver: 'is_manager_approver',
    is_sequential: 'is_sequential',
    approval_percentage: 'approval_percentage',
    specific_approver_id: 'specific_approver_id',
    rule_type: 'rule_type',
    active: 'active',
    created_at: 'created_at'
  };

  export type ApprovalRuleScalarFieldEnum = (typeof ApprovalRuleScalarFieldEnum)[keyof typeof ApprovalRuleScalarFieldEnum]


  export const ApprovalRuleApproverScalarFieldEnum: {
    id: 'id',
    approval_rule_id: 'approval_rule_id',
    user_id: 'user_id',
    step_order: 'step_order',
    is_required: 'is_required'
  };

  export type ApprovalRuleApproverScalarFieldEnum = (typeof ApprovalRuleApproverScalarFieldEnum)[keyof typeof ApprovalRuleApproverScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    submitted_by: 'submitted_by',
    company_id: 'company_id',
    approval_rule_id: 'approval_rule_id',
    original_amount: 'original_amount',
    original_currency: 'original_currency',
    base_amount: 'base_amount',
    exchange_rate_at_submission: 'exchange_rate_at_submission',
    category: 'category',
    description: 'description',
    expense_date: 'expense_date',
    paid_by: 'paid_by',
    receipt_url: 'receipt_url',
    remarks: 'remarks',
    status: 'status',
    current_approval_step: 'current_approval_step',
    created_at: 'created_at'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const ApprovalStepScalarFieldEnum: {
    id: 'id',
    expense_id: 'expense_id',
    approver_id: 'approver_id',
    step_order: 'step_order',
    status: 'status',
    comments: 'comments',
    decided_at: 'decided_at'
  };

  export type ApprovalStepScalarFieldEnum = (typeof ApprovalStepScalarFieldEnum)[keyof typeof ApprovalStepScalarFieldEnum]


  export const ExchangeRateCacheScalarFieldEnum: {
    id: 'id',
    base_currency: 'base_currency',
    rates: 'rates',
    fetched_at: 'fetched_at'
  };

  export type ExchangeRateCacheScalarFieldEnum = (typeof ExchangeRateCacheScalarFieldEnum)[keyof typeof ExchangeRateCacheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RuleType'
   */
  export type EnumRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleType'>
    


  /**
   * Reference to a field of type 'RuleType[]'
   */
  export type ListEnumRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ExpenseStatus'
   */
  export type EnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseStatus'>
    


  /**
   * Reference to a field of type 'ExpenseStatus[]'
   */
  export type ListEnumExpenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExpenseStatus[]'>
    


  /**
   * Reference to a field of type 'StepStatus'
   */
  export type EnumStepStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StepStatus'>
    


  /**
   * Reference to a field of type 'StepStatus[]'
   */
  export type ListEnumStepStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StepStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    base_currency?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    rules?: ApprovalRuleListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    base_currency?: SortOrder
    created_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
    rules?: ApprovalRuleOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    country?: StringFilter<"Company"> | string
    base_currency?: StringFilter<"Company"> | string
    created_at?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    rules?: ApprovalRuleListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    base_currency?: SortOrder
    created_at?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    country?: StringWithAggregatesFilter<"Company"> | string
    base_currency?: StringWithAggregatesFilter<"Company"> | string
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    company_id?: StringFilter<"User"> | string
    manager_id?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
    rule_approvers?: ApprovalRuleApproverListRelationFilter
    approval_steps?: ApprovalStepListRelationFilter
    specific_rules?: ApprovalRuleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    manager_id?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
    company?: CompanyOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    subordinates?: UserOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
    rule_approvers?: ApprovalRuleApproverOrderByRelationAggregateInput
    approval_steps?: ApprovalStepOrderByRelationAggregateInput
    specific_rules?: ApprovalRuleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    company_id?: StringFilter<"User"> | string
    manager_id?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    password_hash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subordinates?: UserListRelationFilter
    expenses?: ExpenseListRelationFilter
    rule_approvers?: ApprovalRuleApproverListRelationFilter
    approval_steps?: ApprovalStepListRelationFilter
    specific_rules?: ApprovalRuleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    manager_id?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    company_id?: StringWithAggregatesFilter<"User"> | string
    manager_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ApprovalRuleWhereInput = {
    AND?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    OR?: ApprovalRuleWhereInput[]
    NOT?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    id?: StringFilter<"ApprovalRule"> | string
    company_id?: StringFilter<"ApprovalRule"> | string
    description?: StringFilter<"ApprovalRule"> | string
    is_manager_approver?: BoolFilter<"ApprovalRule"> | boolean
    is_sequential?: BoolFilter<"ApprovalRule"> | boolean
    approval_percentage?: IntNullableFilter<"ApprovalRule"> | number | null
    specific_approver_id?: StringNullableFilter<"ApprovalRule"> | string | null
    rule_type?: EnumRuleTypeFilter<"ApprovalRule"> | $Enums.RuleType
    active?: BoolFilter<"ApprovalRule"> | boolean
    created_at?: DateTimeFilter<"ApprovalRule"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    specific_approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvers?: ApprovalRuleApproverListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type ApprovalRuleOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    is_manager_approver?: SortOrder
    is_sequential?: SortOrder
    approval_percentage?: SortOrderInput | SortOrder
    specific_approver_id?: SortOrderInput | SortOrder
    rule_type?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    company?: CompanyOrderByWithRelationInput
    specific_approver?: UserOrderByWithRelationInput
    approvers?: ApprovalRuleApproverOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type ApprovalRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    OR?: ApprovalRuleWhereInput[]
    NOT?: ApprovalRuleWhereInput | ApprovalRuleWhereInput[]
    company_id?: StringFilter<"ApprovalRule"> | string
    description?: StringFilter<"ApprovalRule"> | string
    is_manager_approver?: BoolFilter<"ApprovalRule"> | boolean
    is_sequential?: BoolFilter<"ApprovalRule"> | boolean
    approval_percentage?: IntNullableFilter<"ApprovalRule"> | number | null
    specific_approver_id?: StringNullableFilter<"ApprovalRule"> | string | null
    rule_type?: EnumRuleTypeFilter<"ApprovalRule"> | $Enums.RuleType
    active?: BoolFilter<"ApprovalRule"> | boolean
    created_at?: DateTimeFilter<"ApprovalRule"> | Date | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    specific_approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    approvers?: ApprovalRuleApproverListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type ApprovalRuleOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    is_manager_approver?: SortOrder
    is_sequential?: SortOrder
    approval_percentage?: SortOrderInput | SortOrder
    specific_approver_id?: SortOrderInput | SortOrder
    rule_type?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    _count?: ApprovalRuleCountOrderByAggregateInput
    _avg?: ApprovalRuleAvgOrderByAggregateInput
    _max?: ApprovalRuleMaxOrderByAggregateInput
    _min?: ApprovalRuleMinOrderByAggregateInput
    _sum?: ApprovalRuleSumOrderByAggregateInput
  }

  export type ApprovalRuleScalarWhereWithAggregatesInput = {
    AND?: ApprovalRuleScalarWhereWithAggregatesInput | ApprovalRuleScalarWhereWithAggregatesInput[]
    OR?: ApprovalRuleScalarWhereWithAggregatesInput[]
    NOT?: ApprovalRuleScalarWhereWithAggregatesInput | ApprovalRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalRule"> | string
    company_id?: StringWithAggregatesFilter<"ApprovalRule"> | string
    description?: StringWithAggregatesFilter<"ApprovalRule"> | string
    is_manager_approver?: BoolWithAggregatesFilter<"ApprovalRule"> | boolean
    is_sequential?: BoolWithAggregatesFilter<"ApprovalRule"> | boolean
    approval_percentage?: IntNullableWithAggregatesFilter<"ApprovalRule"> | number | null
    specific_approver_id?: StringNullableWithAggregatesFilter<"ApprovalRule"> | string | null
    rule_type?: EnumRuleTypeWithAggregatesFilter<"ApprovalRule"> | $Enums.RuleType
    active?: BoolWithAggregatesFilter<"ApprovalRule"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ApprovalRule"> | Date | string
  }

  export type ApprovalRuleApproverWhereInput = {
    AND?: ApprovalRuleApproverWhereInput | ApprovalRuleApproverWhereInput[]
    OR?: ApprovalRuleApproverWhereInput[]
    NOT?: ApprovalRuleApproverWhereInput | ApprovalRuleApproverWhereInput[]
    id?: StringFilter<"ApprovalRuleApprover"> | string
    approval_rule_id?: StringFilter<"ApprovalRuleApprover"> | string
    user_id?: StringFilter<"ApprovalRuleApprover"> | string
    step_order?: IntFilter<"ApprovalRuleApprover"> | number
    is_required?: BoolFilter<"ApprovalRuleApprover"> | boolean
    approval_rule?: XOR<ApprovalRuleScalarRelationFilter, ApprovalRuleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprovalRuleApproverOrderByWithRelationInput = {
    id?: SortOrder
    approval_rule_id?: SortOrder
    user_id?: SortOrder
    step_order?: SortOrder
    is_required?: SortOrder
    approval_rule?: ApprovalRuleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ApprovalRuleApproverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalRuleApproverWhereInput | ApprovalRuleApproverWhereInput[]
    OR?: ApprovalRuleApproverWhereInput[]
    NOT?: ApprovalRuleApproverWhereInput | ApprovalRuleApproverWhereInput[]
    approval_rule_id?: StringFilter<"ApprovalRuleApprover"> | string
    user_id?: StringFilter<"ApprovalRuleApprover"> | string
    step_order?: IntFilter<"ApprovalRuleApprover"> | number
    is_required?: BoolFilter<"ApprovalRuleApprover"> | boolean
    approval_rule?: XOR<ApprovalRuleScalarRelationFilter, ApprovalRuleWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApprovalRuleApproverOrderByWithAggregationInput = {
    id?: SortOrder
    approval_rule_id?: SortOrder
    user_id?: SortOrder
    step_order?: SortOrder
    is_required?: SortOrder
    _count?: ApprovalRuleApproverCountOrderByAggregateInput
    _avg?: ApprovalRuleApproverAvgOrderByAggregateInput
    _max?: ApprovalRuleApproverMaxOrderByAggregateInput
    _min?: ApprovalRuleApproverMinOrderByAggregateInput
    _sum?: ApprovalRuleApproverSumOrderByAggregateInput
  }

  export type ApprovalRuleApproverScalarWhereWithAggregatesInput = {
    AND?: ApprovalRuleApproverScalarWhereWithAggregatesInput | ApprovalRuleApproverScalarWhereWithAggregatesInput[]
    OR?: ApprovalRuleApproverScalarWhereWithAggregatesInput[]
    NOT?: ApprovalRuleApproverScalarWhereWithAggregatesInput | ApprovalRuleApproverScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalRuleApprover"> | string
    approval_rule_id?: StringWithAggregatesFilter<"ApprovalRuleApprover"> | string
    user_id?: StringWithAggregatesFilter<"ApprovalRuleApprover"> | string
    step_order?: IntWithAggregatesFilter<"ApprovalRuleApprover"> | number
    is_required?: BoolWithAggregatesFilter<"ApprovalRuleApprover"> | boolean
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    submitted_by?: StringFilter<"Expense"> | string
    company_id?: StringFilter<"Expense"> | string
    approval_rule_id?: StringFilter<"Expense"> | string
    original_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    original_currency?: StringFilter<"Expense"> | string
    base_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    expense_date?: DateTimeFilter<"Expense"> | Date | string
    paid_by?: StringFilter<"Expense"> | string
    receipt_url?: StringNullableFilter<"Expense"> | string | null
    remarks?: StringNullableFilter<"Expense"> | string | null
    status?: EnumExpenseStatusFilter<"Expense"> | $Enums.ExpenseStatus
    current_approval_step?: IntFilter<"Expense"> | number
    created_at?: DateTimeFilter<"Expense"> | Date | string
    submitter?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    approval_rule?: XOR<ApprovalRuleScalarRelationFilter, ApprovalRuleWhereInput>
    approval_steps?: ApprovalStepListRelationFilter
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    company_id?: SortOrder
    approval_rule_id?: SortOrder
    original_amount?: SortOrder
    original_currency?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    category?: SortOrder
    description?: SortOrder
    expense_date?: SortOrder
    paid_by?: SortOrder
    receipt_url?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    status?: SortOrder
    current_approval_step?: SortOrder
    created_at?: SortOrder
    submitter?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    approval_rule?: ApprovalRuleOrderByWithRelationInput
    approval_steps?: ApprovalStepOrderByRelationAggregateInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    submitted_by?: StringFilter<"Expense"> | string
    company_id?: StringFilter<"Expense"> | string
    approval_rule_id?: StringFilter<"Expense"> | string
    original_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    original_currency?: StringFilter<"Expense"> | string
    base_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    expense_date?: DateTimeFilter<"Expense"> | Date | string
    paid_by?: StringFilter<"Expense"> | string
    receipt_url?: StringNullableFilter<"Expense"> | string | null
    remarks?: StringNullableFilter<"Expense"> | string | null
    status?: EnumExpenseStatusFilter<"Expense"> | $Enums.ExpenseStatus
    current_approval_step?: IntFilter<"Expense"> | number
    created_at?: DateTimeFilter<"Expense"> | Date | string
    submitter?: XOR<UserScalarRelationFilter, UserWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    approval_rule?: XOR<ApprovalRuleScalarRelationFilter, ApprovalRuleWhereInput>
    approval_steps?: ApprovalStepListRelationFilter
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    company_id?: SortOrder
    approval_rule_id?: SortOrder
    original_amount?: SortOrder
    original_currency?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    category?: SortOrder
    description?: SortOrder
    expense_date?: SortOrder
    paid_by?: SortOrder
    receipt_url?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    status?: SortOrder
    current_approval_step?: SortOrder
    created_at?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    submitted_by?: StringWithAggregatesFilter<"Expense"> | string
    company_id?: StringWithAggregatesFilter<"Expense"> | string
    approval_rule_id?: StringWithAggregatesFilter<"Expense"> | string
    original_amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    original_currency?: StringWithAggregatesFilter<"Expense"> | string
    base_amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringWithAggregatesFilter<"Expense"> | string
    expense_date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    paid_by?: StringWithAggregatesFilter<"Expense"> | string
    receipt_url?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    status?: EnumExpenseStatusWithAggregatesFilter<"Expense"> | $Enums.ExpenseStatus
    current_approval_step?: IntWithAggregatesFilter<"Expense"> | number
    created_at?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type ApprovalStepWhereInput = {
    AND?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    OR?: ApprovalStepWhereInput[]
    NOT?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    id?: StringFilter<"ApprovalStep"> | string
    expense_id?: StringFilter<"ApprovalStep"> | string
    approver_id?: StringFilter<"ApprovalStep"> | string
    step_order?: IntFilter<"ApprovalStep"> | number
    status?: EnumStepStatusFilter<"ApprovalStep"> | $Enums.StepStatus
    comments?: StringNullableFilter<"ApprovalStep"> | string | null
    decided_at?: DateTimeNullableFilter<"ApprovalStep"> | Date | string | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ApprovalStepOrderByWithRelationInput = {
    id?: SortOrder
    expense_id?: SortOrder
    approver_id?: SortOrder
    step_order?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    decided_at?: SortOrderInput | SortOrder
    expense?: ExpenseOrderByWithRelationInput
    approver?: UserOrderByWithRelationInput
  }

  export type ApprovalStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    OR?: ApprovalStepWhereInput[]
    NOT?: ApprovalStepWhereInput | ApprovalStepWhereInput[]
    expense_id?: StringFilter<"ApprovalStep"> | string
    approver_id?: StringFilter<"ApprovalStep"> | string
    step_order?: IntFilter<"ApprovalStep"> | number
    status?: EnumStepStatusFilter<"ApprovalStep"> | $Enums.StepStatus
    comments?: StringNullableFilter<"ApprovalStep"> | string | null
    decided_at?: DateTimeNullableFilter<"ApprovalStep"> | Date | string | null
    expense?: XOR<ExpenseScalarRelationFilter, ExpenseWhereInput>
    approver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ApprovalStepOrderByWithAggregationInput = {
    id?: SortOrder
    expense_id?: SortOrder
    approver_id?: SortOrder
    step_order?: SortOrder
    status?: SortOrder
    comments?: SortOrderInput | SortOrder
    decided_at?: SortOrderInput | SortOrder
    _count?: ApprovalStepCountOrderByAggregateInput
    _avg?: ApprovalStepAvgOrderByAggregateInput
    _max?: ApprovalStepMaxOrderByAggregateInput
    _min?: ApprovalStepMinOrderByAggregateInput
    _sum?: ApprovalStepSumOrderByAggregateInput
  }

  export type ApprovalStepScalarWhereWithAggregatesInput = {
    AND?: ApprovalStepScalarWhereWithAggregatesInput | ApprovalStepScalarWhereWithAggregatesInput[]
    OR?: ApprovalStepScalarWhereWithAggregatesInput[]
    NOT?: ApprovalStepScalarWhereWithAggregatesInput | ApprovalStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalStep"> | string
    expense_id?: StringWithAggregatesFilter<"ApprovalStep"> | string
    approver_id?: StringWithAggregatesFilter<"ApprovalStep"> | string
    step_order?: IntWithAggregatesFilter<"ApprovalStep"> | number
    status?: EnumStepStatusWithAggregatesFilter<"ApprovalStep"> | $Enums.StepStatus
    comments?: StringNullableWithAggregatesFilter<"ApprovalStep"> | string | null
    decided_at?: DateTimeNullableWithAggregatesFilter<"ApprovalStep"> | Date | string | null
  }

  export type ExchangeRateCacheWhereInput = {
    AND?: ExchangeRateCacheWhereInput | ExchangeRateCacheWhereInput[]
    OR?: ExchangeRateCacheWhereInput[]
    NOT?: ExchangeRateCacheWhereInput | ExchangeRateCacheWhereInput[]
    id?: StringFilter<"ExchangeRateCache"> | string
    base_currency?: StringFilter<"ExchangeRateCache"> | string
    rates?: JsonFilter<"ExchangeRateCache">
    fetched_at?: DateTimeFilter<"ExchangeRateCache"> | Date | string
  }

  export type ExchangeRateCacheOrderByWithRelationInput = {
    id?: SortOrder
    base_currency?: SortOrder
    rates?: SortOrder
    fetched_at?: SortOrder
  }

  export type ExchangeRateCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    base_currency?: string
    AND?: ExchangeRateCacheWhereInput | ExchangeRateCacheWhereInput[]
    OR?: ExchangeRateCacheWhereInput[]
    NOT?: ExchangeRateCacheWhereInput | ExchangeRateCacheWhereInput[]
    rates?: JsonFilter<"ExchangeRateCache">
    fetched_at?: DateTimeFilter<"ExchangeRateCache"> | Date | string
  }, "id" | "base_currency">

  export type ExchangeRateCacheOrderByWithAggregationInput = {
    id?: SortOrder
    base_currency?: SortOrder
    rates?: SortOrder
    fetched_at?: SortOrder
    _count?: ExchangeRateCacheCountOrderByAggregateInput
    _max?: ExchangeRateCacheMaxOrderByAggregateInput
    _min?: ExchangeRateCacheMinOrderByAggregateInput
  }

  export type ExchangeRateCacheScalarWhereWithAggregatesInput = {
    AND?: ExchangeRateCacheScalarWhereWithAggregatesInput | ExchangeRateCacheScalarWhereWithAggregatesInput[]
    OR?: ExchangeRateCacheScalarWhereWithAggregatesInput[]
    NOT?: ExchangeRateCacheScalarWhereWithAggregatesInput | ExchangeRateCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExchangeRateCache"> | string
    base_currency?: StringWithAggregatesFilter<"ExchangeRateCache"> | string
    rates?: JsonWithAggregatesFilter<"ExchangeRateCache">
    fetched_at?: DateTimeWithAggregatesFilter<"ExchangeRateCache"> | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    rules?: ApprovalRuleCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    rules?: ApprovalRuleUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleCreateInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutRulesInput
    specific_approver?: UserCreateNestedOneWithoutSpecific_rulesInput
    approvers?: ApprovalRuleApproverCreateNestedManyWithoutApproval_ruleInput
    expenses?: ExpenseCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleUncheckedCreateInput = {
    id?: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    specific_approver_id?: string | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutApproval_ruleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRulesNestedInput
    specific_approver?: UserUpdateOneWithoutSpecific_rulesNestedInput
    approvers?: ApprovalRuleApproverUpdateManyWithoutApproval_ruleNestedInput
    expenses?: ExpenseUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    specific_approver_id?: NullableStringFieldUpdateOperationsInput | string | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleCreateManyInput = {
    id?: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    specific_approver_id?: string | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
  }

  export type ApprovalRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    specific_approver_id?: NullableStringFieldUpdateOperationsInput | string | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleApproverCreateInput = {
    id?: string
    step_order: number
    is_required: boolean
    approval_rule: ApprovalRuleCreateNestedOneWithoutApproversInput
    user: UserCreateNestedOneWithoutRule_approversInput
  }

  export type ApprovalRuleApproverUncheckedCreateInput = {
    id?: string
    approval_rule_id: string
    user_id: string
    step_order: number
    is_required: boolean
  }

  export type ApprovalRuleApproverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
    approval_rule?: ApprovalRuleUpdateOneRequiredWithoutApproversNestedInput
    user?: UserUpdateOneRequiredWithoutRule_approversNestedInput
  }

  export type ApprovalRuleApproverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleApproverCreateManyInput = {
    id?: string
    approval_rule_id: string
    user_id: string
    step_order: number
    is_required: boolean
  }

  export type ApprovalRuleApproverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleApproverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseCreateInput = {
    id?: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    submitter: UserCreateNestedOneWithoutExpensesInput
    company: CompanyCreateNestedOneWithoutExpensesInput
    approval_rule: ApprovalRuleCreateNestedOneWithoutExpensesInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    submitted_by: string
    company_id: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitter?: UserUpdateOneRequiredWithoutExpensesNestedInput
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approval_rule?: ApprovalRuleUpdateOneRequiredWithoutExpensesNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseCreateManyInput = {
    id?: string
    submitted_by: string
    company_id: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalStepCreateInput = {
    id?: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
    expense: ExpenseCreateNestedOneWithoutApproval_stepsInput
    approver: UserCreateNestedOneWithoutApproval_stepsInput
  }

  export type ApprovalStepUncheckedCreateInput = {
    id?: string
    expense_id: string
    approver_id: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
  }

  export type ApprovalStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expense?: ExpenseUpdateOneRequiredWithoutApproval_stepsNestedInput
    approver?: UserUpdateOneRequiredWithoutApproval_stepsNestedInput
  }

  export type ApprovalStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expense_id?: StringFieldUpdateOperationsInput | string
    approver_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalStepCreateManyInput = {
    id?: string
    expense_id: string
    approver_id: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
  }

  export type ApprovalStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expense_id?: StringFieldUpdateOperationsInput | string
    approver_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExchangeRateCacheCreateInput = {
    id?: string
    base_currency: string
    rates: JsonNullValueInput | InputJsonValue
    fetched_at?: Date | string
  }

  export type ExchangeRateCacheUncheckedCreateInput = {
    id?: string
    base_currency: string
    rates: JsonNullValueInput | InputJsonValue
    fetched_at?: Date | string
  }

  export type ExchangeRateCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    rates?: JsonNullValueInput | InputJsonValue
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    rates?: JsonNullValueInput | InputJsonValue
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCacheCreateManyInput = {
    id?: string
    base_currency: string
    rates: JsonNullValueInput | InputJsonValue
    fetched_at?: Date | string
  }

  export type ExchangeRateCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    rates?: JsonNullValueInput | InputJsonValue
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExchangeRateCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    rates?: JsonNullValueInput | InputJsonValue
    fetched_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ApprovalRuleListRelationFilter = {
    every?: ApprovalRuleWhereInput
    some?: ApprovalRuleWhereInput
    none?: ApprovalRuleWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    base_currency?: SortOrder
    created_at?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    base_currency?: SortOrder
    created_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    base_currency?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ApprovalRuleApproverListRelationFilter = {
    every?: ApprovalRuleApproverWhereInput
    some?: ApprovalRuleApproverWhereInput
    none?: ApprovalRuleApproverWhereInput
  }

  export type ApprovalStepListRelationFilter = {
    every?: ApprovalStepWhereInput
    some?: ApprovalStepWhereInput
    none?: ApprovalStepWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApprovalRuleApproverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApprovalStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    manager_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeFilter<$PrismaModel> | $Enums.RuleType
  }

  export type ApprovalRuleCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    is_manager_approver?: SortOrder
    is_sequential?: SortOrder
    approval_percentage?: SortOrder
    specific_approver_id?: SortOrder
    rule_type?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type ApprovalRuleAvgOrderByAggregateInput = {
    approval_percentage?: SortOrder
  }

  export type ApprovalRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    is_manager_approver?: SortOrder
    is_sequential?: SortOrder
    approval_percentage?: SortOrder
    specific_approver_id?: SortOrder
    rule_type?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type ApprovalRuleMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    description?: SortOrder
    is_manager_approver?: SortOrder
    is_sequential?: SortOrder
    approval_percentage?: SortOrder
    specific_approver_id?: SortOrder
    rule_type?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
  }

  export type ApprovalRuleSumOrderByAggregateInput = {
    approval_percentage?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumRuleTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApprovalRuleScalarRelationFilter = {
    is?: ApprovalRuleWhereInput
    isNot?: ApprovalRuleWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ApprovalRuleApproverCountOrderByAggregateInput = {
    id?: SortOrder
    approval_rule_id?: SortOrder
    user_id?: SortOrder
    step_order?: SortOrder
    is_required?: SortOrder
  }

  export type ApprovalRuleApproverAvgOrderByAggregateInput = {
    step_order?: SortOrder
  }

  export type ApprovalRuleApproverMaxOrderByAggregateInput = {
    id?: SortOrder
    approval_rule_id?: SortOrder
    user_id?: SortOrder
    step_order?: SortOrder
    is_required?: SortOrder
  }

  export type ApprovalRuleApproverMinOrderByAggregateInput = {
    id?: SortOrder
    approval_rule_id?: SortOrder
    user_id?: SortOrder
    step_order?: SortOrder
    is_required?: SortOrder
  }

  export type ApprovalRuleApproverSumOrderByAggregateInput = {
    step_order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumExpenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusFilter<$PrismaModel> | $Enums.ExpenseStatus
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    company_id?: SortOrder
    approval_rule_id?: SortOrder
    original_amount?: SortOrder
    original_currency?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    category?: SortOrder
    description?: SortOrder
    expense_date?: SortOrder
    paid_by?: SortOrder
    receipt_url?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    current_approval_step?: SortOrder
    created_at?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    original_amount?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    current_approval_step?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    company_id?: SortOrder
    approval_rule_id?: SortOrder
    original_amount?: SortOrder
    original_currency?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    category?: SortOrder
    description?: SortOrder
    expense_date?: SortOrder
    paid_by?: SortOrder
    receipt_url?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    current_approval_step?: SortOrder
    created_at?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    company_id?: SortOrder
    approval_rule_id?: SortOrder
    original_amount?: SortOrder
    original_currency?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    category?: SortOrder
    description?: SortOrder
    expense_date?: SortOrder
    paid_by?: SortOrder
    receipt_url?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    current_approval_step?: SortOrder
    created_at?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    original_amount?: SortOrder
    base_amount?: SortOrder
    exchange_rate_at_submission?: SortOrder
    current_approval_step?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumExpenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseStatusFilter<$PrismaModel>
    _max?: NestedEnumExpenseStatusFilter<$PrismaModel>
  }

  export type EnumStepStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusFilter<$PrismaModel> | $Enums.StepStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ExpenseScalarRelationFilter = {
    is?: ExpenseWhereInput
    isNot?: ExpenseWhereInput
  }

  export type ApprovalStepCountOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    approver_id?: SortOrder
    step_order?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    decided_at?: SortOrder
  }

  export type ApprovalStepAvgOrderByAggregateInput = {
    step_order?: SortOrder
  }

  export type ApprovalStepMaxOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    approver_id?: SortOrder
    step_order?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    decided_at?: SortOrder
  }

  export type ApprovalStepMinOrderByAggregateInput = {
    id?: SortOrder
    expense_id?: SortOrder
    approver_id?: SortOrder
    step_order?: SortOrder
    status?: SortOrder
    comments?: SortOrder
    decided_at?: SortOrder
  }

  export type ApprovalStepSumOrderByAggregateInput = {
    step_order?: SortOrder
  }

  export type EnumStepStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusWithAggregatesFilter<$PrismaModel> | $Enums.StepStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStepStatusFilter<$PrismaModel>
    _max?: NestedEnumStepStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ExchangeRateCacheCountOrderByAggregateInput = {
    id?: SortOrder
    base_currency?: SortOrder
    rates?: SortOrder
    fetched_at?: SortOrder
  }

  export type ExchangeRateCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    base_currency?: SortOrder
    fetched_at?: SortOrder
  }

  export type ExchangeRateCacheMinOrderByAggregateInput = {
    id?: SortOrder
    base_currency?: SortOrder
    fetched_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ApprovalRuleCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ApprovalRuleUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutCompanyInput | ApprovalRuleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput> | ApprovalRuleCreateWithoutCompanyInput[] | ApprovalRuleUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutCompanyInput | ApprovalRuleCreateOrConnectWithoutCompanyInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ApprovalRuleCreateManyCompanyInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput | ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutCompanyInput | ApprovalRuleUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput> | ExpenseCreateWithoutCompanyInput[] | ExpenseUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCompanyInput | ExpenseCreateOrConnectWithoutCompanyInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCompanyInput | ExpenseUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExpenseCreateManyCompanyInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCompanyInput | ExpenseUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCompanyInput | ExpenseUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutSubmitterInput = {
    create?: XOR<ExpenseCreateWithoutSubmitterInput, ExpenseUncheckedCreateWithoutSubmitterInput> | ExpenseCreateWithoutSubmitterInput[] | ExpenseUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutSubmitterInput | ExpenseCreateOrConnectWithoutSubmitterInput[]
    createMany?: ExpenseCreateManySubmitterInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ApprovalRuleApproverCreateNestedManyWithoutUserInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutUserInput, ApprovalRuleApproverUncheckedCreateWithoutUserInput> | ApprovalRuleApproverCreateWithoutUserInput[] | ApprovalRuleApproverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutUserInput | ApprovalRuleApproverCreateOrConnectWithoutUserInput[]
    createMany?: ApprovalRuleApproverCreateManyUserInputEnvelope
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
  }

  export type ApprovalStepCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type ApprovalRuleCreateNestedManyWithoutSpecific_approverInput = {
    create?: XOR<ApprovalRuleCreateWithoutSpecific_approverInput, ApprovalRuleUncheckedCreateWithoutSpecific_approverInput> | ApprovalRuleCreateWithoutSpecific_approverInput[] | ApprovalRuleUncheckedCreateWithoutSpecific_approverInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutSpecific_approverInput | ApprovalRuleCreateOrConnectWithoutSpecific_approverInput[]
    createMany?: ApprovalRuleCreateManySpecific_approverInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutSubmitterInput = {
    create?: XOR<ExpenseCreateWithoutSubmitterInput, ExpenseUncheckedCreateWithoutSubmitterInput> | ExpenseCreateWithoutSubmitterInput[] | ExpenseUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutSubmitterInput | ExpenseCreateOrConnectWithoutSubmitterInput[]
    createMany?: ExpenseCreateManySubmitterInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutUserInput, ApprovalRuleApproverUncheckedCreateWithoutUserInput> | ApprovalRuleApproverCreateWithoutUserInput[] | ApprovalRuleApproverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutUserInput | ApprovalRuleApproverCreateOrConnectWithoutUserInput[]
    createMany?: ApprovalRuleApproverCreateManyUserInputEnvelope
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
  }

  export type ApprovalStepUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput = {
    create?: XOR<ApprovalRuleCreateWithoutSpecific_approverInput, ApprovalRuleUncheckedCreateWithoutSpecific_approverInput> | ApprovalRuleCreateWithoutSpecific_approverInput[] | ApprovalRuleUncheckedCreateWithoutSpecific_approverInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutSpecific_approverInput | ApprovalRuleCreateOrConnectWithoutSpecific_approverInput[]
    createMany?: ApprovalRuleCreateManySpecific_approverInputEnvelope
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    upsert?: UserUpsertWithoutSubordinatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubordinatesInput, UserUpdateWithoutSubordinatesInput>, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutSubmitterNestedInput = {
    create?: XOR<ExpenseCreateWithoutSubmitterInput, ExpenseUncheckedCreateWithoutSubmitterInput> | ExpenseCreateWithoutSubmitterInput[] | ExpenseUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutSubmitterInput | ExpenseCreateOrConnectWithoutSubmitterInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutSubmitterInput | ExpenseUpsertWithWhereUniqueWithoutSubmitterInput[]
    createMany?: ExpenseCreateManySubmitterInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutSubmitterInput | ExpenseUpdateWithWhereUniqueWithoutSubmitterInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutSubmitterInput | ExpenseUpdateManyWithWhereWithoutSubmitterInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ApprovalRuleApproverUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutUserInput, ApprovalRuleApproverUncheckedCreateWithoutUserInput> | ApprovalRuleApproverCreateWithoutUserInput[] | ApprovalRuleApproverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutUserInput | ApprovalRuleApproverCreateOrConnectWithoutUserInput[]
    upsert?: ApprovalRuleApproverUpsertWithWhereUniqueWithoutUserInput | ApprovalRuleApproverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApprovalRuleApproverCreateManyUserInputEnvelope
    set?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    disconnect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    delete?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    update?: ApprovalRuleApproverUpdateWithWhereUniqueWithoutUserInput | ApprovalRuleApproverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApprovalRuleApproverUpdateManyWithWhereWithoutUserInput | ApprovalRuleApproverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApprovalRuleApproverScalarWhereInput | ApprovalRuleApproverScalarWhereInput[]
  }

  export type ApprovalStepUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutApproverInput | ApprovalStepUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutApproverInput | ApprovalStepUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutApproverInput | ApprovalStepUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutSpecific_approverInput, ApprovalRuleUncheckedCreateWithoutSpecific_approverInput> | ApprovalRuleCreateWithoutSpecific_approverInput[] | ApprovalRuleUncheckedCreateWithoutSpecific_approverInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutSpecific_approverInput | ApprovalRuleCreateOrConnectWithoutSpecific_approverInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutSpecific_approverInput | ApprovalRuleUpsertWithWhereUniqueWithoutSpecific_approverInput[]
    createMany?: ApprovalRuleCreateManySpecific_approverInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutSpecific_approverInput | ApprovalRuleUpdateWithWhereUniqueWithoutSpecific_approverInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutSpecific_approverInput | ApprovalRuleUpdateManyWithWhereWithoutSpecific_approverInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput = {
    create?: XOR<ExpenseCreateWithoutSubmitterInput, ExpenseUncheckedCreateWithoutSubmitterInput> | ExpenseCreateWithoutSubmitterInput[] | ExpenseUncheckedCreateWithoutSubmitterInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutSubmitterInput | ExpenseCreateOrConnectWithoutSubmitterInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutSubmitterInput | ExpenseUpsertWithWhereUniqueWithoutSubmitterInput[]
    createMany?: ExpenseCreateManySubmitterInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutSubmitterInput | ExpenseUpdateWithWhereUniqueWithoutSubmitterInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutSubmitterInput | ExpenseUpdateManyWithWhereWithoutSubmitterInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutUserInput, ApprovalRuleApproverUncheckedCreateWithoutUserInput> | ApprovalRuleApproverCreateWithoutUserInput[] | ApprovalRuleApproverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutUserInput | ApprovalRuleApproverCreateOrConnectWithoutUserInput[]
    upsert?: ApprovalRuleApproverUpsertWithWhereUniqueWithoutUserInput | ApprovalRuleApproverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApprovalRuleApproverCreateManyUserInputEnvelope
    set?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    disconnect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    delete?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    update?: ApprovalRuleApproverUpdateWithWhereUniqueWithoutUserInput | ApprovalRuleApproverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApprovalRuleApproverUpdateManyWithWhereWithoutUserInput | ApprovalRuleApproverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApprovalRuleApproverScalarWhereInput | ApprovalRuleApproverScalarWhereInput[]
  }

  export type ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput> | ApprovalStepCreateWithoutApproverInput[] | ApprovalStepUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutApproverInput | ApprovalStepCreateOrConnectWithoutApproverInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutApproverInput | ApprovalStepUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: ApprovalStepCreateManyApproverInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutApproverInput | ApprovalStepUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutApproverInput | ApprovalStepUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutSpecific_approverInput, ApprovalRuleUncheckedCreateWithoutSpecific_approverInput> | ApprovalRuleCreateWithoutSpecific_approverInput[] | ApprovalRuleUncheckedCreateWithoutSpecific_approverInput[]
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutSpecific_approverInput | ApprovalRuleCreateOrConnectWithoutSpecific_approverInput[]
    upsert?: ApprovalRuleUpsertWithWhereUniqueWithoutSpecific_approverInput | ApprovalRuleUpsertWithWhereUniqueWithoutSpecific_approverInput[]
    createMany?: ApprovalRuleCreateManySpecific_approverInputEnvelope
    set?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    disconnect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    delete?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    connect?: ApprovalRuleWhereUniqueInput | ApprovalRuleWhereUniqueInput[]
    update?: ApprovalRuleUpdateWithWhereUniqueWithoutSpecific_approverInput | ApprovalRuleUpdateWithWhereUniqueWithoutSpecific_approverInput[]
    updateMany?: ApprovalRuleUpdateManyWithWhereWithoutSpecific_approverInput | ApprovalRuleUpdateManyWithWhereWithoutSpecific_approverInput[]
    deleteMany?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutRulesInput = {
    create?: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRulesInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSpecific_rulesInput = {
    create?: XOR<UserCreateWithoutSpecific_rulesInput, UserUncheckedCreateWithoutSpecific_rulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecific_rulesInput
    connect?: UserWhereUniqueInput
  }

  export type ApprovalRuleApproverCreateNestedManyWithoutApproval_ruleInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput> | ApprovalRuleApproverCreateWithoutApproval_ruleInput[] | ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput | ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput[]
    createMany?: ApprovalRuleApproverCreateManyApproval_ruleInputEnvelope
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutApproval_ruleInput = {
    create?: XOR<ExpenseCreateWithoutApproval_ruleInput, ExpenseUncheckedCreateWithoutApproval_ruleInput> | ExpenseCreateWithoutApproval_ruleInput[] | ExpenseUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutApproval_ruleInput | ExpenseCreateOrConnectWithoutApproval_ruleInput[]
    createMany?: ExpenseCreateManyApproval_ruleInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ApprovalRuleApproverUncheckedCreateNestedManyWithoutApproval_ruleInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput> | ApprovalRuleApproverCreateWithoutApproval_ruleInput[] | ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput | ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput[]
    createMany?: ApprovalRuleApproverCreateManyApproval_ruleInputEnvelope
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutApproval_ruleInput = {
    create?: XOR<ExpenseCreateWithoutApproval_ruleInput, ExpenseUncheckedCreateWithoutApproval_ruleInput> | ExpenseCreateWithoutApproval_ruleInput[] | ExpenseUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutApproval_ruleInput | ExpenseCreateOrConnectWithoutApproval_ruleInput[]
    createMany?: ExpenseCreateManyApproval_ruleInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRuleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RuleType
  }

  export type CompanyUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRulesInput
    upsert?: CompanyUpsertWithoutRulesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRulesInput, CompanyUpdateWithoutRulesInput>, CompanyUncheckedUpdateWithoutRulesInput>
  }

  export type UserUpdateOneWithoutSpecific_rulesNestedInput = {
    create?: XOR<UserCreateWithoutSpecific_rulesInput, UserUncheckedCreateWithoutSpecific_rulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpecific_rulesInput
    upsert?: UserUpsertWithoutSpecific_rulesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpecific_rulesInput, UserUpdateWithoutSpecific_rulesInput>, UserUncheckedUpdateWithoutSpecific_rulesInput>
  }

  export type ApprovalRuleApproverUpdateManyWithoutApproval_ruleNestedInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput> | ApprovalRuleApproverCreateWithoutApproval_ruleInput[] | ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput | ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput[]
    upsert?: ApprovalRuleApproverUpsertWithWhereUniqueWithoutApproval_ruleInput | ApprovalRuleApproverUpsertWithWhereUniqueWithoutApproval_ruleInput[]
    createMany?: ApprovalRuleApproverCreateManyApproval_ruleInputEnvelope
    set?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    disconnect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    delete?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    update?: ApprovalRuleApproverUpdateWithWhereUniqueWithoutApproval_ruleInput | ApprovalRuleApproverUpdateWithWhereUniqueWithoutApproval_ruleInput[]
    updateMany?: ApprovalRuleApproverUpdateManyWithWhereWithoutApproval_ruleInput | ApprovalRuleApproverUpdateManyWithWhereWithoutApproval_ruleInput[]
    deleteMany?: ApprovalRuleApproverScalarWhereInput | ApprovalRuleApproverScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutApproval_ruleNestedInput = {
    create?: XOR<ExpenseCreateWithoutApproval_ruleInput, ExpenseUncheckedCreateWithoutApproval_ruleInput> | ExpenseCreateWithoutApproval_ruleInput[] | ExpenseUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutApproval_ruleInput | ExpenseCreateOrConnectWithoutApproval_ruleInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutApproval_ruleInput | ExpenseUpsertWithWhereUniqueWithoutApproval_ruleInput[]
    createMany?: ExpenseCreateManyApproval_ruleInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutApproval_ruleInput | ExpenseUpdateWithWhereUniqueWithoutApproval_ruleInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutApproval_ruleInput | ExpenseUpdateManyWithWhereWithoutApproval_ruleInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleNestedInput = {
    create?: XOR<ApprovalRuleApproverCreateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput> | ApprovalRuleApproverCreateWithoutApproval_ruleInput[] | ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput | ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput[]
    upsert?: ApprovalRuleApproverUpsertWithWhereUniqueWithoutApproval_ruleInput | ApprovalRuleApproverUpsertWithWhereUniqueWithoutApproval_ruleInput[]
    createMany?: ApprovalRuleApproverCreateManyApproval_ruleInputEnvelope
    set?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    disconnect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    delete?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    connect?: ApprovalRuleApproverWhereUniqueInput | ApprovalRuleApproverWhereUniqueInput[]
    update?: ApprovalRuleApproverUpdateWithWhereUniqueWithoutApproval_ruleInput | ApprovalRuleApproverUpdateWithWhereUniqueWithoutApproval_ruleInput[]
    updateMany?: ApprovalRuleApproverUpdateManyWithWhereWithoutApproval_ruleInput | ApprovalRuleApproverUpdateManyWithWhereWithoutApproval_ruleInput[]
    deleteMany?: ApprovalRuleApproverScalarWhereInput | ApprovalRuleApproverScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutApproval_ruleNestedInput = {
    create?: XOR<ExpenseCreateWithoutApproval_ruleInput, ExpenseUncheckedCreateWithoutApproval_ruleInput> | ExpenseCreateWithoutApproval_ruleInput[] | ExpenseUncheckedCreateWithoutApproval_ruleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutApproval_ruleInput | ExpenseCreateOrConnectWithoutApproval_ruleInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutApproval_ruleInput | ExpenseUpsertWithWhereUniqueWithoutApproval_ruleInput[]
    createMany?: ExpenseCreateManyApproval_ruleInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutApproval_ruleInput | ExpenseUpdateWithWhereUniqueWithoutApproval_ruleInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutApproval_ruleInput | ExpenseUpdateManyWithWhereWithoutApproval_ruleInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ApprovalRuleCreateNestedOneWithoutApproversInput = {
    create?: XOR<ApprovalRuleCreateWithoutApproversInput, ApprovalRuleUncheckedCreateWithoutApproversInput>
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutApproversInput
    connect?: ApprovalRuleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRule_approversInput = {
    create?: XOR<UserCreateWithoutRule_approversInput, UserUncheckedCreateWithoutRule_approversInput>
    connectOrCreate?: UserCreateOrConnectWithoutRule_approversInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApprovalRuleUpdateOneRequiredWithoutApproversNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutApproversInput, ApprovalRuleUncheckedCreateWithoutApproversInput>
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutApproversInput
    upsert?: ApprovalRuleUpsertWithoutApproversInput
    connect?: ApprovalRuleWhereUniqueInput
    update?: XOR<XOR<ApprovalRuleUpdateToOneWithWhereWithoutApproversInput, ApprovalRuleUpdateWithoutApproversInput>, ApprovalRuleUncheckedUpdateWithoutApproversInput>
  }

  export type UserUpdateOneRequiredWithoutRule_approversNestedInput = {
    create?: XOR<UserCreateWithoutRule_approversInput, UserUncheckedCreateWithoutRule_approversInput>
    connectOrCreate?: UserCreateOrConnectWithoutRule_approversInput
    upsert?: UserUpsertWithoutRule_approversInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRule_approversInput, UserUpdateWithoutRule_approversInput>, UserUncheckedUpdateWithoutRule_approversInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ApprovalRuleCreateNestedOneWithoutExpensesInput = {
    create?: XOR<ApprovalRuleCreateWithoutExpensesInput, ApprovalRuleUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutExpensesInput
    connect?: ApprovalRuleWhereUniqueInput
  }

  export type ApprovalStepCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ApprovalStepCreateWithoutExpenseInput, ApprovalStepUncheckedCreateWithoutExpenseInput> | ApprovalStepCreateWithoutExpenseInput[] | ApprovalStepUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutExpenseInput | ApprovalStepCreateOrConnectWithoutExpenseInput[]
    createMany?: ApprovalStepCreateManyExpenseInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type ApprovalStepUncheckedCreateNestedManyWithoutExpenseInput = {
    create?: XOR<ApprovalStepCreateWithoutExpenseInput, ApprovalStepUncheckedCreateWithoutExpenseInput> | ApprovalStepCreateWithoutExpenseInput[] | ApprovalStepUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutExpenseInput | ApprovalStepCreateOrConnectWithoutExpenseInput[]
    createMany?: ApprovalStepCreateManyExpenseInputEnvelope
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumExpenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ExpenseStatus
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type CompanyUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExpensesInput
    upsert?: CompanyUpsertWithoutExpensesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutExpensesInput, CompanyUpdateWithoutExpensesInput>, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type ApprovalRuleUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<ApprovalRuleCreateWithoutExpensesInput, ApprovalRuleUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: ApprovalRuleCreateOrConnectWithoutExpensesInput
    upsert?: ApprovalRuleUpsertWithoutExpensesInput
    connect?: ApprovalRuleWhereUniqueInput
    update?: XOR<XOR<ApprovalRuleUpdateToOneWithWhereWithoutExpensesInput, ApprovalRuleUpdateWithoutExpensesInput>, ApprovalRuleUncheckedUpdateWithoutExpensesInput>
  }

  export type ApprovalStepUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutExpenseInput, ApprovalStepUncheckedCreateWithoutExpenseInput> | ApprovalStepCreateWithoutExpenseInput[] | ApprovalStepUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutExpenseInput | ApprovalStepCreateOrConnectWithoutExpenseInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutExpenseInput | ApprovalStepUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ApprovalStepCreateManyExpenseInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutExpenseInput | ApprovalStepUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutExpenseInput | ApprovalStepUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ApprovalStepUncheckedUpdateManyWithoutExpenseNestedInput = {
    create?: XOR<ApprovalStepCreateWithoutExpenseInput, ApprovalStepUncheckedCreateWithoutExpenseInput> | ApprovalStepCreateWithoutExpenseInput[] | ApprovalStepUncheckedCreateWithoutExpenseInput[]
    connectOrCreate?: ApprovalStepCreateOrConnectWithoutExpenseInput | ApprovalStepCreateOrConnectWithoutExpenseInput[]
    upsert?: ApprovalStepUpsertWithWhereUniqueWithoutExpenseInput | ApprovalStepUpsertWithWhereUniqueWithoutExpenseInput[]
    createMany?: ApprovalStepCreateManyExpenseInputEnvelope
    set?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    disconnect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    delete?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    connect?: ApprovalStepWhereUniqueInput | ApprovalStepWhereUniqueInput[]
    update?: ApprovalStepUpdateWithWhereUniqueWithoutExpenseInput | ApprovalStepUpdateWithWhereUniqueWithoutExpenseInput[]
    updateMany?: ApprovalStepUpdateManyWithWhereWithoutExpenseInput | ApprovalStepUpdateManyWithWhereWithoutExpenseInput[]
    deleteMany?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
  }

  export type ExpenseCreateNestedOneWithoutApproval_stepsInput = {
    create?: XOR<ExpenseCreateWithoutApproval_stepsInput, ExpenseUncheckedCreateWithoutApproval_stepsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutApproval_stepsInput
    connect?: ExpenseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApproval_stepsInput = {
    create?: XOR<UserCreateWithoutApproval_stepsInput, UserUncheckedCreateWithoutApproval_stepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApproval_stepsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStepStatusFieldUpdateOperationsInput = {
    set?: $Enums.StepStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExpenseUpdateOneRequiredWithoutApproval_stepsNestedInput = {
    create?: XOR<ExpenseCreateWithoutApproval_stepsInput, ExpenseUncheckedCreateWithoutApproval_stepsInput>
    connectOrCreate?: ExpenseCreateOrConnectWithoutApproval_stepsInput
    upsert?: ExpenseUpsertWithoutApproval_stepsInput
    connect?: ExpenseWhereUniqueInput
    update?: XOR<XOR<ExpenseUpdateToOneWithWhereWithoutApproval_stepsInput, ExpenseUpdateWithoutApproval_stepsInput>, ExpenseUncheckedUpdateWithoutApproval_stepsInput>
  }

  export type UserUpdateOneRequiredWithoutApproval_stepsNestedInput = {
    create?: XOR<UserCreateWithoutApproval_stepsInput, UserUncheckedCreateWithoutApproval_stepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApproval_stepsInput
    upsert?: UserUpsertWithoutApproval_stepsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApproval_stepsInput, UserUpdateWithoutApproval_stepsInput>, UserUncheckedUpdateWithoutApproval_stepsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeFilter<$PrismaModel> | $Enums.RuleType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RuleType[] | ListEnumRuleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumRuleTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumExpenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusFilter<$PrismaModel> | $Enums.ExpenseStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExpenseStatus | EnumExpenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExpenseStatus[] | ListEnumExpenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumExpenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ExpenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExpenseStatusFilter<$PrismaModel>
    _max?: NestedEnumExpenseStatusFilter<$PrismaModel>
  }

  export type NestedEnumStepStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusFilter<$PrismaModel> | $Enums.StepStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStepStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StepStatus | EnumStepStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StepStatus[] | ListEnumStepStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStepStatusWithAggregatesFilter<$PrismaModel> | $Enums.StepStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStepStatusFilter<$PrismaModel>
    _max?: NestedEnumStepStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRuleCreateWithoutCompanyInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    specific_approver?: UserCreateNestedOneWithoutSpecific_rulesInput
    approvers?: ApprovalRuleApproverCreateNestedManyWithoutApproval_ruleInput
    expenses?: ExpenseCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleUncheckedCreateWithoutCompanyInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    specific_approver_id?: string | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutApproval_ruleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleCreateOrConnectWithoutCompanyInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput>
  }

  export type ApprovalRuleCreateManyCompanyInputEnvelope = {
    data: ApprovalRuleCreateManyCompanyInput | ApprovalRuleCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutCompanyInput = {
    id?: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    submitter: UserCreateNestedOneWithoutExpensesInput
    approval_rule: ApprovalRuleCreateNestedOneWithoutExpensesInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutCompanyInput = {
    id?: string
    submitted_by: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseCreateManyCompanyInputEnvelope = {
    data: ExpenseCreateManyCompanyInput | ExpenseCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    company_id?: StringFilter<"User"> | string
    manager_id?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
  }

  export type ApprovalRuleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ApprovalRuleWhereUniqueInput
    update: XOR<ApprovalRuleUpdateWithoutCompanyInput, ApprovalRuleUncheckedUpdateWithoutCompanyInput>
    create: XOR<ApprovalRuleCreateWithoutCompanyInput, ApprovalRuleUncheckedCreateWithoutCompanyInput>
  }

  export type ApprovalRuleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ApprovalRuleWhereUniqueInput
    data: XOR<ApprovalRuleUpdateWithoutCompanyInput, ApprovalRuleUncheckedUpdateWithoutCompanyInput>
  }

  export type ApprovalRuleUpdateManyWithWhereWithoutCompanyInput = {
    where: ApprovalRuleScalarWhereInput
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ApprovalRuleScalarWhereInput = {
    AND?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
    OR?: ApprovalRuleScalarWhereInput[]
    NOT?: ApprovalRuleScalarWhereInput | ApprovalRuleScalarWhereInput[]
    id?: StringFilter<"ApprovalRule"> | string
    company_id?: StringFilter<"ApprovalRule"> | string
    description?: StringFilter<"ApprovalRule"> | string
    is_manager_approver?: BoolFilter<"ApprovalRule"> | boolean
    is_sequential?: BoolFilter<"ApprovalRule"> | boolean
    approval_percentage?: IntNullableFilter<"ApprovalRule"> | number | null
    specific_approver_id?: StringNullableFilter<"ApprovalRule"> | string | null
    rule_type?: EnumRuleTypeFilter<"ApprovalRule"> | $Enums.RuleType
    active?: BoolFilter<"ApprovalRule"> | boolean
    created_at?: DateTimeFilter<"ApprovalRule"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
    create: XOR<ExpenseCreateWithoutCompanyInput, ExpenseUncheckedCreateWithoutCompanyInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCompanyInput, ExpenseUncheckedUpdateWithoutCompanyInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCompanyInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    submitted_by?: StringFilter<"Expense"> | string
    company_id?: StringFilter<"Expense"> | string
    approval_rule_id?: StringFilter<"Expense"> | string
    original_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    original_currency?: StringFilter<"Expense"> | string
    base_amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Expense"> | string
    description?: StringFilter<"Expense"> | string
    expense_date?: DateTimeFilter<"Expense"> | Date | string
    paid_by?: StringFilter<"Expense"> | string
    receipt_url?: StringNullableFilter<"Expense"> | string | null
    remarks?: StringNullableFilter<"Expense"> | string | null
    status?: EnumExpenseStatusFilter<"Expense"> | $Enums.ExpenseStatus
    current_approval_step?: IntFilter<"Expense"> | number
    created_at?: DateTimeFilter<"Expense"> | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    rules?: ApprovalRuleCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSubordinatesInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateWithoutSubordinatesInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserCreateOrConnectWithoutSubordinatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    company_id: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutSubmitterInput = {
    id?: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutExpensesInput
    approval_rule: ApprovalRuleCreateNestedOneWithoutExpensesInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutSubmitterInput = {
    id?: string
    company_id: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutSubmitterInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutSubmitterInput, ExpenseUncheckedCreateWithoutSubmitterInput>
  }

  export type ExpenseCreateManySubmitterInputEnvelope = {
    data: ExpenseCreateManySubmitterInput | ExpenseCreateManySubmitterInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRuleApproverCreateWithoutUserInput = {
    id?: string
    step_order: number
    is_required: boolean
    approval_rule: ApprovalRuleCreateNestedOneWithoutApproversInput
  }

  export type ApprovalRuleApproverUncheckedCreateWithoutUserInput = {
    id?: string
    approval_rule_id: string
    step_order: number
    is_required: boolean
  }

  export type ApprovalRuleApproverCreateOrConnectWithoutUserInput = {
    where: ApprovalRuleApproverWhereUniqueInput
    create: XOR<ApprovalRuleApproverCreateWithoutUserInput, ApprovalRuleApproverUncheckedCreateWithoutUserInput>
  }

  export type ApprovalRuleApproverCreateManyUserInputEnvelope = {
    data: ApprovalRuleApproverCreateManyUserInput | ApprovalRuleApproverCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalStepCreateWithoutApproverInput = {
    id?: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
    expense: ExpenseCreateNestedOneWithoutApproval_stepsInput
  }

  export type ApprovalStepUncheckedCreateWithoutApproverInput = {
    id?: string
    expense_id: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
  }

  export type ApprovalStepCreateOrConnectWithoutApproverInput = {
    where: ApprovalStepWhereUniqueInput
    create: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalStepCreateManyApproverInputEnvelope = {
    data: ApprovalStepCreateManyApproverInput | ApprovalStepCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRuleCreateWithoutSpecific_approverInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutRulesInput
    approvers?: ApprovalRuleApproverCreateNestedManyWithoutApproval_ruleInput
    expenses?: ExpenseCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleUncheckedCreateWithoutSpecific_approverInput = {
    id?: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutApproval_ruleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleCreateOrConnectWithoutSpecific_approverInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutSpecific_approverInput, ApprovalRuleUncheckedCreateWithoutSpecific_approverInput>
  }

  export type ApprovalRuleCreateManySpecific_approverInputEnvelope = {
    data: ApprovalRuleCreateManySpecific_approverInput | ApprovalRuleCreateManySpecific_approverInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ApprovalRuleUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutSubordinatesInput = {
    update: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutSubmitterInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutSubmitterInput, ExpenseUncheckedUpdateWithoutSubmitterInput>
    create: XOR<ExpenseCreateWithoutSubmitterInput, ExpenseUncheckedCreateWithoutSubmitterInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutSubmitterInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutSubmitterInput, ExpenseUncheckedUpdateWithoutSubmitterInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutSubmitterInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutSubmitterInput>
  }

  export type ApprovalRuleApproverUpsertWithWhereUniqueWithoutUserInput = {
    where: ApprovalRuleApproverWhereUniqueInput
    update: XOR<ApprovalRuleApproverUpdateWithoutUserInput, ApprovalRuleApproverUncheckedUpdateWithoutUserInput>
    create: XOR<ApprovalRuleApproverCreateWithoutUserInput, ApprovalRuleApproverUncheckedCreateWithoutUserInput>
  }

  export type ApprovalRuleApproverUpdateWithWhereUniqueWithoutUserInput = {
    where: ApprovalRuleApproverWhereUniqueInput
    data: XOR<ApprovalRuleApproverUpdateWithoutUserInput, ApprovalRuleApproverUncheckedUpdateWithoutUserInput>
  }

  export type ApprovalRuleApproverUpdateManyWithWhereWithoutUserInput = {
    where: ApprovalRuleApproverScalarWhereInput
    data: XOR<ApprovalRuleApproverUpdateManyMutationInput, ApprovalRuleApproverUncheckedUpdateManyWithoutUserInput>
  }

  export type ApprovalRuleApproverScalarWhereInput = {
    AND?: ApprovalRuleApproverScalarWhereInput | ApprovalRuleApproverScalarWhereInput[]
    OR?: ApprovalRuleApproverScalarWhereInput[]
    NOT?: ApprovalRuleApproverScalarWhereInput | ApprovalRuleApproverScalarWhereInput[]
    id?: StringFilter<"ApprovalRuleApprover"> | string
    approval_rule_id?: StringFilter<"ApprovalRuleApprover"> | string
    user_id?: StringFilter<"ApprovalRuleApprover"> | string
    step_order?: IntFilter<"ApprovalRuleApprover"> | number
    is_required?: BoolFilter<"ApprovalRuleApprover"> | boolean
  }

  export type ApprovalStepUpsertWithWhereUniqueWithoutApproverInput = {
    where: ApprovalStepWhereUniqueInput
    update: XOR<ApprovalStepUpdateWithoutApproverInput, ApprovalStepUncheckedUpdateWithoutApproverInput>
    create: XOR<ApprovalStepCreateWithoutApproverInput, ApprovalStepUncheckedCreateWithoutApproverInput>
  }

  export type ApprovalStepUpdateWithWhereUniqueWithoutApproverInput = {
    where: ApprovalStepWhereUniqueInput
    data: XOR<ApprovalStepUpdateWithoutApproverInput, ApprovalStepUncheckedUpdateWithoutApproverInput>
  }

  export type ApprovalStepUpdateManyWithWhereWithoutApproverInput = {
    where: ApprovalStepScalarWhereInput
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyWithoutApproverInput>
  }

  export type ApprovalStepScalarWhereInput = {
    AND?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
    OR?: ApprovalStepScalarWhereInput[]
    NOT?: ApprovalStepScalarWhereInput | ApprovalStepScalarWhereInput[]
    id?: StringFilter<"ApprovalStep"> | string
    expense_id?: StringFilter<"ApprovalStep"> | string
    approver_id?: StringFilter<"ApprovalStep"> | string
    step_order?: IntFilter<"ApprovalStep"> | number
    status?: EnumStepStatusFilter<"ApprovalStep"> | $Enums.StepStatus
    comments?: StringNullableFilter<"ApprovalStep"> | string | null
    decided_at?: DateTimeNullableFilter<"ApprovalStep"> | Date | string | null
  }

  export type ApprovalRuleUpsertWithWhereUniqueWithoutSpecific_approverInput = {
    where: ApprovalRuleWhereUniqueInput
    update: XOR<ApprovalRuleUpdateWithoutSpecific_approverInput, ApprovalRuleUncheckedUpdateWithoutSpecific_approverInput>
    create: XOR<ApprovalRuleCreateWithoutSpecific_approverInput, ApprovalRuleUncheckedCreateWithoutSpecific_approverInput>
  }

  export type ApprovalRuleUpdateWithWhereUniqueWithoutSpecific_approverInput = {
    where: ApprovalRuleWhereUniqueInput
    data: XOR<ApprovalRuleUpdateWithoutSpecific_approverInput, ApprovalRuleUncheckedUpdateWithoutSpecific_approverInput>
  }

  export type ApprovalRuleUpdateManyWithWhereWithoutSpecific_approverInput = {
    where: ApprovalRuleScalarWhereInput
    data: XOR<ApprovalRuleUpdateManyMutationInput, ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverInput>
  }

  export type CompanyCreateWithoutRulesInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRulesInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRulesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
  }

  export type UserCreateWithoutSpecific_rulesInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
  }

  export type UserUncheckedCreateWithoutSpecific_rulesInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
  }

  export type UserCreateOrConnectWithoutSpecific_rulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpecific_rulesInput, UserUncheckedCreateWithoutSpecific_rulesInput>
  }

  export type ApprovalRuleApproverCreateWithoutApproval_ruleInput = {
    id?: string
    step_order: number
    is_required: boolean
    user: UserCreateNestedOneWithoutRule_approversInput
  }

  export type ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput = {
    id?: string
    user_id: string
    step_order: number
    is_required: boolean
  }

  export type ApprovalRuleApproverCreateOrConnectWithoutApproval_ruleInput = {
    where: ApprovalRuleApproverWhereUniqueInput
    create: XOR<ApprovalRuleApproverCreateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput>
  }

  export type ApprovalRuleApproverCreateManyApproval_ruleInputEnvelope = {
    data: ApprovalRuleApproverCreateManyApproval_ruleInput | ApprovalRuleApproverCreateManyApproval_ruleInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutApproval_ruleInput = {
    id?: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    submitter: UserCreateNestedOneWithoutExpensesInput
    company: CompanyCreateNestedOneWithoutExpensesInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseUncheckedCreateWithoutApproval_ruleInput = {
    id?: string
    submitted_by: string
    company_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutExpenseInput
  }

  export type ExpenseCreateOrConnectWithoutApproval_ruleInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutApproval_ruleInput, ExpenseUncheckedCreateWithoutApproval_ruleInput>
  }

  export type ExpenseCreateManyApproval_ruleInputEnvelope = {
    data: ExpenseCreateManyApproval_ruleInput | ExpenseCreateManyApproval_ruleInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutRulesInput = {
    update: XOR<CompanyUpdateWithoutRulesInput, CompanyUncheckedUpdateWithoutRulesInput>
    create: XOR<CompanyCreateWithoutRulesInput, CompanyUncheckedCreateWithoutRulesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRulesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRulesInput, CompanyUncheckedUpdateWithoutRulesInput>
  }

  export type CompanyUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutSpecific_rulesInput = {
    update: XOR<UserUpdateWithoutSpecific_rulesInput, UserUncheckedUpdateWithoutSpecific_rulesInput>
    create: XOR<UserCreateWithoutSpecific_rulesInput, UserUncheckedCreateWithoutSpecific_rulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpecific_rulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpecific_rulesInput, UserUncheckedUpdateWithoutSpecific_rulesInput>
  }

  export type UserUpdateWithoutSpecific_rulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutSpecific_rulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type ApprovalRuleApproverUpsertWithWhereUniqueWithoutApproval_ruleInput = {
    where: ApprovalRuleApproverWhereUniqueInput
    update: XOR<ApprovalRuleApproverUpdateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedUpdateWithoutApproval_ruleInput>
    create: XOR<ApprovalRuleApproverCreateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedCreateWithoutApproval_ruleInput>
  }

  export type ApprovalRuleApproverUpdateWithWhereUniqueWithoutApproval_ruleInput = {
    where: ApprovalRuleApproverWhereUniqueInput
    data: XOR<ApprovalRuleApproverUpdateWithoutApproval_ruleInput, ApprovalRuleApproverUncheckedUpdateWithoutApproval_ruleInput>
  }

  export type ApprovalRuleApproverUpdateManyWithWhereWithoutApproval_ruleInput = {
    where: ApprovalRuleApproverScalarWhereInput
    data: XOR<ApprovalRuleApproverUpdateManyMutationInput, ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutApproval_ruleInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutApproval_ruleInput, ExpenseUncheckedUpdateWithoutApproval_ruleInput>
    create: XOR<ExpenseCreateWithoutApproval_ruleInput, ExpenseUncheckedCreateWithoutApproval_ruleInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutApproval_ruleInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutApproval_ruleInput, ExpenseUncheckedUpdateWithoutApproval_ruleInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutApproval_ruleInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutApproval_ruleInput>
  }

  export type ApprovalRuleCreateWithoutApproversInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutRulesInput
    specific_approver?: UserCreateNestedOneWithoutSpecific_rulesInput
    expenses?: ExpenseCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleUncheckedCreateWithoutApproversInput = {
    id?: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    specific_approver_id?: string | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleCreateOrConnectWithoutApproversInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutApproversInput, ApprovalRuleUncheckedCreateWithoutApproversInput>
  }

  export type UserCreateWithoutRule_approversInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateWithoutRule_approversInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserCreateOrConnectWithoutRule_approversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRule_approversInput, UserUncheckedCreateWithoutRule_approversInput>
  }

  export type ApprovalRuleUpsertWithoutApproversInput = {
    update: XOR<ApprovalRuleUpdateWithoutApproversInput, ApprovalRuleUncheckedUpdateWithoutApproversInput>
    create: XOR<ApprovalRuleCreateWithoutApproversInput, ApprovalRuleUncheckedCreateWithoutApproversInput>
    where?: ApprovalRuleWhereInput
  }

  export type ApprovalRuleUpdateToOneWithWhereWithoutApproversInput = {
    where?: ApprovalRuleWhereInput
    data: XOR<ApprovalRuleUpdateWithoutApproversInput, ApprovalRuleUncheckedUpdateWithoutApproversInput>
  }

  export type ApprovalRuleUpdateWithoutApproversInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRulesNestedInput
    specific_approver?: UserUpdateOneWithoutSpecific_rulesNestedInput
    expenses?: ExpenseUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutApproversInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    specific_approver_id?: NullableStringFieldUpdateOperationsInput | string | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutApproval_ruleNestedInput
  }

  export type UserUpsertWithoutRule_approversInput = {
    update: XOR<UserUpdateWithoutRule_approversInput, UserUncheckedUpdateWithoutRule_approversInput>
    create: XOR<UserCreateWithoutRule_approversInput, UserUncheckedCreateWithoutRule_approversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRule_approversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRule_approversInput, UserUncheckedUpdateWithoutRule_approversInput>
  }

  export type UserUpdateWithoutRule_approversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateWithoutRule_approversInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    approval_steps?: ApprovalStepUncheckedCreateNestedManyWithoutApproverInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type CompanyCreateWithoutExpensesInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    rules?: ApprovalRuleCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    country: string
    base_currency: string
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    rules?: ApprovalRuleUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutExpensesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
  }

  export type ApprovalRuleCreateWithoutExpensesInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    company: CompanyCreateNestedOneWithoutRulesInput
    specific_approver?: UserCreateNestedOneWithoutSpecific_rulesInput
    approvers?: ApprovalRuleApproverCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleUncheckedCreateWithoutExpensesInput = {
    id?: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    specific_approver_id?: string | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
    approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutApproval_ruleInput
  }

  export type ApprovalRuleCreateOrConnectWithoutExpensesInput = {
    where: ApprovalRuleWhereUniqueInput
    create: XOR<ApprovalRuleCreateWithoutExpensesInput, ApprovalRuleUncheckedCreateWithoutExpensesInput>
  }

  export type ApprovalStepCreateWithoutExpenseInput = {
    id?: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
    approver: UserCreateNestedOneWithoutApproval_stepsInput
  }

  export type ApprovalStepUncheckedCreateWithoutExpenseInput = {
    id?: string
    approver_id: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
  }

  export type ApprovalStepCreateOrConnectWithoutExpenseInput = {
    where: ApprovalStepWhereUniqueInput
    create: XOR<ApprovalStepCreateWithoutExpenseInput, ApprovalStepUncheckedCreateWithoutExpenseInput>
  }

  export type ApprovalStepCreateManyExpenseInputEnvelope = {
    data: ApprovalStepCreateManyExpenseInput | ApprovalStepCreateManyExpenseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type CompanyUpsertWithoutExpensesInput = {
    update: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
    create: XOR<CompanyCreateWithoutExpensesInput, CompanyUncheckedCreateWithoutExpensesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutExpensesInput, CompanyUncheckedUpdateWithoutExpensesInput>
  }

  export type CompanyUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    rules?: ApprovalRuleUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    base_currency?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    rules?: ApprovalRuleUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ApprovalRuleUpsertWithoutExpensesInput = {
    update: XOR<ApprovalRuleUpdateWithoutExpensesInput, ApprovalRuleUncheckedUpdateWithoutExpensesInput>
    create: XOR<ApprovalRuleCreateWithoutExpensesInput, ApprovalRuleUncheckedCreateWithoutExpensesInput>
    where?: ApprovalRuleWhereInput
  }

  export type ApprovalRuleUpdateToOneWithWhereWithoutExpensesInput = {
    where?: ApprovalRuleWhereInput
    data: XOR<ApprovalRuleUpdateWithoutExpensesInput, ApprovalRuleUncheckedUpdateWithoutExpensesInput>
  }

  export type ApprovalRuleUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRulesNestedInput
    specific_approver?: UserUpdateOneWithoutSpecific_rulesNestedInput
    approvers?: ApprovalRuleApproverUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    specific_approver_id?: NullableStringFieldUpdateOperationsInput | string | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalStepUpsertWithWhereUniqueWithoutExpenseInput = {
    where: ApprovalStepWhereUniqueInput
    update: XOR<ApprovalStepUpdateWithoutExpenseInput, ApprovalStepUncheckedUpdateWithoutExpenseInput>
    create: XOR<ApprovalStepCreateWithoutExpenseInput, ApprovalStepUncheckedCreateWithoutExpenseInput>
  }

  export type ApprovalStepUpdateWithWhereUniqueWithoutExpenseInput = {
    where: ApprovalStepWhereUniqueInput
    data: XOR<ApprovalStepUpdateWithoutExpenseInput, ApprovalStepUncheckedUpdateWithoutExpenseInput>
  }

  export type ApprovalStepUpdateManyWithWhereWithoutExpenseInput = {
    where: ApprovalStepScalarWhereInput
    data: XOR<ApprovalStepUpdateManyMutationInput, ApprovalStepUncheckedUpdateManyWithoutExpenseInput>
  }

  export type ExpenseCreateWithoutApproval_stepsInput = {
    id?: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
    submitter: UserCreateNestedOneWithoutExpensesInput
    company: CompanyCreateNestedOneWithoutExpensesInput
    approval_rule: ApprovalRuleCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutApproval_stepsInput = {
    id?: string
    submitted_by: string
    company_id: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutApproval_stepsInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutApproval_stepsInput, ExpenseUncheckedCreateWithoutApproval_stepsInput>
  }

  export type UserCreateWithoutApproval_stepsInput = {
    id?: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    company: CompanyCreateNestedOneWithoutUsersInput
    manager?: UserCreateNestedOneWithoutSubordinatesInput
    subordinates?: UserCreateNestedManyWithoutManagerInput
    expenses?: ExpenseCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverCreateNestedManyWithoutUserInput
    specific_rules?: ApprovalRuleCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserUncheckedCreateWithoutApproval_stepsInput = {
    id?: string
    company_id: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
    subordinates?: UserUncheckedCreateNestedManyWithoutManagerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutSubmitterInput
    rule_approvers?: ApprovalRuleApproverUncheckedCreateNestedManyWithoutUserInput
    specific_rules?: ApprovalRuleUncheckedCreateNestedManyWithoutSpecific_approverInput
  }

  export type UserCreateOrConnectWithoutApproval_stepsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApproval_stepsInput, UserUncheckedCreateWithoutApproval_stepsInput>
  }

  export type ExpenseUpsertWithoutApproval_stepsInput = {
    update: XOR<ExpenseUpdateWithoutApproval_stepsInput, ExpenseUncheckedUpdateWithoutApproval_stepsInput>
    create: XOR<ExpenseCreateWithoutApproval_stepsInput, ExpenseUncheckedCreateWithoutApproval_stepsInput>
    where?: ExpenseWhereInput
  }

  export type ExpenseUpdateToOneWithWhereWithoutApproval_stepsInput = {
    where?: ExpenseWhereInput
    data: XOR<ExpenseUpdateWithoutApproval_stepsInput, ExpenseUncheckedUpdateWithoutApproval_stepsInput>
  }

  export type ExpenseUpdateWithoutApproval_stepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitter?: UserUpdateOneRequiredWithoutExpensesNestedInput
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approval_rule?: ApprovalRuleUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutApproval_stepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutApproval_stepsInput = {
    update: XOR<UserUpdateWithoutApproval_stepsInput, UserUncheckedUpdateWithoutApproval_stepsInput>
    create: XOR<UserCreateWithoutApproval_stepsInput, UserUncheckedCreateWithoutApproval_stepsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApproval_stepsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApproval_stepsInput, UserUncheckedUpdateWithoutApproval_stepsInput>
  }

  export type UserUpdateWithoutApproval_stepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateWithoutApproval_stepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    manager_id?: string | null
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
  }

  export type ApprovalRuleCreateManyCompanyInput = {
    id?: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    specific_approver_id?: string | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
  }

  export type ExpenseCreateManyCompanyInput = {
    id?: string
    submitted_by: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    manager?: UserUpdateOneWithoutSubordinatesNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    specific_approver?: UserUpdateOneWithoutSpecific_rulesNestedInput
    approvers?: ApprovalRuleApproverUpdateManyWithoutApproval_ruleNestedInput
    expenses?: ExpenseUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    specific_approver_id?: NullableStringFieldUpdateOperationsInput | string | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    specific_approver_id?: NullableStringFieldUpdateOperationsInput | string | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitter?: UserUpdateOneRequiredWithoutExpensesNestedInput
    approval_rule?: ApprovalRuleUpdateOneRequiredWithoutExpensesNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyManagerInput = {
    id?: string
    company_id: string
    name: string
    email: string
    password_hash?: string | null
    role?: $Enums.Role
    created_at?: Date | string
    active?: boolean
  }

  export type ExpenseCreateManySubmitterInput = {
    id?: string
    company_id: string
    approval_rule_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
  }

  export type ApprovalRuleApproverCreateManyUserInput = {
    id?: string
    approval_rule_id: string
    step_order: number
    is_required: boolean
  }

  export type ApprovalStepCreateManyApproverInput = {
    id?: string
    expense_id: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
  }

  export type ApprovalRuleCreateManySpecific_approverInput = {
    id?: string
    company_id: string
    description: string
    is_manager_approver: boolean
    is_sequential: boolean
    approval_percentage?: number | null
    rule_type: $Enums.RuleType
    active?: boolean
    created_at?: Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    company?: CompanyUpdateOneRequiredWithoutUsersNestedInput
    subordinates?: UserUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    subordinates?: UserUncheckedUpdateManyWithoutManagerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutSubmitterNestedInput
    rule_approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutUserNestedInput
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutApproverNestedInput
    specific_rules?: ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseUpdateWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approval_rule?: ApprovalRuleUpdateOneRequiredWithoutExpensesNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutSubmitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleApproverUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
    approval_rule?: ApprovalRuleUpdateOneRequiredWithoutApproversNestedInput
  }

  export type ApprovalRuleApproverUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleApproverUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    approval_rule_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalStepUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expense?: ExpenseUpdateOneRequiredWithoutApproval_stepsNestedInput
  }

  export type ApprovalStepUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    expense_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalStepUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    expense_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalRuleUpdateWithoutSpecific_approverInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRulesNestedInput
    approvers?: ApprovalRuleApproverUpdateManyWithoutApproval_ruleNestedInput
    expenses?: ExpenseUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateWithoutSpecific_approverInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approvers?: ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutApproval_ruleNestedInput
  }

  export type ApprovalRuleUncheckedUpdateManyWithoutSpecific_approverInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_manager_approver?: BoolFieldUpdateOperationsInput | boolean
    is_sequential?: BoolFieldUpdateOperationsInput | boolean
    approval_percentage?: NullableIntFieldUpdateOperationsInput | number | null
    rule_type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRuleApproverCreateManyApproval_ruleInput = {
    id?: string
    user_id: string
    step_order: number
    is_required: boolean
  }

  export type ExpenseCreateManyApproval_ruleInput = {
    id?: string
    submitted_by: string
    company_id: string
    original_amount: Decimal | DecimalJsLike | number | string
    original_currency: string
    base_amount: Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission: Decimal | DecimalJsLike | number | string
    category: string
    description: string
    expense_date: Date | string
    paid_by: string
    receipt_url?: string | null
    remarks?: string | null
    status?: $Enums.ExpenseStatus
    current_approval_step: number
    created_at?: Date | string
  }

  export type ApprovalRuleApproverUpdateWithoutApproval_ruleInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRule_approversNestedInput
  }

  export type ApprovalRuleApproverUncheckedUpdateWithoutApproval_ruleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApprovalRuleApproverUncheckedUpdateManyWithoutApproval_ruleInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpenseUpdateWithoutApproval_ruleInput = {
    id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    submitter?: UserUpdateOneRequiredWithoutExpensesNestedInput
    company?: CompanyUpdateOneRequiredWithoutExpensesNestedInput
    approval_steps?: ApprovalStepUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutApproval_ruleInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    approval_steps?: ApprovalStepUncheckedUpdateManyWithoutExpenseNestedInput
  }

  export type ExpenseUncheckedUpdateManyWithoutApproval_ruleInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    original_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    original_currency?: StringFieldUpdateOperationsInput | string
    base_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exchange_rate_at_submission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    expense_date?: DateTimeFieldUpdateOperationsInput | Date | string
    paid_by?: StringFieldUpdateOperationsInput | string
    receipt_url?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumExpenseStatusFieldUpdateOperationsInput | $Enums.ExpenseStatus
    current_approval_step?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalStepCreateManyExpenseInput = {
    id?: string
    approver_id: string
    step_order: number
    status?: $Enums.StepStatus
    comments?: string | null
    decided_at?: Date | string | null
  }

  export type ApprovalStepUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approver?: UserUpdateOneRequiredWithoutApproval_stepsNestedInput
  }

  export type ApprovalStepUncheckedUpdateWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    approver_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApprovalStepUncheckedUpdateManyWithoutExpenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    approver_id?: StringFieldUpdateOperationsInput | string
    step_order?: IntFieldUpdateOperationsInput | number
    status?: EnumStepStatusFieldUpdateOperationsInput | $Enums.StepStatus
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    decided_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}