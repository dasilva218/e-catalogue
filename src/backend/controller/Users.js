import USERS from '../model/users';

/**
 * ! post user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res
        .status(404)
        .json({ message: "Aucune donnée n'as été envoyées" });

    const user = await USERS.create(formData);
    res.status(201).json(user);
  } catch (error) {
    return res.status(404).json({ error });
  }
}
