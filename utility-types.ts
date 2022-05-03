interface MyUser {
  name: string;
  id: string;
  email?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Andre",
      id: "foo",
      email: "andre@seasoned.cc",
    },
    { email: "other@email.com" }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...rest } = v;

    return {
      ...a,
      [id]: rest,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: "foo",
      name: "Andre",
    },
    {
      id: "baz",
      name: "Mrs. Baz",
    },
  ])
);
