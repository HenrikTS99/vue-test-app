<script setup lang="ts">
import { ref, onMounted } from 'vue';
import image_1 from '@/assets/images/a_close_up_of_a_plane.jpg';
const name = ref('Henrik');
const quote = ref("First, solve the problem. Then write the code.");
const isBtnDisabled = ref(true)
const status = ref(false)
const tasks = ref(['Task one', 'Task two', 'Task Three']);
const newTask = ref('')

name.value = "Ikke Henrik";

function toggleStatus() {
    status.value = !status.value
};

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push(newTask.value);
        newTask.value = '';
    }
}

const deleteTask = (index: number) => {
    tasks.value.splice(index, 1)
}
interface Todo {
    userID: number
    id: number
    title: string
    completed: boolean
}

onMounted(async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data: Todo[] = await res.json();
        tasks.value = data.map((task) => task.title);
    } catch (error) {
        console.error('Error fethcing tasks');
    }
})
</script>

<template>
    <main>
        <h1>Hello, {{ name }}!</h1>
        <p>{{ quote }}</p>

        <p v-if="status">Status true!</p>
        <p v-else>Status false!</p>
        <button @click="toggleStatus">Change Status</button>

        <h2>Tasks:</h2>
        <ul>
            <li v-for="(task, index) in tasks" :key="task">
                <splitan>{{ task }}</splitan>
                <button @click="deleteTask(index)">x</button>
            </li>
        </ul>

        <form @submit.prevent="addTask">
            <label for="newTask">Add Task</label>
            <input type="text" id="newTask" name="newTask" v-model="newTask" />
            <button type="submit">Submit</button>
        </form>

        <section id="buttons">
            <!-- Shorthand v-bind:  :disabled-->
            <button v-bind:disabled="isBtnDisabled">Another!</button>
        </section>
        <!-- <section> -->
        <!--     <img src="@/assets/images/a_close_up_of_a_plane.jpg" alt="" /> -->
        <!-- </section> -->
        <!-- <section> -->
        <!--     <img v-bind:src="image_1" alt="" /> -->
        <!-- </section> -->
    </main>

</template>

<style scoped>
button:disabled {
    background: grey;
    cursor: not-allowed;
    opacity: 0.5;
}
</style>
