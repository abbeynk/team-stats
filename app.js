const team = {
  _players:[
    {
      firstName: 'Roger',
      lastName: 'Bishop',
      age: 23
    },
    {
      firstName: 'Katrina',
      lastName: 'Alvarez',
      age:25
    },
    {
      firstName: 'Nia',
      lastName: 'Holmes',
      age: 20
    }
    ],
  _games:[
    {
      opponet: 'Jets',
      teamPoints: 42,
      opponetPoints: 27
    },
    {
      opponet: 'Giants',
      teamPoints: 45,
      opponetPoints: 12,
    },
    {
      opponet: 'Eagles',
      teamPoints: 31,
      opponetPoints: 15
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
   addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponet, teamPoints, opponetPoints) {
    let game = {
      opponet: opponet,
      teamPoints: teamPoints,
      opponetPoints: opponetPoints
    }
    return this.games.push(game);
  },
};


team.addPlayer('Bugs','Bunny', 76);

console.log(team.players);

team.addGame('Titans', 100, 98);

console.log(team.games);
