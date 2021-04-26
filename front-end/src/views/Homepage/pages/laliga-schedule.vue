<template>
  <div>

    <!-- title of page -->
    <div class="background">

      <!-- title img logo and Premeir league text-->
      <div class="container">
        <div class="image">
          <img
            src="../../../assets/badge-laliga.png"
            alt=""
            class="image-position"
          />
          <h1>Laliga</h1>
        </div>
      </div>
      <!-- end title img logo and Premeir league text-->

      <!-- nav menu bar -->
      <div class="navbar">
        <ul class="nav nav-pills nav-fill red">
          <li class="menu nav-item">
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li class="menu nav-item ">
            <a class="nav-link" href="laliga-standing">Standing</a>
          </li>
          <li class="menu nav-item active">
            <a class="nav-link" href="laliga-schedule">Schedule</a>
          </li>
        </ul>
      </div>
      <!-- end nav menu bar -->

    </div>
    <!-- end title of page -->

    <!-- body & table -->
    <div class="container">

      <!-- for date of the match -->
      <div class="table" v-for="date in NewDate" :key="date">
        <h2>{{ date }}</h2>
      <!-- end for date of the match -->

      <!-- data in table -->
        <div v-for="team in info.data.data" :key="team">
          <table v-if="date == team.match_date_th" class="table  table-hover">
            <tbody>

              <!-- send match id to match-detail -->
              <router-link
                :to="{
                  name: 'laliga-detail',
                  params: { MatchDetail: team.match_id }
                }"
                class="match-detail"
              >
              <!-- end send match id to match-detail -->

              <!-- data in table -->
                <tr>
                  <td width="150px">
                    <img :src="team.home_team.logo" class="img-teamlogo" />
                  </td>
                  <td width="150px" class="inrow">
                    {{ team.home_team.short_code }}
                  </td>

                  <!-- if statement -->
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status == 'finished'"
                  >
                    {{ team.stats.ft_score }}
                  </td>
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status == 'notstarted'"
                  >
                    {{ team.match_time_th }}
                  </td>
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status == 'postponed' || team.status == 'inplay'"
                  >
                    {{ team.status }}
                  </td>
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status_code == 17"
                  >
                    TBA
                  </td>
                  <!-- end if statement -->

                  <td width="150px" class="inrow">
                    {{ team.away_team.short_code }}
                  </td>
                  <td width="150px">
                    <img :src="team.away_team.logo" class="img-teamlogo" />
                  </td>
                </tr>
                <!-- end of data in tale -->

              </router-link>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: {},
      date: {},
      arrayMap: null,
      NewDate: null

      // JSON.stringify(jsArray) converts the jsArray into a string which can be stored in sessionStorage
    }
  },
  // get api function
  mounted () {
    axios
      .get(
        'https://soccerscoreapi.herokuapp.com/matches/1511'
      )
      .then(response => {
        this.info = response
        this.date = response.data.data
        // console.log(this.date)
        this.arrayMap = this.date.map(date => date.match_date_th)
        this.NewDate = new Set(this.arrayMap)
        console.log(this.NewDate)
      })
  }
}
</script>

<style scoped>
.table {
  font-size: 20px;
  font-family: "B612", sans-serif;
}

.table {
  text-align: center;
  vertical-align: middle;
}

a {
  font-size: 25px;
  color: white;
}

h2 {
  padding: 40px;
  font-size: 40px bold;
}

.match-detail {
  color: black;
  text-decoration: none;
}

.inrow {
  padding-top: 50px;
}

.menu a:hover {
  background-color: #5d4901;
  text-decoration: none;
}

.nav-link {
  width: 300px;
  margin: 0;
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

.match-detail {
  align-content: center;
}

.container {
  width: 90vw;
  margin: 0 auto;
}

.container table {
  display: flex;

  justify-content: center;
}
.background {
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
