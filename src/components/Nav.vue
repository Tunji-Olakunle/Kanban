

<template>
	<div class=" px-2 py-3 border-b border-gray-100 shadow">
		<div class=" flex items-center justify-between">
			<div class=" flex items-center space-x-12">
				<a href="/" class="px-4 text-gray-800 text-2xl font-bold ">
					<span class=" text-green-500">Cypher</span><span>Express</span>
				</a>

				<div class=" flex items-center font-semibold space-x-4">
					<a href="#" class=" text-gray-500 hover:text-gray-800 block px-4 py-1">Delivery</a>
					<a href="#" class=" text-gray-500 hover:text-gray-800 block px-4 py-1">User Management</a>
					<a href="#" class=" text-gray-500 hover:text-gray-800 block px-4 py-1">Analytics</a>
					<a href="#" class=" text-gray-800 rounded block px-4 py-1 bg-green-300 hover:bg-green-400 ">Create</a>
				</div>
			</div>

			<div class="flex items-center space-x-6">
				<div class="border border-green-400 px-2 py-1 rounded-md">
					<form action="" class=" flex items-center space-x-1">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4  text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
					<input type="text" class=" font-light text-gray-600 outline-none placeholder-gray-500 focus:placeholder-gray-400 rounded-md "  placeholder="Search this site">
				</form>
				</div>

				<div class="flex items-center pr-4 space-x-3">
					<a href="#" class=" text-gray-400 hover:text-green-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
						</svg>
					</a>
					<a href="#" class=" text-gray-400 hover:text-green-400">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
				
			</div>
		</div>
	</div>
</template>
