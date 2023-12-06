// Aliases (type)
// 1.primitives, union
type Ex = "a";
//! interface Int = "a"; error
// 2. type Window - can't created
/*  Does not work:
    type Window = {
        isOnline?:boolean;
    };
*/

//Interface (interface)
// 1.When we wont expand interface in future
interface Window {
  isOnline?: boolean;
}
// 2. Class with implements (Используются при создании классов)
