<template>
  <div>

    <!-- title img logo and Premeir league text-->
    <div class="background-titlebar">
      <div class="container">
        <div class="image">
          <img
            src="../../../assets/badge-laliga.png"
            alt=""
            class="image-position"
          />
          <h1>laliga</h1>
        </div>
      </div>
    <!-- end title img logo and Premeir league text-->

    <!-- nav menu bar -->
      <div class="navbar">
        <ul class="nav nav-pills nav-fill red">
          <li class="nav-item">
            <a class="nav-link " href="/">Home</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/laliga-standing">Standing</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/laliga-schedule">Schedule</a>
          </li>
        </ul>
      </div>
    <!-- end of nav menu bar  -->

    </div>
    <!-- end of title -->

    <!-- body & table -->
    <div class="container">

      <!-- match show -->
      <div class="table table-hover table-detail">
        <table
          v-for="team in info.data"
          :key="team"
          class="list table table-striped "
        >
          <tr v-if="team.status != 'postponed'">
            <td width="150px"><img :src="team.home_team.logo" /></td>
            <td width="150px">{{ team.home_team.name }}</td>
            <td width="300px">{{ team.stats.ft_score }}</td>
            <td width="150px">{{ team.away_team.name }}</td>
            <td width="150px"><img :src="team.away_team.logo" /></td>
          </tr>
        </table>
      </div>
      <!-- end match show -->

      <!-- card show stat and detail -->
      <div class="description">
        <div class="card text-center border-dark mb-3">
          <div class="card-header">
            Match Detail
          </div>
          <div class="card-body" v-for="team in info.data" :key="team">
            <h2 class="card-title">Time</h2>
            <p class="card-text">Match Start : {{ team.match_date_th }}</p>
            <p class="card-text">Kick Off Time : {{ team.match_time_th }}</p>
            <h2 class="card-title">Stats</h2>
            <p class="card-text">Halftime Score: {{ team.stats.ht_score }}</p>
            <p class="card-text">Fulltime Score: {{ team.stats.ft_score }}</p>
            <h2 class="card-title">Venue</h2>
            <p class="card-text">Stadium: {{ team.venue.name }}</p>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
      <!-- end card show stat and detail -->

    </div>
    <!-- end body & table -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: {}
    }
  },
  // get match_id by props
  props: ['MatchDetail'],
  // get api function
  mounted () {
    axios
      .get('https://soccerscoreapi.herokuapp.com/match-detail/' + this.MatchDetail)
      .then(response => {
        this.info = response
      })
  }
}
</script>

<style scoped>
.table {
  font-size: 20px;
  font-family: "B612", sans-serif;
}

a {
  font-size: 25px;
  color: white;
}
a:hover {
  background-color: #5d4901;
}

p {
  font-size: 25px;
}

td,
th {
  text-align: center;
  vertical-align: middle;
}

.nav-link {
  width: 300px;
  margin: 0;
}

.description {
  font-size: 50px;
  color: black;
  font-family: sans-serif;
}

.nav-pills .active .nav-link:not(.active) {
  background-color: #5d4901;
}
.navbar {
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0px;
}
.team-logo {
  width: 30px;
  height: 30px;
}
.tab-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
}
.container {
  width: 90vw;
  margin: 0 auto;
}
.background-titlebar {
  width: 100%;
  height: fit-content;
  background-color: #eebb01;
}
.image {
  display: flex;
  align-items: center;
  font-family: Regular, sans-serif, Georgia;
}
.image-position {
  background-color: white;
  padding: 10px;
  padding-left: 10px ;
  width: 80px;
  height: 80px;
  background: white;
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
  margin-top: 10px;
}

h1 {
  margin-left: 30px;
  color: aliceblue;
  margin-top: 15px;
}
</style>
