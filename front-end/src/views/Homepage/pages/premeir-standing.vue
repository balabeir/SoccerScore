<template>
  <div>

    <!-- title  -->
    <div class="background-titlebar">

      <!-- title img logo and Premeir league text-->
      <div class="container">
        <div class="image">
          <!-- ทำการเพิ่ม logo ของ League โดยใช้ <img> -->
          <img
            src="../../../assets/badge-premeir.png"
            alt=""
            class="image-position"
          />
          <h1>Premeir League</h1>
        </div>
      </div>
      <!-- end title img logo and Premeir league text-->

      <!-- nav menu bar -->
      <div class="navbar">
        <!-- ทำเป็นเมนูสำหรับคลิ๊กเลือก page โดยใช้ navbar -->
        <ul class="nav nav-pills nav-fill red">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <!-- เมื่อเราอยู่ตำแหน่งหน้าไหนจะให้ปุ่ม active ที่เมนูนั้นๆ -->
          <li class="nav-item active">
            <a class="nav-link" href="premeir-standing">Standing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="premeir-schedule">Schedule</a>
          </li>
        </ul>
      </div>
      <!-- end of nav menu bar  -->

    </div>
    <!-- end of title -->

    <!-- body & table -->
    <div class="container">

      <!-- table -->
      <div class="table-data borderless">

        <!-- head table & colums -->
        <!-- สร้างหัวตารางตามที่ได้ออกแบบไว้ -->
        <table class="table ">
          <thead class="">
            <tr>
              <th scope="col">Pos</th>
              <th scope="col" colspan="2">Club</th>
              <th scope="col">Played</th>
              <th scope="col">Win</th>
              <th scope="col">Drawn</th>
              <th scope="col">Lose</th>
              <th scope="col">G.Score</th>
              <th scope="col">G.Against</th>
              <th scope="col">G.Different</th>
              <th scope="col">Pts</th>
            </tr>
          </thead>
          <!-- end head table & colums -->

          <!-- body data standing  -->
          <tbody>
            <!-- วน loop เพื่อดึงค่าออกจากตัวแปร object ที่ได้ get ค่าจาก api มา -->
            <tr v-for="item in info.data.data" :key="item">
              <!-- นำข้อมูลที่ได้มาแสดงโดยใช้ตัวแปรทีไ่ด้สร้างขึ้นมาเรียก object  -->
              <th scope="row" class="pos-position">{{ item.position }}</th>
              <td  class="team-image">
                <img
                  :src="item.team_logo"
                  width="50px"
                  height="50px
                "
                />
              </td>
              <td width="300px" class="team-name">{{ item.team_name }}</td>
              <td width="180px" class="">{{ item.overall.games_played }}</td>
              <td width="180px">{{ item.overall.won }}</td>
              <td width="180px">{{ item.overall.draw }}</td>
              <td width="180px">{{ item.overall.lost }}</td>
              <td width="180px">{{ item.overall.goals_scored }}</td>
              <td width="180px">{{ item.overall.goals_against }}</td>
              <td width="180px">{{ item.overall.goals_diff }}</td>
              <td width="100">{{ item.points }}</td>
            </tr>
          </tbody>
          <!-- end body data standing  -->

        </table>
      </div>
      <!-- end table -->

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

      // JSON.stringify(jsArray) converts the jsArray into a string which can be stored in sessionStorage
    }
  },
  // get api function
  // ใช้ axios เพื่อ get ค่าจาก api ของ backend
  mounted () {
    axios.get('https://soccerscoreapi.herokuapp.com/standings/352').then(response => {
      // สร้างตัวแปร object มาเพื่อเก็บค่า api
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

/* make table borderless */
.borderless th {
  border: none;
}
a {
  font-size: 25px;
  color: white;
}

/* hover of nav bar color */
a:hover {
  background-color: #200835;
}

/* make text in row go center */
td , th{
  text-align: center;
  vertical-align: middle;
}

/* size of nav menu */
.nav-link {
  width: 300px;
  margin: 0;
}

/* color of active nav menu */
.nav-pills .active .nav-link:not(.active) {
    background-color:  #200835;
}

/* set position of nav menu */
.navbar {
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0px;
}

/* set 1st colume to center */
.pos-position {
  padding-top: 22px;
}

/* set 2nd to center */
.team-image {
  display: flex;
  align-items: left;
  justify-content: left;
  padding-top: 50%;
  padding-bottom: 50%;
}

.team-name {
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
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
  background-color: #3d195b;
}
.image {
  display: flex;
  align-items: center;
  font-family: Regular, sans-serif, Georgia;
}
.image-position {
  background-color: white;
  padding: 10px 10px;
  width: 100px;
  height: 100px;
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
