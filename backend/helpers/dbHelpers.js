module.exports = (db) => {
  const getUsers = () => {
      const query = {
          text: 'SELECT * FROM users',
      };

      return db
          .query(query)
          .then((result) => result.rows)
          .catch((err) => err);
  };

  

  const getUserById = id => {

    const query = {
        text: `SELECT * FROM users WHERE id = $1` ,
        values: [id]
    }

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch((err) => err);
}

  

  const updatePassword = (password, id) => {
    const query = {
        text: `UPDATE users SET password = $1 WHERE id = $2 RETURNING *` ,
        values: [password, id]
    }
    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
}

  
  return {
      getUsers,
      updatePassword,
      getUserById
  };
};