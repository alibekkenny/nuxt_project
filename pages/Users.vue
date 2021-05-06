<template>
  <div>
    <h1>Users Table</h1>
    <table style="width: 20%; text-align: center" border="1px">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Salary</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>
          <nuxt-link
            style="text-decoration: none"
            to="usersmessages/"
            @click.native="changeUserId(index)"
            >{{ user.name }}</nuxt-link
          >
        </td>
        <td>{{ user.salary }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    const { data, status } = await axios.get("http://127.0.0.1:5000/api/user");
    console.log(status);
    this.users = data;
  },
  methods: {
    changeUserId(index) {
      this.$store.commit("user/setUserId", this.users[index].id);
    },
  },
};
</script>
