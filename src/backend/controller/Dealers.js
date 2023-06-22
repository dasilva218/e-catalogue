import DEALERS from '../model/dealer/dealer';

/**
 * *controller pour éditer
 * ! put
 * @param {*} req
 * @param {*} res
 */
export async function editTeste(req, res) {
  try {
    const Teste = await Testes.findById(req.query.id);
    if (!Teste) {
      throw new Error("le poste n'existe pas");
    }
    const UpdateTeste = await Testes.findByIdAndUpdate(
      Teste,
      req.body,
      { new: true }
    );
    res.status(200).json(UpdateTeste);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

/**
 ** ajouter une valeur
 *! patch
 */
export async function addTeste(req, res) {
  try {
    const Teste = await Testes.findByIdAndUpdate(
      req.query.id,
      { $addToSet: { rentcar: req.body } },
      {
        new: true,
      }
    ).then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(404).json(error);
  }
}
/**
 * *effacer une voiture
 */
export async function deleteCar(req, res) {
  try {
    const Teste = await Testes.findByIdAndUpdate(
      req.query.id[0],
      { $pull: { rentcar: { _id: req.query.id[1] } } },
      {
        new: true,
      }
    );
    res.status(200).json(req.query.id[1]);
  } catch (error) {
    res.status(404).json(error);
  }
}

/**
 * * controller pour obtenir des concessionnaires
 * ! get
 * @param {*} req
 * @param {*} res
 */
export async function getDealers(req, res) {
  try {
    const dealers = await DEALERS.find();
    if (!dealers) {
      res.status(200).json({ message: 'Vous avez aucune données' });
    }
    res.status(200).json(dealers);
  } catch (error) {
    res
      .status(404)
      .json({ error: 'erreur dans la récupération des données' });
  }
}

/**
 * * suprime un teste
 * ! delete
 * @param {*} req
 * @param {*} res
 */
export async function deleteTeste(req, res) {
  try {
    await Testes.findByIdAndDelete(req.query.id);
    res.status(200).json({ message: 'supprimé' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'erreur dans la supréssion des données' });
  }
}

/**
 * ! post
 * @param {*} req
 * @param {*} res
 * @returns
 */
export async function postDealer(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res
        .status(404)
        .json({ message: "Aucune donnée n'as été envoyées" });
    const dealer = await DEALERS.create(formData);
    res.status(201).json({ message: true, data: dealer });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
