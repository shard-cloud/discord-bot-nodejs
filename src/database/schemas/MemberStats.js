const mongoose = require('mongoose');
const { CACHE_SIZE } = require('@root/config.js');
const FixedSizeMap = require('fixedsize-map');

const cache = new FixedSizeMap(CACHE_SIZE.MEMBERS);

const ReqString = {
  type: String,
  required: true
};

const Schema = new mongoose.Schema(
  {
    guild_id: ReqString,
    member_id: ReqString,
    messages: { type: Number, default: 0 },
    voice: {
      connections: { type: Number, default: 0 },
      time: { type: Number, default: 0 }
    },
    commands: {
      prefix: { type: Number, default: 0 },
      slash: { type: Number, default: 0 }
    },
    contexts: {
      message: { type: Number, default: 0 },
      user: { type: Number, default: 0 }
    },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    coin: { type: Number, default: 1 }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Model = mongoose.model('member-stats', Schema);

module.exports = {
  getMemberStats: async (guildId, memberId, ignoreCache = false) => {
    const key = `${guildId}|${memberId}`;

    if (cache.contains(key) && !ignoreCache) return cache.get(key);

    let member = await Model.findOne({
      guild_id: guildId,
      member_id: memberId
    });
    if (!member) {
      member = new Model({
        guild_id: guildId,
        member_id: memberId
      });
    }

    if (!ignoreCache) cache.add(key, member);

    return member;
  },

  getXpLb: async (guildId, limit = 10) =>
    Model.find({
      guild_id: guildId
    })
      .limit(limit)
      .sort({ level: -1, xp: -1 })
      .lean(),

  getCoinLb: async (guildId, limit = 10) =>
    Model.find({
      guild_id: guildId
    })
      .limit(limit)
      .sort({ coin: -1 })
      .lean(),

  resetAll: async guildId =>
    Model.updateMany({ guild_id: guildId }, { coin: 1 }),

  addLevel: async (guildId, memberId, amount = 1) =>
    Model.updateOne(
      { guild_id: guildId, member_id: memberId },
      { $inc: { level: amount } }
    ),
  addXp: async (guildId, memberId, amount = 1) =>
    Model.updateOne(
      { guild_id: guildId, member_id: memberId },
      { $inc: { xp: amount } }
    ),
  addCoin: async (guildId, memberId, amount = 1) =>
    Model.updateOne(
      { guild_id: guildId, member_id: memberId },
      { $inc: { coin: amount } }
    ),
  incCoin(guildId, memberId, amount) {
    return Model.updateOne(
      {
        guild_id: guildId,
        member_id: memberId
      },
      { $inc: { coin: amount } }
    );
  }
};
