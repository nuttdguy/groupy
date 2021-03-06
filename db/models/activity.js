'use strict';

module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
    activityId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    title: {
      type: DataTypes.STRING,
      field: 'title'
    },
    summary: {
      type: DataTypes.TEXT,
      field: 'summary'
    },
    detail: {
      type: DataTypes.TEXT,
      field: 'detail'
    },
    startDate: {
      type: DataTypes.DATE,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date'
    },
    minActor: {
      type: DataTypes.INTEGER,
      field: 'min_actor'
    },
    maxActor: {
      type: DataTypes.INTEGER,
      field: 'max_actor'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
  }, {
    underscored: true,
    classMethods: {

    },
    instanceMethods: {
    }
  });

  Activity.associate = function (m) {

    Activity.hasMany(m.ActivityImage, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    Activity.hasMany(m.ActivityMeetLocation, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    Activity.hasMany(m.UserProfileActivity, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    Activity.hasMany(m.UserProfileActivity, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    Activity.hasMany(m.UserProfileActivityUserAttend, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    Activity.hasMany(m.ActivityCategoryActivity, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    Activity.hasMany(m.ActivityActivityTag, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  };


  return Activity;
};
