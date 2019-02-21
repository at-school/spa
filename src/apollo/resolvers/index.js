const resolvers = {
  Mutation: {
    updateCurrentUser: (_, { role, token }, { cache }) => {
      const data = {
        currentUser: {
          __typename: "currentUser",
          authSuccess: true,
          role,
          token
        }
      };

      cache.writeQuery({ data });
      return null;
    }
  }
};

export default resolvers;