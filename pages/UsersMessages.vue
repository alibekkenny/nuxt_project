<template>
  <div>
    <h1>Messages Table</h1>
    <table border="1px">
      <tr>
        <th>Id</th>
        <th>Content</th>
        <th>User_id</th>
      </tr>
      <tr v-for="message in messages" :key="message.id">
        <td>{{ message.id }}</td>
        <td>{{ message.content }}</td>
        <td>{{ message.user_id }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "UsersMessages",
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapGetters("user", ["getUserId"]),
  },
  async mounted() {
    const { data, status } = await axios.get(
      "http://127.0.0.1:5000/api/message/" + this.getUserId
    );
    console.log(status);
    this.messages = data;
  },
};
</script>
