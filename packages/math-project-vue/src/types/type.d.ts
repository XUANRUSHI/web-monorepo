// /**
//  * Pet
//  */
// export interface Pet {
//   /**
//    * 分组
//    */
//   category: Category
//   /**
//    * 宠物ID编号
//    */
//   id: number
//   /**
//    * 名称
//    */
//   name: string
//   /**
//    * 照片URL
//    */
//   photoUrls: string[]
//   /**
//    * 宠物销售状态
//    */
//   status: Status
//   /**
//    * 标签
//    */
//   tags: Tag[]
//   [property: string]: any
// }

// interface Response<Pet> {
//   category: Category
//   /**
//    * 宠物ID编号
//    */
//   id: number
//   /**
//    * 名称
//    */
//   name: string
//   /**
//    * 照片URL
//    */
//   photoUrls: string[]
//   /**
//    * 宠物销售状态
//    */
//   status: Status
//   /**
//    * 标签
//    */
//   tags: Tag[]
//   [property: string]: any
// }

// /**
//  * 分组
//  *
//  * Category
//  */
// export interface Category {
//   /**
//    * 分组ID编号
//    */
//   id?: number
//   /**
//    * 分组名称
//    */
//   name?: string
//   [property: string]: any
// }

// /**
//  * 宠物销售状态
//  */
// export enum Status {
//   Available = 'available',
//   Pending = 'pending',
//   Sold = 'sold',
// }

// /**
//  * Tag
//  */
// export interface Tag {
//   /**
//    * 标签ID编号
//    */
//   id?: number
//   /**
//    * 标签名称
//    */
//   name?: string
//   [property: string]: any
// }


// types/type.d.ts
export interface Person {
  name: string
  slogan: string
}

// 移除未使用的 Pet 接口
// export interface Pet {
//   name: string
//   age: number
// }

export interface User {
  id: number
  name: string
  email: string
}

export interface Product {
  id: number
  name: string
  price: number
}

// 修改使用 any 的地方
export interface SomeInterface {
  id: number
  name: string
  data: unknown // 使用 unknown 或具体类型替代 any
}

export interface AnotherInterface {
  id: number
  name: string
  details: Record<string, unknown> // 使用 Record<string, unknown> 替代 any
}

export interface YetAnotherInterface {
  id: number
  name: string
  metadata: { [key: string]: unknown } // 使用 { [key: string]: unknown } 替代 any
}
