import ApiError from "../error/ApiError.js";

class MeController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const {id} = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    return res.json(id);
  }

  async createDiary(req, res) {}
};

export default new MeController();
