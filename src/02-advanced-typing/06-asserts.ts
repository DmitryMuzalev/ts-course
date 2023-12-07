/* 
Asserts (утверждать, заявлять, отстаивать)

Assert — это специальная конструкция, позволяющая проверять предположения о значениях произвольных данных в произвольном месте программы.

*/

type User = {
  name: string;
  displayName: string | null;
};

// Step 1
export function logUserDisplayName(user: User): void {
  if (!user.displayName) throw new Error("User has no displayName field");
  console.log(user.displayName.toUpperCase());
}

// Step 2
// Допустим мы хотим вынести проверку displayName на null в отдельную функцию

/*
    ! Так не работает
    function assertDisplayName(user: User) {
        if (!user.displayName) throw new Error("User has no displayName field");
    }

    function logUserDisplayNam2(user: User): void {
        assertDisplayName(user); так не работает
        console.log(user.displayName.toUpperCase()); 
    } 

*/

// Step 3
//* Так работает. Нужно указать утверждающий тип asserts user is User & { displayName: string }.
function assertDisplayName(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("User has no displayName field");
}

export function logUserDisplayNam2(user: User) {
  assertDisplayName(user);
  console.log(user.displayName.toUpperCase());
}
