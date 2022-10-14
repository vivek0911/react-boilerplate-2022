export const Layouts = {
  Auth: '/a',
}

export const ProtectedLayouts = {
  module1: '/m1',
  module2: '/m2',
  module3: '/m3',
}

const PathAuth = {
  AccountCreation: Layouts.Auth + '/account-creation',
  Login: Layouts.Auth + '/login',
  ForgotPassword: Layouts.Auth + '/forgot-password',
  ResetPassword: Layouts.Auth + '/reset-password',
  Logout: Layouts.Auth + '/logout',
}

const PathModule1 = {
  Xyz1: ProtectedLayouts.module1 + '/xyz1',
  Abc1: ProtectedLayouts.module1 + '/abc1',
}

const PathModule2 = {
  Xyz2: ProtectedLayouts.module2 + '/xyz2',
  Abc2: ProtectedLayouts.module2 + '/abc2',
}

const PathModule3 = {
  Xyz3: ProtectedLayouts.module3 + '/xyz3',
  Abc3: ProtectedLayouts.module3 + '/abc3',
}

const Path = {
  // No layout
  Root: '/',

  // Auth layout
  ...PathAuth,

  // Module 1 name
  ...PathModule1,

  // Module 2 name
  ...PathModule2,

  // Module 3 name
  ...PathModule3,
}

export default Path
