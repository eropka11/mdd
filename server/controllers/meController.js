import ApiError from "../error/ApiError.js";
import { User, Diary } from "../models/models.js";

class MeController {
  async registration(req, res) {
    const data = req.body;
    const user = await User.create(data);
    return res.json(user);
  }

  async login(req, res) {}

  async check(req, res, next) {
    const {id} = req.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    return res.json(id);
  }

  async createDiary(req, res) {
    const diaryName = req.body;
    const diary =  await Diary.create(diaryName);
    return res.json(diary);
  }
};

export default new MeController();
