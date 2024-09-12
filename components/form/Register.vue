<template>
    <div class="m-40 rounded-2xl">
        <form method="post" class="flex flex-col justify-around items-center space-y-4">

            <div class="flex flex-col space-y-4">
                <label for="login">Login</label>
                <input type="text" id="login" name="login" placeholder="Enter login here:" required minlength="4"
                    maxlength="30" class="border border-black placeholder:text-black p-2.5 rounded-xl">
            </div>

            <div class="flex flex-col space-y-4">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email here:" required minlength="4"
                    maxlength="30" class="border border-black placeholder:text-black p-2.5 rounded-xl">
            </div>

            <div class="flex flex-col space-y-4">
                <label for="login">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter password here:" required
                    minlength="4" maxlength="50" class="border border-black placeholder:text-black p-2.5 rounded-xl">
            </div>

            <div class="flex flex-col space-y-4">
                <label for="repeat">Confirm password</label>
                <input type="password" id="confirm" name="confirm" placeholder="Confirm password here:" required
                    minlength="4" maxlength="50" class="border border-black placeholder:text-black p-2.5 rounded-xl">
            </div>

            <div class="flex flex-col space-y-4">
                <input type="submit" value="Register"
                    class="text-blue-500 cursor-pointer outline outline-blue-500 rounded-2xl p-3 hover:bg-blue-500 hover:text-white">
            </div>

        </form>
    </div>
</template>