import USERS from '../model/user/users';

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
    res.status(201).json({ message: true, data: user });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

export async function getUsers(req, res) {
  try {
    const user = await USERS.find();
    if (!user) {
      res.status(200).json({ message: 'Vous avez aucune données' });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(404)
      .json({ error: 'erreur dans la récupération des données' });
  }
}
