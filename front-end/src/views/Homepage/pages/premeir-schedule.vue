<template>
  <div>

    <!-- title of page -->
    <div class="background">

      <!-- title img logo and Premeir league text-->
      <div class="container">
        <div class="image">
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
        <ul class="nav nav-pills nav-fill red">
          <li class="menu nav-item">
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li class="menu nav-item ">
            <a class="nav-link" href="premeir-standing">Standing</a>
          </li>
          <li class="menu nav-item active">
            <a class="nav-link" href="premeir-schedule">Schedule</a>
          </li>
        </ul>
      </div>
      <!-- end nav menu bar -->

    </div>
    <!-- end title of page -->

    <!-- body & table -->
    <div class="container">

      <!-- for date of the match -->
      <!-- นำวันที่ในแต่ละ Match ออกมาแสดงโดยสร้างตัวแปรรับค่า object โดยใช้ loop for -->
      <div class="table" v-for="date in NewDate" :key="date">
        <h2>{{ date }}</h2>
      <!-- end for date of the match -->

      <!-- data in table -->
      <!-- ทำการ วน loop เพื่อดึงค่าข้อมูล Match ต่างๆมาแสดง -->
        <div v-for="team in info.data.data" :key="team">
          <table v-if="date == team.match_date_th" class="table  table-hover">
            <tbody>

              <!-- send match id to match-detail -->
              <!-- ใช้ router link เพื่อเป็นการส่ง params ไปยังหน้า Match Detail เพื่อ Filler เฉพาะ Match นั้นๆ -->
              <router-link
                :to="{
                  name: 'premeir-detail',
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
                  <!-- ในส่วนของ row นี้จะเป็นการนำสกอร์ของแต่ละ Match ออกมาแต่เนื่องจากมีบาง Match ที่เลื่อนหรือยังไม่ได้แข่งจึงใช้ if เช็คเงื่อนไขก่อนแสดงผล -->
                  <!-- กรณีแข่งขันจบแล้ว -->
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status == 'finished'"
                  >
                    {{ team.stats.ft_score }}
                  </td>

                  <!-- กรณียังไม่ได้แข่งขัน -->
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status == 'notstarted'"
                  >
                    {{ team.match_time_th }}
                  </td>

                  <!-- กรณีกำลังแข่งขันอยู่หรือเลื่อนการแข่งขันออกไป -->
                  <td
                    width="300px"
                    class="inrow"
                    v-if="team.status == 'postponed' || team.status == 'inplay'"
                  >
                    {{ team.status }}
                  </td>

                  <!-- กรณียังไม่ได้มีการประกาศเวลาแข่งขันออกมา -->
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
        <!-- end of data in table -->

      </div>
    </div>
    <!-- end of body & table -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // ตัวแปรที่นำมาเก็บค่าจาก api
      info: {},
      // ตัวแปรที่นำมารับค่าวัน
      date: {},
      // ตัวแปรที่สร้างมาไว้สำหรับสร้าง set เพื่อกรองวันที่ ที่เหมือนกันออกเหลือ 1 วัน
      arrayMap: null,
      // นำมาเก็บค่าจาก arrayMap อีกที
      NewDate: null

      // JSON.stringify(jsArray) converts the jsArray into a string which can be stored in sessionStorage
    }
  },
  // get api function
  mounted () {
    // รับค่าจาก api โดยใช้ axios
    axios
      .get(
        'https://soccerscoreapi.herokuapp.com/matches/352'
      )
      .then(response => {
        // รับค่าจากทั้งหมดจาก api
        this.info = response
        // รับเฉพาะ object ที่มีวันอยู่
        this.date = response.data.data
        //  ทำการ map date เข้ากับ ค่าข้างใน object ที่มีวันอยู่ โดยเก็บไว้ที่ arrayMap
        this.arrayMap = this.date.map(date => date.match_date_th)
        //  สร้างตัวแปรมารับค่าที่นำไปเข้า set แล้วจะได้วันที่ออกมา
        this.NewDate = new Set(this.arrayMap)
      })
  }
}
</script>

<style scoped>
.table {
  font-size: 20px;
  font-family: "B612", sans-serif;
}

/* set data in table to center */
.table {
  text-align: center;
  vertical-align: middle;
}

a {
  font-size: 25px;
  color: white;
}
/* date of match */
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
  background-color: #200835;
  text-decoration: none;
}

.nav-link {
  width: 300px;
  margin: 0;
}

.nav-pills .active .nav-link:not(.active) {
  background-color: #200835;
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
