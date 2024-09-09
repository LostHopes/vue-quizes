<template>
    <div class="m-48 p-20 rounded-2xl">
        <form action="#" method="post" class="flex flex-col justify-center items-center space-y-3">

            <label for="login">Login</label>
            <input type="text" id="login" name="login" placeholder="Enter login here:" required minlength="4"
                maxlength="20" class="border border-black placeholder:text-black p-2 rounded-xl">
            
            <label for="login">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter login here:" required minlength="4"
                maxlength="50" class="border border-black placeholder:text-black p-2 rounded-xl">
            <input type="submit" value="Register"
                class="text-blue-500 cursor-pointer outline outline-blue-500 rounded-2xl p-2 hover:bg-blue-500 hover:text-white">
        </form>
    </div>
</template>