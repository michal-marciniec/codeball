import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { sortByMany } from 'utils';
import PlayersList from '../PlayersList/PlayersList';
import './TeamLineup.scss';

export default class TeamLineup extends Component {
  static propTypes = {
    className: PropTypes.string,
    currentUser: PropTypes.object.isRequired,
    team: PropTypes.array.isRequired,
    teamName: PropTypes.string.isRequired,
    users: PropTypes.object.isRequired
  };

  render() {
    const {
      className,
      currentUser,
      team,
      teamName,
      users
    } = this.props;

    const teamUsers = team.map(userId => users[userId]).filter(Boolean);
    const sortedTeamUsers = sortByMany(teamUsers, 'lastName', 'firstName');

    return (
      <div
        className={classNames(
          'team-lineup',
          'ellipsis',
          className
        )}>
        <div className="team-name ellipsis">
          {teamName}
        </div>

        <PlayersList
          users={sortedTeamUsers}
          currentUser={currentUser} />
      </div>
    );
  }
}
