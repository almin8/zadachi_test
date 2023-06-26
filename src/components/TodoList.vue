<template>
  <div class="all">
    <div class="allChild">
      <router-link to="/">Вернуться на главную</router-link>

      <h2>Список задач</h2>
      <img src="@/assets/1234.png" alt="Can't donwoload..." />
      <div class="list">
        <ol>
          <li class="entry" v-for="task in tasks" :key="[task.id]">
            <div class="acitvater" v-if="!active[task.id]">
              {{ task.name }}
            </div>
            <input
              class="acitvaterNone"
              v-if="active[task.id]"
              v-model="task.name"
              type="text"
              :disabled="!active[task.id]"
            />
            <div
              style="
                margin-bottom: 10px;
                display: flex;
                justify-content: flex-end;
              "
            >
              <button
                class="butEntry"
                @click="
                  editTask(task.id, task), (active[task.id] = !active[task.id])
                "
                :disabled="!task.name"
              >
                {{ active[task.id] ? "Сохранить" : "Редактировать" }}
              </button>
              <button class="butEntry" @click="deleteTask(task.id)">
                Удалить
              </button>
            </div>
          </li>
        </ol>
      </div>
      <form class="entrys" @submit.prevent="addTasker">
        <input
          style="height: 30px"
          v-model.trim="newTask"
          type="text"
          placeholder="Добавить задачу"
          required
        />
        <button style="height: 37px" :disabled="!newTask" type="submit">
          Создать задачу
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapMutations(["addTask", "editTask", "deleteTask"]),
    addTasker() {
      this.addTask({ name: this.newTask, id: Date() });

      this.newTask = "";
    },
    editTask(index, task) {
      this.$store.commit("editTask", { index, task });
    },
    deleteTask(index) {
      this.$store.commit("deleteTask", index);
    },
  },
  data() {
    return {
      newTask: "",
      isDisabled: false,
      active: {},
    };
  },
};
</script>
<style>
.all {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.allChild {
  position: relative;
  margin: auto;
}
.acitvater {
  color: black;
  min-width: 490px;
  word-wrap: break-word;
}
.acitvaterNone {
  background-color: rgb(231, 206, 175);
  border: none;
  color: black;
  min-width: 590px;
}
.list {
  min-height: 100px;
  width: 656px;
  background-color: rgb(210, 157, 92);
  margin-left: 83px;
  margin-top: -22px;
  padding-bottom: 10px;
}
.entrys {
  padding-top: 40px;
  margin-left: 83px;
  margin-top: -22px;
}
.entry {
  margin-bottom: 10px;
  max-width: 600px;
  border-bottom: solid 0.5px black;
}
.butEntry {
  background-color: rgb(210, 157, 92);
  height: 20px;
  font-size: 10px;
}
</style>
