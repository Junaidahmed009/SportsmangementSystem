import axios from 'axios';

class Api {
  //baseURL: 'http://192.168.1.51/SportsManagementSystemBE/api/',
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://192.168.1.26/SportsManagementSystemBE/api/',
      timeout: 10000,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
  //UsersAccount
  signup(user) {
    return this.apiClient.post('Users/SignupUser', user);
  }
  login(reg_no, password) {
    return this.apiClient.get(
      `Users/LoginUser?regno=${reg_no}&pass=${password}`,
    );
  }
  forgetpassword(userdetails) {
    return this.apiClient.post('Users/Forgetpasswordverification', userdetails);
  }
  resetPassword(passwordDetails) {
    return this.apiClient.put('Users/Submitnewpassword', passwordDetails);
  }

  //ChairpersonScreens
  addsession(sessiondetail) {
    return this.apiClient.post('Session/PostSession', sessiondetail);
  }

  eventmanagerdata(data) {
    return this.apiClient.post('Sports/PostEventManagers', data);
  }
  //Rule of game Screen.
  fetchSports() {
    return this.apiClient.get('Sports/GetSports');
  }
  fetchrules(Sportsid) {
    return this.apiClient.get('Rules/FetchRules', {params: {Sportsid}});
  }
  rulesofgames(saverules) {
    return this.apiClient.post('Rules/UpdateRules', saverules);
  }
  //EventManagerSelection screen.
  getsportsandmanger() {
    return this.apiClient.get('Sports/GetSportsandManagers');
  }
  savedata(data) {
    return this.apiClient.post('Sports/SaveManagersdata', data);
  }
  //Session Screens
  fetchSessions() {
    return this.apiClient.get('Session/GetsessionsandSports');
  }

  // Cricket registration Screens
  getteamstatus(tname) {
    return this.apiClient.get('Team/CheckTeamNames', {params: {tname}});
  }
  fetchstudents(course, sections, semno, Gender) {
    return this.apiClient.get(
      `Students/GetStudents?course=${course}&sections=${sections}&semno=${semno}&gender=${Gender}`,
    );
  }
  postteamdata(teamdata) {
    return this.apiClient.post('Team/AddTeam', teamdata);
  }
  fetchteamSports() {
    return this.apiClient.get('Sports/GetSports');
  }
  postPlayersdata(Playersdata) {
    return this.apiClient.post('Players/PostPlayers', Playersdata);
  }
  handleloginuser(id) {
    return this.apiClient.get(`Players/HandleUser?userid=${id}`);
  }
  PostFixturesData(AllData) {
    return this.apiClient.post('Fixture/PostFixtures', AllData);
  }
  fetchCricketrules() {
    return this.apiClient.get('Rules/FetchCricketRules');
  }
  FetchCricketTeams() {
    return this.apiClient.get('Team/GetCricketTeams');
  }
  TeamStatusUpdate(id) {
    return this.apiClient.put(`Team/UpdateTeamStatus?id=${id}`);
  }
  FetchTeamsPlayers(Teamid) {
    return this.apiClient.get(`Players/GetTeamPlayers?id=${Teamid}`);
  }
  fetchteams1(id) {
    return this.apiClient.get(`Team/GetAllLatestTeams?userid=${id}`);
  }
  fetchfixtures(userid) {
    return this.apiClient.get(`Fixture/GetFixtures?userid=${userid}`);
  }
  fetchteams(userid) {
    return this.apiClient.get(`Team/AllApprovedTeams?id=${userid}`);
  }
  fetchaccountdata(userid) {
    return this.apiClient.get(`Users/Accountuserdata?id=${userid}`);
  }
  PostImage(formData) {
    return this.apiClient.post(`Team/UploadImage`, formData);
  }
  getManagerSport(id) {
    return this.apiClient.get(`Fixture/GetManagerSport?id=${id}`);
  }
  updatefixtures(AllData) {
    return this.apiClient.put('Fixture/UpdateFixtures', AllData);
  }
  fetchUsersfixtures(id) {
    return this.apiClient.get(`Fixture/GetUsersFixtures?sportsId=${id}`);
  }
  fetchManagerfixtures(id) {
    // return this.apiClient.get(`Fixture/GetUsersFixtures?sportsId=${id}`);
  }
  postimage(formData, config) {
    return this.apiClient.post(`Team/UploadImage`, formData, config);
  }
}

export default new Api();
