<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import KanbanBoard from "./components/KanbanBoard.vue";
import Sidebar from "./components/Sidebar.vue";
import ProjectTitle from "./components/ProjectTitle.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
	<div class=" font-poppins max-h-screen overflow-y-hidden">
		<Nav />
		<div class=" flex overflow-hidden">
			<div class=" w-1/6">
				<Sidebar />
			</div>
			
			<div class=" w-5/6 p-4">
				<ProjectTitle />
				<KanbanBoard />
			</div>
			
		</div>
		
	</div>
</template>
