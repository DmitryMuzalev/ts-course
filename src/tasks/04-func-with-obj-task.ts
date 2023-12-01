interface IUser {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface IAdmin extends IUser {
  role: string;
}

const user: IUser = {
  login: 'muzalev771',
  email: 'muzalev771@gmail.com',
  password: 'qwerty123',
  isOnline: true,
  lastVisited: new Date(2023, 11, 1),
};

const admin: IAdmin = {
  login: 'admin',
  email: 'admin@gmail.com',
  password: 'roiadmin',
  isOnline: true,
  lastVisited: new Date(2023, 11, 1),
  role: 'superuser',
};

function login(user: { login: string; password: string }): void {
  user.login.length &&
    user.password.length &&
    console.log(`Hello, ${user.login}`);
}

login(user);
login(admin);
login({ login: '', password: '' });
