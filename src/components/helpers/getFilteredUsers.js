import { loadFromLocalStorage } from 'components/services';
import { SHOW_ALL, FOLLOWING } from 'components/constants';

export const getFilteredUsers = (filter, users) => {
  if (filter === SHOW_ALL) {
    return users;
  } else if (filter === FOLLOWING) {
    return users.filter(
      ({ id }) => loadFromLocalStorage(`user_${id}`) === true
    );
  } else {
    return users.filter(
      ({ id }) => loadFromLocalStorage(`user_${id}`) !== true
    );
  }
};