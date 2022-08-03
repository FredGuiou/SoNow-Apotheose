export function findUser(users, searchedId) {
  const user = users.find((testedUser) => {
    return testedUser.id === searchedId;
  });
  return user;
};

export function isFollower(followed, searchedId) {
  console.log(followed);
  console.log(searchedId);
  const isFollower = followed.find((testedFollowed) => {
    return testedFollowed.id_followed=== searchedId;
  });
  console.log(isFollower);
  return isFollower;
};
