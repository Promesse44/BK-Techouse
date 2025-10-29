import pool from "../config/db.js";

export const getAllUsersService = async() =>{
  const result = await pool.query("SELECT * FROM Demopost");
  return result.rows;
};

export const getUserByIdService = async() =>{
  const result = await pool.query("SELECT * FROM  Demopost WHERE id = $1", [id]);
  return result.rows[0];
};

export const createUserService = async() =>{
  const result = await pool.query("INSERT INTO TABLE Demopost (name, email) VALUES($1, $2) RETURNING *", 
    [name, email]);
    return result.rows[0];
};

export const updateUserService = async(id, name, email) =>{
  const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0]
};

export const deleteUserService = async() =>{
  const result = await pool.query("DELETE FROM Demopost WHERE id = $1 RETURNING *"
    [id]
  );
  return result.row[0]
};