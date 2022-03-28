
// function someFunc(a: number, b: number): number {
//   return a + b
// }

// let some: number = someFunc(1, 2)


// function add(a:number, b: number) {
//   return a + b
// }

// const sum: number = add(1,2 )
// console.log(sum) // 3

// function add2(a: number, b: number) {
//   return a + b
// }

// const sum2: string = add(1, 2) // error!
// console.log(sum)

// // boolean
// let isBoolean: boolean

// // number
// let num: number
// let str: string

// // array 
// let fruits: string[] = ['a', 'b', 'c']
// let fruits2: Array<string> = ['a', 'b', 'c']
// let array: any[] = [0, 1, {}]

// // union
// let array2: (string | number)[] = ['a', 2, '3']

// // interface
// interface IUser {
//   name: string
//   age: number
//   isValid: boolean
// }
// let userArr: IUser[] = [
//   {
//     name: 'no',
//     age: 3,
//     isValid: true
//   }
// ]

// // tuple
// let tuple: [string, number]
// tuple = ['a', 1]

// let userid: number = 3
// let userName: string = 'codma'
// let isVaild: boolean = true
// let user: [number, string ,boolean] = [1234, 'codma', true]

// let users: [number, string, boolean][]
// users = [[1, 'codma', true],[2, 'soad', false]]

// let tuple2: [string, number]
// tuple2 = ['a', 2]
// tuple.push(3)
// tuple.push(true) // error

// // enum
// enum Week {
//   Sun, Mon, Tue, Wed, Thu, Fri, Sat // 0~6
// }

// // any
// let any: any = 123
// any = 'Hello world'
// any = {}
// any = null

// const list: any[] = [1, true, 'Anything']

// // unknown
// let a: any = 123
// let u: unknown = 123

// let v1: boolean = a  // any는 어디든 할당 가능
// let v2: number = u   //unknown은 any를 제외한 다른 타입에 할당 불능 
// let v3: any = u
// let v4: number = u as number // as로 타입을 단언하면 할당 가능


// // Object 
// let obj: Object= {}

// // function 

// let myFunc2: (arg1: number, arg2: number) => number;
// myFunc2 = function (x, y) {
//   return x + y
// }

