import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  password: {type: DataTypes.INTEGER},
  profile: {type: DataTypes.JSON},
  roles: {type: DataTypes.STRING, defaultValue: 'USER'},
  subscriptions: {type: DataTypes.ARRAY},
  avatar: {type: DataTypes.STRING},
});

const Diary = sequelize.define('dairy', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  diaryName: {type: DataTypes.STRING},
  subscribers: {type: DataTypes.ARRAY},
});

const Entry = sequelize.define('entry', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.INTEGER},
  text: {type: DataTypes.INTEGER},
  likes: {type: DataTypes.INTEGER},
  img: {type: DataTypes.ARRAY},
  video: {type: DataTypes.ARRAY},
  audio: {type: DataTypes.ARRAY},
});