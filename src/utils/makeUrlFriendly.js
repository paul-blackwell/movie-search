const makeUrlFriendly = (str) => str.replace(/\s+/g, '-').toLowerCase();

export default makeUrlFriendly;
