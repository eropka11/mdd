import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  password: {type: DataTypes.STRING, allowNull: false},
  profile: {type: DataTypes.JSON},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
  subscriptions: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
  avatar: {type: DataTypes.STRING},
});

const Diary = sequelize.define('dairy', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  diaryName: {type: DataTypes.STRING, allowNull: false},
  subscribers: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
});

const Entry = sequelize.define('entry', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  text: {type: DataTypes.STRING, allowNull: false},
  likes: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  video: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  audio: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
});

const Comment = sequelize.define('comment', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  text: {type: DataTypes.STRING},
  likes: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  video: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
  audio: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
});

const Subscribe = sequelize.define('subscribe', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const EntryLike = sequelize.define('entry_like', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const CommentLike = sequelize.define('comment_like', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});


User.hasMany(Diary);
Diary.belongsTo(User);

User.hasOne(Subscribe);
Subscribe.belongsTo(User);

User.hasOne(EntryLike);
EntryLike.belongsTo(User);

User.hasOne(CommentLike);
CommentLike.belongsTo(User);

Diary.hasMany(Entry);
Entry.belongsTo(Diary);

Diary.hasMany(Subscribe);
Subscribe.belongsTo(Diary);

Entry.hasMany(Comment);
Comment.belongsTo(Entry);

Entry.hasMany(EntryLike);
EntryLike.belongsTo(Entry);

Comment.hasMany(CommentLike);
CommentLike.belongsTo(Comment);

export {
  User,
  Diary,
  Entry,
  Comment,
  Subscribe,
  EntryLike,
  CommentLike,
};
