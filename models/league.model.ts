/* export default function (sequelize: any, Sequelize: any) {
  const League = sequelize.define(
    'league',
    {
      leagueName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      boardOfDirectors: {
        type: Sequelize.JSON,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  )

  League.associate = function (models: any) {
    models.league.hasMany(models.team, {
      foreignKey: 'leagueId',
    })
  }
  League.associate = function (models: any) {
    models.team.belongsTo(League)
  }
  return League
} */

// Defining the association

/* League.hasMany(Team, {
  foreignKey: 'leagueId',
})

Team.belongsTo(League) */

/* DataTypes
  .sync({ alter: true })
  .then(() => {
    console.log('League has been sync')
    return Team.sync({ alter: true })
  })
  .then(() => {
    console.log('Team has been sync')
    return Players.sync({ alter: true })
  })
  .then(() => {
    console.log('Players has been sync')
    return User.sync({ alter: true })
  })
  .then(() => {
    console.log('User has been sync')
  })
  .catch((error) => console.log(error.stack))
 */
// export default League

// File: ../models/league.js

export default function (sequelize: any, DataTypes: any) {
  const League = sequelize.define(
    'league',
    {
      leagueName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      boardOfDirectors: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  )

  /* Associations can be defined here */

  return League
}
