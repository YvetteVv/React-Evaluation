'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
const getHobbies = () => {
  const dataAccessMethod = () => {
    // fill me in :) should return an array of hobbies without duplicate value.
    let hobbiesArr = []
    for(const key in db.hobbiesOfUserByUsername) {
        hobbiesArr = [...hobbiesArr, ...db.hobbiesOfUserByUsername[key]]
        // console.log(hobbiesArr)
    }
  
    return [...new Set(hobbiesArr)];
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    const ageCounter = {} // HashMap
    let result = [] // Final Result
    // Get age by user name
    const getAgeByUserName = (name) => {
      // In this time do not consider the duplicate username
      // Maybe we should know the userID in hobbiesOfUserByUsername and then we can avoid this problem
      for (const index in db.usersById) {
        if (db.usersById[index].username == name) {
          return db.usersById[index].age
        }
      }
      // if not find the username, do some exception here
      return
    }

    // process
    for(const key in db.hobbiesOfUserByUsername) {
      const hobbyList = db.hobbiesOfUserByUsername[key]
      if (hobbyList.indexOf(hobby) !== -1) {
        const name = key
        const age = getAgeByUserName(name)
        if (age in ageCounter) {
          ageCounter[age] += 1
        }
        else{
          ageCounter[age] = 1
        }
      }
    }
    for (const userAge in ageCounter) {
      result = [...result, {'age':userAge, 'count':ageCounter[userAge]}]
    }
    return result
  };
  
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies,
};
