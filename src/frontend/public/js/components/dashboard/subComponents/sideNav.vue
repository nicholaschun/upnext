<template>
  <div class="side-bar-container">
    <h4 style="text-align: center">{{ title }}</h4>
    <div class="user-info" style="text-align: center">
      <div class="profile-image profile-pic">
        <!-- <img :src="userInfo.profilePic" class="img-circle" alt=""> -->
      </div>
      <div class="user-detail">
        <h5>Hi, Nicholas</h5>
      </div>
    </div>
    <div class="my-event-nav">
      <ul>
        <li>
                <router-link to="/dashboard"> <span class="fa fa-calendar"></span> My Events</router-link>
          <!-- <a href="/dashboard" class="active"
            ><span class="fa fa-calendar"></span> My Events</a
          > -->
        </li>
        <li>
          <router-link to="/dashboard/profile"> <span class="fa fa-user"></span> Edit Profile</router-link>
          <!-- <a href="/dashboard/profile"
            ><span class="fa fa-user"></span> Edit Profile</a
          > -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: {
    title: String
  }
}
</script>
<style scoped>
.my-event-nav {
  width: 80%;
  margin: 0 auto;
  padding: 12px 13px 0 0;
}
.my-event-nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}
.my-event-nav ul li {
  display: block;
  margin-left: 10px;
  border-top: 1px solid var(--upnext-light-ash);
  padding: 10px;
}
.my-event-nav ul li a {
  color: var(--upnext-input-addon);
  font-size: 1em;
  text-decoration: none;
}
.my-event-nav ul li span {
  padding-right: 10px;
}
.my-event-nav .active {
  color: var(--upnext-yellow);
}
.side-bar-container {
  border-right: 1px solid var(--upnext-light-ash);
  height: 500px;
}
.side-bar-container h4 {
  color: var(--upnext-blue);
}
</style>
